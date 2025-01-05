# Branching Strategy

## Overview
This document outlines our feature-based branching strategy. We use a simple approach where each branch name directly reflects the feature or component being developed / fixed.

## Main Branches

### `main`
- The primary branch containing production-ready code
- Always deployable
- Protected from direct commits
- All code changes must come through pull requests

## Feature Branches

### Naming Convention
Feature branches should be named according to the feature or component they implement:
- Use lowercase letters
- Use hyphens (-) to separate words
- Be descriptive but keep the names short
- Examples:
    - `project-setup`
    - `docu`
    - `testing`
    - `docker-setup`
    - `main-component-fix`

### Branch Lifecycle

1. **Creation**
    - Create branch from `main`
    - Use descriptive name following convention
   ```bash
   git checkout -b feature-name main
   ```

2. **Development**
    - Regular commits with clear messages
    - Keep changes focused on the specific feature

3. **Updates**
    - Regularly pull from main to stay up to date
   ```bash
   git pull origin main
   ```

4. **Completion**
    - Create pull request to `main`
    - Request code review
    - Ensure all tests pass and CI/CD pipeline is green
    - Address any feedback
    - Merge once approved

## Best Practices

### Commits
- Write clear commit messages
- Keep commits focused

### Pull Requests
- Include description of changes
- Ensure all tests pass
- Request review from team members
- Keep changes focused on single feature

### Code Review
- Review required before merging
- Address all comments
- Ensure CI/CD pipeline passes

## Example Workflow

1. Start new feature:
   ```bash
   git checkout main
   git pull
   git checkout -b project-setup
   ```

2. Make changes and commit:
   ```bash
   git add .
   git commit -m "Add initial project configuration"
   ```

3. Create pull request:
    - Push branch to remote
    - Create PR through GitHub interface
    - Request review

4. After merge:
   ```bash
   git checkout main
   git pull
   git branch -d project-setup
   ```

## Branch Types and Examples

### Common Branch Names
- `project-setup`: Initial project configuration
- `docu`: Documentation updates
- `testing`: Test implementation
- `bug-fix-<description>`: Various bug fixes

## Troubleshooting

### Common Issues
1. Branch conflicts with main
    - Regularly pull from main
    - Resolve conflicts locally before PR

2. Failed CI/CD checks
    - Review pipeline logs
    - Fix issues locally
    - Push updates to branch