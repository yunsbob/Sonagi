import { useEffect, useState } from 'react';

const useScript = (url: string, onload: () => void) => {
  useEffect(() => {
    const script: HTMLScriptElement = document.createElement('script');

    script.src = url;
    script.onload = onload;

    document.head.appendChild(script);

    return () => {
      window.google?.accounts.id.cancel();
      document.head.removeChild(script);
    };
  }, [url, onload]);
};

export { useScript };
