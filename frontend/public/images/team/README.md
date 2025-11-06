# Team Member Photos

Place your team member photos in this folder with the following naming convention:

## File Naming Convention:
- `ayan-ghosh.jpg` - Photo for Ayan Ghosh
- `aritra-banerjee.jpg` - Photo for Aritra Banerjee
- `somya-ranjan-bhoi.jpg` - Photo for Somya Ranjan Bhoi
- `tania-biswas.jpg` - Photo for Tania Biswas
- `ankita-karan.jpg` - Photo for Ankita Karan
- `aishwarya-das.jpg` - Photo for Aishwarya Das

## Team Group Photo:
Place the team group photo in the parent folder (`frontend/public/images/`) with the name:
- `team-photo.jpg` - Full team photo for the About Us section

## Recommended Image Specifications:
- **Format**: JPG or PNG
- **Dimensions**: 800x800 pixels (square format works best)
- **File Size**: Less than 500KB for optimal loading
- **Aspect Ratio**: 1:1 (square)

## How to Add Photos:
1. Save your team member photos in this folder
2. Name them according to the convention above
3. Update the App.js file to reference these photos instead of placeholder images

## Example Usage in App.js:
```javascript
const teamMembers = [
  {
    name: "Ayan Ghosh",
    role: "Full Stack Developer",
    image: "/images/team/ayan-ghosh.jpg",
    specialty: "Web Development",
  },
  // ... other members
];
```

Once you add the photos, the website will automatically display them!
