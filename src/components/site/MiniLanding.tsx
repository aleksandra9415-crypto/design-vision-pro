import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageShell } from "./PageShell";
import { BeforeAfter } from "./BeforeAfter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { TabId } from "@/lib/mock-data";

type Style = { id: string; name: string; desc: string };

export function MiniLanding({
  eyebrow,
  title,
  subtitle,
  bullets,
  styles,
  stylesTitle,
  before,
  after,
  tab,
  ctaLabel,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  bullets: string[];
  styles: Style[];
  stylesTitle: string;
  before: string;
  after: string;
  tab: TabId;
  ctaLabel: string;
}) {
  return (
    <PageShell>
      <section className="border-b border-border bg-gradient-to-b from-secondary/60 to-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-medium uppercase tracking-wide text-primary">{eyebrow}</span>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
            <p className="mt-4 text-muted-foreground">{subtitle}</p>
            <ul className="mt-6 space-y-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/app/generator" search={{ tab }}>
                  {ctaLabel} <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/pricing">Тарифы</Link>
              </Button>
            </div>
          </div>
          <BeforeAfter before={before} after={after} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{stylesTitle}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {styles.map((s) => (
            <Card key={s.id} className="border-border">
              <CardContent className="pt-6">
                <p className="font-medium">{s.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 rounded-xl border border-border bg-muted/40 p-6 text-center">
          <p className="text-lg font-medium">Готовы посмотреть свой вариант?</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Первые 3 генерации бесплатно, карта не нужна.
          </p>
          <Button asChild className="mt-5">
            <Link to="/app/generator" search={{ tab }}>
              {ctaLabel}
            </Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
