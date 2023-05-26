import DefaultImage from "assets/images/image-default.png";
import { FC } from "react";

type ownProps_type = {
  showDefaultImage?: boolean;
  src: string | undefined;
  alt: string;
  [x: string]: any;
};

const Image: FC<ownProps_type> = ({ showDefaultImage, src, alt, ...restProps }) => {
  if (!src && !showDefaultImage) {
    return <></>;
  }

  return (
    <picture className={restProps.className}>
      <img src={src || DefaultImage} alt={alt} loading="lazy" />
    </picture>
  );
};

export default Image;
