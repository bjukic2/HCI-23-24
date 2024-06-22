import Image, { StaticImageData } from 'next/image';

import heroImage1 from '@/public/images/karton.png';

type HeroImageObject = {
  image: StaticImageData;
  borderRadius: string;
};

const images: HeroImageObject[] = [
  { image: heroImage1, borderRadius: '20% 0 0 0' }
];

const HeroSection = () => (
  <section className="container flex max-w-screen flex-col items-center justify-between gap-10 sm:flex-row lg:flex-row">
    <div className="flex max-w-xl flex-col justify-start gap-5">
      <h1 className="whitespace-break-spaces font-playfair text-5xl font-extrabold text-black">
        Ušteda novca i kupovina namirnica na pravi način.
      </h1>
      <p className="whitespace-break-spaces font-roboto text-lg text-black">
        Dobrodošli u{' '}
        <span className="whitespace-nowrap font-roboto-condensed text-xl font-bold text-brand-900">
          Pazzar
        </span>
        , gdje možete vidjeti cijene proizvoda iz velikog broja trgovina.
        Pridružite nam se što prije da počnete na jednostavan i zabavan način
        štedjeti novac.
      </p>
    </div>
    <div className="">
      <Image
        alt={" "}
        src={images[0].image}
        width={500} // Adjust the width value to make the image smaller
        height={500} // Adjust the height value to maintain the aspect ratio
      />
    </div>
  </section>
);

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <HeroSection />
    </main>
  );
}
