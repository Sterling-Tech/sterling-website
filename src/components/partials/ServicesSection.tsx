import { Cloud, Code2, Shield, Workflow, Database, Cpu } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Bespoke applications built with modern stacks — from MVPs to enterprise platforms.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "AWS, Azure, GCP architecture, migration, and CI/CD pipeline automation.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Consulting",
    description:
      "Threat assessments, compliance audits, and zero-trust architecture design.",
  },
  {
    icon: Workflow,
    title: "Digital Transformation",
    description:
      "End-to-end modernization of legacy systems, processes, and workflows.",
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    description:
      "Data pipelines, warehousing, and real-time analytics for data-driven decisions.",
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description:
      "Intelligent automation, predictive models, and LLM integration for your business.",
  },
];

const ServicesSection = () => (
  <section id="services" className="bg-slate-50 py-24">
    <div className="container mx-auto px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="mb-16 max-w-2xl">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          What We <span className="text-gradient">Do</span>
        </h2>
        <p className="mt-4 text-muted-foreground font-body leading-relaxed">
          Six core practice areas, one relentless focus on delivering measurable business outcomes.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-2 hover:scale-105"
          >
            <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-4 transition-transform duration-300 group-hover:scale-110">
              <service.icon className="h-7 w-7 text-primary-500" />
            </div>

            <h3 className="font-display text-lg font-semibold">
              {service.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground font-body">
              {service.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default ServicesSection;