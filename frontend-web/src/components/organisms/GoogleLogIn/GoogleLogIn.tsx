import { useScript } from '@/hooks/useScript';
import React, { useRef } from 'react';
import { styled } from 'styled-components';

const GoogleLogInContainer = styled.div`
  display: none;
`;

const GoogleLogIn = ({ onGoogleSignIn = (res: CredentialResponse) => {} }) => {
  const googleSignInButton = useRef<HTMLDivElement>(null);

  const onClickGoogleLogIn = () => {
    const element: HTMLElement = document.querySelector(
      '[aria-labelledby="button-label"]'
    ) as HTMLElement;
    element.click();
  };

  // 비동기로 스크립트 load
  useScript('https://accounts.google.com/gsi/client', () => {
    if (typeof window.google !== 'undefined') {
      const { google } = window;

      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: onGoogleSignIn,
      });

      if (googleSignInButton.current) {
        google.accounts.id.renderButton(googleSignInButton.current, {
          type: 'standard',
          theme: 'outline',
          text: 'signin_with',
          size: 'large',
          width: '100%',
          shape: 'square',
        });
      }
    }
  });
  return (
    <>
      <GoogleLogInContainer ref={googleSignInButton} />
      <button onClick={onClickGoogleLogIn}>구글..로그인..해볼래?</button>
    </>
  );
};

export { GoogleLogIn };
