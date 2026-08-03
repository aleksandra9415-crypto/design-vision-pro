import { createFileRoute } from "@tanstack/react-router";
import { MiniLanding } from "@/components/site/MiniLanding";
import { exteriorStyles, images } from "@/lib/mock-data";

export const Route = createFileRoute("/exterior")({
  head: () => ({
    meta: [
      { title: "Дизайн ландшафта и фасада дома по фото с ИИ" },
      {
        name: "description",
        content:
          "Обновите фасад дома и спланируйте участок до начала работ: загрузите фото и получите визуализацию за минуту.",
      },
      { property: "og:title", content: "Дизайн ландшафта и фасада с ИИ" },
      {
        property: "og:description",
        content: "Фасад, двор, газон и терраса — визуализация по фотографии участка.",
      },
    ],
  }),
  component: () => (
    <MiniLanding
      eyebrow="Дом и участок"
      title="Дизайн ландшафта и фасада по фотографии"
      subtitle="Посмотрите, как будет выглядеть дом с новой отделкой фасада и благоустроенным участком, прежде чем тратить бюджет на работы."
      bullets={[
        "Фасад, двор, газон, дорожки, терраса и зона барбекю",
        "Сохраняем форму дома и границы участка",
        "Удобно согласовывать вариант с семьёй и подрядчиком",
      ]}
      stylesTitle="Направления для экстерьера"
      styles={exteriorStyles}
      before={images.exteriorBefore}
      after={images.exteriorAfter}
      tab="exterior"
      ctaLabel="Оформить экстерьер"
    />
  ),
});
