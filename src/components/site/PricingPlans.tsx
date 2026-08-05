import { Link } from "@tanstack/react-router";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { plans, styleCatalog, totalStyles } from "@/lib/mock-data";

function StyleList({ id }: { id: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`styles-${id}`}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start gap-2 text-left text-sm"
      >
        <Check className="mt-0.5 size-4 shrink-0 text-foreground" />
        <span className="flex-1">
          Доступные стили — <span className="font-medium">{totalStyles}</span>
        </span>
        <ChevronDown
          className={`mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div id={`styles-${id}`} className="mt-3 space-y-3 border-l border-border pl-4">
          {styleCatalog.map((g) => (
            <div key={g.group}>
              <p className="text-[11px] font-light uppercase tracking-widest text-muted-foreground">
                {g.group} · {g.items.length}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{g.items.join(", ")}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function LicenseNote({ id, text }: { id: string; text: string }) {
  const [open, setOpen] = useState(false);
  const [label, body] = text.split(" — ", 2);
  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`license-${id}`}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start gap-2 text-left text-sm"
      >
        <Check className="mt-0.5 size-4 shrink-0 text-foreground" />
        <span className="flex-1">{label}</span>
        <ChevronDown
          className={`mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div id={`license-${id}`} className="mt-3 space-y-3 border-l border-border pl-4">
          <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{body}</p>
        </div>
      )}
    </div>
  );
}

function Consents({ ns }: { ns: string }) {
  return (
    <div className="space-y-3">
      <label
        htmlFor={`${ns}-terms`}
        className="flex cursor-pointer items-start gap-2 text-xs text-muted-foreground"
      >
        <Checkbox id={`${ns}-terms`} className="mt-0.5" />
        <span>
          Принимаю условия{" "}
          <Link to="/terms" className="underline underline-offset-2">
            Пользовательского соглашения
          </Link>
        </span>
      </label>
      <label
        htmlFor={`${ns}-privacy`}
        className="flex cursor-pointer items-start gap-2 text-xs text-muted-foreground"
      >
        <Checkbox id={`${ns}-privacy`} className="mt-0.5" />
        <span>
          Согласие на{" "}
          <Link to="/privacy" className="underline underline-offset-2">
            обработку персональных данных
          </Link>
        </span>
      </label>
      <label
        htmlFor={`${ns}-ads`}
        className="flex cursor-pointer items-start gap-2 text-xs text-muted-foreground"
      >
        <Checkbox id={`${ns}-ads`} className="mt-0.5" />
        <span>
          Согласие на информационную и рекламную рассылку (см.{" "}
          <Link to="/offer" className="underline underline-offset-2">
            оферту
          </Link>
          )
        </span>
      </label>
    </div>
  );
}

function PayMethods() {
  const methods = ["МИР", "VISA", "Mastercard", "СБП"];
  return (
    <div>
      <p className="mb-3 text-xs font-light text-muted-foreground">Способы оплаты</p>
      <div className="flex flex-wrap gap-2">
        {methods.map((m) => (
          <span
            key={m}
            className="border border-border px-2 py-1 text-[11px] font-light uppercase tracking-widest text-muted-foreground"
          >
            {m}
          </span>
        ))}
      </div>
      <Link
        to="/payment-info"
        className="mt-3 inline-block text-xs font-light text-muted-foreground underline underline-offset-2"
      >
        Способы оплаты и безопасность
      </Link>
    </div>
  );
}

export function PricingPlans({
  ns = "pricing",
  selectedId,
  onSelect,
  showConsents = true,
}: {
  ns?: string;
  selectedId?: string;
  onSelect?: (id: string) => void;
  showConsents?: boolean;
}) {
  const selectable = typeof onSelect === "function";
  return (
    <>
      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.id}
            className={`flex flex-col border bg-card p-8 lg:p-10 ${
              (selectable ? selectedId === p.id : p.popular)
                ? "border-foreground"
                : "border-border"
            }`}
          >

            <div className="flex items-center justify-between gap-3">
              <p className="font-display text-2xl">{p.name}</p>
              {p.popular && (
                <span className="bg-foreground px-2 py-1 text-[11px] uppercase tracking-widest text-background">
                  Популярный
                </span>
              )}
            </div>
            <p className="mt-6 font-display text-4xl tracking-[0.02em]">{p.price} ₽</p>
            <p className="mt-4 text-sm font-medium">{p.credits} кредитов</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            <p className="mt-4 text-xs font-light text-muted-foreground">{p.perFrame}</p>

            <hr className="mt-8 border-border" />

            <p className="mt-8 text-[11px] font-light uppercase tracking-widest text-muted-foreground">
              Что входит
            </p>
            <ul className="mt-4 flex-1 space-y-4">
              {p.features.map((f) =>
                f.startsWith("Доступные стили") ? (
                  <li key={f}>
                    <StyleList id={`${ns}-${p.id}`} />
                  </li>
                ) : f.startsWith("Коммерческая лицензия включена") ? (
                  <li key={f}>
                    <LicenseNote id={`${ns}-${p.id}`} text={f} />
                  </li>
                ) : (
                  <li key={f} className="flex items-start gap-2 text-sm leading-relaxed">
                    <Check className="mt-0.5 size-4 shrink-0 text-foreground" />
                    <span className="flex-1">
                      <span className="block text-foreground">{f.split(" — ")[0]}</span>
                      {f.includes(" — ") && (
                        <span className="mt-1 block text-xs font-light text-muted-foreground">
                          {f.split(" — ").slice(1).join(" — ")}
                        </span>
                      )}
                    </span>
                  </li>
                ),

              )}
            </ul>

            {selectable ? (
              <Button
                size="lg"
                variant={selectedId === p.id ? "default" : "outline"}
                className="mt-8 w-full rounded-none"
                onClick={() => onSelect(p.id)}
              >
                {selectedId === p.id ? "Пакет выбран" : "Выбрать пакет"}
              </Button>
            ) : (
              <Button
                asChild
                size="lg"
                variant={p.popular ? "default" : "outline"}
                className="mt-8 w-full rounded-none"
              >
                <Link to="/app/billing" search={{ plan: p.id }}>
                  Оплатить
                </Link>
              </Button>
            )}
          </div>
        ))}
      </div>

      {showConsents && (
        <div className="mt-10 grid grid-cols-1 items-start gap-8 border border-border bg-muted/40 p-6 sm:p-8 md:grid-cols-[3fr_2fr] md:divide-x md:divide-border">
          <Consents ns={ns} />
          <div className="md:pl-8">
            <PayMethods />
          </div>
        </div>
      )}
    </>
  );
}

