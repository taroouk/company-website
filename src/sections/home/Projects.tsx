"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Container, Text, icons } from "@/components/base";
import { SectionHeading } from "@/components/layouts/SectionHeading";
import {
  projects,
  projectsHeading,
  projectsSectionHeading,
} from "@/data/projects";
import { cn } from "@/lib/cn";
import type { Locale } from "@/i18n/routing";

// "All" is generic UI chrome (a filter-state word), not PDF business
// content — same category as the contact form's field labels.
const allLabel: Record<Locale, string> = { ar: "الكل", en: "All" };

export function Projects({ locale }: { locale: Locale }) {
  const items = projects[locale];
  const isRtl = locale === "ar";
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState<string | "all">("all");

  const filtered = useMemo(
    () => (filter === "all" ? items : items.filter((p) => p.id === filter)),
    [items, filter],
  );

  const PrevIcon = isRtl ? icons.chevronRight : icons.chevronLeft;
  const NextIcon = isRtl ? icons.chevronLeft : icons.chevronRight;

  const readActive = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    if (!card) return;
    const step = card.offsetWidth + 20;
    setActive(Math.round(Math.abs(track.scrollLeft) / step));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", readActive, { passive: true });
    return () => track.removeEventListener("scroll", readActive);
  }, [readActive]);

  const applyFilter = (next: string | "all") => {
    setFilter(next);
    setActive(0);
    trackRef.current?.scrollTo({ left: 0 });
  };

  const step = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    if (!card) return;
    // In RTL the scroll axis runs the other way, so flip the delta sign.
    const delta = (card.offsetWidth + 20) * direction * (isRtl ? -1 : 1);
    track.scrollBy({ left: delta, behavior: "smooth" });
  };

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    if (!card) return;
    const offset = (card.offsetWidth + 20) * index * (isRtl ? -1 : 1);
    track.scrollTo({ left: offset, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="flex flex-col items-center gap-6">
          <SectionHeading
            heading={projectsSectionHeading}
            locale={locale}
            align="center"
            description={projectsHeading[locale]}
          />

          <div className="flex flex-wrap items-center justify-center gap-2">
            {items.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => applyFilter(project.id)}
                className={cn(
                  "rounded-[var(--radius-full)] border px-4 py-1.5 text-xs font-medium transition-colors sm:text-sm",
                  filter === project.id
                    ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-accent-fg)]"
                    : "border-[var(--color-border)] text-[var(--color-fg-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]",
                )}
              >
                {project.title}
              </button>
            ))}
            <button
              type="button"
              onClick={() => applyFilter("all")}
              className={cn(
                "rounded-[var(--radius-full)] border px-4 py-1.5 text-xs font-medium transition-colors sm:text-sm",
                filter === "all"
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-accent-fg)]"
                  : "border-[var(--color-border)] text-[var(--color-fg-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]",
              )}
            >
              {allLabel[locale]}
            </button>
          </div>
        </div>

        <div className="mt-4 flex justify-end gap-2 md:hidden">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label={locale === "ar" ? "السابق" : "Previous"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-full)] border border-[var(--color-border)] text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]"
          >
            <PrevIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label={locale === "ar" ? "التالي" : "Next"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-full)] border border-[var(--color-border)] text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]"
          >
            <NextIcon className="h-4 w-4" />
          </button>
        </div>
      </Container>

      <Container className="mt-6">
        {/*
         * Mobile (<768px): a horizontal, scroll-snapped carousel track —
         * the only breakpoint where horizontal scrolling is allowed.
         * md+ (>=768px): the exact same track becomes a wrapping CSS grid
         * (2 columns at md, 4 at lg) via responsive overrides, so cards
         * lay out in-container with no scroll container and no overflow.
         */}
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory [scrollbar-width:none] gap-5 overflow-x-auto pb-2 md:grid md:snap-none md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden"
        >
          {filtered.map((project) => (
            <article
              key={project.id}
              className="group flex w-[78%] shrink-0 snap-start flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] transition-[border-color,box-shadow] duration-[var(--duration-base)] hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-glow)] md:w-full md:snap-align-none"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={225}
                className="aspect-video w-full object-cover"
              />
              <div className="flex flex-col gap-2 p-5">
                <h3 className="text-base font-semibold text-[var(--color-fg)]">
                  {project.title}
                </h3>
                <Text muted size="sm" className="leading-relaxed">
                  {project.description}
                </Text>
              </div>
            </article>
          ))}
        </div>

        {filtered.length > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2 md:hidden">
            {filtered.map((project, i) => (
              <button
                key={project.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-[var(--duration-base)]",
                  i === active
                    ? "w-6 bg-[var(--color-accent)]"
                    : "w-1.5 bg-[var(--color-border)] hover:bg-[var(--color-fg-muted)]",
                )}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
