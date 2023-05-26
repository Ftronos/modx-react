import Page from "components/DefaultTemplate/DefaultTemplate";
import Image from "components/Image/Image";
import { FC, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useLocation } from "react-router-dom";
import { getPage } from "redux/app_reducer";
import { AppStateType } from "redux/store";
import { getFullPath } from "utils/helpers";

const ArticleContainer: FC<reduxProps_type> = ({ page, getPage, ...restProps }) => {
  const pathname = useLocation().pathname;

  useEffect(() => {
    if (!pathname) {
      return;
    }

    getPage(pathname.substring(1));
  }, [getPage, pathname]);

  return (
    <>
      <Page />
      {page?.tvs?.image?.value && (
        <Image src={getFullPath(page.tvs.image.value)} alt={page.pagetitle} />
      )}
    </>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  page: state.app.page,
});

const connector = connect(mapStateToProps, { getPage });

type reduxProps_type = ConnectedProps<typeof connector>;

export default connector(ArticleContainer);
