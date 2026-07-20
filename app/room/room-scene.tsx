"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type RoomMode = "day" | "night";

function currentRoomMode(): RoomMode {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18 ? "day" : "night";
}

const roomLinks = [
  {
    className: "room-hotspot--analysis",
    href: "/game-analysis",
    label: "游戏分析",
  },
  {
    className: "room-hotspot--experience",
    href: "/game-experience",
    label: "游戏经历",
  },
  {
    className: "room-hotspot--avg",
    href: "/avg-game",
    label: "文字互动游戏（已上线）",
  },
];

export function RoomScene() {
  const [mode, setMode] = useState<RoomMode>("day");
  const [manualMode, setManualMode] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setMode(currentRoomMode());
    setReady(true);

    if (manualMode) return;

    const timer = window.setInterval(() => {
      setMode(currentRoomMode());
    }, 60_000);

    return () => window.clearInterval(timer);
  }, [manualMode]);

  function toggleMode() {
    setManualMode(true);
    setMode((current) => (current === "day" ? "night" : "day"));
  }

  return (
    <main
      className={`room-page room-page--${mode}${ready ? " room-page--ready" : ""}`}
    >
      <div className="room-scene-frame">
        <img
          alt="日间的阁楼画室"
          className="room-scene-image room-scene-image--day"
          height="1152"
          loading="eager"
          src="/room-day.jpg"
          width="2048"
        />
        <img
          alt="夜间的阁楼画室"
          className="room-scene-image room-scene-image--night"
          height="1152"
          loading="eager"
          src="/room-night.jpg"
          width="2048"
        />

        <button
          aria-label={`切换到${mode === "day" ? "夜间" : "日间"}场景`}
          aria-pressed={mode === "night"}
          className="room-light-switch"
          onClick={toggleMode}
          title={`当前为${mode === "day" ? "日间" : "夜间"}场景，点击切换`}
          type="button"
        >
          <span className="room-bulb" aria-hidden="true" />
          <span className="room-mode-label" aria-hidden="true">
            {mode === "day" ? "DAY" : "NIGHT"}
          </span>
        </button>

        <nav aria-label="场景导航">
          {roomLinks.map((item) => (
            <Link
              className={`room-hotspot ${item.className}`}
              href={item.href}
              key={item.href}
            >
              <span className="room-hotspot-label">
                <span className="room-hotspot-marker" aria-hidden="true">
                  ▶
                </span>
                <span>{item.label}</span>
              </span>
            </Link>
          ))}
        </nav>

        <p className="room-time-note">criyz.树鱼</p>
      </div>
    </main>
  );
}
