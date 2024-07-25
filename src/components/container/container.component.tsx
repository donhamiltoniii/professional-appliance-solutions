import { ReactNode } from "react";

import "./container.styles.scss";

const Container = ({ children }: { children: ReactNode }): ReactNode => (
  <div className="container">{children}</div>
);

export default Container;
