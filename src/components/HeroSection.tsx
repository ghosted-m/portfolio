import type { ReactNode } from 'react';

type tp = {
  children: ReactNode;
};
export default function Hero({ children }: tp) {
  return (
    <>
      <div className="flex justify-around p-12">{children}</div>
    </>
  );
}
