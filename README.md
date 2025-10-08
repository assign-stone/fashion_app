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
