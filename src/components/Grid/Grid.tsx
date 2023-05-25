import classNames from "classnames";
import Card from "components/Card/Card";
import { FC } from "react";
import { Link } from "react-router-dom";
import { resource_type } from "types";

import styles from "./Grid.module.scss";

type ownProps_type = {
  data: Array<resource_type>;
  [x: string]: any;
};

const Grid: FC<ownProps_type> = ({ data, ...restProps }) => {
  return (
    <div className={classNames(styles.grid, restProps.className)}>
      {data.map((item) => (
        <Link to={"/" + item.uri} key={item.id}>
          <Card data={item} />
        </Link>
      ))}
    </div>
  );
};

export default Grid;
