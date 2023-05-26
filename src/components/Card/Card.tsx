import classNames from "classnames";
import Image from "components/Image/Image";
import { FC } from "react";
import { resource_type } from "types";
import { getFullPath } from "utils/helpers";

import styles from "./Card.module.scss";

type ownProps_type = {
  data: resource_type;
  [x: string]: any;
};

const Card: FC<ownProps_type> = ({ data, ...restProps }) => {
  return (
    <div className={classNames(styles.card, restProps.className)}>
      <Image
        src={data?.tvs?.image?.value && getFullPath(data.tvs.image.value)}
        showDefaultImage={true}
        alt={data.pagetitle}
        className={styles.card__img}
      />
      <p className={styles.card__title}>{data.pagetitle}</p>
      {data.introtext && <p>{data.introtext}</p>}
    </div>
  );
};

export default Card;
