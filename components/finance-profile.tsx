"use client";

import {
  ArrowRight,
  DollarSign,
  FileText,
  PieChart,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
// ملاحظة: لو بتستخدم أيقونات كتير، تأكد إنك بتعمل import من lucide-react مباشرة زي ما إنت عامل، 
// ده بيخلي الـ Bundle صغير (Tree Shaking).

const services = [
  {
    icon: TrendingUp,
    title: "تمويل مرن",
    description: "حلول تمويلية مخصصة تدعم نمو الأعمال وتعزز السيولة بدون تنازل عن المرونة.",
  },
  {
    icon: DollarSign,
    title: "إدارة الأموال",
    description: "تنظيم التدفق النقدي، توقعات الميزانية، وتحسين رأس المال العامل بدقة عالية.",
  },
  {
    icon: PieChart,
    title: "استثمارات استراتيجية",
    description: "تحليل فرص استثمارية مدروسة تركز على التنويع والعائد طويل الأجل.",
  },
];

const metrics = [
  { value: "98%", label: "دقة التقارير", description: "تقارير مالية دقيقة وشفافة تعزز ثقة أصحاب المصلحة." },
  { value: "4.8/5", label: "معدل رضا العملاء", description: "خدمة استثنائية ونتائج محسّنة للعملاء عبر قطاعات متعددة." },
  { value: "12K+", label: "ساعات تحليل", description: "بحوث مالية متقدمة وتقارير تحليلية مدعومة بخبرة متخصصة." },
  { value: "35%", label: "تحسين التدفق النقدي", description: "خطة محكمة لزيادة السيولة وتقليل التكاليف المالية التشغيلية." },
];

export function FinanceProfile() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Optimization Tip: 
        استخدمنا grid-cols ثابت مع gap للتأكد من عدم حدوث Layout Shift 
      */}
      <section className="container mx-auto px-6 py-16 md:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6 max-w-2xl">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary tracking-wide">
              ملف قسم المالية
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
              ملف مالي احترافي بتصميم حديث
              <span className="block text-primary mt-2">
                يوازن بين الأداء، الشفافية، والنتائج عالية القيمة.
              </span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-8 max-w-xl">
              نقدم استراتيجيات مالية ذكية للمؤسسات والشركات، مع تركيز على التمويل المدروس، إدارة رأس المال، وتحقيق استقرار نمو مستدام.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Button size="lg" className="rounded-full px-8 py-4">احجز استشارة</Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 py-4">تصفح الخدمات</Button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <Card className="rounded-[2rem] border border-border/60 bg-card/90 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-primary/30">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="mt-6 space-y-3">
                <p className="text-sm uppercase tracking-[0.24em] text-primary">أمان العمليات</p>
                <h2 className="text-2xl font-semibold">إدارة مالية مؤسسية</h2>
                <p className="text-sm leading-6 text-muted-foreground">
                  بنية داخلية متينة، حوكمة مالية دقيقة، وتوافق تنظيمي كامل لخفض المخاطر.
                </p>
              </div>
            </Card>
            <Card className="rounded-[2rem] border border-border/60 bg-card/90 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-primary/30">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FileText className="h-6 w-6" />
              </div>
              <div className="mt-6 space-y-3">
                <p className="text-sm uppercase tracking-[0.24em] text-primary">رؤية مالية</p>
                <h2 className="text-2xl font-semibold">تقارير ذات مغزى</h2>
                <p className="text-sm leading-6 text-muted-foreground">
                  تحليلات مالية سهلة القراءة تدعم اتخاذ القرارات السريعة والمستندة إلى بيانات موثوقة.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* باقي السيكشنات يتم التعامل معها بنفس مبدأ الـ Cards والـ Containers الموحدة */}
      {/* تأكد من إضافة lazy loading لأي صور خارجية لو قررت تضيفها لاحقاً */}
    </main>
  );
}