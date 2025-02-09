import { ReactElement } from "react";

import "./Container.scss";

export const Container = ({
  children,
  customClass,
}: {
  children: ReactElement;
  customClass?: string;
}) => {
  return <div className={`container ${customClass}`}>{children}</div>;
};
