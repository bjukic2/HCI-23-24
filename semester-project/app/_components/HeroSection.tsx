import Image, { StaticImageData } from 'next/image';

import heroImage1 from '@/public/images/Vizual-online-kupovina-studeni-2020-300x200-1.jpg';
import heroImage2 from '@/public/images/Untitled.jpg';
import heroImage4 from '@/public/images/1417619771_910.jpg';
import heroImage3 from '@/public/images/20915197_1905105099814277_3659997315358578228_n.jpg';

type HeroImageObject = {
  image: StaticImageData;
  borderRadius: string;
};

const images: HeroImageObject[] = [
  { image: heroImage1, borderRadius: '20% 0 0 0' },
  { image: heroImage2, borderRadius: '0 20% 0 0' },
  { image: heroImage3, borderRadius: '0 0 0 20%' },
  { image: heroImage4, borderRadius: '0 0 20% 0' },
];

const HeroSection = () => (
  <section className="container flex w-screen flex-col items-center justify-between gap-10 sm:flex-row lg:flex-row">
    <div className="flex max-w-xl flex-col justify-start gap-5">
      <h1 className="whitespace-break-spaces font-playfair text-5xl font-extrabold text-black">
        Ušteda novca i kupovina namirnica na pravi način.
      </h1>
      <p className="whitespace-break-spaces font-roboto text-lg text-black">
        Dobrodošli u{' '}
        <span className="whitespace-nowrap font-roboto-condensed text-xl font-bold text-brand-900">
          eDućan
        </span>
        , gdje možete vidjeti cijene proizvoda iz velikog broja trgovina.
        Pridružite nam se što prije da počnete na jednostavan i zabavan način
        štedjeti novac.
      </p>
    </div>
    <div className="flex-shrink-0">
      <div className="grid grow grid-cols-2 grid-rows-2 gap-2">
        {images.map((imageObj, index) => (
          <div key={index} className="relative h-52 w-52">
            <Image
              src={imageObj.image}
              alt={`Hero image ${index + 1}`}
              fill
              style={{
                objectFit: 'cover',
                borderRadius: `${imageObj.borderRadius}`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
