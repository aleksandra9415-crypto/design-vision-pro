import { PageShell } from "./PageShell";

export function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: { h: string; p: string }[] }) {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-4 text-muted-foreground">{intro}</p>
        <div className="mt-8 space-y-8">
          {sections.map((s) => (
            <section key={s.h}>
              <h2 className="text-lg font-medium">{s.h}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.p}</p>
            </section>
          ))}
        </div>
        <p className="mt-12 text-xs text-muted-foreground">
          Текст носит демонстрационный характер и будет заменён финальной юридической редакцией.
        </p>
      </article>
    </PageShell>
  );
}
