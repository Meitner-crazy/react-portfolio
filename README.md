# Personal Portfolio

A modern, responsive portfolio website built with React and TypeScript, showcasing my projects, experience, and skills.

## 🚀 Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Email**: EmailJS for contact form
- **Build Tool**: Webpack / Node

### EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{from_name}}`, `{{email}}`, `{{message}}`
4. Get your credentials from EmailJS dashboard


## 📁 Project Structure

```
react-portfolio/
├── src/
│   ├── components/         # Reusable components
│   │   ├── Sections/       # Page sections (About, Projects, etc.)
│   │   └── ContactForm.tsx
│   ├── data/              # Static data and content
│   ├── styles/            # Global styles
│   └── App.tsx            # Main app component
├── public/                # Static assets
└── package.json
```