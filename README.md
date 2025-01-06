# Continuous Delivery Demo Project

## Overview
This demo project serves to demonstrate Continuous Delivery practices. It consists of a React application that serves as an example to demonstrate various CI/CD concepts and tools in practice.

## Project Goals
- Implementation of a simple React application with Vite
- Demonstration of CI/CD best practices
- Automated testing and deployments
- Documentation of the entire development process

## Technology Stack
- **Frontend**: React
- **Testing**: Jest
- **Linting**: ESLint
- **Continuous Integration**: GitHub Actions
- **Containerization**: Docker
- **Continuous Delivery**: Terraform, Ansible

## Project Structure
```
/
├── docu/             # Project documentation
│   ├── branching_strategy.md  # Branching strategy
│   ├── general.md  # General project documentation (implementaion details, etc.)
│   └── ...
```

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation
```bash
git clone https://github.com/bschmatz/armanious_schmatz.git

cd armanious_schmatz

npm install

npm run dev
```

## CI/CD Pipeline
The pipeline covers the following aspects:
- Automated tests
- Code quality checks (Linting etc.)
- Build process
- EC2 Instance creation via Terraform
- Deployment process to AWS EC2 using Ansible

## Documentation
- [Branching Strategy](docu/branching_strategy.md)
- [Pipeline Documentation](docu/general.md)
