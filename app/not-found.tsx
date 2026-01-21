import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h2 className="font-bold text-6xl text-black">Página não encontrada</h2>

      <Link
        href="/"
        className="mt-10 w-3xs rounded-md bg-linear-to-br from-blue-600 to-blue-400 px-4 py-2 text-center text-white shadow transition-transform hover:-translate-y-1.5 hover:bg-blue-600"
      >
        Voltar
      </Link>
    </div>
  );
}
