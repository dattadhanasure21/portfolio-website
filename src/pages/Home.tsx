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
<div className="relative group">
  <span className="font-bold text-lg tracking-tight cursor-pointer">
    DD<span className="text-primary">.</span>
  </span>

  <div className="absolute left-0 top-8 opacity-0 group-hover:opacity-100 transition-all duration-300 text-orange-500 text-sm font-medium whitespace-nowrap z-50">
    Datta Dhanasure | Java Full Stack Developer
  </div>
</div>          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
          </div>
         <Button
  variant="default"
  size="sm"
  className="font-semibold rounded-full transition-all duration-300 hover:scale-105"
  onClick={scrollToContact}
>
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
  Java Full Stack Developer | Spring Boot | Microservices | SQL Server | React  
              </h2>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8 h-14 text-base font-semibold group" onClick={scrollToContact}>
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
             <a
  href="/Datta Dhanasure.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    variant="outline"
    className="rounded-full px-8 h-14 text-base font-semibold bg-background hover:bg-muted"
  >
    View Resume
  </Button>
</a>
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
  I am a Software Engineer with 3.10+ years of experience in Java, Spring Boot, Microservices and SQL Server.
                </p>
                <p>
  I have experience building REST APIs, enterprise applications and backend services while following clean coding practices.
                </p>
                <p>
  I am passionate about learning new technologies and building scalable software solutions.
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

<StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">              {[
                {
                  title: "Frontend Development",
                  icon: <Layout className="h-6 w-6 mb-4 text-primary" />,
                  skills: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Redux"]
                },
                {
                  title: "Backend & APIs",
                  icon: <Server className="h-6 w-6 mb-4 text-primary" />,
 skills: ["Java", "Spring Boot", "Microservices", "REST APIs"]
                },
                {
 title: "Database",
 icon: <Database className="h-6 w-6 mb-4 text-primary" />,
 skills: ["SQL Server", "MySQL", "MongoDB"]
},
{
 title: "Tools & Technologies",
 icon: <Code2 className="h-6 w-6 mb-4 text-primary" />,
 skills: ["Git", "GitHub", "Maven", "Postman", "Docker"]
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

        {/* PROJECTS SECTION */}{/* PROJECTS SECTION */}
<AnimatedSection id="projects" className="py-32 px-6">
  <div className="max-w-6xl mx-auto">

    <div className="mb-16">
      <h3 className="text-sm font-mono text-primary uppercase tracking-widest mb-2">
        03 / Selected Work
      </h3>
      <h4 className="text-4xl font-bold">
        Featured Projects
      </h4>
    </div>

    {/* Project Cards Here */}
    <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
  {[
    {
      title: "Insurance Workflow Application",
      desc:
        "Developed workflow processes, task routing, business rules, notifications and approval systems using Case360 and Spring Boot Microservices.",
      tags: ["Java", "Spring Boot", "Microservices", "SQL Server", "Case360"]
    },
   
    {
      title: "Health Insurance System",
      desc:
        "Developed healthcare insurance modules, REST APIs, Spring Data JPA integration and secure data flow across multiple applications.",
      tags: ["Java", "Spring Boot", "JPA", "MySQL", "REST API"]
    },
    {
      title: "Portfolio Website",
      desc:
        "Designed and developed a personal portfolio website using React, TypeScript and Tailwind CSS.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://dattadhanasure21-portfolio-website.vercel.app/",
    //  github: "https://github.com/dattadhanasure21/portfolio-website"
    }
  ].map((project, i) => (
    <div
      key={i}
      className="p-8 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-lg transition-all"
    >
      <h5 className="text-2xl font-bold mb-4">
        {project.title}
      </h5>

      <p className="text-muted-foreground mb-6 leading-relaxed">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, j) => (
          <span
            key={j}
            className="px-3 py-1 text-sm font-mono rounded-md bg-primary/10 text-primary"
          >
            {tag}
          </span>
        ))}
      </div>

      {(project.github || project.link) && (
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button>
            </a>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            </a>
          )}
        </div>
      )}
    </div>
  ))}
</div>

  </div>
