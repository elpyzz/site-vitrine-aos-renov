"use client";

/** Vague décorative en bas de section (couleur = fond de la section suivante) */
export function SectionWave({ className = "" }: { className?: string }) {
  return (
    <div className={`te-section-wave-bottom ${className}`} aria-hidden>
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          d="M0 80V50.5C240 20 480 0 720 15s480 65 720 50.5V80H0Z"
          fill="currentColor"
          className="text-[#f5f7fa]"
        />
      </svg>
    </div>
  );
}

/** Vague pour section claire → fond blanc */
export function SectionWaveToWhite({ className = "" }: { className?: string }) {
  return (
    <div className={`te-section-wave-bottom ${className}`} aria-hidden>
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          d="M0 80V55c240-25 480-40 720-25s480 55 720 45V80H0Z"
          fill="currentColor"
          className="text-white"
        />
      </svg>
    </div>
  );
}
