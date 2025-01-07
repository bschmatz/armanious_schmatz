# CI/CD Pipeline Documentation

## Overview
This file details the CI/CD pipeline implemented using GitHub Actions. The pipeline automates building, testing, and deploying the application to multiple environments including GitHub Pages and AWS infrastructure.

### Trigger Events
The pipeline is triggered on:
- Push events to the `main` branch (merges)
- Pull request events targeting the `main` branch

## Components and Tools

### Build Environment
- **Operating System**: Ubuntu
- **Node.js**: Version 20
- **Package Manager**: npm
- **Container Runtime**: Docker
- **Web Server**: Nginx

### Infrastructure Tools
- **Infrastructure as Code**: Terraform
- **Configuration Management**: Ansible
- **Cloud Provider**: AWS
- **Container Registry**: Docker Hub

### Security Tools
- **OWASP Dependency Check**: Scans project dependencies for known vulnerabilities
- **OWASP ZAP**: Performs security testing on the deployed application

## Pipeline Jobs

### 1. Build Job

#### Steps:
1. Code Checkout
2. Node.js Setup
3. Dependencies Installation
4. Code Quality Checks:
    - Linting
    - Unit Testing
5. Application Build
6. Security Checks:
    - OWASP ZAP Security Scan
    - OWASP Dependency Check

7. Artifact Creation:
    - GitHub Pages artifact
    - Security scan reports
    - Docker image

#### Docker Build Process
The application uses a multi-stage Dockerfile:
- Stage 1: Build environment
    - Base image: `node:20`
    - Builds the application
- Stage 2: Production environment
    - Base image: `nginx:alpine`
    - Serves the built application

### 2. GitHub Pages Deployment
Deploys the application to GitHub Pages when changes are pushed to main.

#### Requirements:
- GitHub Pages environment configured

### 3. AWS Deployment

#### Infrastructure Provisioning (Terraform)
- **Resources Created**:
    - EC2 instance (t2.micro)
    - Security Group
        - Inbound: Ports 80 (HTTP), 22 (SSH)
        - Outbound: All traffic

#### Configuration Management (Ansible)
Configures the EC2 instance and deploys the application:
1. Docker installation
2. Service configuration
3. Container deployment
    - Pulls the latest image
    - Runs container with port 80 exposed
    - Enables automatic restart

## Security

### Secret Management (Github Secrets)
The pipeline requires the following secrets:
- `DOCKER_USERNAME`: Docker Hub username
- `DOCKER_TOKEN`: Docker Hub access token
- `AWS_ACCESS_KEY_ID`: AWS access key
- `AWS_SECRET_ACCESS_KEY`: AWS secret key
- `AWS_REGION`: AWS region
- `SSH_PRIVATE_KEY`: SSH key for EC2 access

### Access Control
- Security group limits access to necessary ports
- SSH access is secured using key-based authentication
- Docker Hub authentication for image pushes

### Security Scanning
- Automated dependency vulnerability scanning using OWASP Dependency Check
  - Scans npm packages for known vulnerabilities
  - Generates detailed reports of found vulnerabilities
  - Can be configured to fail builds based on severity thresholds

- Dynamic Application Security Testing with OWASP ZAP
  - Automated security scanning of the deployed application
  - Tests for common web vulnerabilities
  - Includes checks for:
    - SQL Injection
    - Cross-Site Scripting (XSS)
    - Broken Access Control
    - Security Misconfigurations
    - Other OWASP Top 10 risks

## AWS Infrastructure Configuration

### Region and AMI
- Default Region: eu-central-1
- AMI: Ubuntu
- Instance Type: t2.micro

### Network Security
Security group configuration:
- Inbound Rules:
    - HTTP (80): 0.0.0.0/0
    - SSH (22): 0.0.0.0/0
- Outbound Rules:
    - All traffic: 0.0.0.0/0

## Maintenance and Troubleshooting

### Monitoring
- GitHub Actions workflow status
- EC2 instance health
- Application container status
- Nginx server status
- Security scan reports and alerts

## Dependencies

### Required Tools
- GitHub Actions runner
- Node.js
- Terraform
- Ansible
- Docker
- Nginx
- OWASP Dependency Check
- OWASP ZAP