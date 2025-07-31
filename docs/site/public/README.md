# Static Assets for FF-GardenFn Site

This directory should contain the following static assets referenced in the metadata configuration:

## Required Files

1. **meta-image.png** (1200x630px)
   - Used for OpenGraph and Twitter cards
   - Should represent the FF-GardenFn project with the garden metaphor
   - Recommended: Create an image with the FF-GardenFn logo and tagline "Where Ideas Germinate & Bloom"
   - Use the garden color scheme (primary: #8A2BE2, secondary: #FF8C00, tertiary: #4CAF50, accent: #2196F3)

2. **favicon.ico**
   - Main favicon for the site
   - Should be a multi-size ICO file (16x16, 32x32, 48x48)
   - Recommended: Create a simple icon representing the FF-GardenFn concept

3. **favicon-16x16.png**
   - Small favicon for the site (16x16px)
   - Used as the shortcut icon

4. **apple-touch-icon.png** (180x180px)
   - Icon for Apple devices
   - Should be a PNG file with the FF-GardenFn logo

## How to Create These Files

You can create these files using any image editing software like Photoshop, GIMP, or Figma. Alternatively, you can use online tools like:

- [Canva](https://www.canva.com/) for creating the meta-image
- [favicon.io](https://favicon.io/) for generating favicon files
- [RealFaviconGenerator](https://realfavicongenerator.net/) for a complete favicon package

## Design Guidelines

- Use the garden color scheme defined in the tailwind.config.js file
- Maintain consistency with the 3D garden visualization
- Ensure the meta-image is visually appealing and represents the project well
- Keep the favicon simple and recognizable at small sizes

Once created, place these files directly in this directory (public/) and they will be automatically included in the build.