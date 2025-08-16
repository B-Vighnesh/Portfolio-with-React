// src/App.jsx
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  ArrowRight,
  Download,
  MapPin,
  GraduationCap,
  Trophy,
  Code2,
  Link as LinkIcon,
  Sun,
  Moon,
  Filter,
  Copy,
  Check,
  Globe,
  BookOpenText,
} from "lucide-react";

const DATA = {
  name: "B Vighnesh Kumar",
  role: "Java & Spring Boot Developer",
  tagline:
    "Computer Science student focused on backend engineering—clean APIs, reliable data, and scalable systems.",
  location: "Karnataka, India",
  contacts: {
    phone: "+91 8618402581",
    email: "vighneshsheregar2004@gmail.com",
    github: "https://github.com/B-Vighnesh",
    linkedin: "https://www.linkedin.com/in/b-vighnesh-kumar/",
    leetcode: "https://leetcode.com/u/B_Vighnesh_Kumar",
    resume:
      "https://drive.google.com/file/d/1bko9Y0-Sc2sDyUjxeIw37cLBuAwUQzCV/view?usp=sharing",
  },
  summary:
    "CS undergrad (2026) with hands-on Java, Spring Boot, MySQL, and a taste for React on the frontend. I enjoy turning requirements into robust APIs and shipping features that matter.",
  skills: [
    { group: "Languages", items: ["Java", "C"] },
    { group: "Frameworks & Tools", items: ["Spring Boot", "React.js (Fundamentals)", "Postman"] },
    { group: "Database", items: ["MySQL"] },
    { group: "Coursework", items: ["DSA", "OOP", "DBMS"] },
    { group: "Soft Skills", items: ["Teamwork", "Communication", "Problem-Solving", "Adaptability"] },
  ],
  education: [
    {
      title: "B.E. — Computer Science & Engineering",
      place: "Canara Engineering College, Bantwal",
      period: "Expected 2026",
      extra: "CGPA: 8.26",
    },
    {
      title: "Pre-University — PCMB",
      place: "R N Shetty PU College, Kundapura",
      period: "2020–2022",
      extra: "Percentage: 93.16%",
    },
    {
      title: "S.S.L.C.",
      place: "Govt. High School, Basrur",
      period: "2019–2020",
      extra: "Percentage: 94.88%",
    },
  ],
  certifications: [
    {
      title: "Programming in Java (NPTEL)",
      org: "IIT Kharagpur",
      year: "2025",
      link: "https://drive.google.com/file/d/1YyLKNwTrU2N4m1lq5qbw_-I6xcAecBhw/view?usp=drivesdk",
    },
    {
      title: "Java Programming: Arrays, Lists, and Structured Data",
      org: "Duke University — Coursera",
      year: "2024",
      link: "https://www.coursera.org/account/accomplishments/records/GXT9ZH3YBCFX",
    },
    {
      title: "Introduction to Databases",
      org: "Meta — Coursera",
      year: "2024",
      link: "https://www.coursera.org/account/accomplishments/records/VWYJSJ3TZEKK",
    },
    {
      title: "DPB Hackathon (DPBH-2023)",
      org: "IIT (BHU), Varanasi",
      year: "2023",
      link: "https://drive.google.com/file/d/1YyLKNwTrU2N4m1lq5qbw_-I6xcAecBhw/view",
    },
  ],
  projects: [
    {
      title: "AagriGgate",
      about:
        "Full-stack platform enabling farmers to connect directly with buyers. Spring Boot REST APIs + React frontend, role-based access, MySQL storage.",
      stack: ["Spring Boot", "React", "MySQL", "RBAC"],
      links: [{ label: "GitHub", href: "https://github.com/B-Vighnesh/AagriGgate", icon: Github }],
      tags: ["Full-Stack", "Backend", "Web"],
    },
    {
      title: "EquiManage",
      about:
        "Equipment management system for electronics labs. Console app in Java with MySQL; JDBC-based CRUD and optimized SQL.",
      stack: ["Java", "MySQL", "JDBC"],
      links: [{ label: "GitHub", href: "https://github.com/B-Vighnesh/EquiManage", icon: Github }],
      tags: ["Backend", "CLI", "Java"],
    },
    {
      title: "Dark Pattern Detector",
      about:
        "Browser extension to highlight deceptive UI patterns in real time; building ML-based model for better detection.",
      stack: ["JavaScript", "Extension", "ML (in progress)"],
      links: [{ label: "GitHub", href: "https://github.com/B-Vighnesh/Dark-Pattern-Detector-JS", icon: Github }],
      tags: ["Frontend", "Extension", "ML"],
    },
  ],
};

