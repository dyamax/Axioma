export {};

declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        platform: string;
        initData: string;
        initDataUnsafe: {
          user?: {
            id: number;
            first_name?: string;
            username?: string;
          };
        };
        ready: () => void;
        expand: () => void;
      };
    };
  }
}
