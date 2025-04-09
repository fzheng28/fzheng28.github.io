
# Deploying to GitHub Pages

This website is configured to be easily deployed to GitHub Pages using GitHub Actions.

## Setup Instructions

1. Push this repository to your GitHub account.

2. Go to your repository settings on GitHub:
   - Navigate to Settings > Pages
   - Under "Source", select "GitHub Actions" 

3. Create a Personal Access Token (PAT):
   - Go to GitHub → Settings → Developer settings → Personal access tokens
   - Click "Fine-grained tokens" or "Tokens (classic)"
   - Select the repo you want to deploy
   - Give it appropriate permissions (repo access for classic tokens, or Contents: Read and Write for fine-grained)
   - Copy the token

4. Add the token to your GitHub repo as a secret:
   - Go to your repo → Settings → Secrets and variables → Actions
   - Add a new secret named `PERSONAL_TOKEN` with your PAT as the value

5. The configured workflow will:
   - Build the site with Vite
   - Deploy it to the `gh-pages` branch
   - Make it available at `https://fzheng28.github.io`

6. Important notes for troubleshooting:
   - Make sure the GitHub Actions workflow has run successfully (check the Actions tab)
   - This site uses HashRouter for compatibility with GitHub Pages
   - Wait a few minutes after deployment for changes to propagate

## Manual Deployment

If you prefer to deploy manually:

```bash
# Install dependencies
npm install

# Build the site
npm run build

# Deploy using gh-pages package
npm install -g gh-pages
gh-pages -d dist
```

## Common Issues

- If pages aren't showing up, check the GitHub Pages settings to ensure it's set to deploy from the gh-pages branch
- Ensure the CNAME file in the public directory has the correct domain
- If you see dependency errors in GitHub Actions, try running the workflow with `npm install` instead of `npm ci`
- Make sure your repository is correctly configured as a User Page (username.github.io)
