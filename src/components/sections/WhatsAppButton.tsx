"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const number = "919327263267"; // TechMate4u WhatsApp connection number
  const message = encodeURIComponent("Hello TechMate4u! I'm interested in web design & development services.");
  const url = `https://wa.me/${number}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[190] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 transition-transform group-hover:rotate-12 fill-white" />
      <span className="absolute right-16 rounded-lg bg-slate-900/90 px-3 py-1.5 text-xs font-bold text-white opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 whitespace-nowrap shadow-lg">
        Chat with us
      </span>
    </a>
  );
}
