import classNames from "classnames/bind";
import useFetch from "../../CustomHooks/useFetch";
import styles from "./github-find-user.module.scss";

const GithubFindUser = () => {
  const cx = classNames.bind(styles);
  const {
    data: user,
    isPending,
    error,
  } = useFetch("https://api.github.com/users/rubyhat");
  return <div className="github-find">github init</div>;
};

export default GithubFindUser;
