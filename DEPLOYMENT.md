# Deploying to GitHub Pages

This repo now deploys automatically with GitHub Actions.

## One-time GitHub setup

1. Go to your repository on GitHub.
2. Open `Settings` -> `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Save.

No Personal Access Token is required. The workflow uses the built-in `GITHUB_TOKEN`.

## Automatic deploy flow

1. You push to `master`.
2. GitHub Actions runs `.github/workflows/deploy-pages.yml`.
3. It installs dependencies, builds with `npm run build`, and deploys the `docs/` output.
4. Site updates at `https://fzheng28.github.io` (usually within a couple of minutes).

## Trigger a deploy manually

1. Open the `Actions` tab in GitHub.
2. Open `Deploy to GitHub Pages`.
3. Click `Run workflow`.

## Troubleshooting

- If the page does not update, check `Actions` for a failed run and read the logs.
- If `Pages` is still set to deploy from a branch (for example `master/docs`), switch it to `GitHub Actions`.
- Hard-refresh your browser (`Cmd+Shift+R`) to bypass cached assets.
