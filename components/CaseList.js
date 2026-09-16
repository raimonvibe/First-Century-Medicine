"use client";

import { useState } from "react";
import { cases } from "@/lib/cases";

export default function CaseList() {
  const [openId, setOpenId] = useState("fever");

  return (
    <div className="space-y-4">
      {cases.map((item) => {
        const open = openId === item.id;
        return (
          <article key={item.id} className="border border-sand bg-cream">
            <button
              type="button"
              className="flex w-full items-baseline justify-between gap-3 px-3 py-4 text-left sm:gap-4 sm:px-4"
              onClick={() => setOpenId(open ? "" : item.id)}
              aria-expanded={open}
            >
              <span className="block min-w-0">
                <span className="block font-sans text-[10px] uppercase tracking-[0.22em] text-gold">
                  Case {item.number}
                </span>
                <span className="block font-display text-xl text-olive md:text-3xl sm:text-2xl">
                  {item.title}
                </span>
                <span className="mt-1 block text-sm text-ink-soft">
                  {item.patient}
                </span>
              </span>
              <span className="shrink-0 font-sans text-gold">{open ? "–" : "+"}</span>
            </button>
            {open ? (
              <div className="space-y-4 border-t border-sand px-4 py-5 text-[0.98rem] leading-relaxed">
                <p>
                  <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-terracotta">
                    Setting.{" "}
                  </span>
                  {item.setting}
                </p>
                <p>
                  <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-terracotta">
                    What they see.{" "}
                  </span>
                  {item.symptoms}
                </p>
                <p>
                  <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-terracotta">
                    Diagnosis.{" "}
                  </span>
                  {item.diagnosis}
                </p>
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-terracotta">
                    The plan
                  </p>
                  <ul className="mt-2 space-y-1">
                    {item.plan.map((step) => (
                      <li key={step} className="pl-4">
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
                <p>
                  <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-terracotta">
                    Likely ending then.{" "}
                  </span>
                  {item.outcome}
                </p>
                <p className="border-t border-sand pt-4 text-ink-soft">
                  <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-olive">
                    A modern reading.{" "}
                  </span>
                  {item.modern}
                </p>
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
