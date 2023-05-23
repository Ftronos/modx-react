import { Link } from "react-router-dom";

const Header = ({ menu, ...restProps }) => {
  console.log(menu);
  return (
    <>
      {menu.map((menuItem) => (
        <Link to={menuItem.uri}>{menuItem.pagetitle}</Link>
      ))}
    </>
  );
};

export default Header;
