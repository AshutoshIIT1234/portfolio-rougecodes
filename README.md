# RougeCodes Website

## Website Structure

### Pages
- **index.html** - Home page with hero, mission, projects, about section
- **services.html** - Dedicated services page with all service offerings
- **contact.html** - Contact page with form and contact information
- **careers.html** - Careers page with job openings

### Navigation Structure
Based on the sitemap provided:

**HOME**
- About Us (dropdown)
  - Who We Are
  - Our Story
  - Our Vision
  - Core Values
  - Leadership Team
- Services (separate page)
- Careers (separate page)
- Contact (separate page)

### Features
- Smooth animations with GSAP
- Video backgrounds
- Responsive design
- Modern UI/UX
- Dropdown navigation menus
- Form submissions
- Mobile-friendly hamburger menu

### Technologies Used
- HTML5
- CSS3 (Custom properties, Grid, Flexbox)
- JavaScript (ES6+)
- GSAP (GreenSock Animation Platform)
- ScrollTrigger

## File Structure
```
├── index.html          # Main homepage
├── services.html       # Services page
├── contact.html        # Contact page
├── careers.html        # Careers page
├── styles.css          # Main stylesheet
├── script.js           # Homepage scripts
├── services.js         # Services page scripts
├── contact.js          # Contact page scripts
├── careers.js          # Careers page scripts
└── assests/            # Video and image assets
```

## RougeCodes Portfolio Website

A modern, animated portfolio website built with GSAP animations and video backgrounds.

## Features

- **Smooth GSAP Animations**: Character-by-character text reveals, scroll-triggered animations, parallax effects
- **Video Backgrounds**: Strategic use of videos throughout the site
- **Responsive Design**: Fully mobile-optimized with smooth menu transitions
- **Custom Cursor**: Interactive cursor that responds to elements (desktop only)
- **Modern UI**: Clean, minimalist design with bold typography

## Video Assets Used

### Navigation & Loading
- **loading.mp4** - Loading screen intro animation
- **logo.png** - Company logo in navbar

### Hero Section
- **home.mp4** - Hero background video with dark overlay

### Mission Section
- **intro.mp4** - Mission statement background video

### Why Choose Us Section
- **introo.mp4** - Features section background

### Projects Section
- **Projectsection_background.mp4** - Projects showcase background

### What We Do Section
- **iot3.mp4** - Services overview background

### Industries Section
- **iot_background.mp4** - Industries background video

### Testimonials Section
- **TimelineBackground.mp4** - Client testimonials background

### About Section
- **about_1.mp4** - About section background
- **about_2.mp4** - Our Story side video (left-right layout)
- **about_3.mp4** - Our Vision side video (right-left layout)
- **Bikesh_Intro.mp4** - Founder spotlight video

### Services Section
- **coding.mp4** - Services section background
- **iot.mp4** - IoT & Embedded Systems showcase video (split layout)
- **Automation & Ai Tools.mp4** - Automation & AI Tools showcase video (split layout)

### Careers Section
- **homee.mp4** - Careers section background
- **looooading.mp4** - Why Work With Us showcase video (split layout)

### Final CTA Section
- **looading.mp4** - Final call-to-action background

## All Videos Utilized ✅
Every video from the assets folder (19 total) is now integrated into the website for maximum visual impact!

## Website Structure

### Main Website (index.html)
- **Home** - Hero section with main CTA
- **Mission** - Company mission statement
- **Projects** - Project showcase section
- **Why Choose Us** - Key differentiators
- **What We Do** - Services overview
- **Industries** - Sectors we serve
- **Testimonials** - Client feedback
- **About** - Company story, team, and values
- **Services** - Detailed service offerings
- **Contact** - Contact form and information
- **Final CTA** - Call to action

### Careers Page (careers.html)
- **Careers Hero** - Join RougeCodes banner
- **Why Work With Us** - Benefits and culture
- **Open Positions** - Available roles with details
- **Application Form** - Quick apply section

## Technologies Used

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- JavaScript (ES6+)
- GSAP 3.12.2 (with ScrollTrigger & ScrollToPlugin)
- Google Fonts (Space Grotesk)

## Files Structure

```
├── index.html          # Main homepage
├── careers.html        # Dedicated careers page
├── styles.css          # Shared styles for all pages
├── script.js           # Main page JavaScript
├── careers.js          # Careers page JavaScript
├── README.md           # Documentation
└── assests/            # All videos and images
```

## Setup

1. Ensure all video files are in the `assests/` folder
2. Open `index.html` for the main website
3. Navigate to `careers.html` for the careers page
4. All videos will autoplay and loop (muted for UX)

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Performance Notes

- Videos are optimized for web playback
- Loading screen timeout: 3 seconds
- Smooth scroll with 80px navbar offset
- Lazy-loaded animations on scroll
