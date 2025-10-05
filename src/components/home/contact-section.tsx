"use client";

import type React from "react";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { BookOpen, Users, Award, ArrowRight, Phone, User } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    agreed: false,
  });
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatPhone = useCallback((value: string): string => {
    const digits = value.replace(/\D/g, "").slice(0, 9);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`;
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 8)} ${digits.slice(8)}`;
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formatted = formatPhone(rawValue);
    setFormData((prev) => ({ ...prev, phone: formatted }));
    setPhoneError(null);
  };

  const validatePhone = (phone: string): boolean => {
    const digits = phone.replace(/\D/g, "");
    if (digits.length !== 9) {
      setPhoneError("Номер должен содержать 9 цифр");
      return false;
    }
    if (!/^9[0-9]{8}$/.test(digits)) {
      setPhoneError("Номер должен начинаться с 9");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePhone(formData.phone)) return;
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("[v1] Form submitted:", formData);
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section
      className="relative min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="contact-section-title"
    >
      <div
        className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-5 bg-center bg-repeat"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                id="contact-section-title"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance tracking-tight"
              >
                Мастер-классы и конкурсы
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Участвуйте в еженедельных мастер-классах и конкурсах, чтобы получить
                практические навыки и продвинуться в обучении.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  icon: <BookOpen className="w-6 h-6" aria-hidden="true" />,
                  title: "Практические курсы",
                  description: "Интерактивные занятия с опытными преподавателями",
                },
                {
                  icon: <Users className="w-6 h-6" aria-hidden="true" />,
                  title: "Малые группы",
                  description: "Индивидуальный подход к каждому студенту",
                },
                {
                  icon: <Award className="w-6 h-6" aria-hidden="true" />,
                  title: "Сертификаты",
                  description: "Официальное признание ваших достижений",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:bg-card/70 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-right-12 duration-700">
            <div className="p-6 sm:p-8 rounded-3xl bg-background shadow-xl border">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Бесплатная консультация</h2>
                  <p className="text-muted-foreground">
                    Оставьте контакты — мы перезвоним в течение 15 минут и ответим на все вопросы.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Имя
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Введите ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="pl-10 h-12"
                        required
                        aria-describedby="name-error"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Телефон
                    </Label>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="flex items-center gap-2 px-4 h-12 bg-muted rounded-lg border">
                        <span className="text-lg font-bold">TJ</span>
                        <span className="text-sm">+992</span>
                      </div>
                      <div className="relative flex-1">
                        <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="900 123 45 67"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          className={`pl-10 h-12 ${phoneError ? "border-destructive" : ""}`}
                          required
                          aria-invalid={!!phoneError}
                          aria-describedby={phoneError ? "phone-error" : undefined}
                        />
                        {phoneError && (
                          <p id="phone-error" className="text-destructive text-sm mt-1" role="alert">
                            {phoneError}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <Checkbox
                      id="agreement"
                      checked={formData.agreed}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({ ...prev, agreed: Boolean(checked) }))
                      }
                      required
                      aria-describedby="agreement-error"
                    />
                    <Label
                      htmlFor="agreement"
                      className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                    >
                      Я согласен на обработку персональных данных
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-medium text-base group shadow-lg transition-all duration-300"
                  >
                    {isSubmitting ? "Отправка..." : "Отправить"}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}