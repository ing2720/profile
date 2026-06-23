"use client";

type PrintButtonProps = {
  children: React.ReactNode;
};

export function PrintButton({ children }: PrintButtonProps) {
  return (
    <button
      aria-label="현재 웹 이력서 페이지를 인쇄하거나 PDF로 저장"
      className="inline-flex min-h-11 max-w-full items-center justify-center rounded-md border border-slate-900 bg-slate-900 px-4 py-2 text-center text-sm font-semibold leading-5 text-white transition-colors hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 print:hidden"
      onClick={() => window.print()}
      type="button"
    >
      {children}
    </button>
  );
}
