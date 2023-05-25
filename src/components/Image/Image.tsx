import DefaultImage from "assets/images/image-default.png";
import { FC } from "react";

type ownProps_type = {
  src: string;
  alt: string;
  [x: string]: any;
};

const Image: FC<ownProps_type> = ({ src, alt, ...restProps }) => {
  return (
    <picture className={restProps.className}>
      <img src={src || DefaultImage} alt={alt} loading="lazy" width={800} />
    </picture>
  );
};

export default Image;
