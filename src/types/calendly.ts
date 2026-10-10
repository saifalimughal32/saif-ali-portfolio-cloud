export type CalendlyApi = {
  initPopupWidget: (opts: { url: string }) => void;
  initInlineWidget: (opts: {
    url: string;
    parentElement: HTMLElement;
  }) => void;
};

declare global {
  interface Window {
    Calendly?: CalendlyApi;
  }
}

export {};
