import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-slate-900">Вход в кабинет</h2>
        <p className="text-sm text-slate-600">
          JWT/NextAuth и подключение к API будут добавлены позже. Сейчас это статический экран, чтобы зафиксировать структуру
          маршрутов и базовые элементы формы.
        </p>
      </div>
      <form className="space-y-4">
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="agent@company.com"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700" htmlFor="password">
            Пароль
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
          />
        </div>
        <button
          type="button"
          className="w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
        >
          Войти (заглушка)
        </button>
      </form>
      <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
        <div className="font-semibold text-slate-700">Дальше</div>
        <ul className="mt-1 list-disc space-y-1 pl-4">
          <li>Подключить серверную обработку логина и установку HTTP-only cookie.</li>
          <li>Добавить редирект на /dashboard при успешной аутентификации.</li>
          <li>
            Сделать ссылку регистрации агентства (<Link href="/" className="text-slate-900 underline">Sign up</Link>) после
            появления формы регистрации.
          </li>
        </ul>
      </div>
    </div>
  );
}