</AnimatedSection>
      {/* EXPERIENCE SECTION */}
        <AnimatedSection id="experience" className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h3 className="text-sm font-mono text-primary uppercase tracking-widest mb-2">04 / Background</h3>
              <h4 className="text-4xl font-bold">Work Experience</h4>
            </div>

            <div className="space-y-12">
              {[
               {
 role: "Software Engineer",
 company: "Capgemini Technology Services India Limited",
 period: "Dec 2023 - Present",
 description: [
   "Developing Insurance Workflow Applications using Spring Boot and Microservices.",
   "Building REST APIs and backend services.",
   "Working with SQL Server, Case360 and enterprise integrations.",
   "Participating in Agile development and production support."
 ]
},
{
 role: "Software Engineer",
 company: "Qualitas Global Services",
 period: "Aug 2019 - Dec 2020",
 description: [
   "Developed enterprise applications using Java and Spring technologies.",
   "Worked on backend services and database integration.",
   "Collaborated with cross-functional teams to deliver business solutions."
 ]
}
              ].map((job, i) => (
                <div key={i} className="relative pl-8 md:pl-0">
                  <div className="md:grid md:grid-cols-4 gap-8">
                    <div className="md:col-span-1 mb-4 md:mb-0 text-muted-foreground font-mono text-sm mt-1">
                      {job.period}
                    </div>
                    <div className="md:col-span-3">
                      <h5 className="text-2xl font-bold">{job.role}</h5>
                      <h6 className="text-lg text-primary font-medium mb-4">{job.company}</h6>
                      <ul className="space-y-3 text-muted-foreground leading-relaxed">
                        {job.description.map((point, j) => (
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
            <h3 className="text-sm font-mono text-primary uppercase tracking-widest mb-6"> 05 / Education</h3>
            <h5 className="text-2xl font-bold mb-2">Bachelor of Engineering (Mechanical Engineering)</h5>
            <p className="text-lg text-muted-foreground mb-1">Bharati Vidyapeeth College of Engineering, Kolhapur</p>
            <p className="font-mono text-sm text-muted-foreground">Class of 2019</p>
          </div>
        </AnimatedSection>
        {/* AWARDS SECTION */}
<AnimatedSection id="awards" className="py-32 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="mb-16">
      <h3 className="text-sm font-mono text-primary uppercase tracking-widest mb-2">
        06 / Recognition
      </h3>
      <h4 className="text-4xl font-bold">Awards & Achievements</h4>
    </div>

    <div className="space-y-12">
      {[
        {
          title: "Rising Star Award",
          organization: "Capgemini Technology Services India Limited",
          period: "March 2024",
          description: [
            "Recognized for outstanding performance and quick adaptation to project requirements.",
            "Demonstrated strong ownership and commitment in delivering business-critical solutions."
          ]
        },
        {
          title: "GEM (Going the Extra Mile) Award",
          organization: "Capgemini Technology Services India Limited",
          period: "2024 - 2025",
          description: [
            "Awarded for exceptional contribution beyond regular responsibilities.",
            "Recognized for teamwork, dedication, and delivering high-quality solutions."
          ]
        }
      ].map((award, i) => (
        <div key={i} className="relative pl-8 md:pl-0">
          <div className="md:grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1 mb-4 md:mb-0 text-muted-foreground font-mono text-sm mt-1">
              {award.period}
            </div>

            <div className="md:col-span-3">
              <h5 className="text-2xl font-bold">
                {award.title}
              </h5>

              <h6 className="text-lg text-primary font-medium mb-4">
                {award.organization}
              </h6>

              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                {award.description.map((point, j) => (
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

        {/* CONTACT SECTION */}
        <AnimatedSection id="contact" className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-sm font-mono text-primary uppercase tracking-widest mb-2">07 / What's Next?</h3>
            <h4 className="text-5xl md:text-7xl font-extrabold mb-8">Get In Touch</h4>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a
  href="mailto:dattadhanasure22@gmail.com?subject=Portfolio Inquiry&body=Hello Datta,"
>
  <Button size="lg"   className="rounded-full px-12 h-16 text-lg font-semibold transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
>
    Say Hello <Mail className="ml-3 h-5 w-5" />
  </Button>
</a>

            <div className="mt-24 flex justify-center gap-8">
              {/* <a href="https://github.com/dattadhanasure21?tab=repositories" className="p-4 rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a> */}
              <a href="https://www.linkedin.com/in/datta-dhanasure-011763233/" className="p-4 rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:dattadhanasure22@gmail.com" className="p-4 rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="py-8 border-t border-border/40">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

    <div className="flex gap-6 text-sm">
      <a href="mailto:dattadhanasure22@gmail.com" className="hover:text-primary">
        📧 dattadhanasure22@gmail.com
      </a>

      <a href="tel:+919503407984" className="hover:text-primary">
        📞 9503407984
      </a>

      <a
        href="https://maps.google.com/?q=Hyderabad,India"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary"
      >
        📍 Hyderabad
      </a>
    </div>

    <p className="text-muted-foreground font-mono text-sm">
      Designed & Built by Datta Dhanasure
    </p>

  </div>
</footer>
    </div>
  );
}
