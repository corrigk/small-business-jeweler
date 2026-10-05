"use client";

import { useSyncExternalStore } from "react";
import { business } from "@/data/business";

// Opening and closing minutes (Eastern time), Monday = 0.
const OPEN = 9 * 60 + 30;
const CLOSE = 15 * 60 + 45;

function easternNow() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const hour = Number(get("hour")) % 24;
  return { day: get("weekday"), minutes: hour * 60 + Number(get("minute")) };
}

// "Day|minutes" string (a stable primitive for useSyncExternalStore). Empty on the server,
// so the open/closed badge only appears once the browser knows the real time.
const subscribe = (cb: () => void) => {
  const id = setInterval(cb, 60_000);
  return () => clearInterval(id);
};
const snapshot = () => {
  const n = easternNow();
  return `${n.day}|${n.minutes}`;
};

export function HoursList({ className = "" }: { className?: string }) {
  const raw = useSyncExternalStore(subscribe, snapshot, () => "");
  const [day, mins] = raw.split("|");
  const now = raw ? { day, minutes: Number(mins) } : null;

  const today = business.hours.find((h) => h.day === now?.day);
  const isOpen =
    !!now && !!today && today.time !== "Closed" && now.minutes >= OPEN && now.minutes < CLOSE;

  return (
    <div className={className}>
      {now && (
        <p className="mb-3 text-sm font-semibold">
          <span className={`mr-2 inline-block h-2 w-2 rounded-full ${isOpen ? "bg-green-500" : "bg-red-500"}`} />
          {isOpen ? "Open now · closes 3:45 PM" : "Closed right now"}
        </p>
      )}
      <ul className="divide-y divide-line">
        {business.hours.map((h) => (
          <li
            key={h.day}
            className={`flex justify-between gap-6 py-2 text-sm ${now?.day === h.day ? "font-bold" : ""}`}
          >
            <span>{h.day}</span>
            <span className={h.time === "Closed" ? "text-muted" : ""}>{h.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
