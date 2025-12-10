"use client";

import { useState } from "react";

type Palette = {
  name: string;
  canvas: string;
  glow: string;
  ink: string;
  accent: string;
  melt: string;
  titleGradient: string;
  shadow: string;
};

const palettes: Palette[] = [
  {
    name: "Neon Glacier",
    canvas:
      "radial-gradient(circle at 20% 20%, #0c1428, #050912 45%, #04060f 100%)",
    glow: "radial-gradient(circle at 18% 24%, rgba(94, 234, 255, 0.34), transparent 42%), radial-gradient(circle at 80% 16%, rgba(186, 188, 255, 0.32), transparent 40%), radial-gradient(circle at 40% 80%, rgba(124, 244, 207, 0.22), transparent 42%)",
    ink: "radial-gradient(70% 60% at 10% 24%, rgba(56, 225, 255, 0.38), transparent 60%), radial-gradient(75% 70% at 86% 24%, rgba(124, 119, 255, 0.32), transparent 55%), radial-gradient(60% 60% at 48% 92%, rgba(126, 247, 198, 0.28), transparent 60%)",
    accent: "linear-gradient(130deg, #6ff2ff 0%, #c2b9ff 100%)",
    melt: "#7df7c5",
    titleGradient:
      "linear-gradient(120deg, #8ef1ff 0%, #c9b9ff 45%, #7df7c5 100%)",
    shadow: "rgba(139, 226, 255, 0.85)",
  },
  {
    name: "Iridescent Magma",
    canvas:
      "radial-gradient(circle at 75% 15%, #1d0f21, #0b050d 40%, #050308 90%)",
    glow: "radial-gradient(circle at 78% 20%, rgba(255, 113, 183, 0.35), transparent 38%), radial-gradient(circle at 20% 26%, rgba(255, 174, 94, 0.35), transparent 46%), radial-gradient(circle at 52% 86%, rgba(141, 76, 255, 0.22), transparent 50%)",
    ink: "radial-gradient(72% 65% at 14% 32%, rgba(255, 180, 92, 0.35), transparent 56%), radial-gradient(70% 60% at 82% 26%, rgba(255, 96, 160, 0.3), transparent 60%), radial-gradient(60% 60% at 48% 86%, rgba(137, 92, 255, 0.3), transparent 62%)",
    accent: "linear-gradient(140deg, #ffbe6a 0%, #ff71c0 100%)",
    melt: "#8e6aff",
    titleGradient:
      "linear-gradient(115deg, #ffd08a 0%, #ff8ac3 40%, #9f7bff 100%)",
    shadow: "rgba(255, 140, 148, 0.8)",
  },
  {
    name: "Lime Phantom",
    canvas:
      "radial-gradient(circle at 30% 20%, #0a1308, #050a05 50%, #020604 100%)",
    glow: "radial-gradient(circle at 18% 24%, rgba(139, 255, 99, 0.32), transparent 42%), radial-gradient(circle at 82% 18%, rgba(96, 230, 255, 0.25), transparent 44%), radial-gradient(circle at 48% 86%, rgba(147, 255, 201, 0.24), transparent 52%)",
    ink: "radial-gradient(72% 70% at 16% 26%, rgba(134, 255, 131, 0.32), transparent 52%), radial-gradient(65% 65% at 82% 30%, rgba(94, 219, 255, 0.26), transparent 58%), radial-gradient(60% 62% at 50% 90%, rgba(184, 255, 182, 0.24), transparent 60%)",
    accent: "linear-gradient(135deg, #8fff81 0%, #72f6ff 100%)",
    melt: "#90ffbc",
    titleGradient:
      "linear-gradient(120deg, #b4ff8c 0%, #7af2ff 45%, #f2ffb8 100%)",
    shadow: "rgba(136, 255, 158, 0.8)",
  },
  {
    name: "Ultraviolet Leak",
    canvas:
      "radial-gradient(circle at 26% 18%, #0f0b26, #080618 48%, #040312 100%)",
    glow: "radial-gradient(circle at 24% 26%, rgba(148, 118, 255, 0.36), transparent 44%), radial-gradient(circle at 82% 14%, rgba(90, 196, 255, 0.32), transparent 42%), radial-gradient(circle at 50% 82%, rgba(255, 120, 214, 0.22), transparent 52%)",
    ink: "radial-gradient(70% 66% at 18% 28%, rgba(141, 118, 255, 0.32), transparent 56%), radial-gradient(70% 64% at 80% 26%, rgba(94, 200, 255, 0.26), transparent 58%), radial-gradient(60% 60% at 52% 88%, rgba(255, 140, 214, 0.26), transparent 60%)",
    accent: "linear-gradient(140deg, #9a7bff 0%, #5cc0ff 100%)",
    melt: "#ff8adb",
    titleGradient:
      "linear-gradient(120deg, #b59bff 0%, #64c6ff 45%, #ffb6e7 100%)",
    shadow: "rgba(155, 120, 255, 0.75)",
  },
];

