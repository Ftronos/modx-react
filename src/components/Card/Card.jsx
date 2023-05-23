import classNames from "classnames";
import Image from "components/Image/Image";
import { remoteUrl } from "constants";
import { useEffect } from "react";
import styles from "./Card.module.scss";

const Card = ({ data, ...restProps }) => {
  useEffect(() => {
    document.title = data.pagetitle;
  }, [data.pagetitle]);

  return (
    <div className={classNames(styles.card, restProps.className)}>
      <Image
        src={data?.tvs?.image?.value ? remoteUrl + "/" + data.tvs.image.value : ""}
        alt={data.pagetitle}
        className={styles.card__img}
      />
      <p className={styles.card__title}>{data.pagetitle}</p>
      {data.introtext && <p>{data.introtext}</p>}
    </div>
  );
};

export default Card;
