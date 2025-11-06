# Team Photos Setup Guide

## 📁 Folder Location
All team member photos should be placed in:
```
frontend/public/images/team/
```

Team group photo should be placed in:
```
frontend/public/images/
```

## 📸 Required Photos (6 team members + 1 group photo)

### Individual Team Member Photos
Add the following photos with these exact filenames in `frontend/public/images/team/`:

1. **ayan-ghosh.jpg** - Ayan Ghosh
2. **aritra-banerjee.jpg** - Aritra Banerjee
3. **somya-ranjan-bhoi.jpg** - Somya Ranjan Bhoi
4. **tania-biswas.jpg** - Tania Biswas
5. **ankita-karan.jpg** - Ankita Karan
6. **aishwarya-das.jpg** - Aishwarya Das

### Team Group Photo
Add this photo in `frontend/public/images/`:
- **team-photo.jpg** - Full team photo (will appear in the About Us section)

1. **ayan-ghosh.jpg** - Ayan Ghosh
2. **aritra-banerjee.jpg** - Aritra Banerjee
3. **somya-ranjan-bhoi.jpg** - Somya Ranjan Bhoi
4. **tania-biswas.jpg** - Tania Biswas
5. **ankita-karan.jpg** - Ankita Karan
6. **aishwarya-das.jpg** - Aishwarya Das

## ✅ Photo Specifications

- **Format**: JPG or PNG (JPG recommended)
- **Dimensions**: 800x800 pixels (square)
- **Aspect Ratio**: 1:1
- **File Size**: Under 500KB each
- **Quality**: High resolution, professional looking
- **Background**: Clean background (solid color or professional setting)

## 🔧 How to Add Photos

### Step 1: Prepare Photos
1. Get professional photos of each team member
2. Crop them to square format (1:1 aspect ratio)
3. Resize to 800x800 pixels
4. Save as JPG format
5. Compress to keep file size under 500KB

### Step 2: Rename Files
Rename each photo to match the exact filename format:
- Use lowercase letters
- Replace spaces with hyphens (-)
- Use .jpg extension

Examples:
- "Ayan Ghosh" → `ayan-ghosh.jpg`
- "Somya Ranjan Bhoi" → `somya-ranjan-bhoi.jpg`

### Step 3: Upload Photos
Copy all 6 photos to:
```
f:\New folder\frontend\public\images\team\
```

### Step 4: Verify
1. The app will automatically hot-reload
2. Check http://localhost:3000
3. Scroll to "MEET TEAM EUNO" section
4. Verify all photos are displaying correctly

## 🎨 Tips for Best Results

1. **Consistency**: Use photos with similar style (same background color, lighting)
2. **Professional**: Use high-quality, well-lit photos
3. **Centered**: Make sure faces are centered in the frame
4. **Expression**: Use friendly, professional expressions
5. **Attire**: Professional or smart casual clothing

## ⚠️ Current Status

Currently using placeholder images from Pexels. Replace with actual team photos for production.

## 🚀 After Adding Photos

The website will automatically use your photos once they are added to the folder. No code changes needed!

If photos don't appear:
1. Check filename spelling matches exactly
2. Ensure photos are in the correct folder
3. Refresh the browser (Ctrl + F5)
4. Check browser console for any errors
