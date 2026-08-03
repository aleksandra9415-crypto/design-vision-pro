import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Вход и регистрация — Дизайн ИИ" },
      {
        name: "description",
        content: "Войдите или создайте аккаунт, чтобы получить 3 бесплатные генерации дизайна.",
      },
      { property: "og:title", content: "Вход и регистрация" },
      { property: "og:description", content: "Доступ к генератору дизайна интерьера и экстерьера." },
    ],
  }),
  component: Auth,
});

function Auth() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const navigate = useNavigate();

  return (
    <PageShell>
      <section className="mx-auto max-w-md px-4 py-16">
        <Card className="border-border">
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 rounded-lg bg-muted p-1">
              {(["login", "signup"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`rounded-md py-2 text-sm font-medium transition-colors ${
                    mode === m ? "bg-background shadow-sm" : "text-muted-foreground"
                  }`}
                >
                  {m === "login" ? "Вход" : "Регистрация"}
                </button>
              ))}
            </div>

            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success(mode === "login" ? "Вы вошли (демо)" : "Аккаунт создан (демо)");
                navigate({ to: "/app/generator", search: { tab: "interior" } });
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <Input id="password" type="password" required placeholder="••••••••" />
              </div>
              <Button type="submit" className="w-full">
                {mode === "login" ? "Войти" : "Создать аккаунт"}
              </Button>
            </form>

            <div className="my-6 flex items-center gap-3">
              <Separator className="flex-1" />
              <span className="text-xs text-muted-foreground">или</span>
              <Separator className="flex-1" />
            </div>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => toast.info("Вход через Google появится позже")}
            >
              Продолжить с Google
            </Button>

            <p className="mt-6 text-center text-xs text-muted-foreground">
              Продолжая, вы соглашаетесь с условиями сервиса. Это демонстрационная форма без
              реальной авторизации.
            </p>
          </CardContent>
        </Card>
      </section>
    </PageShell>
  );
}
