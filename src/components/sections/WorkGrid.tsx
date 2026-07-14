"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
              {isActive && (
                <motion.span
                  layoutId="activeFilterRing"
                  className="absolute inset-0 rounded-full border-2 border-[var(--primary)] -m-[2px] pointer-events-none"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {cat}
            </button>
          );
        })}
      </div>

      {/* Project Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pb-24 max-w-6xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={project.title}
              className="h-full"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="col-span-full py-20 text-center border border-dashed border-[var(--line)] rounded-2xl bg-[var(--surface-muted)]">
            <FolderOpen className="h-10 w-10 text-[var(--text-soft)] mb-4 mx-auto" />
            <p className="text-sm font-semibold text-[var(--text-muted)]">
              No projects found in this category.
            </p>
          </div>
        )}
      </motion.div>
    </>
  );
}
