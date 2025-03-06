import { ReactElement } from "react";

import "./Button.scss";

export const Button = ({
  ariaLabel,
  customClass,
  children,
  onClick,
}: {
  ariaLabel?: string;
  customClass?: string;
  children: ReactElement;
  onClick: VoidFunction;
}) => {
  return (
    <button
      aria-label={ariaLabel}
      className={`button ${customClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
