"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import type { Profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/ButtonLink";

type ContactModalTriggerProps = {
  profile: Profile;
};

export function ContactModalTrigger({ profile }: ContactModalTriggerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        className="whitespace-nowrap text-sm font-medium text-slate-600 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        Contact
      </button>

      {isOpen
        ? createPortal(
            <div
              className="fixed inset-0 z-50"
              onMouseDown={() => setIsOpen(false)}
            >
          <button
            aria-label="연락 팝업 닫기"
                className="absolute inset-0 cursor-default bg-transparent"
            onClick={() => setIsOpen(false)}
            type="button"
          />
          <div
            aria-labelledby={titleId}
            aria-modal="true"
                className="absolute right-4 top-12 z-10 w-[calc(100%-2rem)] max-w-sm rounded-lg border border-slate-200 bg-white p-5 shadow-xl sm:right-6 sm:top-14 sm:p-6 lg:right-8 xl:right-[calc((100vw-72rem)/2+2rem)]"
                onMouseDown={(event) => event.stopPropagation()}
            role="dialog"
          >
            <button
              aria-label="닫기"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-md text-xl leading-none text-slate-500 hover:bg-slate-100 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              ×
            </button>
            <p className="text-sm font-semibold uppercase text-slate-500">
              Contact
            </p>
            <h2
              className="mt-3 pr-8 text-2xl font-bold leading-tight text-slate-950"
              id={titleId}
            >
              함께 만들 이야기가 있다면 편하게 연락 주세요.
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={profile.links.email.href} variant="primary">
                Email
              </ButtonLink>
              <ButtonLink href={profile.links.github.href}>GitHub</ButtonLink>
              <ButtonLink href="/resume">Resume</ButtonLink>
            </div>
          </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
