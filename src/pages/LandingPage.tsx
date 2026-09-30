import { useState } from "react";
import fotoUIR from "../assets/fotouir.jpg";
import fotoCoding from "../assets/coding.jpg";
import fotoGaming from "../assets/gaming.jpg";
import reactLogo from "../assets/react-logo.svg";
import typescriptLogo from "../assets/typescript-logo.svg";
import tailwindLogo from "../assets/tailwind-logo.svg";
import nodeLogo from "../assets/node-logo.svg";
import pythonLogo from "../assets/python-logo.svg";
import postgresqlLogo from "../assets/postgresql-logo.svg";
import dockerLogo from "../assets/docker-logo.svg";
import gitLogo from "../assets/git-logo.svg";
import jestLogo from "../assets/jest-logo.svg";
import portfolioFoto from "../assets/Portfolio.png";
import saputraWayneHeader from "../assets/saputra-wayne-header.jpg";
import client1 from "../assets/client-1.jpg";
import client2 from "../assets/client-2.jpg";
import client3 from "../assets/client-3.jpg";
import { Mail, Send, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import fotoSaya from "../assets/saya.jpg";

function LandingPage() {
  const [portfolioTab, setPortfolioTab] = useState("S");
  const [wayneTab, setWayneTab] = useState("S");

  const portfolioStarContent = {
    S: {
      title: "Situation",
      text: "I needed a professional personal portfolio to showcase my background, technical skills, projects, and experience as I transition into web development.",
    },
    T: {
      title: "Task",
      text: "The goal was to create a responsive portfolio website that presents my information clearly while also demonstrating my ability to build modern React interfaces.",
    },
    A: {
      title: "Action",
      text: "I built the portfolio using React, TypeScript, and Tailwind CSS. I created reusable sections, responsive layouts, project showcases, skills, experience, testimonials, and a contact section.",
    },
    R: {
      title: "Result",
      text: "The result is a responsive personal portfolio that showcases my technical skills, projects, experience, and development journey in a professional and accessible way.",
    },
  };

  const starContent = {
    S: {
      title: "Situation",
      text: "The fictional venture capital company needed a professional digital presence that could communicate its identity, services, and long-term investment perspective.",
    },
    T: {
      title: "Task",
      text: "The goal was to design and develop a modern company profile website with clear navigation, structured content, and a professional visual identity.",
    },
    A: {
      title: "Action",
      text: "I built the website using React, TypeScript, and Tailwind CSS. I created reusable components for the navigation, hero section, company information, services, team, blog, and other sections.",
    },
    R: {
      title: "Result",
      text: "The project resulted in a responsive company profile website that presents Saputra-Wayne Co. with a consistent visual identity and demonstrates my ability to build a complete React website.",
    },
  };

  return (
    <main className="overflow-hidden">
      {/* ==================== HERO ==================== */}
      <section
        id="hero"
        className="flex min-h-screen items-center px-5 pb-16 pt-28 sm:px-6 sm:pt-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Hero Text */}
          <div className="max-w-3xl text-center md:text-left">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-400 sm:text-sm sm:tracking-[0.3em]">
              Fullstack Web Developer
            </p>

            <h2 className="text-xl font-light leading-tight tracking-tight sm:text-3xl">
              Hello, I'm
            </h2>

            <h1 className="mt-1 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl">
              Afdil Saputra.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8 md:mx-0 md:text-lg">
              I build responsive and user-friendly web applications using modern
              web technologies. I'm passionate about learning, solving problems,
              and turning ideas into functional digital experiences.
            </p>

            <div className="mt-8 flex justify-center md:justify-start">
              <a
                href="#contact"
                className="rounded-lg border-2 border-white/70 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white transition duration-300 hover:border-white hover:bg-white hover:text-black sm:px-6 sm:text-sm">
                Contact Me
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center md:justify-end">
            <div className="h-72 w-60 overflow-hidden rounded-2xl border border-white/20 sm:h-80 sm:w-72">
              <img
                src={fotoSaya}
                alt="Afdil Saputra"
                className="h-full w-full object-cover object-center opacity-55"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section id="about" className="px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-gray-500 sm:text-sm sm:tracking-[0.3em]">
            About
          </p>

          <h2 className="max-w-4xl text-2xl font-semibold leading-tight sm:text-4xl">
            Curious about technology since childhood, passionate about building
            for the web today.
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12">
            {/* About Text */}
            <div className="space-y-5 text-base leading-7 text-gray-400 sm:space-y-6 sm:text-lg sm:leading-8">
              <p>
                My interest in technology started at an early age and eventually
                led me to study Informatics Engineering.
              </p>

              <p>
                Today, I'm focused on web development, particularly building
                responsive and user-friendly applications. I also bring
                professional experience from working in a laboratory
                environment, where accuracy, documentation, and attention to
                detail are essential.
              </p>

              <p>
                Currently, I'm pursuing my goal of becoming a fullstack web
                developer by continuing to develop my skills through the
                Purwadhika Web Development Bootcamp.
              </p>

              <p>
                One developer I truly admire is{" "}
                <a
                  href="https://bryanbraun.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white underline underline-offset-4 transition hover:text-gray-300">
                  Bryan Braun
                </a>
                , whose work inspires me to keep refining my craft and building
                simple, thoughtful experiences on the web.
              </p>
            </div>

            {/* About Cards */}
            <div className="space-y-5">
              {/* Education */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
                <img
                  src={fotoUIR}
                  alt="Universitas Islam Riau"
                  className="absolute inset-0 h-full w-full object-cover opacity-15"
                />

                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-widest text-gray-500 sm:text-sm">
                    Education
                  </p>

                  <h3 className="mt-2 text-lg font-semibold sm:text-xl">
                    Universitas Islam Riau
                  </h3>

                  <p className="mt-1 text-sm text-gray-400 sm:text-base">
                    Bachelor's Degree in Informatics Engineering
                  </p>
                </div>
              </div>

              {/* Current Focus */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
                <img
                  src={fotoCoding}
                  alt="Fullstack developer"
                  className="absolute inset-0 h-full w-full object-cover opacity-15"
                />

                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-widest text-gray-500 sm:text-sm">
                    Current Focus
                  </p>

                  <h3 className="mt-2 text-lg font-semibold sm:text-xl">
                    Fullstack Web Development
                  </h3>

                  <p className="mt-1 text-sm text-gray-400 sm:text-base">
                    React, TypeScript, Tailwind CSS, and Node.js
                  </p>
                </div>
              </div>

              {/* Interests */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
                <img
                  src={fotoGaming}
                  alt="Nintendo Switch"
                  className="absolute inset-0 h-full w-full object-cover opacity-15"
                />

                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-widest text-gray-500 sm:text-sm">
                    Interests
                  </p>

                  <h3 className="mt-2 text-lg font-semibold sm:text-xl">
                    Gaming, Coding & Cooking
                  </h3>

                  <p className="mt-1 text-sm text-gray-400 sm:text-base">
                    Outside of work, I enjoy playing games, exploring new ideas
                    through coding, and cooking in my free time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SKILLS ==================== */}
      <section id="skills" className="px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-gray-500 sm:text-sm sm:tracking-[0.3em]">
            Skills
          </p>

          <h2 className="text-2xl font-semibold leading-tight sm:text-4xl">
            Technologies I use to build modern web applications.
          </h2>

          {/* Frontend */}
          <div className="mt-12">
            <p className="text-center text-xs uppercase tracking-widest text-gray-500 sm:text-sm">
              Frontend
            </p>

            <div
              className="
          mt-6 flex gap-3 overflow-x-auto pb-3
          snap-x snap-mandatory
          scrollbar-none
          [&::-webkit-scrollbar]:hidden
          sm:flex-wrap sm:justify-center sm:gap-6 sm:overflow-visible sm:pb-0
          lg:gap-9
        ">
              {[
                ["React", reactLogo, "React logo"],
                ["TypeScript", typescriptLogo, "TypeScript logo"],
                ["Tailwind CSS", tailwindLogo, "Tailwind CSS logo"],
              ].map(([name, logo, alt]) => (
                <div
                  key={name}
                  className="
              group relative flex h-36 min-w-[150px] snap-center
              items-end overflow-hidden rounded-lg
              border border-white/10 bg-white/5
              px-4 py-3
              transition duration-300
              hover:border-white/30 hover:bg-white/10
              sm:h-44 sm:w-44 sm:min-w-0 sm:px-4 sm:py-2
            ">
                  <img
                    src={logo}
                    alt={alt}
                    className="
                absolute left-1/2 top-1/2
                max-h-24 max-w-24
                -translate-x-1/2 -translate-y-1/2
                opacity-10
                transition duration-300
                group-hover:opacity-20
                sm:max-h-32 sm:max-w-32
              "
                  />

                  <p className="relative z-10 text-base sm:text-2xl">{name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="mt-16">
            <p className="text-center text-xs uppercase tracking-widest text-gray-500 sm:text-sm">
              Backend
            </p>

            <div
              className="
          mt-6 flex gap-3 overflow-x-auto pb-3
          snap-x snap-mandatory
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
          sm:flex-wrap sm:justify-center sm:gap-6 sm:overflow-visible sm:pb-0
          lg:gap-9
        ">
              {[
                ["Node.js", nodeLogo, "Node.js logo"],
                ["Python", pythonLogo, "Python logo"],
                ["PostgreSQL", postgresqlLogo, "PostgreSQL logo"],
              ].map(([name, logo, alt]) => (
                <div
                  key={name}
                  className="
              group relative flex h-36 min-w-[150px] snap-center
              items-end overflow-hidden rounded-lg
              border border-white/10 bg-white/5
              px-4 py-3
              transition duration-300
              hover:border-white/30 hover:bg-white/10
              sm:h-44 sm:w-44 sm:min-w-0 sm:px-4 sm:py-2
            ">
                  <img
                    src={logo}
                    alt={alt}
                    className="
                absolute left-1/2 top-1/2
                max-h-24 max-w-24
                -translate-x-1/2 -translate-y-1/2
                opacity-10
                transition duration-300
                group-hover:opacity-20
                sm:max-h-32 sm:max-w-32
              "
                  />

                  <p className="relative z-10 text-base sm:text-2xl">{name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DevOps & Tools */}
          <div className="mt-16">
            <p className="text-center text-xs uppercase tracking-widest text-gray-500 sm:text-sm">
              DevOps & Tools
            </p>

            <div
              className="
          mt-6 flex gap-3 overflow-x-auto pb-3
          snap-x snap-mandatory
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
          sm:flex-wrap sm:justify-center sm:gap-6 sm:overflow-visible sm:pb-0
          lg:gap-9
        ">
              {[
                ["Docker", dockerLogo, "Docker logo"],
                ["Git", gitLogo, "Git logo"],
                ["Jest", jestLogo, "Jest logo"],
              ].map(([name, logo, alt]) => (
                <div
                  key={name}
                  className="
              group relative flex h-36 min-w-[150px] snap-center
              items-end overflow-hidden rounded-lg
              border border-white/10 bg-white/5
              px-4 py-3
              transition duration-300
              hover:border-white/30 hover:bg-white/10
              sm:h-44 sm:w-44 sm:min-w-0 sm:px-4 sm:py-2
            ">
                  <img
                    src={logo}
                    alt={alt}
                    className="
                absolute left-1/2 top-1/2
                max-h-24 max-w-24
                -translate-x-1/2 -translate-y-1/2
                opacity-10
                transition duration-300
                group-hover:opacity-20
                sm:max-h-32 sm:max-w-32
              "
                  />

                  <p className="relative z-10 text-base sm:text-2xl">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PORTFOLIO ==================== */}
      <section id="portfolio" className="px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-gray-500 sm:text-sm sm:tracking-[0.3em]">
            Portfolio
          </p>

          <h2 className="max-w-3xl text-2xl font-semibold leading-tight sm:text-4xl">
            Selected projects built while exploring different industries and
            digital experiences.
          </h2>

          <div className="mt-10 overflow-hidden">
            <div
              className="
          flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4
          [-ms-overflow-style:none]
          scrollbar-none
          [&::-webkit-scrollbar]:hidden
          md:grid md:grid-cols-2
          md:overflow-visible
          md:pb-0
        ">
              {/* PROJECT 1 — PERSONAL PORTFOLIO */}
              <article
                className="
            min-w-full snap-center
            overflow-hidden rounded-2xl border border-white/10 bg-white/5
            transition duration-300 hover:border-white/20
            md:min-w-0
          ">
                <div className="h-48 overflow-hidden border-b border-white/10 sm:h-56">
                  <img
                    src={portfolioFoto}
                    alt="Afdil Saputra Portfolio"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Personal Portfolio Website
                  </p>

                  <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                    Afdil Saputra Portfolio
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    A responsive personal portfolio website showcasing my
                    background, technical skills, projects, experience, and
                    journey as a web developer.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {["React", "TypeScript", "Tailwind CSS"].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* STAR Navigation */}
                  <div className="mt-6 grid grid-cols-4 gap-1.5 sm:gap-2">
                    {[
                      ["S", "Situation"],
                      ["T", "Task"],
                      ["A", "Action"],
                      ["R", "Result"],
                    ].map(([key, label]) => (
                      <button
                        key={key}
                        onMouseEnter={() => setPortfolioTab(key)}
                        onClick={() => setPortfolioTab(key)}
                        className={`rounded-lg border px-1 py-2 text-[10px] font-medium transition duration-300 sm:px-2 sm:text-xs md:text-sm ${
                          portfolioTab === key
                            ? "border-white bg-white text-black"
                            : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                        }`}>
                        {label}
                      </button>
                    ))}
                  </div>

                  {/* STAR Content */}
                  <div className="mt-6 min-h-40 border-t border-white/10 pt-5 sm:min-h-36">
                    <p className="mb-2 text-xs uppercase tracking-widest text-gray-500 sm:text-sm">
                      {
                        portfolioStarContent[
                          portfolioTab as keyof typeof portfolioStarContent
                        ].title
                      }
                    </p>

                    <p className="text-sm leading-7 text-gray-400 sm:text-base">
                      {
                        portfolioStarContent[
                          portfolioTab as keyof typeof portfolioStarContent
                        ].text
                      }
                    </p>
                  </div>

                  {/* Project Link */}
                  <a
                    href="https://afdil-portfolio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                mt-6 inline-flex items-center
                rounded-lg border border-white/10
                px-4 py-2.5
                text-sm text-gray-300
                transition duration-300
                hover:border-white/30
                hover:bg-white/10
                hover:text-white
              ">
                    View Project
                    <span className="ml-2">↗</span>
                  </a>
                </div>
              </article>

              {/* PROJECT 2 — SAPUTRA-WAYNE */}
              <article
                className="
            min-w-full snap-center
            overflow-hidden rounded-2xl border border-white/10 bg-white/5
            transition duration-300 hover:border-white/20
            md:min-w-0
          ">
                <div className="h-48 overflow-hidden border-b border-white/10 sm:h-56">
                  <img
                    src={saputraWayneHeader}
                    alt="Saputra-Wayne Co."
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Venture Capital Website
                  </p>

                  <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                    Saputra-Wayne Co.
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    A fictional venture capital company profile exploring a
                    premium digital identity for a modern investment firm.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {["React", "TypeScript", "Tailwind CSS"].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* STAR Navigation */}
                  <div className="mt-6 grid grid-cols-4 gap-1.5 sm:gap-2">
                    {[
                      ["S", "Situation"],
                      ["T", "Task"],
                      ["A", "Action"],
                      ["R", "Result"],
                    ].map(([key, label]) => (
                      <button
                        key={key}
                        onMouseEnter={() => setWayneTab(key)}
                        onClick={() => setWayneTab(key)}
                        className={`rounded-lg border px-1 py-2 text-[10px] font-medium transition duration-300 sm:px-2 sm:text-xs md:text-sm ${
                          wayneTab === key
                            ? "border-white bg-white text-black"
                            : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                        }`}>
                        {label}
                      </button>
                    ))}
                  </div>

                  {/* STAR Content */}
                  <div className="mt-6 min-h-40 border-t border-white/10 pt-5 sm:min-h-36">
                    <p className="mb-2 text-xs uppercase tracking-widest text-gray-500 sm:text-sm">
                      {starContent[wayneTab as keyof typeof starContent].title}
                    </p>

                    <p className="text-sm leading-7 text-gray-400 sm:text-base">
                      {starContent[wayneTab as keyof typeof starContent].text}
                    </p>
                  </div>

                  {/* Project Link */}
                  <a
                    href="https://saputra-wayne-co.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                mt-6 inline-flex items-center
                rounded-lg border border-white/10
                px-4 py-2.5
                text-sm text-gray-300
                transition duration-300
                hover:border-white/30
                hover:bg-white/10
                hover:text-white
              ">
                    View Project
                    <span className="ml-2">↗</span>
                  </a>
                </div>
              </article>
            </div>

            {/* Mobile swipe indicator */}
            <div className="mt-4 flex justify-center gap-2 md:hidden">
              <span className="h-1.5 w-6 rounded-full bg-white/60" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== EXPERIENCE ==================== */}
      <section id="experience" className="px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-gray-500 sm:text-sm sm:tracking-[0.3em]">
            Experience
          </p>

          <h2 className="max-w-3xl text-2xl font-semibold leading-tight sm:text-4xl">
            My journey so far.
          </h2>

          <div className="mt-12 space-y-10 border-l border-white/10 pl-6 sm:mt-14 sm:pl-8">
            {/* Experience 1 */}
            <div className="relative">
              <div className="absolute -left-6.25 h-3 w-3 rounded-full border-2 border-white bg-black sm:-left-[37px] sm:h-4 sm:w-4" />

              <p className="text-xs uppercase tracking-widest text-gray-500 sm:text-sm">
                2024 — Present
              </p>

              <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                Laboratory Analyst
              </h3>

              <p className="text-sm text-gray-400 sm:text-base">
                PT. Subur Berkah Lestari
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                Perform laboratory analysis for palm oil production, including
                quality testing, documentation, reporting, and ensuring
                operational accuracy. Working in this environment strengthened
                my attention to detail, consistency, and analytical thinking.
              </p>
            </div>

            {/* Experience 2 */}
            <div className="relative">
              <div className="absolute -left-6.25 h-3 w-3 rounded-full border-2 border-white bg-black sm:-left-[37px] sm:h-4 sm:w-4" />

              <p className="text-xs uppercase tracking-widest text-gray-500 sm:text-sm">
                2023 — 2024
              </p>

              <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                Assistant Cook
              </h3>

              <p className="text-sm text-gray-400 sm:text-base">Rumah Negri</p>

              <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                Supported daily kitchen operations, prepared ingredients,
                maintained food quality standards, and worked efficiently in a
                fast-paced team environment while ensuring consistency and
                cleanliness.
              </p>
            </div>

            {/* Experience 3 */}
            <div className="relative">
              <div className="absolute -left-6.25 h-3 w-3 rounded-full border-2 border-white bg-black sm:-left-[37px] sm:h-4 sm:w-4" />

              <p className="text-xs uppercase tracking-widest text-gray-500 sm:text-sm">
                2016 — 2019
              </p>

              <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                Music Producer
              </h3>

              <p className="text-sm text-gray-400 sm:text-base">Independent</p>

              <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                Produced, arranged, mixed, and mastered music for independent
                artists and personal projects using FL Studio. Managed projects
                independently from client communication to final delivery,
                strengthening creativity, self-learning, and attention to
                detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section id="testimonials" className="px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-gray-500 sm:text-sm sm:tracking-[0.3em]">
            Testimonials
          </p>

          <h2 className="max-w-3xl text-2xl font-semibold leading-tight sm:text-4xl">
            Feedback from collaborators and project partners.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Sample testimonials used for portfolio presentation. They represent
            the type of feedback I aim to earn through future collaborations.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Testimonial 1 */}
            <article className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:border-white/20 hover:bg-white/10 sm:p-6">
              <div className="flex items-center gap-4">
                <img
                  src={client1}
                  alt="Sarah Mitchell"
                  className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
                />

                <div className="min-w-0">
                  <h3 className="truncate font-semibold text-white">
                    Harry Maguire
                  </h3>

                  <p className="text-xs text-gray-500 sm:text-sm">
                    Founder, Nexa Technologies
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-gray-300">
                “Afdil translated our ideas into a clean and intuitive
                interface. His attention to detail and willingness to iterate
                made the collaboration smooth from start to finish.”
              </p>
            </article>

            {/* Testimonial 2 */}
            <article className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:border-white/20 hover:bg-white/10 sm:p-6">
              <div className="flex items-center gap-4">
                <img
                  src={client2}
                  alt="Daniel Carter"
                  className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
                />

                <div className="min-w-0">
                  <h3 className="truncate font-semibold text-white">
                    Corletta Cersini
                  </h3>

                  <p className="text-xs text-gray-500 sm:text-sm">
                    Product Manager, Aurelius Studio
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-gray-300">
                “Communication was clear throughout the project, and every
                revision was handled professionally. The final website was
                responsive, organized, and easy to navigate.”
              </p>
            </article>

            {/* Testimonial 3 */}
            <article className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:border-white/20 hover:bg-white/10 sm:p-6">
              <div className="flex items-center gap-4">
                <img
                  src={client3}
                  alt="Emily Johnson"
                  className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
                />

                <div className="min-w-0">
                  <h3 className="truncate font-semibold text-white">
                    Adam Johnson
                  </h3>

                  <p className="text-xs text-gray-500 sm:text-sm">
                    Design Lead, Horizon Creative
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-gray-300">
                “Afdil is someone who enjoys learning deeply. He pays attention
                to both design consistency and implementation, making him easy
                to work with on frontend projects.”
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section id="contact" className="px-5 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-gray-500 sm:text-sm sm:tracking-[0.3em]">
            Contact
          </p>

          <h2 className="max-w-3xl text-2xl font-semibold leading-tight sm:text-4xl">
            Let's grow together.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            I'm currently transitioning into fullstack web development and
            always open to opportunities, collaborations, or simply connecting
            with other people who enjoy building for the web.
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12">
            {/* Contact Form */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
              <h3 className="text-xl font-semibold">Send me a message</h3>

              <form className="mt-6 space-y-5">
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wider text-gray-500 sm:text-sm">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-gray-600 focus:border-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wider text-gray-500 sm:text-sm">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Your message"
                    className="w-full resize-none rounded-lg border border-white/10 bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-gray-600 focus:border-white"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-white bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-transparent hover:text-white">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 sm:space-y-10">
              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-gray-500" />

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-gray-500 sm:text-sm">
                    Email
                  </p>

                  <a
                    href="mailto:xafdil@gmail.com"
                    className="break-all text-base text-white transition hover:text-gray-300 sm:text-lg">
                    xafdil@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gray-500" />

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 sm:text-sm">
                    Location
                  </p>

                  <p className="text-base text-white sm:text-lg">
                    Pekanbaru, Riau, Indonesia
                  </p>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="mb-4 text-xs uppercase tracking-widest text-gray-500 sm:text-sm">
                  Find me online
                </p>

                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <a
                    href="https://github.com/xafdil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm transition hover:border-white hover:bg-white hover:text-black">
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  <a
                    href="https://linkedin.com/in/xafdil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm transition hover:border-white hover:bg-white hover:text-black">
                    <FaLinkedin size={18} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-14 border-t border-white/10 pt-8 text-center">
            <p className="text-xs text-gray-500 sm:text-sm">
              © 2026 Afdil Saputra.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
