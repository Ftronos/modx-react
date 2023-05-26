import { FC } from "react";

type ownProps_type = {
  children: React.ReactNode;
  [x: string]: any;
};

const H1: FC<ownProps_type> = ({ children, ...restProps }) => {
  return (
    <>
      <h1 className={restProps.className}>{children}</h1>
    </>
  );
};

export default H1;
