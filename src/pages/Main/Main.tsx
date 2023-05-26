import Page from "components/DefaultTemplate/DefaultTemplate";
import { FC, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { getMainPage } from "redux/app_reducer";
import { AppStateType } from "redux/store";

const Main: FC<reduxProps_type> = ({ getMainPage, ...restProps }) => {
  useEffect(() => {
    getMainPage();
  }, [getMainPage]);

  return (
    <>
      <Page />
    </>
  );
};

const mapStateToProps = (state: AppStateType) => ({});

const connector = connect(mapStateToProps, { getMainPage });

type reduxProps_type = ConnectedProps<typeof connector>;

export default connector(Main);
