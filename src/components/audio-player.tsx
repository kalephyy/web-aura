"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AudioPlayerProps = {
  src: string;
  title?: string;
  className?: string;
};

export default function AudioPlayer({ src, title = "", className }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const readDuration = () => {
      const d = audio.duration;
      if (isFinite(d) && !isNaN(d)) setDuration(d);
    };
    const onLoaded = () => readDuration();
    const onTime = () => !isSeeking && setCurrentTime(audio.currentTime || 0);
    const onEnded = () => setIsPlaying(false);
    const onDurationChange = () => readDuration();
    const onCanPlay = () => readDuration();

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("durationchange", onDurationChange);
    audio.addEventListener("canplay", onCanPlay);
    audio.load();
    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("durationchange", onDurationChange);
      audio.removeEventListener("canplay", onCanPlay);
    };
  }, [isSeeking]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const fmt = (t: number) => {
    if (!isFinite(t)) return "0:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const progress = useMemo(() => (duration > 0 ? (currentTime / duration) * 100 : 0), [currentTime, duration]);

  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const pct = Number(e.target.value);
    const newTime = (pct / 100) * duration;
    setCurrentTime(newTime);
  };

  const onSeekStart = () => setIsSeeking(true);
  const onSeekEnd = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = currentTime;
    setIsSeeking(false);
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="rounded-2xl p-4 md:p-5 card" style={{ borderColor: "rgba(255,255,255,0.7)" }}>
        <div className="flex items-center gap-4">
          <button
            aria-label={isPlaying ? "Pause" : "Play"}
            onClick={toggle}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full text-white shadow-sm"
            style={{ background: "linear-gradient(135deg, var(--rose-gold), var(--gold))" }}
          >
            {isPlaying ? (
              <PauseIcon />
            ) : (
              <PlayIcon />
            )}
          </button>

          <div className="flex-1 min-w-0">
            {title ? (
              <div className="truncate text-sm mb-1 opacity-80">{title}</div>
            ) : null}
            <div className="flex items-center gap-3">
              <span className="text-xs opacity-70 w-10 text-right">{fmt(currentTime)}</span>
              <input
                type="range"
                min={0}
                max={100}
                step={0.1}
                value={progress}
                onChange={onSeek}
                onMouseDown={onSeekStart}
                onMouseUp={onSeekEnd}
                onTouchStart={onSeekStart}
                onTouchEnd={onSeekEnd}
                className="flex-1 h-2 appearance-none rounded-full bg-[var(--muted)]"
                style={{
                  background:
                    `linear-gradient(90deg, var(--rose-gold) ${progress}%, var(--muted) ${progress}%)`,
                }}
              />
              <span className="text-xs opacity-70 w-10">{fmt(duration)}</span>
            </div>
          </div>
        </div>
        <audio ref={audioRef} preload="auto">
          <source src={src} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
    </svg>
  );
}


