import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/mvggvyar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Reset the form
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage('An unexpected error occurred. Please try again.');
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 ${
          status === 'submitting'
            ? 'bg-blue-400'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
        {status !== 'submitting' && <Send className="w-5 h-5" />}
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-center mt-4">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-center mt-4">{errorMessage}</p>
      )}
    </form>
  );
}