function useTheme() {
  const getInitial = () => {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };
  const [theme, setTheme] = useState(getInitial);
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return [theme, setTheme];
}

function Button({ href, children, variant = "primary", size = "md", onClick, className = "", ...rest }) {
  const base = "inline-flex items-center justify-center rounded-2xl font-medium transition";
  const sizeMap = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-3 text-base",
    icon: "p-2 h-10 w-10",
  };
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
    outline: "border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800",
    ghost: "bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800",
  };
  const classes = `${base} ${sizeMap[size] || sizeMap.md} ${variants[variant] || variants.primary} ${className}`;
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

function Badge({ children, variant = "solid", className = "" }) {
  const base = "inline-block px-3 py-1 rounded-full text-xs font-medium";
  const styles =
    variant === "outline"
      ? "border border-gray-300 dark:border-gray-700 bg-transparent"
      : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white";
  return <span className={`${base} ${styles} ${className}`}>{children}</span>;
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-800/60 ${className}`}>
      {children}
    </div>
  );
}
function CardHeader({ children, className = "" }) {
  return <div className={`p-4 border-b border-transparent ${className}`}>{children}</div>;
}
function CardTitle({ children, className = "" }) {
  return <div className={`font-semibold text-lg ${className}`}>{children}</div>;
}
function CardDescription({ children, className = "" }) {
  return <div className={`text-sm text-gray-600 dark:text-gray-400 ${className}`}>{children}</div>;
}
function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
function CardFooter({ children, className = "" }) {
  return <div className={`p-4 border-t border-transparent ${className}`}>{children}</div>;
}

function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full rounded-full border border-gray-300 dark:border-gray-700 px-4 py-2 bg-white/80 dark:bg-gray-900 text-sm outline-none focus:ring-2 focus:ring-blue-300 ${className}`}
      {...props}
    />
  );
}

function Separator({ className = "" }) {
  return <div className={`w-full h-px bg-gray-200 dark:bg-gray-800 ${className}`} />;
}