export default function Home() {
  const [active, setActive] = useState(0);
  const palette = palettes[active];

  const cyclePalette = () => setActive((prev) => (prev + 1) % palettes.length);

  return (
    <div className="relative min-h-screen overflow-hidden text-slate-50">
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{ background: palette.canvas }}
      />
      <div
        className="absolute inset-0 opacity-90 mix-blend-screen blur-3xl transition-all duration-700"
        style={{ background: palette.glow }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.05),transparent_25%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.04),transparent_35%)]" />

      <main className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">
        <div className="w-full max-w-5xl space-y-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              hello world !!!!
            </span>
            <button
              type="button"
              onClick={cyclePalette}
              className="group relative overflow-hidden rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white transition duration-300 hover:border-white/40 hover:text-white"
            >
              <span className="absolute inset-0 bg-white/0 transition duration-300 group-hover:bg-white/10" />
              <span className="relative z-10 flex items-center gap-2">
                色をスプラッシュ
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/15 text-[10px] font-black text-white/80">
                  {active + 1}
                </span>
              </span>
            </button>
          </div>

          <div
            onClick={cyclePalette}
            className="relative isolate overflow-hidden rounded-[28px] border border-white/12 bg-white/5 p-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition duration-500 hover:border-white/25 sm:p-14"
          >
            <div
              className="pointer-events-none absolute -inset-24 opacity-80 transition duration-700"
              style={{ background: palette.ink }}
            />
            <div
              className="absolute -left-20 -top-16 h-64 w-64 rounded-full blur-3xl opacity-70 animate-blob"
              style={{ background: palette.accent, boxShadow: `0 0 120px ${palette.shadow}` }}
            />
            <div
              className="absolute -right-10 -bottom-12 h-52 w-52 rounded-full blur-3xl opacity-60 animate-blob-fast"
              style={{ background: palette.melt, boxShadow: `0 0 120px ${palette.shadow}` }}
            />

            <div className="relative space-y-8 sm:space-y-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                click or tap to leak new colors
              </p>
              <h1
                className="text-5xl font-black leading-tight drop-shadow-md sm:text-6xl"
                style={{
                  backgroundImage: palette.titleGradient,
                  color: "transparent",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                解決
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/80">
                次世代の{" "}
                <span className="font-semibold text-white">“リーキー”</span>{" "}
                グラデーションであいさつ。クリックするたびにインクがにじむように色が変わり、同じ
                Hello World でもまったく違う表情になります。
              </p>

              <div className="flex flex-wrap items-center gap-4">
                {palettes.map((paletteOption, index) => (
                  <button
                    key={paletteOption.name}
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setActive(index);
                    }}
                    aria-label={`Switch to ${paletteOption.name}`}
                    className={`group relative flex h-14 w-14 items-center justify-center rounded-2xl border transition duration-300 ${
                      active === index
                        ? "border-white/80 shadow-[0_0_0_6px_rgba(255,255,255,0.05)]"
                        : "border-white/20 hover:border-white/40"
                    }`}
                  >
                    <span
                      className="absolute inset-0 rounded-2xl opacity-60 blur-xl transition duration-300 group-hover:opacity-80"
                      style={{ background: paletteOption.accent }}
                    />
                    <span
                      className="relative h-7 w-7 rounded-xl"
                      style={{
                        background: paletteOption.accent,
                        boxShadow: `0 15px 35px -12px ${paletteOption.shadow}`,
                      }}
                    />
                  </button>
                ))}
                <span className="text-sm text-white/60">
                  クリックでインクが漏れるように色チェンジ
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
