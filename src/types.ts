export type router_type = {
  path: string;
  component: React.FC<any>;
};

export type tv_type = {
  value: string;
  caption: string;
  name: string;
  id: number;
  default: string;
  description: string;
};

export type resource_type = {
  id: number;
  type: string;
  contentType: string;
  pagetitle: string;
  longtitle: string;
  description: string;
  alias: string;
  aliasVisible: boolean;
  link_attributes: string;
  published: boolean;
  pub_date: number;
  unpub_date: number;
  parent: number;
  isfolder: boolean;
  introtext: string;
  content: string;
  richtext: boolean;
  template: number;
  menuindex: number;
  searchable: boolean;
  cacheable: boolean;
  createdby: number;
  createdon: number;
  editedby: number;
  editedon: number;
  deleted: boolean;
  deletedon: number;
  deletedby: number;
  publishedon: number;
  publishedby: number;
  menutitle: string;
  donthit: boolean;
  privateweb: boolean;
  privatemgr: boolean;
  content_dispo: number;
  hidemenu: boolean;
  class_key: string;
  context_key: string;
  content_type: number;
  uri: string;
  uri_override: boolean;
  hide_children_in_tree: boolean;
  show_in_tree: boolean;
  tvs?: { [name: string]: tv_type | undefined };
};

export type galleryItem_type = {
  MIGX_id: number;
  image: string;
  alt: string;
};
