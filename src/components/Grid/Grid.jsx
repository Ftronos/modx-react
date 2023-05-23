import classNames from "classnames";
import Card from "components/Card/Card";
import styles from "./Grid.module.scss";
import { Link } from "react-router-dom";

const Grid = ({ data, ...restProps }) => {
  return (
    <div className={classNames(styles.grid, restProps.className)}>
      {data.map((item) => (
        <Link to={`/articles/${item.alias}`} key={item.id}>
          <Card data={item} />
        </Link>
      ))}
    </div>
  );
};

export default Grid;
