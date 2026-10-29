import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.png" alt="ONYX" className="w-16 h-16 rounded-full object-cover mb-6 opacity-80 border border-[#292929]" />
      <h1 className="text-4xl font-semibold text-[#F2F2F2] mb-2">404</h1>
      <p className="text-[#929292] mb-8 max-w-md">
        Запрашиваемая страница или документ не найдены. Возможно, материал ещё не загружен или ссылка устарела.
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-lg bg-[#151515] border border-[#292929] text-[#B9A16B] hover:border-[#B9A16B]/50 transition"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}
