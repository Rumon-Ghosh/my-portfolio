# Portfolio Website

A professional and responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- ✅ Fully responsive navigation bar
- ✅ Professional designation and introduction with photo
- ✅ Resume download button
- ✅ Social media links (GitHub, LinkedIn, Twitter, Facebook)
- ✅ Detailed About Me section
- ✅ Skills section with visual progress bars
- ✅ Educational qualifications
- ✅ Professional experience
- ✅ Projects showcase (minimum 3 projects)
- ✅ Project detail pages with full information
- ✅ Contact information (Email, Phone, WhatsApp)
- ✅ Footer section
- ✅ Fully responsive design for all devices

## Getting Started

### Installation

```bash
npm install
```

### Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Customization Guide

### 1. Personal Information

Update your personal information in the following files:

- **Hero Section** (`src/components/Hero.js`):
  - Update name, designation, and introduction text
  - Add your profile photo at `/public/profile-photo.jpg`
  - Update social media links (GitHub, LinkedIn, Twitter, Facebook)

- **About Section** (`src/components/About.js`):
  - Customize your programming journey
  - Describe the type of work you enjoy
  - Add your hobbies and interests
  - Showcase your personality

### 2. Skills

Edit `src/data/skills.js` to add/update your skills with proficiency levels (0-100).

### 3. Education

Update `src/components/Education.js` with your educational background.

### 4. Experience

Update `src/components/Experience.js` with your professional experience.

### 5. Projects

Edit `src/data/projects.js` to add your projects. Each project should include:
- Name
- Description
- Technology stack
- Live project link
- GitHub repository link
- Challenges faced
- Future improvements

### 6. Contact Information

Update contact details in `src/components/Contact.js`:
- Email address
- Phone number
- WhatsApp number (optional)

### 7. Resume

Add your resume PDF file at `/public/resume.pdf` for the download button to work.

### 8. Project Images

Add project images at `/public/projects/` with filenames matching those in `src/data/projects.js`.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

## Technologies Used

- **Next.js 16** - React framework
- **React 19** - UI library
- **Tailwind CSS 4** - Styling
- **React Icons** - Icon library

## Project Structure

```
src/
├── app/
│   ├── projects/
│   │   └── [id]/
│   │       └── page.js      # Project detail pages
│   ├── layout.js            # Root layout
│   ├── page.js              # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── About.js             # About section
│   ├── Contact.js           # Contact section
│   ├── Education.js         # Education section
│   ├── Experience.js        # Experience section
│   ├── Footer.js            # Footer component
│   ├── Hero.js              # Hero section
│   ├── Navbar.js            # Navigation bar
│   ├── Projects.js          # Projects section
│   └── Skills.js            # Skills section
└── data/
    ├── projects.js          # Projects data
    └── skills.js            # Skills data
```

## License

This project is open source and available for personal use.

## Notes

- All images should be optimized for web use
- Ensure all external links are working before deployment
- Test the website on multiple devices and browsers
- Update metadata in `src/app/layout.js` for better SEO