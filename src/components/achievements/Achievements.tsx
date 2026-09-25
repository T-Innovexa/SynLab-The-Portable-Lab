"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  CheckCircle2,
  FileText,
  Flag,
  MapPin,
  Mic,
  ScrollText,
  Trophy,
} from "lucide-react";
import { Reveal } from "../ui/primitives";

const RESEARCHGATE_URL =
  "https://www.researchgate.net/publication/414301867_SynLab_The_Portable_Lab";
const DOI_URL = "https://doi.org/10.69687/vaf.2026.1.3";
const CC_URL = "https://creativecommons.org/licenses/by-nc/4.0/";

const EASE = [0.22, 1, 0.36, 1] as const;

function Hash({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-white px-2.5 py-1 font-grotesk text-[10px] font-bold tracking-[0.08em] text-muted">
      {children}
    </span>
  );
}

function MetaChip({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-[11px] font-semibold text-body">
      <span className="text-cyanx" aria-hidden>
        {icon}
      </span>
      <span className="sr-only">{label}: </span>
      {value}
    </span>
  );
}

/** Tiny editorial margin note — accent serif only, never main type. */
function MarginNote({
  children,
  className = "",
  flip = false,
}: {
  children: React.ReactNode;
  className?: string;
  flip?: boolean;
}) {
  return (
    <Reveal
      className={`${flip ? "md:text-right" : ""} ${className}`}
      y={12}
    >
      <p
        className={`font-editorial inline-block text-[17px] md:text-lg italic leading-snug text-muted ${
          flip ? "md:-rotate-2" : "md:rotate-2"
        }`}
      >
        {children}
      </p>
    </Reveal>
  );
}

/** Spine dot + label marking one stop on the story line. */
function StopDot({ index, label }: { index: string; label: string }) {
  return (
    <span className="absolute top-8 -left-14 md:static md:mx-auto flex md:flex-col items-center gap-2 md:gap-1.5" aria-hidden>
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: [...EASE] }}
        className="relative grid place-items-center w-[22px] h-[22px] rounded-full bg-void border-2 border-cyanx shadow-soft shrink-0"
      >
        <span className="w-[7px] h-[7px] rounded-full bg-cyanx" />
      </motion.span>
      <span className="md:text-center font-grotesk text-[9px] font-bold tracking-[0.14em] text-muted leading-tight">
        {index}
        <br className="hidden md:block" /> {label}
      </span>
    </span>
  );
}

