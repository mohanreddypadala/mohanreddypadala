// Email service configuration and utilities
import emailjs from 'emailjs-com';

// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and get your User ID
// 3. Create a service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Replace the values below with your actual IDs

export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_portfolio', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'template_contact', // Replace with your EmailJS template ID
  USER_ID: 'your_emailjs_user_id', // Replace with your EmailJS user ID
};

export interface EmailData {
  from_name: string;
  from_email: string;
  message: string;
  to_name?: string;
  reply_to?: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    const templateParams = {
      from_name: data.from_name,
      from_email: data.from_email,
      message: data.message,
      to_name: data.to_name || 'Mohan Reddy Padala',
      reply_to: data.reply_to || data.from_email,
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAIL_CONFIG.USER_ID
    );

    if (response.status !== 200) {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
};

// Alternative: Using Formspree (simpler setup)
export const sendEmailViaFormspree = async (data: EmailData): Promise<void> => {
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your_form_id'; // Replace with your Formspree form ID
  
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.from_name,
        email: data.from_email,
        message: data.message,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email via Formspree');
    }
  } catch (error) {
    console.error('Formspree error:', error);
    throw error;
  }
};

// Alternative: Using Netlify Forms (if deployed on Netlify)
export const sendEmailViaNetlify = async (data: EmailData): Promise<void> => {
  try {
    const formData = new FormData();
    formData.append('form-name', 'contact');
    formData.append('name', data.from_name);
    formData.append('email', data.from_email);
    formData.append('message', data.message);

    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    });

    if (!response.ok) {
      throw new Error('Failed to send email via Netlify');
    }
  } catch (error) {
    console.error('Netlify Forms error:', error);
    throw error;
  }
};