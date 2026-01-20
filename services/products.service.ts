"use server";

import { BASE_URL } from "./config";

export async function getProducts({ skip = 0 }: { skip?: number }) {
  return await fetch(`${BASE_URL}/products?limit=10&skip=${skip}`).then((res) =>
    res.json(),
  );
}

export async function getSearchProduct({ query }: { query: string }) {
  return await fetch(`${BASE_URL}/products/search?q=${query}`).then((res) =>
    res.json(),
  );
}

export async function getCategories() {
  return await fetch(`${BASE_URL}/products/category-list`).then((res) =>
    res.json(),
  );
}

export async function getProductsStats() {
  return await fetch(`${BASE_URL}/products?limit=0`).then((res) => res.json());
}

export async function getAllProducts() {
  return await fetch(`${BASE_URL}/products?limit=194`).then((res) =>
    res.json(),
  );
}
