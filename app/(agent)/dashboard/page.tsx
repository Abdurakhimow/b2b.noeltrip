const stats = [
  { label: 'Активные заявки', value: '0', note: 'подключим из API' },
  { label: 'На подтверждении', value: '0', note: 'ожидание статусов' },
  { label: 'Документы готовы', value: '0', note: 'ваучеры/инвойсы' },
];

const activity = [
  'Создать формы регистрации/логина с валидацией.',
  'Добавить защищённые маршруты и проверку JWT.',
  'Синхронизировать список заявок с API /agent/bookings.',
  'Подключить загрузку документов через pre-signed URL.',
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-slate-900">Dashboard (каркас)</h2>
        <p className="text-sm text-slate-600">
          Здесь появятся реальные данные агентства и заявки после интеграции с backend. Пока — статический макет, чтобы можно
          было подключить авторизацию и навигацию.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {stats.map((item) => (
          <div key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.label}</div>
            <div className="text-3xl font-semibold text-slate-900">{item.value}</div>
            <div className="text-xs text-slate-500">{item.note}</div>
          </div>
        ))}
      </div>
      <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="font-semibold text-slate-800">Ближайшие шаги</div>
        <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-700">
          {activity.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
        Подсказка: когда подключим реальную аутентификацию, этот экран должен быть защищён от публичного доступа и брать данные
        текущего агентства по JWT сессии.
      </div>
    </div>
  );
}
