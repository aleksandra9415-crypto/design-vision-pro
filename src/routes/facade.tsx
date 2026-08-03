import { createFileRoute } from "@tanstack/react-router";
import { MiniLanding } from "@/components/site/MiniLanding";
import { facadeStyles, images } from "@/lib/mock-data";

export const Route = createFileRoute("/facade")({
  head: () => ({
    meta: [
      { title: "Дизайн фасада дома по фото с ИИ" },
      {
        name: "description",
        content:
          "Подберите отделку фасада, входную группу и подсветку по фотографии дома — визуализация готова примерно за минуту.",
      },
      { property: "og:title", content: "Дизайн фасада дома с ИИ" },
      {
        property: "og:description",
        content: "Отделка стен, кровля, входная группа и вечерняя подсветка по фото дома.",
      },
    ],
  }),
  component: () => (
    <MiniLanding
      eyebrow="Дом снаружи"
      title="Дизайн фасада по фотографии дома"
      subtitle="Сравните варианты отделки, цвета и подсветки на своём доме — без макетов и долгих согласований с подрядчиком."
      bullets={[
        "Отделка стен, кровля, входная группа и вечерний свет",
        "Сохраняем форму дома, окна и пропорции",
        "Несколько вариантов одного фасада для сравнения",
      ]}
      stylesTitle="Направления для фасада"
      styles={facadeStyles}
      before={images.facadeBefore}
      after={images.facadeAfter}
      tab="facade"
      ctaLabel="Оформить фасад"
    />
  ),
});
