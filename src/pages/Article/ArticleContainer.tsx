import Page from "components/DefaultTemplate/DefaultTemplate";
import Gallery from "components/Gallery/Gallery";
import Image from "components/Image/Image";
import { FC, useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useLocation } from "react-router-dom";
import { getPage } from "redux/app_reducer";
import { AppStateType } from "redux/store";
import { galleryItem_type } from "types";
import { getFullPath } from "utils/helpers";

const ArticleContainer: FC<reduxProps_type> = ({ page, getPage, ...restProps }) => {
  const pathname = useLocation().pathname;

  useEffect(() => {
    if (!pathname) {
      return;
    }

    getPage(pathname.substring(1));
  }, [getPage, pathname]);

  const [galleryData, setGalleryData] = useState<Array<galleryItem_type>>([]);

  useEffect(() => {
    // @ts-ignore
    page?.tvs?.gallery?.value && setGalleryData(JSON.parse(page.tvs.gallery.value));
  }, [page]);

  return (
    <>
      <Page />
      {page?.tvs?.image?.value && (
        <Image src={getFullPath(page.tvs.image.value)} alt={page.pagetitle} />
      )}
      {galleryData.length && <Gallery data={galleryData} />}
    </>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  page: state.app.page,
});

const connector = connect(mapStateToProps, { getPage });

type reduxProps_type = ConnectedProps<typeof connector>;

export default connector(ArticleContainer);
