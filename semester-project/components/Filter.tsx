// components/Filter.tsx

import { useState } from 'react';

interface FilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  productsPerPage: number;
  setProductsPerPage: (productsPerPage: number) => void;
}

const categories = [
  { value: 'delikatesni-proizvodi', label: 'Delikatesni Proizvodi' },
  { value: 'domacinstvo', label: 'Domaćinstvo' },
  { value: 'kucni-ljubimci', label: 'Kućni Ljubimci' },
  { value: 'njega-i-higijena', label: 'Njega i Higijena' },
  { value: 'djecji-svijet', label: 'Dječji Svijet' },
  { value: 'priprema-kolaca', label: 'Priprema Kolača' },
  { value: 'pica', label: 'Pića' },
  {
    value: 'pahuljice-namaz-kava-cajevi',
    label: 'Pahuljice, Namaz, Kava, Čaj',
  },
  { value: 'smrznuta-hrana', label: 'Smrznuta Hrana' },
  { value: 'priprema-jela', label: 'Priprema Jela' },
  { value: 'umaci-i-zacini', label: 'Umaci i Začini' },
  { value: 'konzervirano-i-juhe', label: 'Konzervirano i Juhe' },
  { value: 'tjestenine-riza-njoki', label: 'Tjestenine, Riža, Njoki' },
  { value: 'slatkisi-i-grickalice', label: 'Slatkiši i Grickalice' },
  { value: 'mlijecni-proizvodi-i-jaja', label: 'Mliječno i Jaja' },
  { value: 'delikatesa', label: 'Delikatesa' },
  { value: 'zdravi-kutak', label: 'Zdravi Kutak' },
  { value: 'pekarnica', label: 'Pekarnica' },
  { value: 'meso', label: 'Meso' },
  { value: 'voce-i-povrce', label: 'Voće i Povrće' },
];

const Filter: React.FC<FilterProps> = ({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  productsPerPage,
  setProductsPerPage,
}) => {
  // Use props instead of local state
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [productsPerPageDropdownOpen, setProductsPerPageDropdownOpen] =
    useState(false);

  const toggleCatDropdown = () => {
    setCategoryDropdownOpen(!categoryDropdownOpen);
    setProductsPerPageDropdownOpen(false);
  };

  const toggleProdDropdown = () => {
    setProductsPerPageDropdownOpen(!productsPerPageDropdownOpen);
    setCategoryDropdownOpen(false);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCategoryDropdownOpen(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleProductsPerPageSelect = (productsPerPage: number) => {
    setProductsPerPage(productsPerPage);
    setProductsPerPageDropdownOpen(false);
  };

  return (
    <div className="relative flex">
      <button
        id="dropdown-button"
        onClick={toggleCatDropdown}
        type="button"
        className="z-10 inline-flex flex-shrink-0 items-center rounded-l-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200"
      >
        {selectedCategory}
        <svg
          className="ml-2.5 h-2.5 w-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {categoryDropdownOpen && (
        <div
          id="dropdown"
          className="absolute left-0 top-full z-10 mt-1 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow-2xl"
        >
          <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="dropdown-button"
          >
            <li key={''}></li>
            <button
              type="button"
              className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
              onClick={() => handleCategorySelect('')}
            >
              Sve{' '}
            </button>
            {categories.map((category) => (
              <li key={category.value}>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleCategorySelect(category.value)}
                >
                  {category.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        id="dropdown-button"
        onClick={toggleProdDropdown}
        type="button"
        className="z-10 inline-flex flex-shrink-0 items-center border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200"
      >
        {productsPerPage}
      </button>
      {productsPerPageDropdownOpen && (
        <div
          id="dropdown"
          className="absolute left-0 top-full z-10 mt-1 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow-2xl"
        >
          <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="dropdown-button"
          >
            {[10, 20, 50].map((productsPerPage) => (
              <li key={productsPerPage}>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleProductsPerPageSelect(productsPerPage)}
                >
                  {productsPerPage} po stranici
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="relative w-full">
        <input
          type="search"
          id="search-dropdown"
          value={searchQuery}
          onChange={handleSearchChange}
          className="z-20 block w-full rounded-r-lg border border-l-2 border-gray-300 border-l-gray-50 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-zelena-200 focus:ring-zelena-200"
          placeholder="Pretraži"
          required
        />
        <button
          type="submit"
          className="absolute right-0 top-0 h-full rounded-r-lg border border-zelena-300 bg-zelena-300 p-2.5 text-sm font-medium text-white hover:bg-zelena-300 focus:outline-none focus:ring-4 focus:ring-zelena-100"
        >
          <svg
            className="h-4 w-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Filter;
