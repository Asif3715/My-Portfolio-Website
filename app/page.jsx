import {
  CTA,
  Description,
  Header,
  Navbar,
  Skills,
  Thumbnail,
  Transition,
} from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Home | Asif Khan',
  description:
    'Data Science student at NUST with hands-on experience in machine learning, NLP, and data analytics.',
};

export default function Home() {
  return (
    <Transition>
      <Navbar />
      <Header />
      <main>
        <Description />
        <Thumbnail />
        <Skills />
        <CTA />
      </main>
    </Transition>
  );
}
