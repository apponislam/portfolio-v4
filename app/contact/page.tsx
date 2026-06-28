import type { Metadata } from 'next';
import ContactClient from '@/components/ContactClient/ContactClient';

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Appon Islam. Let's discuss your next project, collaboration, or software engineering needs.",
};

export default function Contact() {
  return <ContactClient />;
}
