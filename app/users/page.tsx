import { UserList } from "@/components/user";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Omie - Usuários",
  description: "Tela de listagem dos usuários",
};

export default function UsersPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserList />
    </Suspense>
  );
}
