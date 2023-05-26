import "swiper/css";

// Import Swiper styles
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { galleryItem_type } from "types";
import { getFullPath } from "utils/helpers";

type ownProps_type = {
  data: Array<galleryItem_type>;
  [x: string]: any;
};

const Gallery: FC<ownProps_type> = ({ data, ...restProps }) => {
  return (
    <Swiper spaceBetween={50} slidesPerView={3} loop={true}>
      {data.map((item, idx) => (
        <SwiperSlide key={idx}>
          <img src={getFullPath(item.image)} alt={item.alt || "Изображение"} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Gallery;
