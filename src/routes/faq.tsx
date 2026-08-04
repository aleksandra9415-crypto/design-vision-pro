import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/mock-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Вопрос-ответ о генерации дизайна с ИИ" },
      {
        name: "description",
        content:
          "Бесплатные генерации, нужна ли карта, сохраняется ли структура помещения, сроки и лицензия — ответы на частые вопросы.",
      },
      { property: "og:title", content: "Вопрос-ответ" },
      { property: "og:description", content: "Частые вопросы о сервисе дизайна с ИИ." },
    ],
  }),
  component: Faq,
});

function Faq() {
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-xs tracking-[0.18em] text-muted-foreground">ВОПРОСЫ</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-[0.02em] sm:text-4xl">
          Часто задаваемые <span className="font-bold text-primary">вопросы</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Если не нашли ответ — напишите нам, и мы поможем.
        </p>
        <Accordion type="single" collapsible className="mt-8">

          {faqItems.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </PageShell>
  );
}
