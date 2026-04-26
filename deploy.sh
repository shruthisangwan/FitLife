#!/bin/bash

# FitLife Firebase Deployment Script
# Run this to build and deploy your app to Firebase

cd /Users/shruthi/Downloads/fitlife-react/FitLife

echo "🏋️ Building FitLife React App..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🚀 Deploying to Firebase..."
    firebase deploy --only hosting
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "🎉 Deployment complete!"
        echo "Visit: https://uthi-1908f.web.app"
    else
        echo "❌ Deployment failed. Check your Firebase login."
        echo "Run: firebase login"
    fi
else
    echo "❌ Build failed. Check for errors above."
fi
