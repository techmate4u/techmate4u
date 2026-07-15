"use client";

import { useState } from "react";
import ProjectCard, { type Project } from "@/components/ui/ProjectCard";
import { FolderOpen } from "lucide-react";

interface WorkGridProps {
  projects: Project[];
  categories: string[];
}

export default function WorkGrid({ projects, categories }: WorkGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Categories filter bar */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer select-none border focus:outline-none ${
                isActive
                  ? "border-[var(--primary)] text-white"
                  : "border-[var(--line)] text-[var(--text-soft)] hover:border-[var(--line-strong)] hover:text-[var(--text)] bg-[var(--surface-muted)]"
              }`}
              style={{
                background: isActive ? "var(--primary)" : "",
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pb-24 max-w-6xl mx-auto">
        {filteredProjects.map((project) => (
          <div key={project.title} className="h-full">
            <ProjectCard {...project} />
          </div>
        ))}

        {filteredProjects.length === 0 && (
          <div className="col-span-full py-20 text-center border border-dashed border-[var(--line)] rounded-2xl bg-[var(--surface-muted)]">
            <FolderOpen className="h-10 w-10 text-[var(--text-soft)] mb-4 mx-auto" />
            <p className="text-sm font-semibold text-[var(--text-muted)]">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
