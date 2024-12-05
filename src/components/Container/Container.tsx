import { CSSProperties, FC, ReactNode } from "react";
import "./container.css";

const Container: FC<{
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}> = ({ children, className, style }) => (
  <div className={`container-main-div ${className}`} style={style}>
    {children}
  </div>
);

export default Container;
