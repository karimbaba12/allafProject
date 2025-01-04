// typings.d.ts
declare module 'emailjs-com' {
  export function send(
    serviceId: string,
    templateId: string,
    templateParams: { [key: string]: any },
    userId: string
  ): Promise<{ status: number; text: string }>;

  export function sendForm(
    serviceId: string,
    templateId: string,
    form: HTMLFormElement,
    userId: string
  ): Promise<{ status: number; text: string }>;

  export function init(userId: string): void;
}
