import { createFileRoute } from "@tanstack/react-router";
import { MiniLanding } from "@/components/site/MiniLanding";
import { images, interiorStyles } from "@/lib/mock-data";

export const Route = createFileRoute("/interior")({
  head: () => ({
    meta: [
      { title: "Дизайн интерьера по фото с ИИ — сканди, лофт, классика" },
      {
        name: "description",
        content:
          "Загрузите фото комнаты и получите дизайн интерьера в выбранном стиле за минуту. Геометрия помещения сохраняется.",
      },
      { property: "og:title", content: "Дизайн интерьера по фото с ИИ" },
      {
        property: "og:description",
        content: "20+ стилей интерьера: сканди, лофт, минимализм, джапанди, хюгге.",
      },
    ],
  }),
  component: () => (
    <MiniLanding
      eyebrow="Для владельцев квартир и домов"
      title="Дизайн интерьера по фото вашей комнаты"
      subtitle="Не нужно объяснять дизайнеру словами: сфотографируйте комнату, выберите стиль и посмотрите, как она может выглядеть после ремонта."
      bullets={[
        "Сохраняем окна, двери и планировку — меняем отделку и мебель",
        "Более 20 стилей и поле для собственных уточнений",
        "Результат в HD, можно скачать и показать бригаде",
      ]}
      stylesTitle="Стили интерьера"
      styles={interiorStyles}
      before={images.interiorBefore}
      after={images.interiorAfter}
      tab="interior"
      ctaLabel="Оформить интерьер"
    />
  ),
});
