interface IHome {
  articles: any;
  onClickTag: (tag: string, onClickTagByPage: () => void) => void;
  onClickTagByPage: any;
  getArticles: () => void;
  loading: boolean;
}

export default IHome;
