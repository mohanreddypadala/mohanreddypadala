# Mohan Reddy Padala - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Interactive Contact Form**: Functional email sending capabilities
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Modern Animations**: Smooth transitions and hover effects
- **Performance Optimized**: Fast loading and efficient code

## 📧 Contact Form Setup

The contact form supports multiple email services. Choose one of the following options:

### Option 1: EmailJS (Recommended)

1. Go to [EmailJS](https://www.emailjs.com/)
2. Create an account and get your User ID
3. Create a service (Gmail, Outlook, etc.)
4. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{reply_to}}` - Reply-to email
5. Update `src/utils/emailService.ts` with your IDs:

```typescript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'your_service_id',
  TEMPLATE_ID: 'your_template_id', 
  USER_ID: 'your_user_id',
};
```

### Option 2: Formspree

1. Go to [Formspree](https://formspree.io/)
2. Create a form and get your form ID
3. Update the endpoint in `src/utils/emailService.ts`:

```typescript
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your_form_id';
```

### Option 3: Netlify Forms (if deployed on Netlify)

1. Add `data-netlify="true"` to your form
2. The form will automatically work on Netlify

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email**: EmailJS
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📱 Sections

1. **Hero Section**: Introduction and call-to-action
2. **About**: Personal background and experience
3. **Skills**: Technical skills with progress bars
4. **Projects**: Featured projects with descriptions
5. **Achievements**: Notable accomplishments
6. **Certifications**: Professional certifications
7. **Contact**: Functional contact form and social links

## 🎨 Design Features

- **Modern Gradient Backgrounds**: Beautiful color transitions
- **Hover Effects**: Interactive elements with smooth animations
- **Typography**: Clean, readable fonts with proper hierarchy
- **Color System**: Consistent color palette for both themes
- **Micro-interactions**: Subtle animations for better UX

## 📈 SEO Features

- Comprehensive meta tags
- Open Graph and Twitter Card support
- Structured data (JSON-LD)
- Sitemap and robots.txt
- Performance optimizations

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

## 📞 Contact

- **Email**: mohanreddy.padala12@gmail.com
- **LinkedIn**: [linkedin.com/in/mohan-reddy-padala-526716294](https://www.linkedin.com/in/mohan-reddy-padala-526716294)
- **GitHub**: [github.com/mohanreddypadala](https://github.com/mohanreddypadala)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).