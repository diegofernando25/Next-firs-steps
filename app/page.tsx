import { Metadata } from 'next';
import Link from 'next/link';

//De esta forma asignamos metatags, usa mr+tab
export const metadata: Metadata = {
 title: 'Page metadata',
 description: 'Esta es la página de precios por servicio',
 keywords: ['About Page', 'DiegoDev', 'Mecatrónica']
};

export default function Home() {
  return (
    <main className=" flex min-h-screen felx-col items-center p-50">
      <span className="text-5xl">
        Hola Diego
      </span>
      <Link href={'/about'}> About Page</Link>
    </main>
  );
}
