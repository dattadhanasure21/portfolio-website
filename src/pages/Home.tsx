import React from "react";
import { Github, Linkedin, Mail, ArrowRight, ExternalLink, Code2, Terminal, Database, Layout, Server, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export default function Home() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight">DD<span className="text-primary">.</span></span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
          </div>
          <Button variant="default" size="sm" className="font-semibold rounded-full" onClick={scrollToContact}>
            Get in touch
          </Button>
        </div>
      </nav>

      <main className="flex-grow pt-16">
        {/* HERO SECTION */}
        <AnimatedSection id="hero" className="min-h-[90vh] flex flex-col justify-center py-20 px-6">
          <div className="max-w-6xl mx-auto w-full">
            <div className="max-w-3xl">
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-accent text-accent-foreground text-sm font-mono font-medium">
                Available for new opportunities
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] mb-6">
                Datta <br className="hidden md:block"/> Dhanasure<span className="text-primary">.</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium mb-8 max-w-2xl leading-relaxed">
                Software Engineer building robust, scalable, and high-performance digital experiences.
              </h2>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8 h-14 text-base font-semibold group" onClick={scrollToContact}>
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-semibold bg-background hover:bg-muted">
                  View Resume
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ABOUT SECTION */}
        <AnimatedSection id="about" className="py-24 px-6 bg-muted/30 border-y border-border/40">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h3 className="text-sm font-mono text-primary uppercase tracking-widest mb-2">01 / About</h3>
                <h4 className="text-3xl font-bold">The Engineer Behind the Code</h4>
              </div>
              <div className="md:col-span-8 text-lg text-muted-foreground space-y-6 leading-relaxed">
                <p>
                  I'm a Software Engineer with a deep passion for building robust backend architectures and seamless frontend experiences. I believe that great software is built at the intersection of technical excellence and user empathy.
                </p>
                <p>
                  Over the past few years, I've had the opportunity to work across the stack, taking products from zero to one and scaling existing systems to handle millions of requests. I obsess over clean code, performant database queries, and intuitive API design.
                </p>
                <p>
                  When I'm not in my code editor, I'm usually reading up on distributed systems, contributing to open-source projects, or optimizing my personal dotfiles.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* SKILLS SECTION */}
        <AnimatedSection id="skills" className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h3 className="text-sm font-mono text-primary uppercase tracking-widest mb-2">02 / Expertise</h3>
              <h4 className="text-4xl font-bold">Technical Arsenal</h4>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Frontend Development",
                  icon: <Layout className="h-6 w-6 mb-4 text-primary" />,
                  skills: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"]
                },
                {
                  title: "Backend & APIs",
                  icon: <Server className="h-6 w-6 mb-4 text-primary" />,
                  skills: ["Node.js", "Express", "Python", "Django", "GraphQL", "RESTful APIs"]
                },
                {
                  title: "Infrastructure & Tools",
                  icon: <Database className="h-6 w-6 mb-4 text-primary" />,
                  skills: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Git/GitHub Actions"]
                }
              ].map((category, i) => (
                <StaggerItem key={i} className="p-8 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  {category.icon}
                  <h5 className="text-xl font-bold mb-4">{category.title}</h5>
                  <ul className="space-y-3">
                    {category.skills.map((skill, j) => (
                      <li key={j} className="flex items-center text-muted-foreground font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-3"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </AnimatedSection>

        {/* PROJECTS SECTION */}
        <AnimatedSection id="projects" className="py-32 px-6 bg-secondary text-secondary-foreground">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h3 className="text-sm font-mono text-primary uppercase tracking-widest mb-2">03 / Selected Work</h3>
              <h4 className="text-4xl font-bold">Featured Projects</h4>
            </div>

            <div className="space-y-24">
              {[
                {
                  title: "Nexus Analytics Platform",
                  desc: "A real-time data visualization dashboard for enterprise SaaS metrics. Built custom aggregation pipelines that reduced query latency by 40%. Implemented complex interactive charts handling thousands of data points smoothly.",
                  tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
                  link: "#",
                  github: "#"
                },
                {
                  title: "Distributed Task Queue",
                  desc: "An open-source, lightweight distributed task queue built on Redis. Designed for high throughput and reliability with features like automatic retries, dead-letter queues, and graceful shutdown.",
                  tags: ["Python", "Redis", "Docker", "pytest"],
                  link: "#",
                  github: "#"
                },
                {
                  title: "Echo - Collaborative Workspace",
                  desc: "A real-time collaborative document editor featuring live cursors, presence indicators, and conflict resolution via CRDTs. Scaled websocket connections using a custom pub/sub architecture.",
                  tags: ["Next.js", "WebSockets", "Express", "MongoDB", "Tailwind"],
                  link: "#",
                  github: "#"
                }
              ].map((project, i) => (
                <div key={i} className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 order-2 lg:order-1 relative h-64 md:h-[400px] bg-secondary-border/20 rounded-2xl overflow-hidden border border-secondary-border/50 flex items-center justify-center">
                     <Terminal className="w-20 h-20 text-muted-foreground/30" />
                     <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="lg:col-span-5 order-1 lg:order-2 lg:pl-8">
                    <h5 className="text-2xl font-bold mb-4">{project.title}</h5>
                    <p className="text-secondary-foreground/70 mb-6 text-lg leading-relaxed">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, j) => (
                        <span key={j} className="px-3 py-1 text-sm font-mono bg-secondary-border/40 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" className="border-secondary-border text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary rounded-full">
                        <Github className="w-4 h-4 mr-2" /> Code
                      </Button>
                      <Button className="rounded-full">
                        <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* EXPERIENCE SECTION */}
        <AnimatedSection id="experience" className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h3 className="text-sm font-mono text-primary uppercase tracking-widest mb-2">04 / Background</h3>
              <h4 className="text-4xl font-bold">Work Experience</h4>
            </div>

            <div className="space-y-12">
              {[
                {
                  role: "Senior Software Engineer",
                  company: "Acme Corp",
                  date: "2021 — Present",
                  points: [
                    "Spearheaded the migration of a monolithic legacy application into scalable microservices, improving deployment speed by 3x.",
                    "Designed and implemented RESTful APIs handling over 5M+ daily requests with 99.99% uptime.",
                    "Mentored junior engineers and established team-wide code review standards and CI/CD pipelines."
                  ]
                },
                {
                  role: "Software Engineer",
                  company: "TechFlow Solutions",
                  date: "2018 — 2021",
                  points: [
                    "Developed and shipped 15+ complex React applications with extensive state management and interactive visualizations.",
                    "Optimized database indexing and queries, reducing average API response times from 800ms to 150ms.",
                    "Collaborated closely with product managers and designers to iterate on core user workflows."
                  ]
                }
              ].map((job, i) => (
                <div key={i} className="relative pl-8 md:pl-0">
                  <div className="md:grid md:grid-cols-4 gap-8">
                    <div className="md:col-span-1 mb-4 md:mb-0 text-muted-foreground font-mono text-sm mt-1">
                      {job.date}
                    </div>
                    <div className="md:col-span-3">
                      <h5 className="text-2xl font-bold">{job.role}</h5>
                      <h6 className="text-lg text-primary font-medium mb-4">{job.company}</h6>
                      <ul className="space-y-3 text-muted-foreground leading-relaxed">
                        {job.points.map((point, j) => (
                          <li key={j} className="relative pl-5">
                            <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* EDUCATION SECTION */}
        <AnimatedSection className="py-24 px-6 bg-muted/30 border-y border-border/40">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-sm font-mono text-primary uppercase tracking-widest mb-6">Education</h3>
            <h5 className="text-2xl font-bold mb-2">Bachelor of Science in Computer Science</h5>
            <p className="text-lg text-muted-foreground mb-1">University of Technology</p>
            <p className="font-mono text-sm text-muted-foreground">Class of 2018</p>
          </div>
        </AnimatedSection>

        {/* CONTACT SECTION */}
        <AnimatedSection id="contact" className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-sm font-mono text-primary uppercase tracking-widest mb-2">05 / What's Next?</h3>
            <h4 className="text-5xl md:text-7xl font-extrabold mb-8">Get In Touch</h4>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <Button size="lg" className="rounded-full px-12 h-16 text-lg font-semibold">
              Say Hello <Mail className="ml-3 h-5 w-5" />
            </Button>

            <div className="mt-24 flex justify-center gap-8">
              <a href="#" className="p-4 rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="p-4 rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:hello@example.com" className="p-4 rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="py-8 text-center border-t border-border/40">
        <p className="text-muted-foreground font-mono text-sm">
          Designed & Built by Datta Dhanasure
        </p>
      </footer>
    </div>
  );
}
