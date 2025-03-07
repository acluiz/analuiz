import { ReactElement } from "react";

import "./Button.scss";

interface IButtonProps {
  tagName?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  customClass?: string;
  children: ReactElement;
  onClick?: VoidFunction;
}

export const Button = ({
  tagName = "button",
  target,
  rel,
  href,
  ariaLabel,
  customClass,
  children,
  onClick,
}: IButtonProps) => {
  const CustomTag = tagName;

  return (
    <CustomTag
      target={target}
      rel={rel}
      href={href}
      aria-label={ariaLabel}
      className={`button ${customClass}`}
      onClick={onClick}
    >
      {children}
    </CustomTag>
  );
};
