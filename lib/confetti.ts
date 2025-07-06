import confetti, { Options } from "canvas-confetti";

const count = 200;
const defaults: Partial<Options> = {
  origin: { y: 0.7 },
};

function fire(particleRatio: number, opts: Partial<Options>) {
  confetti({
    ...defaults,
    ...opts,
    particleCount: Math.floor(count * particleRatio),
  });
}

export function triggerConfetti(times = 3, intervalMs = 500) {
  let countTriggered = 0;

  const interval = setInterval(() => {
    if (countTriggered >= times) {
      clearInterval(interval);
      return;
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });

    countTriggered++;
  }, intervalMs);
}
