# Euno Quick Deploy Script (PowerShell)

Write-Host "🚀 Euno Deployment Script" -ForegroundColor Cyan
Write-Host "=========================" -ForegroundColor Cyan
Write-Host ""

# Check if Vercel CLI is installed
$vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue

if (-not $vercelInstalled) {
    Write-Host "❌ Vercel CLI not found. Installing..." -ForegroundColor Yellow
    npm install -g vercel
}

# Menu
Write-Host "Select deployment option:" -ForegroundColor Green
Write-Host "1. Deploy Backend only"
Write-Host "2. Deploy Frontend only"
Write-Host "3. Deploy Both (Backend first, then Frontend)"
Write-Host "4. Build Frontend for production"
Write-Host "5. Exit"
Write-Host ""

$choice = Read-Host "Enter choice (1-5)"

switch ($choice) {
    "1" {
        Write-Host "📦 Deploying Backend..." -ForegroundColor Cyan
        Set-Location backend
        vercel --prod
        Set-Location ..
        Write-Host "✅ Backend deployed!" -ForegroundColor Green
    }
    "2" {
        Write-Host "🎨 Deploying Frontend..." -ForegroundColor Cyan
        Write-Host "⚠️  Make sure you've updated .env.production with your backend URL!" -ForegroundColor Yellow
        Start-Sleep -Seconds 2
        Set-Location frontend
        vercel --prod
        Set-Location ..
        Write-Host "✅ Frontend deployed!" -ForegroundColor Green
    }
    "3" {
        Write-Host "📦 Deploying Backend..." -ForegroundColor Cyan
        Set-Location backend
        vercel --prod
        $backendUrl = Read-Host "Enter the backend URL from above (e.g., https://euno-backend.vercel.app)"
        Set-Location ..
        
        Write-Host "📝 Updating .env.production..." -ForegroundColor Cyan
        $envContent = "REACT_APP_BACKEND_URL=$backendUrl`nREACT_APP_ENABLE_VISUAL_EDITS=false"
        $envContent | Out-File -FilePath "frontend\.env.production" -Encoding utf8
        
        Write-Host "🎨 Deploying Frontend..." -ForegroundColor Cyan
        Set-Location frontend
        vercel --prod
        Set-Location ..
        
        Write-Host "✅ Both deployed!" -ForegroundColor Green
    }
    "4" {
        Write-Host "🏗️  Building Frontend..." -ForegroundColor Cyan
        Set-Location frontend
        npm run build
        Set-Location ..
        Write-Host "✅ Build complete! Check frontend/build folder" -ForegroundColor Green
    }
    "5" {
        Write-Host "👋 Goodbye!" -ForegroundColor Cyan
        exit
    }
    default {
        Write-Host "❌ Invalid choice!" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "📚 For detailed instructions, see DEPLOYMENT_GUIDE.md" -ForegroundColor Yellow