export default function Achievements() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.78", "end 0.55"],
  });
  const draw = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });

  const rise = (from: "left" | "right" | "up", rotate: number) => ({
    initial: {
      opacity: 0,
      y: reduce ? 0 : 34,
      x: reduce ? 0 : from === "left" ? -36 : from === "right" ? 36 : 0,
      rotate: reduce ? 0 : rotate,
    },
    whileInView: { opacity: 1, y: 0, x: 0, rotate: 0 },
  });

  return (
    <section
      id="achievements"
      aria-label="SynLab achievements — The Receipts"
      className="relative overflow-hidden border-t border-line tint-grey scroll-mt-16"
    >
      {/* Desk backdrop — grid + glow + giant watermark, all decorative */}
      <div className="pointer-events-none absolute inset-0 sci-grid opacity-70" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_8%,rgba(12,111,189,0.10),transparent_70%)]"
        aria-hidden
      />
      <p
        className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 select-none font-grotesk font-bold tracking-tight text-[22vw] md:text-[13rem] leading-none text-ink opacity-[0.035] whitespace-nowrap"
        aria-hidden
      >
        RECEIPTS
      </p>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-24 md:py-32">
        {/* ── Heading ─────────────────────────────────────────── */}
        <div className="max-w-5xl">
          <Reveal>
            <p className="flex items-center gap-3 font-grotesk text-[12px] font-semibold tracking-[0.18em] text-cyanx">
              <span className="h-px w-10 bg-cyanx/40" aria-hidden />
              <span className="text-body">SYNLAB · MILESTONES</span>
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-grotesk mt-4 text-4xl md:text-6xl font-bold tracking-tight text-ink leading-[1.04]">
              THE RECEIPTS
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 max-w-2xl text-body text-base md:text-lg leading-relaxed">
              From prototype tables to competition floors, SynLab has been
              taken beyond the screen.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="font-editorial mt-3 text-lg italic text-muted">
              a build log in four fragments — pinned up as it happened.
            </p>
          </Reveal>
        </div>

        {/* ── Cinematic moment ────────────────────────────────── */}
        <div className="mt-14 md:mt-20 text-center" aria-label="How the journey unfolded">
          <Reveal>
            <p className="font-grotesk text-[11px] font-bold tracking-[0.22em] text-muted">
              IT STARTED AS AN IDEA.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-grotesk mt-3 text-2xl md:text-4xl font-bold tracking-tight text-ink">
              THEN WE TOOK IT <span className="text-cyanx">OUT THERE.</span>
            </p>
          </Reveal>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5" role="list" aria-label="Results at a glance">
            {[
              { icon: <Trophy size={13} aria-hidden />, text: "TOP 7" },
              { icon: <Flag size={13} aria-hidden />, text: "GRAND FINALIST" },
              { icon: <CheckCircle2 size={13} aria-hidden />, text: "SELECTED" },
              { icon: <BookOpen size={13} aria-hidden />, text: "PUBLISHED" },
            ].map((f, i) => (
              <motion.span
                key={f.text}
                role="listitem"
                initial={{ opacity: 0, scale: reduce ? 1 : 0.6, rotate: reduce ? 0 : -4 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.09, ease: [...EASE] }}
                className="card inline-flex items-center gap-2 px-4 py-2.5 font-grotesk text-[12px] font-bold tracking-[0.1em] text-ink"
              >
                <span className="text-cyanx" aria-hidden>{f.icon}</span>
                {f.text}
              </motion.span>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="font-editorial mt-6 text-xl md:text-2xl italic text-body">
              …and kept building.
            </p>
          </Reveal>
        </div>

        {/* ── Story track ─────────────────────────────────────── */}
        <div ref={trackRef} className="relative mt-16 md:mt-24">
          {/* spine */}
          <div
            className="absolute top-0 bottom-0 left-[10px] md:left-1/2 md:-translate-x-1/2 w-[2px] bg-line rounded-full overflow-hidden"
            aria-hidden
          >
            {reduce ? (
              <div className="absolute inset-0 bg-cyanx/60" />
            ) : (
              <motion.div className="absolute inset-0 origin-top bg-cyanx/70" style={{ scaleY: draw }} />
            )}
          </div>

          <ol className="relative space-y-14 md:space-y-24">
            {/* ── 1 · E-SUMMIT ─────────────────────────────── */}
            <li className="relative pl-12 md:pl-0 md:grid md:grid-cols-[1fr_64px_1fr] md:gap-6 md:items-start">
              <div className="hidden md:flex md:col-start-2 justify-center pt-8">
                <StopDot index="01" label="E-SUMMIT" />
              </div>
              <span className="md:hidden absolute left-0 top-8" aria-hidden>
                <span className="grid place-items-center w-[22px] h-[22px] rounded-full bg-void border-2 border-cyanx">
                  <span className="w-[7px] h-[7px] rounded-full bg-cyanx" />
                </span>
              </span>
              <MarginNote flip className="md:col-start-1 md:pt-24 md:pr-2 mb-4 md:mb-0">
                “first big stage” — prototype table to grand&nbsp;finale&nbsp;→
              </MarginNote>
              <motion.article
                aria-labelledby="ach-esummit"
                {...rise("right", 1.6)}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [...EASE] }}
                className="card card-hover overflow-hidden md:col-start-3 min-w-0"
              >
                {/* Typographic event poster — no verified event photograph is used, so the record is set in type. */}
                <div className="relative overflow-hidden bg-[#10273D] px-6 py-8 md:px-8">
                  <div className="pointer-events-none absolute inset-0 opacity-20 dot-grid" aria-hidden />
                  <span className="absolute -top-3 left-8 w-16 h-7 rotate-[-6deg] rounded-[2px] bg-[#E8DCC3]/85" aria-hidden />
                  <span className="absolute -top-3 right-8 w-16 h-7 rotate-[5deg] rounded-[2px] bg-[#E8DCC3]/85" aria-hidden />
                  <p className="relative font-grotesk text-[10px] font-bold tracking-[0.22em] text-[#9CC3E8]">
                    IIT MADRAS E-CELL · E-SUMMIT 2026
                  </p>
                  <p className="relative font-grotesk mt-3 text-4xl md:text-5xl font-bold tracking-tight text-white leading-none">
                    E-SUMMIT
                  </p>
                  <p className="relative font-grotesk mt-1 text-sm font-semibold tracking-[0.28em] text-[#9CC3E8]">
                    IIT MADRAS
                  </p>
                  <p className="relative mt-5 inline-block -rotate-2 rounded-md border-2 border-[#E8A33D] px-4 py-2 font-grotesk text-sm font-bold tracking-[0.14em] text-[#F5C771]">
                    ★ TOP 7 · GRAND FINALIST
                  </p>
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 font-grotesk text-[10px] font-bold tracking-[0.12em] text-white">
                      <Mic size={12} aria-hidden /> GRAND FINALIST
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-cyanx/40 bg-tint px-3 py-1.5 font-grotesk text-[10px] font-bold tracking-[0.12em] text-cyanx">
                      <Trophy size={12} aria-hidden /> TOP 7
                    </span>
                  </div>
                  <h3 id="ach-esummit" className="font-grotesk mt-4 text-xl md:text-2xl font-bold tracking-tight text-ink">
                    E-Summit · IIT Madras
                  </h3>
                  <p className="mt-2 text-[14px] md:text-[15px] leading-relaxed text-body">
                    SynLab was presented at E-Summit, IIT Madras, reaching the
                    grand finale and securing a Top 7 position.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <MetaChip icon={<MapPin size={13} />} label="Location" value="IIT Madras" />
                    <MetaChip icon={<Trophy size={13} />} label="Result" value="Top 7" />
                    <MetaChip icon={<Mic size={13} />} label="Stage" value="Grand Finalist" />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5" aria-label="Tags">
                    <Hash>#ESummit</Hash>
                    <Hash>#IITMadras</Hash>
                    <Hash>#Innovation</Hash>
                    <Hash>#SynLab</Hash>
                  </div>
                  <p className="mt-4 text-[11px] leading-relaxed text-muted">
                    Event note set in type — no verified event photograph shown.
                  </p>
                </div>
              </motion.article>
            </li>

            {/* ── 2 · YESIST12 ─────────────────────────────── */}
            <li className="relative pl-12 md:pl-0 md:grid md:grid-cols-[1fr_64px_1fr] md:gap-6 md:items-start">
              <div className="hidden md:flex md:col-start-2 justify-center pt-8">
                <StopDot index="02" label="YESIST12" />
              </div>
              <span className="md:hidden absolute left-0 top-8" aria-hidden>
                <span className="grid place-items-center w-[22px] h-[22px] rounded-full bg-void border-2 border-cyanx">
                  <span className="w-[7px] h-[7px] rounded-full bg-cyanx" />
                </span>
              </span>
              <motion.article
                aria-labelledby="ach-yesist"
                {...rise("left", -1.6)}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [...EASE] }}
                className="card card-hover overflow-hidden md:col-start-1 md:row-start-1 min-w-0"
              >
                <div className="relative overflow-hidden bg-[#0E3B39] px-6 py-8 md:px-8">
                  <div className="pointer-events-none absolute inset-0 opacity-20 dot-grid" aria-hidden />
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 w-44 h-44 rounded-full bg-[#0E9F9A]/30 blur-2xl"
                    aria-hidden
                  />
                  <span className="absolute -top-3 left-8 w-16 h-7 rotate-[5deg] rounded-[2px] bg-[#E8DCC3]/85" aria-hidden />
                  <p className="relative font-grotesk text-[10px] font-bold tracking-[0.22em] text-[#8FD8D2]">
                    IEEE · INTERNATIONAL STAGE
                  </p>
                  <p className="relative font-grotesk mt-3 text-4xl md:text-5xl font-bold tracking-tight text-white leading-none">
                    YESIST12
                  </p>
                  <p className="relative font-grotesk mt-1 text-sm font-semibold tracking-[0.28em] text-[#8FD8D2]">
                    INDONESIA
                  </p>
                  <p className="relative mt-5 inline-block rotate-1 rounded-md border-2 border-white/70 px-4 py-2 font-grotesk text-sm font-bold tracking-[0.14em] text-white">
                    GRAND FINALIST
                  </p>
                </div>
                <div className="p-6 md:p-7">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 font-grotesk text-[10px] font-bold tracking-[0.12em] text-white">
                    <Flag size={12} aria-hidden /> GRAND FINALIST
                  </span>
                  <h3 id="ach-yesist" className="font-grotesk mt-4 text-xl md:text-2xl font-bold tracking-tight text-ink">
                    IEEE YESIST12 · Indonesia
                  </h3>
                  <p className="mt-2 text-[14px] md:text-[15px] leading-relaxed text-body">
                    SynLab reached the grand finale of IEEE YESIST12 in Indonesia.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <MetaChip icon={<MapPin size={13} />} label="Location" value="Indonesia" />
                    <MetaChip icon={<Flag size={13} />} label="Stage" value="Grand Finalist" />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5" aria-label="Tags">
                    <Hash>#IEEE</Hash>
                    <Hash>#YESIST12</Hash>
                    <Hash>#Indonesia</Hash>
                    <Hash>#Innovation</Hash>
                    <Hash>#SynLab</Hash>
                  </div>
                  <p className="mt-4 text-[11px] leading-relaxed text-muted">
                    Event note set in type — no verified event photograph shown.
                  </p>
                </div>
              </motion.article>
              <MarginNote className="md:col-start-3 md:pt-24 md:pl-2 mt-4 md:mt-0">
                ← “taken outside the classroom” — putting the idea under the&nbsp;spotlight
              </MarginNote>
            </li>

            {/* ── 3 · CBSE ─────────────────────────────────── */}
            <li className="relative pl-12 md:pl-0 md:grid md:grid-cols-[1fr_64px_1fr] md:gap-6 md:items-start">
              <div className="hidden md:flex md:col-start-2 justify-center pt-8">
                <StopDot index="03" label="CBSE" />
              </div>
              <span className="md:hidden absolute left-0 top-8" aria-hidden>
                <span className="grid place-items-center w-[22px] h-[22px] rounded-full bg-void border-2 border-cyanx">
                  <span className="w-[7px] h-[7px] rounded-full bg-cyanx" />
                </span>
              </span>
              <MarginNote flip className="md:col-start-1 md:pt-24 md:pr-2 mb-4 md:mb-0">
                “from prototype → presentation” — selected to&nbsp;show&nbsp;→
              </MarginNote>
              <motion.article
                aria-labelledby="ach-cbse"
                {...rise("right", 1.4)}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [...EASE] }}
                className="card card-hover overflow-hidden md:col-start-3 min-w-0"
              >
                <div className="relative overflow-hidden bg-[#F3E9CF] px-6 py-8 md:px-8 border-b border-line">
                  <div className="pointer-events-none absolute inset-0 sci-grid-fine opacity-60" aria-hidden />
                  <span className="absolute -top-3 right-8 w-16 h-7 rotate-[-5deg] rounded-[2px] bg-white/80 border border-line" aria-hidden />
                  <p className="relative font-grotesk text-[10px] font-bold tracking-[0.22em] text-[#8a5a12]">
                    EXHIBITION · STUDENT INNOVATION
                  </p>
                  <p className="relative font-grotesk mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#17191C] leading-none">
                    CBSE
                    <br />
                    SKILL EXPO
                  </p>
                  <p className="relative mt-5 inline-block rotate-1 rounded-md bg-[#17191C] px-4 py-2 font-grotesk text-sm font-bold tracking-[0.14em] text-white">
                    ✓ SELECTED
                  </p>
                </div>
                <div className="p-6 md:p-7">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-leaf/40 bg-leaf/10 px-3 py-1.5 font-grotesk text-[10px] font-bold tracking-[0.12em] text-leaf">
                    <Award size={12} aria-hidden /> SELECTED
                  </span>
                  <h3 id="ach-cbse" className="font-grotesk mt-4 text-xl md:text-2xl font-bold tracking-tight text-ink">
                    CBSE Skill Expo
                  </h3>
                  <p className="mt-2 text-[14px] md:text-[15px] leading-relaxed text-body">
                    SynLab was selected for presentation at the CBSE Skill Expo.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <MetaChip icon={<MapPin size={13} />} label="Location" value="India" />
                    <MetaChip icon={<CheckCircle2 size={13} />} label="Status" value="Selected" />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5" aria-label="Tags">
                    <Hash>#CBSE</Hash>
                    <Hash>#SkillExpo</Hash>
                    <Hash>#StudentInnovation</Hash>
                    <Hash>#SynLab</Hash>
                  </div>
                  <p className="mt-4 text-[11px] leading-relaxed text-muted">
                    Exhibition note set in type — no verified expo photograph shown.
                  </p>
                </div>
              </motion.article>
            </li>

            {/* ── 4 · RESEARCH ─────────────────────────────── */}
            <li className="relative pl-12 md:pl-0 md:grid md:grid-cols-[1fr_64px_1fr] md:gap-6 md:items-start">
              <div className="hidden md:flex md:col-start-2 justify-center pt-8">
                <StopDot index="04" label="PAPER" />
              </div>
              <span className="md:hidden absolute left-0 top-8" aria-hidden>
                <span className="grid place-items-center w-[22px] h-[22px] rounded-full bg-void border-2 border-cyanx">
                  <span className="w-[7px] h-[7px] rounded-full bg-cyanx" />
                </span>
              </span>
              <div className="md:col-start-1 md:col-span-3 min-w-0">
                <MarginNote className="text-center mb-5">
                  ↓ “then we wrote it down” — a paper left the&nbsp;lab
                </MarginNote>
                <motion.article
                  aria-labelledby="ach-paper"
                  initial={{
                    opacity: 0,
                    y: reduce ? 0 : 44,
                    rotate: reduce ? 0 : -1,
                  }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: [...EASE] }}
                  className="group relative mx-auto max-w-3xl min-w-0"
                >
                  {/* Paper sheet — deliberately light in both themes, like paper pinned to a dark studio wall */}
                  <div className="relative overflow-hidden rounded-[20px] border border-[#E3E6EA] bg-[#FFFDF6] shadow-lift transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_2px_4px_rgba(23,25,28,0.06),0_28px_48px_-16px_rgba(23,25,28,0.28)]">
                    {/* folded corner */}
                    <span
                      className="absolute right-0 top-0 h-12 w-12 bg-gradient-to-bl from-[#E7E0CC] to-[#FFFDF6] transition-all duration-300 group-hover:h-16 group-hover:w-16"
                      style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                      aria-hidden
                    />
                    <span className="absolute left-1/2 top-0 h-1.5 w-24 -translate-x-1/2 rounded-b-full bg-[#E7E0CC]" aria-hidden />
                    <div className="p-7 md:p-10">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#17191C] px-3 py-1.5 font-grotesk text-[10px] font-bold tracking-[0.12em] text-white">
                          <ScrollText size={12} aria-hidden /> RESEARCH PUBLICATION
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#3E9B6B] px-3 py-1.5 font-grotesk text-[10px] font-bold tracking-[0.12em] text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-white" aria-hidden /> PUBLISHED
                        </span>
                      </div>
                      <p className="mt-6 font-grotesk text-[11px] font-bold tracking-[0.22em] text-[#697078]">
                        SYNLAB · THE PORTABLE LAB
                      </p>
                      <h3
                        id="ach-paper"
                        className="font-grotesk mt-2 text-3xl md:text-5xl font-bold tracking-tight text-[#17191C] leading-[1.05]"
                      >
                        SynLab:
                        <br />
                        The Portable Lab
                      </h3>
                      <p className="mt-4 text-[13px] md:text-sm font-medium text-[#3D4248]">
                        Adarsh Kumar Dash · Sharon Chakraborty
                      </p>
                      <dl className="mt-5 space-y-2 border-t border-dashed border-[#E3E6EA] pt-5 text-[12px] md:text-[13px]">
                        <div className="flex flex-wrap items-baseline gap-x-2">
                          <dt className="font-grotesk text-[10px] font-bold tracking-[0.16em] text-[#697078]">DOI</dt>
                          <dd className="font-mono text-[#0C6FBD] transition-colors group-hover:text-[#0B6CB8] group-hover:underline">
                            10.69687/vaf.2026.1.3
                          </dd>
                        </div>
                        <div className="flex flex-wrap items-baseline gap-x-2">
                          <dt className="font-grotesk text-[10px] font-bold tracking-[0.16em] text-[#697078]">LICENSE</dt>
                          <dd>
                            <a
                              href={CC_URL}
                              target="_blank"
                              rel="noreferrer"
                              className="font-semibold text-[#3D4248] underline decoration-[#CBD5E1] underline-offset-2 hover:text-[#0C6FBD]"
                              aria-label="Creative Commons BY-NC 4.0 license (opens in new tab)"
                            >
                              CC BY-NC 4.0
                            </a>
                          </dd>
                        </div>
                      </dl>
                      {/* metadata fades in on hover/focus, always visible on touch */}
                      <div className="mt-4 flex flex-wrap gap-1.5 opacity-100 md:opacity-70 md:transition-opacity md:duration-300 md:group-hover:opacity-100 md:group-focus-within:opacity-100" aria-label="Tags">
                        {["#Research", "#SynLab", "#ScienceCommunication", "#StudentResearch", "#PortableLab"].map((h) => (
                          <span
                            key={h}
                            className="inline-flex items-center rounded-full border border-[#E3E6EA] bg-white px-2.5 py-1 font-grotesk text-[10px] font-bold tracking-[0.08em] text-[#697078]"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                      <div className="mt-7 flex flex-col sm:flex-row gap-3">
                        <a
                          href={RESEARCHGATE_URL}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Read the paper on ResearchGate (opens in new tab)"
                          className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 font-grotesk text-[12px] font-bold tracking-[0.1em] pressable"
                        >
                          <FileText size={15} aria-hidden /> READ THE PAPER
                          <ArrowUpRight size={15} aria-hidden />
                        </a>
                        <a
                          href={DOI_URL}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="View the DOI record (opens in new tab)"
                          className="btn-ghost inline-flex items-center justify-center gap-2 px-6 py-3.5 font-grotesk text-[12px] font-bold tracking-[0.1em] pressable"
                        >
                          VIEW DOI <ArrowUpRight size={15} aria-hidden />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* desk shadow */}
                  <div
                    className="mx-auto -mt-1 h-5 w-[92%] rounded-[50%] bg-[#17191C]/10 blur-md transition-all duration-300 group-hover:w-[88%] group-hover:bg-[#17191C]/15"
                    aria-hidden
                  />
                </motion.article>
              </div>
            </li>
          </ol>
        </div>

        {/* ── Closing ───────────────────────────────────────── */}
        <div className="mt-16 md:mt-24 text-center">
          <Reveal>
            <p className="font-grotesk text-lg md:text-xl font-bold tracking-tight text-ink">
              Not the finish line.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-editorial mt-2 text-lg md:text-xl italic text-muted">
              Just proof that the idea keeps moving.
            </p>
          </Reveal>
          <Reveal delay={0.14} className="mt-7">
            <a
              href="#team"
              className="btn-ghost inline-flex items-center gap-2 px-7 py-4 font-grotesk text-[12px] font-bold tracking-[0.12em] pressable"
              aria-label="Keep exploring SynLab — go to the team section"
            >
              → KEEP EXPLORING SYNLAB
            </a>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-1.5" aria-label="About these records">
              {["#SynLab", "#BuildInPublic", "#StudentInnovation", "#Science", "#PortableLab", "#Innovation"].map((h) => (
                <Hash key={h}>{h}</Hash>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
