import type {
  HealthResponse,
  User,
  Product,
} from "../types";

const USER_API = "/api/users";
const PRODUCT_API = "/api/products";

async function fetchJson<T>(url: string): Promise<T> {

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}


export function getUserHealth() {
  return fetchJson<HealthResponse>(
    `${USER_API}/health`
  );
}


export function getProductHealth() {
  return fetchJson<HealthResponse>(
    `${PRODUCT_API}/health`
  );
}


export function getUsers(): Promise<User[]> {
  return fetchJson<User[]>(
    `${USER_API}/`
  );
}


export function getProducts(): Promise<Product[]> {
  return fetchJson<Product[]>(
    `${PRODUCT_API}/`
  );
}
