import { createFileRoute } from "@tanstack/react-router";
import { MiniLanding } from "@/components/site/MiniLanding";
import { images, planStyles } from "@/lib/mock-data";

export const Route = createFileRoute("/pro")({
  head: () => ({
    meta: [
      { title: "Визуализация по схеме мебели для дизайнеров интерьера" },
      {
        name: "description",
        content:
          "Загрузите план расстановки мебели и получите фотореалистичную визуализацию. Коммерческая лицензия включена в любой платный пакет.",
      },
      { property: "og:title", content: "Для дизайнеров интерьера" },
      {
        property: "og:description",
        content: "Рендер по чертежу за минуту, коммерческая лицензия без отдельной подписки.",
      },
    ],
  }),
  component: () => (
    <MiniLanding
      eyebrow="Для дизайнеров интерьера"
      title="Визуализация по схеме расстановки мебели"
      subtitle="Загрузите план с расстановкой мебели — получите фотореалистичную подачу прямо на встрече с клиентом, без 3D-моделирования."
      bullets={[
        "Работа по чертежу, а не только по фотографии",
        "Коммерческая лицензия включена в любой платный пакет — отдельная подписка не нужна",
        "Несколько вариантов подачи одного и того же плана",
        "Приоритетная очередь в пакетах «Оптимум» и «Максимум»",
      ]}
      stylesTitle="Варианты подачи"
      styles={planStyles}
      before={images.planBefore}
      after={images.planAfter}
      tab="plan"
      ctaLabel="Загрузить чертёж"
    />
  ),
});
