import React from 'react';

export default function Home() {
  return (
    <div>
      <main className="flex h-screen flex-col bg-white sm:flex-row">
        <section className="ml-5 mr-5 mt-8 flex flex-col items-center justify-between sm:mt-20 sm:h-screen sm:w-1/2">
          <div className="flex max-w-xl flex-col justify-start gap-5">
            <h1 className="whitespace-break-spaces font-playfair text-4xl font-extrabold text-black text-zelena-300 sm:pt-32 sm:text-5xl">
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
            <a href="/nabava" className="btn mb-16 w-24 bg-roza text-white">
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

        <div className=" right-0 top-0 z-10 h-96 w-full bg-[url('/images/pozadina.png')] bg-cover bg-center sm:absolute sm:h-screen sm:w-1/2"></div>
      </main>

      <div>
        <section className="relative z-0 bg-bez bg-gray-50 py-14 sm:bg-white lg:py-24">
          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mx-auto mb-5 max-w-2xl  text-center text-4xl  font-bold text-gray-900 md:text-5xl md:leading-normal">
              Pronađite najpovoljnije cijene s našim{' '}
              <span className="text-zelena-200">Pazzar </span>
              algoritmom
            </h1>
            <p className="mx-auto mb-9 max-w-sm text-center text-base font-normal leading-7 text-gray-500">
              Uštedite pametno i otkrijte najbolji način za upravljanje vašim
              kućnim budžetom jednostavno i efikasno.
            </p>
          </div>
        </section>
        <section className="relative bg-gray-100 py-14 lg:py-24">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
              <div className="img-box">
                <img
                  alt="O nama Pazzar stranica"
                  className="max-lg:mx-auto"
                  src="/images/o_nama.png"
                />
              </div>
              <div className="flex items-center lg:pl-[100px]">
                <div className="data w-full">
                  <h2 className=" relative mb-9 text-4xl font-bold text-black max-lg:text-center lg:text-5xl">
                    O nama{' '}
                  </h2>
                  <p className="mx-auto max-w-2xl text-xl font-normal leading-8 text-gray-500 max-lg:text-center">
                    Vođeni strašću za pronalaženjem najboljih ponuda, pažljivo
                    smo razvili Pazzar kako bismo omogućili korisnicima da lako
                    pronađu najjeftinije cijene namirnica i lociraju trgovine.
                    Naša misija je pružiti sveobuhvatan alat koji vam omogućava
                    da uštedite na svakodnevnim kupovinama.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-14 lg:py-24">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
              <div className="flex items-center lg:pr-24">
                <div className="data w-full">
                  <img
                    alt="O nama Pazzar stranica"
                    className="mx-auto mb-9 block lg:hidden"
                    src="/images/market.webp"
                  />
                  <h2 className=" mb-9 text-4xl font-bold text-black max-lg:text-center lg:text-5xl">
                    U poslu od <span className="text-zelena-200">2024 </span>
                  </h2>
                  <p className="mx-auto max-w-2xl text-xl font-normal leading-8 text-gray-500 max-lg:text-center">
                    Pazzar nije samo platforma za usporedbu cijena; to je
                    filozofija. Idemo dalje od osnovnih usporedbi, dajući
                    prioritet pristupačnosti, skalabilnosti i upotrebljivosti.
                    Svaki element, od najmanjeg detalja do najvećeg pregleda,
                    pažljivo je osmišljen kako bi poboljšao funkcionalnost i
                    zadovoljstvo korisnika.
                  </p>
                </div>
              </div>
              <div className="img-box ">
                <img
                  alt="O nama Pazzar stranica"
                  className="hidden lg:block "
                  src="/images/market.webp"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className=" mb-14 text-center text-4xl font-bold text-gray-900">
              Naši rezultati u brojkama
            </h2>
            <div className="flex flex-col gap-5 lg:flex-row lg:justify-between xl:gap-8">
              <div className="mx-auto w-full rounded-2xl bg-white p-6 shadow-md shadow-gray-100 max-lg:max-w-2xl lg:mx-0 lg:w-1/3">
                <div className="flex gap-5">
                  <div className=" text-2xl font-bold text-zelena-200">
                    500+
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 text-xl font-semibold text-gray-900">
                      Trgovina pregledano
                    </h4>
                    <p className="text-xs leading-5 text-gray-500">
                      Pregledali smo preko 500 trgovina kako bismo vam donijeli
                      najbolje ponude i uštede.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mx-auto w-full rounded-2xl bg-white p-6 shadow-md shadow-gray-100 max-lg:max-w-2xl lg:mx-0 lg:w-1/3">
                <div className="flex gap-5">
                  <div className=" text-2xl font-bold text-zelena-200">
                    1000+
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 text-xl font-semibold text-gray-900">
                      Korisnika mjesečno
                    </h4>
                    <p className="text-xs leading-5 text-gray-500">
                      Više od 1000 zadovoljnih korisnika koristi Pazzar svaki
                      mjesec za pronalaženje najboljih ponuda.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mx-auto w-full rounded-2xl bg-white p-6 shadow-md shadow-gray-100 max-lg:max-w-2xl lg:mx-0 lg:w-1/3">
                <div className="flex gap-5">
                  <div className=" text-2xl font-bold text-zelena-200">
                    3000+
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 text-xl font-semibold text-gray-900">
                      Ponuda pronađeno
                    </h4>
                    <p className="text-xs leading-5 text-gray-500">
                      Pronašli smo više od 3000 izvanrednih ponuda koje vam mogu
                      pomoći da uštedite na vašim kupovinama.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
