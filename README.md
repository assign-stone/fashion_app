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

## Notes
- The JavaScript in `assets/js/main.js` is demo-only: forms are client-side and do not send data to a server.
- Styles are in `assets/css/styles.css`. The layout is responsive and optimized for small screens.
- If you prefer a different publishing strategy (for example, pushing the `site/` folder to a `gh-pages` branch), add a branch-push workflow and disable the Pages actions.

## Contact
- If anything needs changing in the site or the CI/CD setup, edit the files and push; the workflow will pick up the changes.
# Fashion App (static)

This is a small static fashion website built using only HTML, CSS, and JavaScript. It contains these pages:

- index.html (Home)
- about.html
- offers.html
- contact.html
- login.html
- signup.html

Recent updates (summary)
- Hero slides background now stretches behind the hero content for a cohesive look.
- Slide captions moved to the right and lowered for better separation from the hero text (x=92%, y=60%).
- Hero slide backgrounds are focused to the right so focal content stays visible.
- A subtle left overlay added to keep hero text legible over the slide background.
- "Latest Offers" section centered and its heading aligned to center.
- Offer cards' text alignment and layout refined.

How to view locally

1. Open the project folder and double-click `index.html` to open in your browser.

How to commit and push to GitHub (PowerShell)

1. (Optional) Create a new repository on GitHub (Do this in the GitHub UI) and copy the repository URL (HTTPS or SSH).

2. From PowerShell, run these commands from the project root (where this README.md lives):

```powershell
# change to project folder
Set-Location 'C:\Users\os\Downloads\copilot\Fashion_app\fashion_app'

# initialize git (only once)
git init

# add all files and create a commit
git add -A
git commit -m "Initial commit: add static Fashion App (HTML/CSS/JS)"

# add remote (replace <REMOTE-URL> with your GitHub repo url)
git remote add origin <REMOTE-URL>

# push to GitHub (main or master depending on your repo settings)
git branch -M main
git push -u origin main
```

Notes:
- If you prefer SSH use an SSH repo URL (git@github.com:username/repo.git) and ensure your SSH key is set up.
- If you have the GitHub CLI (`gh`) installed you can create a repo from the command line:

```powershell
# create a new GitHub repo interactively and push
gh repo create <repo-name> --public --source=. --remote=origin --push
```

If you'd like me to run the local git init + commit for you here, say "Please run local commit" and I will run the commands in PowerShell. To push to your GitHub account I will need the repo URL or you can run the final push command yourself.

---

If you want, I can also generate a ZIP of the project or create a GitHub Actions workflow to deploy to GitHub Pages.

Docker (optional)
------------------
You can run this static site in a Docker container using the included Dockerfile and docker-compose.yml.

1. Build and run with Docker Compose (PowerShell):

```powershell
Set-Location 'C:\Users\os\Downloads\copilot\Fashion_app\fashion_app'
docker compose up --build
```

Then open http://localhost:8080 in your browser.

2. Run in detached mode:

```powershell
docker compose up --build -d
```

3. Stop and remove containers:

```powershell
docker compose down
```

Notes:
- The Docker image uses the official nginx image and serves the static files from /usr/share/nginx/html.
- If you prefer a different port change the mapping in `docker-compose.yml`.


Deployment
----------

This repository uses the official GitHub Pages Actions workflow to build and publish the site automatically when changes are pushed to `master`/`main`.

- Active workflow: `.github/workflows/deploy-pages.yml` — this uses `actions/configure-pages`, `actions/upload-pages-artifact`, and `actions/deploy-pages` to publish the `site/` artifact to GitHub Pages.
- Trigger: the workflow runs on push to `master`/`main` or can be started manually from the Actions UI (look for "Deploy to GitHub Pages").

To trigger a deployment from your local machine, make a small commit and push (or create an empty commit):

```powershell
# from project root
git add -A
git commit -m "docs: update README (deployment instructions)" || echo 'no changes'
git push

# or trigger without changes
git commit --allow-empty -m "ci: trigger deploy-pages workflow"
git push
```

After the workflow finishes, the site will be available at:

https://assign-stone.github.io/fashion_app/

If you want an alternative publish method (for example, force-pushing the `site/` folder to a `gh-pages` branch), tell me and I can add a branch-push workflow instead.

Quick: access the live URL from the Actions run
------------------------------------------------

1. Open the repository in GitHub and go to the Actions tab.
2. Find and open the workflow named "Deploy to GitHub Pages (gh-pages branch)" (it may show as "pages-build-deployment" in the UI).
3. Click the most recent workflow run (the first item in the list).
4. In the run details, expand the "Deploy to GitHub Pages" step and click the URL shown in its output to open the live site.

This is handy when the Pages URL is provisioned during the run and you want the exact link the workflow published.

