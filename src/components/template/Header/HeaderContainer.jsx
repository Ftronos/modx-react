import { Link } from "react-router-dom";
import { connect } from "react-redux";

const HeaderContainer = ({ menu, ...restProps }) => {
  return (
    <>
      {menu.map((menuItem) => (
        <Link to={menuItem.uri}>{menuItem.pagetitle}</Link>
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  menu: state.app.menu,
});

export default connect(mapStateToProps)(HeaderContainer);
