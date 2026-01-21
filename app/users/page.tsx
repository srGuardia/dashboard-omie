import { UserList } from "@/components/user";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Omie - Usuários",
  description: "Tela de listagem dos usuários",
};

export default function UsersPage() {
  return <UserList />;
}
