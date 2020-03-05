interface ITags {
  tags: string[];
  onClickTagByPage: () => void;
  onClickTag: (tag: string, onClickTagByPage: () => void) => void;
}

export default ITags;
