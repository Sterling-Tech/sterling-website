import { MissionIcon, VisionIcon, ValuesIcon, Agile, Accountability, Authentic, Collaborative } from "@/components/icons";
import { Cloud, Code2, Shield, Workflow, Database, Cpu } from "lucide-react";
import problemsolvers from "../../public/problemsolvers.jpg";
import ictTechServices from "../../public/ictTechServices.png";


export const aboutList = [
  {
    id: 1,
    title: "Who We Are",
    body: "Sterling Technologies & Systems is a forward-thinking IT consulting and software development firm dedicated to empowering businesses through innovative technology solutions. We blend technical excellence with strategic insight to help organizations solve complex challenges and achieve sustainable growth.",
    image: problemsolvers,
  },
  {
    id: 2,
    title: "Our Mission",
    body: "To empower businesses with innovative, scalable, and secure technology solutions that drive measurable growth and operational excellence.",
    icon: Accountability,
  },
  {
    id: 3,
    title: "Our Vision",
    body: "To become a leading African technology partner delivering world-class IT consulting and software solutions that transform industries.",
    icon: Agile,
  },
  {
    id: 4,
    title: "Our Core Values",
    body: "Integrity, Innovation, Excellence, Collaboration, and Customer-Centricity guide everything we design, build, and deliver.",
    icon: Authentic,
  },
  {
    id: 5,
    title: "IT Consulting",
    body: "Expert guidance to evaluate your technology landscape, optimize workflows, and build strategic roadmaps that align with your business goals. Services include technology assessment, digital transformation strategy, and IT governance & risk management.",
    icon: MissionIcon,
  },
  {
    id: 6,
    title: "Software Development",
    body: "Tailored software solutions built to solve real-world business problems — from web and mobile applications to enterprise systems. We provide end-to-end software engineering, cloud-enabled applications, and API development & integrations.",
    icon: ValuesIcon,
  },
  {
    id: 7,
    title: "Web & Mobile Solutions",
    body: "Dynamic, responsive, and user-centric platforms that help you connect with customers and scale your digital presence. Our expertise covers responsive web applications, iOS & Android mobile apps, and UI/UX design and prototyping.",
    icon: MissionIcon,
  },
  {
    id: 8,
    title: "Data Engineering, Analytics & Automation",
    body: "Through Data pipelines, warehousing, and real-time analytics for data-driven decisions, We turn raw data into actionable insights and automate repetitive processes to boost efficiency. Our services include data modelling, BI tooling & dashboards, and AI/ML automation workflows.",
    icon: Database,
  },
  {
    id: 9,
    title: "Why Choose Us",
    body: "At Sterling Technologies & Systems, we combine creativity, technical rigor, and a client-first approach. Our proven expertise, focus on quality & security, and collaborative partnerships ensure solutions that drive measurable business outcomes.",
    image: ictTechServices,
  },
];

export const workList = [
  {
    id: 1,
    media: "",
    title: "SmartPower",
    desc: "This project will discuss a logo from Sunnyday at Teamup where the process of making this logo is very interesting from determining the moodboard to the coloring design.",
    tags: ["Data Monitoring", "Data Collection"],
  },
  {
    id: 2,
    title: "QuikPay",
    media: "",
    desc: "This project will discuss a logo from Sunnyday at Teamup where the process of making this logo is very interesting from determining the moodboard to the coloring design.",
    tags: ["Report Generation", "Payment Collection"],
  },
  {
    id: 3,
    title: "QuikCash",
    media: "",
    desc: "This project will discuss a logo from Sunnyday at Teamup where the process of making this logo is very interesting from determining the moodboard to the coloring design.",
    tags: ["Report Generation", "Payment Collection"],
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Bespoke applications built with modern stacks — from MVPs to enterprise platforms.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS, Azure, GCP architecture, migration, and CI/CD pipeline automation.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Consulting",
    description: "Threat assessments, compliance audits, and zero-trust architecture design.",
  },
  {
    icon: Workflow,
    title: "Digital Transformation",
    description: "End-to-end modernization of legacy systems, processes, and workflows.",
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    description: "Data pipelines, warehousing, and real-time analytics for data-driven decisions.",
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Intelligent automation, predictive models, and LLM integration for your business.",
  },

];



export const partners = [
  "/gp.png",
  "/eedc.png",
  "/bedc.png",
  "/aple.png",
  "/utiliflex.png",
];

export const reasonList = [
  {
    id: 1,
    title: "Expertise that Matters",
    body: "Our team comprises experienced technologists, engineers, and innovators who have been at the forefront of technological advancements for over a decade.",
    stagger: 0.1,
  },
  {
    id: 2,
    title: "Tailored to Your Needs",
    body: "We pride ourselves on customizing tech solutions to meet your unique requirements. We work closely with you to find the perfect fit for your business.",
    stagger: 0.2,
  },
];