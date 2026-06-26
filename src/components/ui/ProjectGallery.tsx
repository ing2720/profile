"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { ProjectImage } from "@/data/projects";

type ProjectGalleryProps = {
  images: ProjectImage[];
};

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedImage =
    selectedIndex === null ? null : images[selectedIndex];

  function openImage(index: number) {
    setSelectedIndex(index);
    dialogRef.current?.showModal();
  }

  function closeDialog() {
    dialogRef.current?.close();
    setSelectedIndex(null);
  }

  function showPreviousImage() {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) {
        return null;
      }

      return (currentIndex - 1 + images.length) % images.length;
    });
  }

  function showNextImage() {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) {
        return null;
      }

      return (currentIndex + 1) % images.length;
    });
  }

  return (
    <>
      <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            aria-label={`${image.alt} 크게 보기`}
            className="group w-52 shrink-0 snap-start overflow-hidden rounded-md border border-slate-200 bg-slate-50 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900 sm:w-56 lg:w-[calc((100%_-_2.25rem)/4)]"
            key={image.src}
            onClick={() => openImage(index)}
            type="button"
          >
            <span className="relative block aspect-[16/10] overflow-hidden">
              <Image
                alt={image.alt}
                className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                fill
                sizes="(max-width: 640px) 50vw, 240px"
                src={image.src}
              />
            </span>
            {image.caption ? (
              <span className="block truncate border-t border-slate-200 px-3 py-2 text-xs font-medium text-slate-600">
                {image.caption}
              </span>
            ) : null}
          </button>
        ))}
      </div>

      <dialog
        aria-label="프로젝트 이미지 확대 보기"
        className="m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-6xl overflow-hidden rounded-lg border border-slate-200 bg-white p-0 shadow-2xl backdrop:bg-slate-950/80"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeDialog();
          }
        }}
        onClose={() => setSelectedIndex(null)}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            showPreviousImage();
          }

          if (event.key === "ArrowRight") {
            showNextImage();
          }
        }}
        ref={dialogRef}
      >
        {selectedImage ? (
          <div className="flex max-h-[90vh] flex-col">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-4 py-3 sm:px-5">
              <p className="min-w-0 truncate text-sm font-semibold text-slate-900">
                {selectedImage.caption ?? selectedImage.alt}
              </p>
              <button
                aria-label="확대 이미지 닫기"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-2xl leading-none text-slate-600 hover:bg-slate-100 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                onClick={closeDialog}
                type="button"
              >
                ×
              </button>
            </div>
            <div className="relative flex min-h-0 flex-1 items-center bg-slate-950">
              <Image
                alt={selectedImage.alt}
                className="h-auto max-h-[calc(90vh-4rem)] w-full object-contain"
                height={selectedImage.height}
                priority
                src={selectedImage.src}
                width={selectedImage.width}
              />
              {images.length > 1 ? (
                <>
                  <button
                    aria-label="이전 프로젝트 이미지"
                    className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-slate-950/70 text-3xl leading-none text-white hover:bg-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-5"
                    onClick={showPreviousImage}
                    type="button"
                  >
                    ‹
                  </button>
                  <button
                    aria-label="다음 프로젝트 이미지"
                    className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-slate-950/70 text-3xl leading-none text-white hover:bg-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-5"
                    onClick={showNextImage}
                    type="button"
                  >
                    ›
                  </button>
                </>
              ) : null}
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
