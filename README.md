# Zak Services - Professional Cleaning Services Website

A modern, conversion-focused website for a professional cleaning services agency in Bukavu, Congo.

## Features

- **React JS** - Fast, modern JavaScript framework
- **React Router** - Multi-page navigation
- **Mobile-First Design** - Responsive on all devices
- **WhatsApp Integration** - Direct quote requests via WhatsApp
- **SEO Optimized** - Local SEO for Bukavu, Congo
- **Real Photos** - Professional images from Pexels
- **Solid Colors** - Orange (#FF6600), Green (#00AA55), Purple (#800080)

## Pages

1. **Home** - Hero section, services overview, how it works, testimonials, CTAs
2. **Services** - All 7 cleaning services with detailed descriptions and WhatsApp quotes
3. **Gallery** - Before/after photos grouped by service type
4. **Blog** - 6 cleaning tips articles with full content
5. **Contact** - Quote form with WhatsApp integration

## Services Offered

- House Cleaning
- Sofa Cleaning
- Mattress Cleaning
- Carpet Cleaning
- Toilet & Bathroom Cleaning
- Glass/Window Cleaning
- Car Interior Cleaning

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173`

### Production Build

```bash
npm run build
```

## Customization Guide

### 1. Update Business Name

Replace "Zak Services" throughout the project:

- `src/components/Header.jsx`
- `src/components/Footer.jsx`
- All page files in `src/pages/`

### 2. Update WhatsApp Number

Replace `243XXXXXXXXX` with your actual WhatsApp number:

- `src/components/Header.jsx`
- `src/components/Footer.jsx`
- `src/components/WhatsAppButton.jsx`
- `src/pages/Contact.jsx`

### 3. Update Contact Information

Edit contact details in:

- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

Update:

- Phone numbers
- Email addresses
- Instagram handle
- Operating hours
- Service areas

### 4. Update Service Pricing

Edit prices in `src/data/servicesData.js`

### 5. Customize Content

- **Services:** Edit `src/data/servicesData.js`
- **Blog Posts:** Edit `src/data/blogData.js`
- **Gallery:** Edit `src/data/galleryData.js`

### 6. SEO Optimization

Update SEO meta tags in each page component:

- Title
- Description
- Keywords

Customize for your target location and services.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Footer.jsx          # Footer with links
│   ├── WhatsAppButton.jsx  # WhatsApp CTA component
│   └── SEO.jsx             # SEO meta tags component
├── pages/
│   ├── Home.jsx            # Home page
│   ├── Services.jsx        # Services page
│   ├── Gallery.jsx         # Gallery page
│   ├── Blog.jsx            # Blog listing & posts
│   └── Contact.jsx         # Contact/Quote page
├── data/
│   ├── servicesData.js     # Services information
│   ├── galleryData.js      # Gallery images
│   └── blogData.js         # Blog posts
├── App.jsx                 # Main app with routing
├── main.jsx                # React entry point
└── index.css               # Global styles
```

## Color Scheme

- **Primary:** Orange (#FF6600) - Main CTAs
- **Secondary:** Green (#00AA55) - Secondary buttons
- **Tertiary:** Purple (#800080) - Headings and accents

## WhatsApp Integration

All quote buttons automatically:

- Include customer name, phone, service, and date
- Link to the current page URL for reference
- Open WhatsApp in a new tab/window

## Mobile Responsive

- Mobile-first design approach
- Breakpoints at 768px for tablet/mobile
- Touch-friendly buttons and navigation
- Optimized images for fast loading

## SEO Features

- Semantic HTML structure
- Meta tags on every page
- Local keywords for Bukavu, Congo
- Descriptive alt text for images
- Fast loading times
- Mobile-friendly design

## Technologies Used

- React 18
- React Router DOM 6
- Vite
- JavaScript (JSX)
- CSS-in-JS (inline styles)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is created for Zak Services.

## Support

For support or customization requests, contact the development team. at https://incisordigital.com/
