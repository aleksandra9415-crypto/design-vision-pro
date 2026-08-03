import { Link } from "@tanstack/react-router";

const columns = [
  {
    title: "Сервис",
    links: [
      { to: "/interior", label: "Дизайн интерьера" },
      { to: "/exterior", label: "Ландшафт и фасад" },
      { to: "/pro", label: "Для дизайнеров" },
      { to: "/pricing", label: "Тарифы" },
    ],
  },
  {
    title: "Помощь",
    links: [
      { to: "/faq", label: "Вопрос-ответ" },
      { to: "/auth", label: "Вход и регистрация" },
      { to: "/app/account", label: "Личный кабинет" },
      { to: "/payment-info", label: "Информация об оплате" },
    ],
  },
  {
    title: "Документы",
    links: [
      { to: "/terms", label: "Пользовательское соглашение" },
      { to: "/privacy", label: "Политика конфиденциальности" },
      { to: "/offer", label: "Публичная оферта" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-base font-semibold tracking-tight">ЛОГО · Дизайн ИИ</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Визуализация интерьера, ландшафта и фасада по фото или схеме расстановки мебели.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-medium">{col.title}</p>
            <ul className="mt-3 space-y-2">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/70 px-4 py-5 text-center text-xs text-muted-foreground">
        © 2026 Дизайн ИИ. Демонстрационная версия сервиса.
      </div>
    </footer>
  );
}
