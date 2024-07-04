// app/api/contentful.ts
const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const BASE_URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`;

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${ACCESS_TOKEN}`,
};

async function fetchGraphQL(query: string) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}

export async function fetchProductsPaginated(productsPerPage: number, currentPage: number) {
  const query = `
    {
      productCollection(limit: ${productsPerPage}, skip: ${(currentPage - 1) * productsPerPage}){
        total
        items {
          kategorija,
          naziv,
          cijena,
          slikaSrc,
          trgovina,
          sys {
            id
          }
        }
      }
    }`;

  return fetchGraphQL(query);
}

export async function fetchProductsByCategory(category: string) {
  const query = `
    {
      productCollection(where: { kategorija: "${category}" }){
        items {
          kategorija,
          naziv,
          cijena,
          slikaSrc,
          trgovina,
          sys {
            id
          }
        }
      }
    }`;

  return fetchGraphQL(query);
}

export async function fetchProductsBySearchQuery(searchQuery: string) {
  const query = `
    {
      productCollection(where: { naziv_contains: "${searchQuery}" }){
        items {
          kategorija,
          naziv,
          cijena,
          slikaSrc,
          trgovina,
          sys {
            id
          }
        }
      }
    }`;

  return fetchGraphQL(query);
}

export async function fetchProductById(id: string) {
  const query = `
    {
      product(id: "${id}"){
        kategorija,
        naziv,
        cijena,
        slikaSrc,
        trgovina,
      }
    }`;

  return fetchGraphQL(query);
}