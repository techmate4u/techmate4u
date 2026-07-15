"use client";

import { useState } from "react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import { ArrowRight, FileText } from "lucide-react";

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  excerpt: string;
}

interface BlogGridProps {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogGrid({ posts, categories }: BlogGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Categories Filter Bar */}
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

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-24 max-w-6xl mx-auto">
        {filteredPosts.map((post) => (
          <div key={post.slug} className="h-full">
            <Link href={`/blog/${post.slug}`} className="block h-full group">
              <Card
                className="p-6 md:p-8 h-full flex flex-col justify-between border border-[var(--line)] bg-[var(--panel)] hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Header info */}
                  <div className="flex items-center justify-between mb-4 text-[10px] font-bold uppercase tracking-wider text-[var(--text-soft)]">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[color-mix(in_srgb,var(--primary)_8%,transparent)] text-[var(--primary)] border border-[color-mix(in_srgb,var(--primary)_15%,transparent)] mb-4">
                    {post.category}
                  </span>

                  <h3 className="font-[family-name:var(--font-outfit)] text-lg md:text-xl font-black text-[var(--text)] mb-3 leading-tight group-hover:text-[var(--primary)] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs md:text-sm leading-relaxed text-[var(--text-muted)] line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer */}
                <div className="border-t pt-4 flex items-center justify-between" style={{ borderColor: "var(--line-soft)" }}>
                  <span className="text-xs font-bold text-[var(--text)]">
                    By {post.author}
                  </span>
                  <span className="text-xs font-bold text-[var(--primary)] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Read Article
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Card>
            </Link>
          </div>
        ))}

        {filteredPosts.length === 0 && (
          <div className="col-span-full py-20 text-center border border-dashed border-[var(--line)] rounded-2xl bg-[var(--surface-muted)]">
            <FileText className="h-10 w-10 text-[var(--text-soft)] mb-4 mx-auto" />
            <p className="text-sm font-semibold text-[var(--text-muted)]">
              No articles found in this category.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
