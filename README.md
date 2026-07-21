# Kisan Saathi Landing Page

This project is a polished static landing page for the Kisan Saathi app.

## What changed
- Replaced the placeholder experience with a modern marketing-style landing page
- Added sections for features, onboarding flow, social proof, and contact
- Prepared a GitHub Pages deployment workflow

## Run locally
Open the folder in a browser, or serve it with a simple static server:

```bash
npx http-server -p 8000 --host 127.0.0.1
```

Then visit http://127.0.0.1:8000/

## Publish to GitHub Pages
1. Create a GitHub repository for this folder.
2. Push the contents to the repository.
3. In GitHub, open Settings → Pages.
4. Set Source to GitHub Actions.
5. If this is the first time enabling Pages, add a repository secret named `PAGES_PAT` containing a personal access token with `repo` scope or Pages write permissions.
6. The workflow in `.github/workflows/deploy-pages.yml` will publish the site automatically.

## Next improvements
- Add real screenshots and branding
- Connect the contact button to a real form or email
- Add analytics and SEO metadata
- Convert the landing page into a React or Next.js app if you want more advanced features
