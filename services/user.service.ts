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
  "use cache";

  cacheLife("hours");

  return await fetch(`${BASE_URL}/users?limit=10&skip=${skip}`, {
    method: "GET",
  }).then((res) => res.json());
}
