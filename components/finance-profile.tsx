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

const services = [
  {
    icon: TrendingUp,
    title: "تمويل مرن",
    description:
      "حلول تمويلية مخصصة تدعم نمو الأعمال وتعزز السيولة بدون تنازل عن المرونة.",
  },
  {
    icon: DollarSign,
    title: "إدارة الأموال",
    description:
      "تنظيم التدفق النقدي، توقعات الميزانية، وتحسين رأس المال العامل بدقة عالية.",
  },
  {
    icon: PieChart,
    title: "استثمارات استراتيجية",
    description:
      "تحليل فرص استثمارية مدروسة تركز على التنويع والعائد طويل الأجل.",
  },
];

const metrics = [
  {
    value: "98%",
    label: "دقة التقارير",
    description: "تقارير مالية دقيقة وشفافة تعزز ثقة أصحاب المصلحة.",
  },
  {
    value: "4.8/5",
    label: "معدل رضا العملاء",
    description: "خدمة استثنائية ونتائج محسّنة للعملاء عبر قطاعات متعددة.",
  },
  {
    value: "12K+",
    label: "ساعات تحليل",
    description: "بحوث مالية متقدمة وتقارير تحليلية مدعومة بخبرة متخصصة.",
  },
  {
    value: "35%",
    label: "تحسين التدفق النقدي",
    description: "خطة محكمة لزيادة السيولة وتقليل التكاليف المالية التشغيلية.",
  },
];

export function FinanceProfile() {
  return (
    <main className="min-h-screen bg-background text-foreground">
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
              نقدم استراتيجيات مالية ذكية للمؤسسات والشركات، مع تركيز على
              التمويل المدروس، إدارة رأس المال، وتحقيق استقرار نمو مستدام.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-4">
              <Button size="lg" className="rounded-full px-8 py-4">
                احجز استشارة
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-4"
              >
                تصفح الخدمات
              </Button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <Card className="rounded-[2rem] border border-border/60 bg-card/90 p-8 shadow-xl shadow-slate-900/5 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="mt-6 space-y-3">
                <p className="text-sm uppercase tracking-[0.24em] text-primary">
                  أمان العمليات
                </p>
                <h2 className="text-2xl font-semibold">إدارة مالية مؤسسية</h2>
                <p className="text-sm leading-6 text-muted-foreground">
                  بنية داخلية متينة، حوكمة مالية دقيقة، وتوافق تنظيمي كامل لخفض
                  المخاطر.
                </p>
              </div>
            </Card>
            <Card className="rounded-[2rem] border border-border/60 bg-card/90 p-8 shadow-xl shadow-slate-900/5 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FileText className="h-6 w-6" />
              </div>
              <div className="mt-6 space-y-3">
                <p className="text-sm uppercase tracking-[0.24em] text-primary">
                  رؤية مالية
                </p>
                <h2 className="text-2xl font-semibold">تقارير ذات مغزى</h2>
                <p className="text-sm leading-6 text-muted-foreground">
                  تحليلات مالية سهلة القراءة تدعم اتخاذ القرارات السريعة
                  والمستندة إلى بيانات موثوقة.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 bg-secondary/5">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl text-center mx-auto mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-3 inline-block">
              خدماتنا
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              حلول مالية متكاملة لكل مرحلة من نمو الشركة
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-8">
              منهجية عبر شبكة من الخدمات المصممة للتمويل، إدارة النقد،
              والاستثمار الذكي مع تنفيذ سلس وتجربة مستخدم راقية.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="group border border-border/50 bg-white/80 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mt-6 space-y-4">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-8 inline-flex items-center text-sm font-medium text-primary transition-transform duration-300 group-hover:translate-x-1">
                    تعرف على المزيد
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
          <div className="space-y-6 max-w-2xl">
            <span className="text-primary text-sm font-semibold uppercase tracking-[0.3em]">
              أرقامنا
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              بيانات مالية واضحة تساعد على اتخاذ قرارات أذكى
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-8">
              عرض سريع لأهم المؤشرات المالية مع تنظيم معلوماتي يجعل المتابعة
              أسهل دون التضحية بالأناقة البصرية.
            </p>
          </div>

          <div className="rounded-[2rem] border border-border/60 bg-card/80 p-8 shadow-xl shadow-slate-900/5">
            <dl className="grid gap-6 sm:grid-cols-2">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-border/40 bg-white/90 p-6"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    {metric.label}
                  </dt>
                  <dd className="mt-4 text-4xl font-semibold text-foreground">
                    {metric.value}
                  </dd>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {metric.description}
                  </p>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
