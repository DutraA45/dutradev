"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function BackgroundParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: "transparent",
      },
      fpsLimit: 120,
      particles: {
        number: {
          value: 40,
          density: { enable: true },
        },
        color: {
          value: "#4ade80",
        },
        links: {
          enable: true,
          color: "#4ade80",
          distance: 120,
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
        },
        size: {
          value: { min: 1, max: 3 },
        },
        opacity: {
          value: 0.3,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 100,
          },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10"
      options={options}
    />
  );
}
