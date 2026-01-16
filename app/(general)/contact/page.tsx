import {Metadata} from 'next';

export const metadata: Metadata = {
 title: 'Contac Title',
 description: 'Contactame',
 keywords: ['Contac page', 'Description', '...']

};

export default function ContactPage() {
  return (
      <span className="text-5xl"> Contact Page </span>
  );
}
