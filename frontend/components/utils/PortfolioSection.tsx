"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { usePortfolioProjects } from "@/hooks/usePortfolioProjects";

const GRID_COLS = 2;
const SINGLE_COLUMN_MQ = "(max-width: 700px)";

function projectVariant(index: number, singleColumn: boolean): "cream" | "blue" {
  if (singleColumn) {
    return index % 2 === 0 ? "cream" : "blue";
  }
  const row = Math.floor(index / GRID_COLS);
  const col = index % GRID_COLS;
  return (row + col) % 2 === 0 ? "cream" : "blue";
}

export function PortfolioSection() {
  const { projects, status, error } = usePortfolioProjects();
  const baseId = useId();
  const [open, setOpen] = useState<Set<number>>(() => new Set());
  const [singleColumn, setSingleColumn] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(SINGLE_COLUMN_MQ);
    const update = () => setSingleColumn(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const toggle = (index: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  if (status === "loading") {
    return <p className="portfolio-empty">Loading portfolio…</p>;
  }

  if (status === "error") {
    return (
      <p className="portfolio-empty">
        Could not load portfolio from Google Sheets. {error}
      </p>
    );
  }

  if (projects.length === 0) {
    return (
      <p className="portfolio-empty">
        No portfolio projects found. Add rows to the published Google Sheet.
      </p>
    );
  }

  return (
    <div className="projects">
      {projects.map((project, index) => {
        const isOpen = open.has(index);
        const panelId = `${baseId}-panel-${index}`;

        return (
          <article
            key={`${project.title}-${index}`}
            className={`project project--${projectVariant(index, singleColumn)}${isOpen ? " open" : ""}`}
          >
            <button
              type="button"
              className="project-summary"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
            >
              {project.img ? (
                <Image
                  className="project-thumb"
                  src={project.img}
                  alt=""
                  width={120}
                  height={88}
                  loading="lazy"
                />
              ) : (
                <div className="project-thumb project-thumb--empty" aria-hidden />
              )}
              <div className="project-summary-text">
                {project.type ? (
                  <div className="p-id">
                    <span>{project.type}</span>
                  </div>
                ) : null}
                <h3>{project.title}</h3>
                {project.stack ? (
                  <p className="stack">{project.stack}</p>
                ) : null}
              </div>
              <span className="project-toggle" aria-hidden>
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <div
              id={panelId}
              className="project-details"
              hidden={!isOpen}
            >
              {project.bio ? <p>{project.bio}</p> : null}
              {project.url ? (
                <div className="p-foot">
                  <span>{project.type || "LINK"}</span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    VIEW <span className="arrow">→</span>
                  </a>
                </div>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}
