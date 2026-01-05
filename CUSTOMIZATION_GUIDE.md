# Portfolio Customization Guide

This guide will help you customize your portfolio website with your personal information.

## Quick Start

1. **Run the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Personalization Steps

### 1. Hero Section (Homepage)

**File:** `src/components/Hero.js`

- **Line 34:** Update your name
  ```javascript
  Hi, I'm <span className="text-blue-600">Your Name</span>
  ```

- **Line 36-37:** Update your designation
  ```javascript
  Full Stack Developer  // Change to your role
  ```

- **Line 39-43:** Update introduction text

- **Line 6-10:** Update social media links
  ```javascript
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/YOUR_USERNAME", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/YOUR_PROFILE", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com/YOUR_USERNAME", label: "Twitter" },
    { icon: FaFacebook, href: "https://facebook.com/YOUR_PROFILE", label: "Facebook" },
  ];
  ```

- **Add Profile Photo:**
  1. Add your photo at `/public/profile-photo.jpg`
  2. Or replace the gradient div in Hero.js (lines 78-83) with:
     ```javascript
     <Image
       src="/profile-photo.jpg"
       alt="Your Name"
       fill
       className="object-cover"
       priority
     />
     ```
  3. Add `import Image from "next/image";` at the top

### 2. Resume Download

**File:** `src/components/Hero.js`

- Add your resume PDF at `/public/resume.pdf`
- The download button will automatically work

### 3. About Me Section

**File:** `src/components/About.js`

- **Line 11-16:** Update welcome message
- **Line 21-25:** Write about your programming journey
- **Line 30-35:** Describe the type of work you enjoy
- **Line 40-45:** Add your hobbies and interests
- **Line 50-55:** Showcase your personality

### 4. Skills Section

**File:** `src/data/skills.js`

Update the skills data with your actual skills and proficiency levels (0-100):

```javascript
export const skillsData = {
  frontend: [
    { name: "React", level: 90 },  // Update these
    { name: "JavaScript", level: 85 },
    // Add more...
  ],
  backend: [
    { name: "Node.js", level: 85 },
    // Add more...
  ],
  tools: [
    { name: "Git", level: 90 },
    // Add more...
  ],
};
```

### 5. Education Section

**File:** `src/components/Education.js`

Update the education array (line 4-11) with your details:

```javascript
const education = [
  {
    degree: "Your Degree",
    institution: "Your University/College",
    year: "2020 - 2024",
    description: "Description of your studies...",
  },
];
```

**Note:** If you haven't completed education above HSC, you can leave the array empty or remove the Education section from `src/app/page.js`.

### 6. Experience Section

**File:** `src/components/Experience.js`

Update the experiences array (line 4-16) with your work experience:

```javascript
const experiences = [
  {
    title: "Your Job Title",
    company: "Company Name",
    duration: "2023 - Present",
    description: "Brief description of your role...",
    responsibilities: [
      "Responsibility 1",
      "Responsibility 2",
      // Add more...
    ],
  },
];
```

**Note:** If you don't have experience yet, leave the array empty - it will show a message.

### 7. Projects Section

**File:** `src/data/projects.js`

Update each project object with your actual projects:

```javascript
{
  id: "project-1",  // Keep this unique
  name: "Your Project Name",
  image: "/projects/your-image.jpg",  // Add image to /public/projects/
  description: "Brief description...",
  techStack: ["React", "Node.js", "MongoDB"],  // Your tech stack
  liveLink: "https://yourproject.com",
  githubLink: "https://github.com/username/project",
  challenges: "Describe challenges you faced...",
  improvements: "Future improvements and plans...",
}
```

**Important:** You need at least 3 projects for the assignment.

### 8. Contact Information

**File:** `src/components/Contact.js`

Update contact details (line 7-11):

```javascript
const contactInfo = {
  email: "your.email@example.com",
  phone: "+1234567890",
  whatsapp: "+1234567890",  // Optional, leave empty if not available
};
```

### 9. Footer

**File:** `src/components/Footer.js`

- **Line 11:** Update your name in the copyright
- **Line 15-19:** Update social media links (same as Hero section)

### 10. Site Metadata

**File:** `src/app/layout.js`

Update metadata (line 15-18):

```javascript
export const metadata = {
  title: "Your Name | Portfolio",
  description: "Your portfolio description",
};
```

## Adding Project Images

1. Create a folder: `/public/projects/`
2. Add your project images with names matching those in `src/data/projects.js`
3. Supported formats: JPG, PNG, WebP

## Adding Profile Photo

1. Add your photo at `/public/profile-photo.jpg`
2. Recommended size: 800x800px (square)
3. Supported formats: JPG, PNG, WebP

## Color Scheme

The current color scheme uses:
- Primary: Blue (#2563eb, blue-600)
- Secondary: Purple
- Background: White/Gray-50
- Text: Gray-900/Gray-700

To change colors, update Tailwind classes throughout the components.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy" (it will auto-detect Next.js settings)

### Deploy to Netlify

1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `.next` folder OR connect to GitHub
4. Set build command: `npm run build`
5. Set publish directory: `.next`

## Testing Checklist

Before submission, make sure:

- [ ] All personal information is updated
- [ ] Social media links are working
- [ ] Resume download button works (if resume is added)
- [ ] At least 3 projects are added
- [ ] All project detail pages are accessible
- [ ] Contact information is correct
- [ ] Website is responsive on mobile, tablet, and desktop
- [ ] All links are working
- [ ] No broken images
- [ ] Site is deployed and live link is working

## Need Help?

- Check the README.md for general information
- Review Next.js documentation: https://nextjs.org/docs
- Review Tailwind CSS documentation: https://tailwindcss.com/docs

Good luck with your portfolio! 🚀