import type React from 'react';

declare module 'react' {
  // allow CSS custom properties
  export interface CSSProperties {
    [varName: `--${string}`]: string | number | undefined;
  }
}
