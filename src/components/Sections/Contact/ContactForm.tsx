import {FC, memo, useCallback, useMemo, useState} from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;
      const fieldData: Partial<FormData> = {[name]: value};
      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsLoading(true);
      setStatus('idle');

      try {
        const SERVICE_ID = 'service_xfeu0pn';
        const TEMPLATE_ID = 'template_maxg2xm';
        const PUBLIC_KEY = '7o9ByO_oV6ONesCRt';
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: data.name,
            email: data.email,
            message: data.message,
          },
          PUBLIC_KEY,
        );
        setStatus('success');
        setData(defaultData); // Reset form
      } catch (error) {
        console.error('Failed to send email:', error);
        setStatus('error');
      } finally {
        setIsLoading(false);
      }
    },
    [data, defaultData],
  );

  const inputClasses =
    'bg-neutral-200 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input
        className={inputClasses}
        name="name"
        onChange={onChange}
        value={data.name}
        placeholder="Name"
        required
        type="text"
        disabled={isLoading}
      />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        value={data.email}
        placeholder="Email"
        required
        type="email"
        disabled={isLoading}
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        value={data.message}
        placeholder="Message"
        required
        rows={6}
        disabled={isLoading}
      />

      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-1 bg-teal-300 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800 disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit"
        disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>

      {/* Status Messages */}
      {status === 'success' && <p className="text-green-600 text-sm">Message sent successfully! 🎉</p>}
      {status === 'error' && <p className="text-red-600 text-sm">Failed to send message. Please try again.</p>}
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
