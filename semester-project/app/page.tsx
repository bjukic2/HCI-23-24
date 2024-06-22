import React from 'react';

export default function Home() {
  return (
    <main className="flex flex-col bg-white sm:flex-row">
      <section className="ml-5 mr-5 mt-8 flex flex-col items-center justify-between sm:mt-20 sm:h-screen sm:w-1/2">
        <div className="flex max-w-xl flex-col justify-start gap-5">
          <h1 className="whitespace-break-spaces font-playfair text-4xl font-extrabold text-black sm:pt-32 sm:text-5xl">
            Ušteda novca i kupovina namirnica na pravi način.
          </h1>
          <p className="whitespace-break-spaces font-roboto text-lg text-black">
            Dobrodošli u{' '}
            <span className="whitespace-nowrap font-roboto-condensed text-xl font-bold text-roza">
              Pazzar
            </span>
            , gdje možete vidjeti cijene proizvoda iz velikog broja trgovina.
            Pridružite nam se što prije da počnete na jednostavan i zabavan
            način štedjeti novac.
          </p>
          <a href="/cms/nabava" className="btn mb-16 w-24 bg-roza text-white">
            Kreni
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </a>
        </div>
      </section>

      <div className="right-0 top-0 z-10 h-64 w-full bg-[url('/images/pozadina.png')] bg-cover bg-center sm:absolute sm:h-screen sm:w-1/2"></div>
    </main>
  );
}
