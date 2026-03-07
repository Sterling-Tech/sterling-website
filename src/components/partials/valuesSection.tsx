import { Target, Users, Lightbulb, Rocket } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision Engineering",
    text: "Every line of code is purposeful. We don't ship bloat — we ship solutions.",
  },
  {
    icon: Users,
    title: "Partnership Mindset",
    text: "We embed with your team, not beside it. Your success metrics are ours.",
  },
  {
    icon: Lightbulb,
    title: "Relentless Innovation",
    text: "We stay ahead of the curve so your business never falls behind it.",
  },
  {
    icon: Rocket,
    title: "Speed to Value",
    text: "Agile by practice, not by buzzword. Incremental delivery, continuous impact.",
  },
];

const ValuesSection = () => (
  <section id="team" className="py-24 lg:py-32 bg-slate-50">
    <div className="container mx-auto px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Our <span className="text-gradient">Core Values</span>
        </h2>
        <p className="mt-4 text-muted-foreground font-body leading-relaxed">
          "Engineering the pulse of modern utility. We build the systems that power, pay, and progress."
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v) => (
          <div
            key={v.title}
            className="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-2 hover:scale-105"
          >
            
            {/* Icon */}
            <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-4 transition-transform duration-300 group-hover:scale-110">
              <v.icon className="h-7 w-7 text-primary-500" />
            </div>

            {/* Title */}
            <h3 className="font-display text-lg font-semibold">
              {v.title}
            </h3>

            {/* Text */}
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground font-body">
              {v.text}
            </p>

          </div>
        ))}
      </div>

    </div>
  </section>
);

export default ValuesSection;