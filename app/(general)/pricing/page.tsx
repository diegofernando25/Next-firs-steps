import {Metadata} from 'next';

export const metadata: Metadata = {
 title: 'Pricing Title',
 description: 'SEO Title',
 keywords: ['Pricing page', 'Description', '...']

};


export default function PricingPage() {
  return (
      <span className="text-7xl"> Pricing Page </span>
  );
}
