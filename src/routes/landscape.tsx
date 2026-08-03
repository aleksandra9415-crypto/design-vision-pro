import { createFileRoute } from "@tanstack/react-router";
import { MiniLanding } from "@/components/site/MiniLanding";
import { images, landscapeStyles } from "@/lib/mock-data";

export const Route = createFileRoute("/landscape")({
  head: () => ({
    meta: [
      { title: "Дизайн ландшафта и участка по фото с ИИ" },
      {
        name: "description",
        content:
          "Спланируйте участок до начала работ: газон, дорожки, посадки и зона отдыха — визуализация по фото за минуту.",
      },
      { property: "og:title", content: "Дизайн ландшафта с ИИ" },
      {
        property: "og:description",
        content: "Двор, газон, дорожки, посадки и терраса — визуализация по фотографии участка.",
      },
    ],
  }),
  component: () => (
    <MiniLanding
      eyebrow="Участок и сад"
      title="Дизайн участка по фотографии"
      subtitle="Посмотрите, как будет выглядеть двор с новым газоном, дорожками и посадками, прежде чем тратить бюджет на благоустройство."
      bullets={[
        "Газон, дорожки, миксбордеры, деревья и зона барбекю",
        "Сохраняем границы участка и расположение построек",
        "Удобно согласовывать вариант с семьёй и подрядчиком",
      ]}
      stylesTitle="Направления для участка"
      styles={landscapeStyles}
      before={images.landscapeBefore}
      after={images.landscapeAfter}
      tab="landscape"
      ctaLabel="Оформить участок"
    />
  ),
});
