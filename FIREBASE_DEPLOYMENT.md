# FitLife Firebase Deployment Guide

## Step 1: Build the Application

```bash
cd /Users/shruthi/Downloads/fitlife-react/FitLife
npm run build
```

This creates an optimized production build in the `build/` folder.

## Step 2: Login to Firebase

```bash
firebase login
```

This will open a browser window to authenticate with your Google account.

## Step 3: Deploy to Firebase Hosting

```bash
firebase deploy
```

This will deploy your React app to Firebase Hosting.

## Alternative: Deploy with Custom Domain

If you have a custom domain:

```bash
firebase hosting:channel:deploy main --expires 1d
```

## What's Already Configured

✅ **firebase.json** - Hosting configuration pointing to the `build/` folder
✅ **.firebaserc** - Project ID set to your Firebase project
✅ **build/** - Production-ready React app (after running `npm run build`)
✅ **Rewrites** - All routes redirect to index.html for client-side routing

## Viewing Your Live App

After deployment, you'll see a URL like:
```
https://uthi-1908f.web.app
```

## Updating After Changes

1. Make changes to your code
2. Run: `npm run build`
3. Run: `firebase deploy`

## Troubleshooting

If you encounter permission errors:
```bash
sudo firebase deploy
```

For more details, visit: https://firebase.google.com/docs/hosting/quickstart

## Important Notes

- The `build/` folder is created by `npm run build` and should be in .gitignore
- React Router is configured to handle all routes (rewrites to index.html)
- All your India-localized content, pricing in INR, and contact info is included
