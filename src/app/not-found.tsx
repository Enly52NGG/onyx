import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.png" alt="NEVA Role Play" className="w-16 h-16 rounded-lg object-cover mb-6 opacity-80 border border-[#1E2F4A]" />
      <h1 className="text-4xl font-semibold text-[#F7F7F8] mb-2">404</h1>
      <p className="text-[#CACBD2] mb-8 max-w-md">
        Запрашиваемая страница или документ не найдены. Возможно, материал ещё не загружен или ссылка устарела.
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-lg bg-[#16253D] border border-[#1E2F4A] text-[#2965B3] hover:border-[#2965B3]/50 transition"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}
