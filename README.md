# B2B-платформа Noeltrip (MVP 1.0)

Техническое задание MVP B2B-платформы Noeltrip без онлайн-интеграций с отельными API.

## 1. Цели проекта
- Самостоятельная регистрация и ведение документооборота агентств.
- Создание заявок на туры (отели, гиды, трансферы и т.д.) с загрузкой документов туристов.
- Управление агентствами и заявками со стороны B2B-отдела Noeltrip, включая чат и выдачу финальных документов.

## 2. Домены и окружения
### Прод
- `b2b.noeltrip.com` — кабинет партнёров.
- `b2b-admin.noeltrip.com` — админка Noeltrip.
- `b2b-api.noeltrip.com` — backend API.

### Staging
- `staging-b2b.noeltrip.com`
- `staging-b2b-admin.noeltrip.com`
- `staging-b2b-api.noeltrip.com`

Cloudflare обслуживает DNS, SSL termination и проксирование.

## 3. Роли и пользователи
### Роли B2B-агентств
- **AgencyOwner**: создание пользователей агентства, просмотр всех заявок, редактирование профиля, блокировка менеджеров.
- **AgencyManager**: создание заявок, чат, загрузка документов, доступ только к своим заявкам (или ко всем — по флагу).

### Роли Noeltrip (B2B Admin)
- **B2BSuperAdmin**: полный доступ, настройка комиссий и статусов агентств.
- **B2BOperator**: работа с заявками, документы, чат.
- **B2BAccountant** (опционально позже): просмотр балансов и транзакций.

## 4. Архитектура
- **Frontend 1**: Next.js (App Router, TypeScript), `b2b.noeltrip.com`, авторизация по JWT в HTTP-only cookie, namespace `/agent/...`.
- **Frontend 2**: Next.js (App Router, TypeScript), `b2b-admin.noeltrip.com`, авторизация по JWT в HTTP-only cookie, namespace `/admin/...`.
- **Backend**: NestJS + Prisma + PostgreSQL, модули Auth, Users, Agencies, Bookings, Documents, Chat (позже Finance), работа с Hetzner Object Storage.

## 5. Функциональные требования
### B2B-кабинет партнёра
- **Регистрация агентства**: форма с данными агентства и пользователя. Создаёт `Agency` со статусом `PENDING_REVIEW` и `AgencyUser` (роль `AgencyOwner`). При статусе PENDING_REVIEW показывается экран ожидания модерации.
- **Логин**: email + пароль, JWT в HTTP-only cookie. При неактивном агентстве сообщение о блокировке/модерации.
- **Dashboard**: блоки активных заявок, последние 5 заявок, уведомления.
- **Управление заявками**: список с фильтрами; просмотр с вкладками Details, Travelers, Documents, Chat.
- **Создание заявки**: форма с данными направления, группы, размещения, услуг, бюджета и комментариев. При отправке создаётся `Booking` со статусом `SUBMITTED` (отображается как «В обработке»), уведомление в админку.
- **Пассажиры и документы**: добавление пассажиров и загрузка паспортов/документов (jpg/pdf) с записью в таблицу `Document`.
- **Чат**: сообщения с указанием отправителя и времени.

### B2B-админка
- Авторизация по email/паролю (учётные записи создаются вручную или через endpoint), роли `B2BSuperAdmin` и `B2BOperator`.
- **Agencies**: список с фильтрами; карточка с профилем, пользователями, документами и заявками. Действия: смена статуса (PENDING_REVIEW → ACTIVE/BLOCKED), редактирование профиля, управление пользователями, загрузка документов (лицензия, договор).
- **Bookings**: список и карточка с вкладками Details, Travelers, Internal notes, Documents, Chat, History. Статусы заявки: `NEW`, `IN_REVIEW`, `WAITING_SUPPLIERS`, `OFFER_SENT`, `WAITING_AGENT_CONFIRMATION`, `CONFIRMED`, `DOCUMENTS_READY`, `COMPLETED`, `CANCELLED`. Для агента отображается агрегированная схема (в обработке / ожидает подтверждения / подтверждено / документы готовы / завершено / отменено). Оператор может назначать ответственного, менять статус, добавлять заметки и документы (коммерческое предложение, программа тура, ваучеры, инвойсы), вести чат.

## 6. Документы и Object Storage
- Все файлы загружаются через `POST /files/upload` с проверкой прав. Ключ формируется как `agencies/{agencyId}/bookings/{bookingId}/{category}/{filename}` и загружается в Hetzner Object Storage через S3 SDK. В БД создаётся `Document`.
- Для скачивания генерируется pre-signed URL (`GET /files/:id/url`). Файлы не должны быть публичными без подписи.

## 7. Модель данных (Prisma, черновик)
`Agency`, `AgencyUser`, `AdminUser`, `Booking`, `Traveler`, `Document`, `BookingMessage`, `BookingStatusHistory` с перечислениями `AgencyStatus`, `AgencyUserRole`, `AdminRole`, `BookingStatus`, `DocumentType`, `MessageSenderType`. См. раздел 6 исходного ТЗ для полей и связей.

## 8. API (скелет)
- Auth: `POST /agent/auth/register`, `POST /agent/auth/login`, `POST /agent/auth/logout`, `POST /admin/auth/login`.
- Agencies (admin): `GET /admin/agencies`, `GET /admin/agencies/:id`, `PATCH /admin/agencies/:id`, `GET /admin/agencies/:id/users`, `POST /admin/agencies/:id/users`, `PATCH /admin/agencies/users/:userId`.
- Agencies (agent): `GET /agent/agency/me`, `GET /agent/agency/users`, `POST /agent/agency/users` (только owner).
- Bookings (agent): `GET /agent/bookings`, `POST /agent/bookings`, `GET /agent/bookings/:id`, `PATCH /agent/bookings/:id`, `POST /agent/bookings/:id/travelers`, `POST /agent/bookings/:id/messages`, `GET /agent/bookings/:id/messages`, `GET /agent/bookings/:id/documents`.
- Bookings (admin): `GET /admin/bookings`, `GET /admin/bookings/:id`, `PATCH /admin/bookings/:id`, `POST /admin/bookings/:id/messages`, `POST /admin/bookings/:id/documents`, `GET /admin/bookings/:id/history`.
- Files: `POST /files/upload`, `GET /files/:id/url`.

## 9. Нефункциональные требования
- Производительность: ответы API ≤ 500–700 ms на типовые запросы, списки только с пагинацией.
- Безопасность: JWT в HTTP-only cookie; CORS только для нужных доменов; доступ к Object Storage только через backend; права через NestJS guards.
- Логирование: вход/выход, смена статусов заявок, действия админов.
- Бэкапы: ежедневные бэкапы БД; Object Storage с версионированием по возможности.

## 10. Деплой и окружение
- Отдельный Hetzner-сервер с Docker Compose: контейнеры `b2b-api` (NestJS), `b2b-frontend` (Next.js), `b2b-admin-frontend` (Next.js), `reverse-proxy` (NGINX/Caddy).
- PostgreSQL как Managed DB или отдельный сервер.
- CI/CD: GitHub Actions, пуш в `main` запускает билд и деплой через SSH.
