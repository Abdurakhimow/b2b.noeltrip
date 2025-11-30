import Link from 'next/link';

const links = [
  { href: '/login', label: 'Login (агент)' },
  { href: '/dashboard', label: 'Dashboard (скелет)' },
];

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-slate-600">
          Это стартовый каркас B2B-кабинета Noeltrip. Авторизация и данные пока не подключены. Далее
          будем добавлять реальные формы регистрации/логина, защищённые маршруты и интеграцию с API.
        </p>
        <p className="text-sm text-slate-600">
          Начните со скелетных экранов ниже, чтобы проверить базовую навигацию и Tailwind-стили.
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 transition hover:-translate-y-[1px] hover:border-slate-300 hover:bg-white hover:shadow"
          >
            <span className="font-medium">{link.label}</span>
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">→</span>
          </Link>
        ))}
      </div>
      <section className="space-y-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <div className="font-semibold">Что дальше?</div>
        <ul className="list-disc space-y-1 pl-5">
          <li>Добавить NextAuth/JWT-авторизацию и защиту маршрутов под роли agent/manager/admin.</li>
          <li>Подключить Prisma и базу PostgreSQL, описать схемы Agency/AgencyUser/Booking.</li>
          <li>Реализовать страницы регистрации/логина, списки заявок и карточки.</li>
          <li>Подготовить загрузку документов через S3 (Hetzner) с pre-signed URL.</li>
        </ul>
      </section>
    </div>
  );
}
