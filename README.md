# Fashion App (static)

This is a small static fashion website built using only HTML, CSS and JavaScript. The site is lightweight and easy to run locally or in a container.

## Pages included
- `index.html` (Home)
- `about.html`
- `offers.html`
- `contact.html`
- `login.html`
- `signup.html`

## Project layout (important files)
- `index.html`, `about.html`, `offers.html`, `contact.html`, `login.html`, `signup.html`
- `assets/css/styles.css` — shared stylesheet
- `assets/js/main.js` — minimal interactivity (nav toggle, hero rotation, demo form handlers)
- `Dockerfile` — serves the site with nginx
- `docker-compose.yml` — maps port 8080 for local testing
- `.github/workflows/deploy-pages.yml` — GitHub Pages deployment workflow

## Run locally (quick)
1. Open the project folder.
2. Double-click `index.html` or open it in your browser.


## Git workflow (push to publish)
1. Add, commit and push changes to the default branch (`master` or `main`). The repository contains a GitHub Actions workflow that will deploy to GitHub Pages on push.

```powershell
git add -A
git commit -m "Your message"
git push
```

### Trigger deploy without file changes

```powershell
git commit --allow-empty -m "ci: trigger deploy-pages workflow"
git push
```

## Deployment / GitHub Pages
- The repo uses `.github/workflows/deploy-pages.yml` (actions/configure-pages, upload-pages-artifact, deploy-pages) to publish the site.
- Live site URL: https://assign-stone.github.io/fashion_app/

If the Pages site is created during the workflow run, open the exact URL published by the job from the Actions UI:
1. Open the repository on GitHub and go to the Actions tab.
2. Open the workflow named "Deploy to GitHub Pages (gh-pages branch)" (may appear as "pages-build-deployment").
3. Click the most recent workflow run (top of the list).
4. Expand the "Deploy to GitHub Pages" step and click the URL shown in the step output to open the published site.


## Run with Docker (recommended for consistent preview)
1. From the project root run:

```powershell
Set-Location 'C:\Users\os\Downloads\copilot\Fashion_app\fashion_app'
docker compose up --build
```

2. Open http://localhost:8080

3. To stop:

```powershell
docker compose down
```


## Notes
- The JavaScript in `assets/js/main.js` is demo-only: forms are client-side and do not send data to a server.
- Styles are in `assets/css/styles.css`. The layout is responsive and optimized for small screens.
- If you prefer a different publishing strategy (for example, pushing the `site/` folder to a `gh-pages` branch), add a branch-push workflow and disable the Pages actions.
- If anything needs changing in the site or the CI/CD setup, edit the files and push; the workflow will pick up the changes.

### Author
-assign-stone

