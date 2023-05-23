import DefaultImage from "assets/images/image-default.png";

const Image = ({ src, alt, ...restProps }) => {
  console.log(src);
  return (
    <figure className={restProps.className}>
      <img src={src || DefaultImage} alt={alt} />
    </figure>
  );
};

export default Image;
