import { Link } from "react-router-dom";
import { connect } from "react-redux";

import styles from "./Header.module.scss";
import classNames from "classnames";

const HeaderContainer = ({ menu, ...restProps }) => {
  return (
    <div className={classNames("wrapper", "full-width", styles.header)}>
      <div className={styles.header__container}>
        <Link to="/" className={styles.header__logo}>
          Главная
        </Link>
        {menu.map((menuItem) => (
          <Link to={menuItem.uri}>{menuItem.pagetitle}</Link>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  menu: state.app.menu,
});

export default connect(mapStateToProps)(HeaderContainer);
