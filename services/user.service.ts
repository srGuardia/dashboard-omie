"use server";

import { cacheLife } from "next/cache";
import { BASE_URL } from "./config";

export async function getUser({ userId }: { userId: number }) {
  "use cache";

  cacheLife("hours");

  return await fetch(`${BASE_URL}/users/${userId}`, {
    method: "GET",
  }).then((res) => res.json());
}

export async function getUsers({ skip = 0 }: { skip?: number }) {
  return await fetch(`${BASE_URL}/users?limit=10&skip=${skip}`, {
    method: "GET",
  }).then((res) => res.json());
}

export async function getSearchUsers({
  query,
  skip,
}: {
  query: string;
  skip?: number;
}) {
  return await fetch(
    `${BASE_URL}/users/search?q=${query}&limit=10&skip=${skip}`,
  ).then((res) => res.json());
}
