import type { ReactNode, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Container = ({ children, style, ...rest }: ContainerProps) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "0 24px",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
