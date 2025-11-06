# 🚀 Euno Deployment Guide

## Quick Deploy with Vercel (Recommended)

### Prerequisites
- GitHub account
- Vercel account (sign up at https://vercel.com)

---

## 📦 Part 1: Deploy Backend

### Option A: Using Vercel CLI (Fastest)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Navigate to backend:**
```bash
cd backend
```

3. **Deploy:**
```bash
vercel --prod
```

4. **Follow prompts:**
   - Login to Vercel
   - Set up project
   - Note the deployment URL (e.g., `https://euno-backend.vercel.app`)

### Option B: Using Vercel Dashboard

1. Go to https://vercel.com/new
2. Import your Git repository
3. Set root directory to `backend`
4. Click "Deploy"
5. Copy the production URL

---

## 🎨 Part 2: Deploy Frontend

### Update Backend URL

1. **Edit `.env.production`:**
```env
REACT_APP_BACKEND_URL=https://your-backend-url.vercel.app
```

### Deploy Frontend

1. **Navigate to frontend:**
```bash
cd frontend
```

2. **Deploy:**
```bash
vercel --prod
```

3. **Or use Vercel Dashboard:**
   - Import repository
   - Set root directory to `frontend`
   - Add environment variable:
     - Key: `REACT_APP_BACKEND_URL`
     - Value: Your backend URL
   - Deploy

---

## 🌐 Part 3: Connect Custom .in Domain

### Purchase Domain
Buy your .in domain from:
- GoDaddy India: https://www.godaddy.com/en-in
- BigRock: https://www.bigrock.in
- Hostinger India: https://www.hostinger.in

### Configure DNS in Vercel

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `euno.in`)
4. Vercel will provide DNS records

### Update Domain Registrar

Add these DNS records at your domain registrar:

**For Root Domain (euno.in):**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**For WWW (www.euno.in):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### Wait for DNS Propagation
- Takes 24-48 hours
- Check status: https://dnschecker.org

---

## 📋 Alternative: Deploy to Netlify

### Frontend (Netlify)

1. **Install Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **Build frontend:**
```bash
cd frontend
npm run build
```

3. **Deploy:**
```bash
netlify deploy --prod --dir=build
```

4. **Or use Netlify Dashboard:**
   - Connect GitHub repository
   - Build command: `npm run build`
   - Publish directory: `build`
   - Environment variables: `REACT_APP_BACKEND_URL`

### Backend (Railway/Render)

**Railway:**
1. Go to https://railway.app
2. Connect GitHub repository
3. Select backend folder
4. Deploy automatically

**Render:**
1. Go to https://render.com
2. New → Web Service
3. Connect repository
4. Build command: `pip install -r requirements.txt`
5. Start command: `uvicorn server:app --host 0.0.0.0 --port $PORT`

---

## 🔧 Environment Variables

### Frontend Environment Variables
Set in Vercel/Netlify dashboard:
```
REACT_APP_BACKEND_URL=https://your-backend.vercel.app
```

### Backend Environment Variables
Set in Vercel/Railway/Render dashboard:
```
MONGO_URL=your_mongodb_connection_string
DB_NAME=euno_production
CORS_ORIGINS=https://euno.in,https://www.euno.in
```

---

## ✅ Deployment Checklist

### Before Deployment:
- [ ] Test locally (frontend + backend working)
- [ ] Build frontend successfully (`npm run build`)
- [ ] Update `.env.production` with backend URL
- [ ] Test all project links work
- [ ] Add team member photos
- [ ] Remove any console.log statements
- [ ] Check for errors in browser console

### After Frontend Deployment:
- [ ] Visit deployed URL
- [ ] Test all pages and sections
- [ ] Test contact form
- [ ] Test project links
- [ ] Check mobile responsiveness
- [ ] Test on different browsers

### After Backend Deployment:
- [ ] Test API endpoints
- [ ] Check MongoDB connection
- [ ] Verify CORS settings
- [ ] Test from frontend

### Custom Domain:
- [ ] Purchase .in domain
- [ ] Configure DNS records
- [ ] Wait for DNS propagation
- [ ] Test SSL certificate (auto-generated)
- [ ] Test www and non-www versions

---

## 🎯 Quick Commands

### Build for Production
```bash
# Frontend
cd frontend
npm run build

# Test production build locally
npx serve -s build
```

### Deploy with Vercel
```bash
# Backend
cd backend
vercel --prod

# Frontend
cd frontend
vercel --prod
```

### Check Deployment Status
```bash
vercel ls
```

---

## 🆘 Troubleshooting

### Build Fails
- Check `package.json` scripts
- Verify all dependencies installed
- Check for TypeScript/ESLint errors

### Backend Not Connecting
- Verify CORS settings in `server.py`
- Check environment variables
- Verify MongoDB connection string

### Images Not Loading
- Ensure images are in `public/images/` folder
- Check file paths are correct
- Verify file names match code

### Domain Not Working
- Wait 24-48 hours for DNS
- Check DNS records are correct
- Clear browser cache
- Try incognito mode

---

## 💰 Estimated Costs

### Free Tier (Recommended for Starting)
- **Vercel:** Free (hobby plan)
- **MongoDB Atlas:** Free (512MB)
- **Domain (.in):** ₹500-800/year

**Total:** ~₹800/year

### Paid Plans (If Needed Later)
- **Vercel Pro:** $20/month
- **MongoDB Atlas:** $9/month (2GB)
- **Total:** ~$29/month + domain

---

## 📞 Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Railway Docs:** https://docs.railway.app
- **MongoDB Atlas:** https://www.mongodb.com/docs/atlas

---

## 🎉 Post-Deployment

After successful deployment:
1. Share your website: `https://euno.in`
2. Add to portfolio
3. Share on social media
4. Monitor analytics
5. Collect feedback
6. Plan updates

Good luck with your deployment! 🚀