function IconLink({ href, Icon, label }) {
  return (
    <a
      className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-gray-100 dark:bg-gray-800 hover:opacity-90 transition"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      title={label}
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

function SectionHeading({ icon: Icon, title, id }) {
  return (
    <div className="flex items-center gap-3 mb-6" id={id}>
      <div className="p-2 rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
        <Icon className="h-5 w-5" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useTheme();
  const dark = theme === "dark";
  return (
    <Button
      variant="outline"
      className="rounded-xl"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}

function Hero() {
  const [copied, setCopied] = useState(false);
  const email = DATA.contacts.email;
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-16">
      <div className="pointer-events-none absolute -left-32 -top-24 h-72 w-72 rounded-full bg-gradient-to-tr from-blue-300/20 to-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-32 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-400/20 to-blue-300/20 blur-3xl" />
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                <span className="h-2 w-2 rounded-full bg-emerald-500" /> Available for internships & projects
              </div>

              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
                Hi, I'm <span className="text-blue-600 dark:text-blue-300">{DATA.name}</span>
              </h1>
              <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">{DATA.tagline}</p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Badge className="rounded-xl">Java</Badge>
                <Badge className="rounded-xl">Spring Boot</Badge>
                <Badge className="rounded-xl">MySQL</Badge>
                <Badge className="rounded-xl">React</Badge>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#projects" size="lg" className="rounded-2xl">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
               <Button
  href={DATA.contacts.resume}
  variant="secondary"
  size="lg"
  className="rounded-2xl"
  target="_blank"
  rel="noopener noreferrer"
>
  Download Resume <Download className="ml-2 h-4 w-4" />
</Button>

              </div>

              <div className="mt-6 flex items-center gap-3">
                <IconLink href={DATA.contacts.github} Icon={Github} label="GitHub" />
                <IconLink href={DATA.contacts.linkedin} Icon={Linkedin} label="LinkedIn" />
                <IconLink href={DATA.contacts.leetcode} Icon={Globe} label="LeetCode" />
                <Button variant="outline" className="rounded-xl" onClick={copyEmail}>
                  {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />} {copied ? "Copied" : DATA.contacts.email}
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto h-56 w-56 md:h-72 md:w-72"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200 via-fuchsia-300 to-emerald-200 blur-2xl" />
            <div className="absolute inset-2 rounded-full bg-white/60 dark:bg-black/40 backdrop-blur shadow-xl border" />
            <div className="absolute inset-2 rounded-full flex items-center justify-center">
              <span className="text-5xl md:text-6xl font-black">VK</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="container mx-auto px-4 max-w-6xl py-8" id="skills">
      <SectionHeading icon={Code2} title="Skills" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {DATA.skills.map((s) => (
          <Card key={s.group} className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Badge variant="solid" className="rounded-xl">{s.group}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span key={item} className="px-3 py-1 rounded-xl bg-gray-100 dark:bg-gray-700 text-sm">
                  {item}
                </span>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return DATA.projects.filter((p) => {
      return (
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.about.toLowerCase().includes(query.toLowerCase())
      );
    });
  }, [query]);

  return (
    <section className="container mx-auto px-4 max-w-6xl py-8" id="projects">
      <SectionHeading icon={BookOpenText} title="Projects" />

      <div className="flex items-center gap-2 mb-6">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects…"
          className="rounded-2xl"
        />
        <div className="px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-sm">
          {filtered.length} shown
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((p) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="rounded-2xl h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{p.title}</CardTitle>
                    <CardDescription>{p.about}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    {p.links.map((l) => {
                      const IconComp = l.icon;
                      return (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-gray-100 dark:bg-gray-800"
                        >
                          <IconComp className="h-4 w-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-xl bg-gray-100 dark:bg-gray-700 text-xs"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


function Education() {
  return (
    <section className="container mx-auto px-4 max-w-6xl py-8" id="education">
      <SectionHeading icon={GraduationCap} title="Education" />
      <div className="grid lg:grid-cols-3 gap-6">
        {DATA.education.map((e) => (
          <Card key={e.title} className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">{e.title}</CardTitle>
              <CardDescription>{e.place}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-gray-600 dark:text-gray-300">{e.period}</div>
            </CardContent>
            <CardFooter>
              <Badge variant="solid" className="rounded-xl">{e.extra}</Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="container mx-auto px-4 max-w-6xl py-8" id="certs">
      <SectionHeading icon={Trophy} title="Certifications & Achievements" />
      <div className="grid md:grid-cols-2 gap-6">
        {DATA.certifications.map((c) => (
          <Card key={c.title} className="rounded-2xl">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-blue-600" />
                <CardTitle className="text-lg">{c.title}</CardTitle>
              </div>
              <CardDescription>{c.org} · {c.year}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button href={c.link !== "#" ? c.link : undefined} variant="secondary" className="rounded-xl">
                {c.link && c.link !== "#" ? (
                  <>
                    View Credential <ExternalLink className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  "Detail"
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="container mx-auto px-4 max-w-6xl py-12" id="contact">
      <SectionHeading icon={Mail} title="Get in touch" />

      <Card className="rounded-2xl">
        <CardContent className="grid md:grid-cols-3 gap-6 p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-blue-600" />
              <a className="hover:underline" href={`mailto:${DATA.contacts.email}`}>{DATA.contacts.email}</a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-blue-600" />
              <a className="hover:underline" href={`tel:${DATA.contacts.phone.replace(/\s/g, "")}`}>{DATA.contacts.phone}</a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span>{DATA.location}</span>
            </div>
          </div>

          <div className="md:col-span-2 space-y-3">
            <p className="text-sm text-gray-500 dark:text-gray-400">Profiles</p>
            <div className="flex flex-wrap gap-3">
              <Button href={DATA.contacts.github} variant="outline" className="rounded-xl"><Github className="mr-2 h-4 w-4" /> GitHub</Button>
              <Button href={DATA.contacts.linkedin} variant="outline" className="rounded-xl"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</Button>
              <Button href={DATA.contacts.leetcode} variant="outline" className="rounded-xl"><Globe className="mr-2 h-4 w-4" /> LeetCode</Button>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400">Quick actions</p>
            <div className="flex flex-wrap gap-3">
              <Button href={`mailto:${DATA.contacts.email}?subject=Opportunity%20for%20${encodeURIComponent(DATA.name)}`} className="rounded-xl">
                Email Me <Mail className="ml-2 h-4 w-4" />
              </Button>
              <Button
  href={DATA.contacts.resume}
  variant="secondary"
  size="lg"
  className="rounded-2xl"
  target="_blank"
  rel="noopener noreferrer"
>
  Download Resume <Download className="ml-2 h-4 w-4" />
</Button>

            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#certs", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  const [active, setActive] = React.useState("about");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    links.forEach((l) => {
      const sec = document.querySelector(l.href);
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b bg-white/60 dark:bg-black/60">
      <div className="container mx-auto px-4 max-w-6xl h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-lg tracking-tight">
          {DATA.name}
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => {
            const id = l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative text-sm pb-1 transition-colors ${
                  active === id
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                }`}
              >
                {l.label}
                {active === id && (
                  <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-blue-600 rounded"></span>
                )}
              </a>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            href={`mailto:${DATA.contacts.email}`}
            className="rounded-xl hidden sm:inline-flex"
          >
            Hire Me <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}


function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-4 max-w-6xl py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} {DATA.name}. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href={DATA.contacts.github} className="text-sm hover:underline" target="_blank" rel="noreferrer noopener">GitHub</a>
          <a href={DATA.contacts.linkedin} className="text-sm hover:underline" target="_blank" rel="noreferrer noopener">LinkedIn</a>
          <a href={DATA.contacts.leetcode} className="text-sm hover:underline" target="_blank" rel="noreferrer noopener">LeetCode</a>
        </div>
      </div>
    </footer>
  );
}

function About() {
  return (
    <section className="container mx-auto px-4 max-w-6xl py-8" id="about">
      <SectionHeading icon={LinkIcon} title="About" />
      <div className="grid md:grid-cols-3 gap-6 items-start">
        <Card className="rounded-2xl md:col-span-2">
          <CardContent className="p-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            {DATA.summary}
          </CardContent>
        </Card>
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base">Quick Links</CardTitle>
            <CardDescription>Find me online</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <a className="flex items-center justify-between rounded-xl border px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800" href={DATA.contacts.github} target="_blank" rel="noreferrer noopener">
              <span className="flex items-center gap-2"><Github className="h-4 w-4" /> GitHub</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <a className="flex items-center justify-between rounded-xl border px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800" href={DATA.contacts.linkedin} target="_blank" rel="noreferrer noopener">
              <span className="flex items-center gap-2"><Linkedin className="h-4 w-4" /> LinkedIn</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <a className="flex items-center justify-between rounded-xl border px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800" href={DATA.contacts.leetcode} target="_blank" rel="noreferrer noopener">
              <span className="flex items-center gap-2"><Globe className="h-4 w-4" /> LeetCode</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <a className="flex items-center justify-between rounded-xl border px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            href={DATA.contacts.resume} target="_blank" rel="noreferrer noopener">
  <span className="flex items-center gap-2"><Download className="h-4 w-4" /> Resume</span>
  <ExternalLink className="h-4 w-4" />
</a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default function PortfolioVighnesh() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
