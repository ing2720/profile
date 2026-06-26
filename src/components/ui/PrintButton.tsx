"use client";

type PrintButtonProps = {
  children: React.ReactNode;
};

export function PrintButton({ children }: PrintButtonProps) {
  function handlePrint() {
    const previousTitle = document.title;

    document.title = " ";

    window.addEventListener(
      "afterprint",
      () => {
        document.title = previousTitle;
      },
      { once: true }
    );

    window.print();
  }

  return (
    <button
      aria-label="현재 웹 이력서 페이지를 인쇄하거나 PDF로 저장"
      className="inline-flex min-h-11 max-w-full items-center justify-center rounded-md border border-slate-900 bg-slate-900 px-4 py-2 text-center text-sm font-semibold leading-5 text-white transition-colors hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 print:hidden"
      onClick={handlePrint}
      title="PDF 저장 시 브라우저 인쇄 옵션에서 머리글/바닥글을 끄면 날짜와 URL이 제외됩니다."
      type="button"
    >
      {children}
    </button>
  );
}
