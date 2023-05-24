import classNames from "classnames";
import { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";
import { AppStateType } from "redux/store";

import styles from "./Header.module.scss";

const HeaderContainer: FC<reduxProps_type> = ({ menu, ...restProps }) => {
  return (
    <div className={classNames("wrapper", "full-width", styles.header)}>
      <div className={styles.header__container}>
        <Link to="/" className={styles.header__logo}>
          Главная
        </Link>
        {menu.map((menuItem) => (
          <Link to={menuItem.uri} key={menuItem.uri}>
            {menuItem.pagetitle}
          </Link>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  menu: state.app.menu,
});

const connector = connect(mapStateToProps);

type reduxProps_type = ConnectedProps<typeof connector>;

export default connector(HeaderContainer);
