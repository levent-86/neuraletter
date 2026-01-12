import { Footer } from '../Footer/Footer';
import { CardsGet } from './CardsGet';
import { Hero } from './Hero';

interface SoftwaresTypes {
  name: string;
  website: string;
  picture: string;
  description: string;
  buttonText: string;
  badge1: string;
  badge2: string;
}

export const Home = () => {
  const softwares: SoftwaresTypes[] = [
    {
      name: 'NeuraLetter Suite: Scrap',
      website:
        'https://chromewebstore.google.com/detail/neuraletter-suite-scrap/njdhnogadpoafagjibjcopbngknjiikl?authuser=0&hl=tr',
      picture: '/scscreen.png',
      description:
        'Turn any website into a structured database without leaving your tab. Focused, keyboard-driven data collection.',
      buttonText: 'Add to Chrome',
      badge1: 'Chrome Web Store',
      badge2: 'Extension',
    },
    {
      name: 'NeuraLetter Suite: Workflow',
      website: 'https://github.com/levent-86/neuraletter-suite-workflow',
      picture: '/wfscreen.png',
      description:
        'Human-like AI outreach that stays out of spam folders. Smart scheduling powered by the Fisher-Yates algorithm.',
      buttonText: 'Get the Workflow',
      badge1: 'n8n workflow',
      badge2: 'AI Agents',
    },
  ];

  return (
    <>
      <Hero />

      <h2 className="justify-self-center pt-20 pb-10 font-bold xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-md">
        Two Tools. One Flow.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center max-w-4xl justify-self-center mb-20">
        {softwares.map((software, index) => (
          <CardsGet key={index} {...software} />
        ))}
      </div>

      <Footer />
    </>
  );
};
