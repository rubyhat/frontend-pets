import { useState } from "react";
import axios from "axios";
import classNames from "classnames/bind";

import useFetch from "../../CustomHooks/useFetch";
import styles from "./github-find-user.module.scss";

const GithubFindUser = () => {
  const cx = classNames.bind(styles);

  const [data, setData] = useState({
    login: "rubyhat",
    id: 34214390,
    node_id: "MDQ6VXNlcjM0MjE0Mzkw",
    avatar_url: "https://avatars.githubusercontent.com/u/34214390?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/rubyhat",
    html_url: "https://github.com/rubyhat",
    followers_url: "https://api.github.com/users/rubyhat/followers",
    following_url:
      "https://api.github.com/users/rubyhat/following{/other_user}",
    gists_url: "https://api.github.com/users/rubyhat/gists{/gist_id}",
    starred_url: "https://api.github.com/users/rubyhat/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/rubyhat/subscriptions",
    organizations_url: "https://api.github.com/users/rubyhat/orgs",
    repos_url: "https://api.github.com/users/rubyhat/repos",
    events_url: "https://api.github.com/users/rubyhat/events{/privacy}",
    received_events_url: "https://api.github.com/users/rubyhat/received_events",
    type: "User",
    site_admin: false,
    name: "Vladislav",
    company: null,
    blog: "",
    location: "Kazakhstan",
    email: null,
    hireable: null,
    bio: "Frontend Developer",
    twitter_username: null,
    public_repos: 20,
    public_gists: 0,
    followers: 1,
    following: 6,
    created_at: "2017-12-03T15:54:50Z",
    updated_at: "2022-04-20T16:30:29Z",
  });
  const [isPending, setIsPending] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsPending(true);
    const [nicknameInput] = event.target;

    const API_URL = "https://api.github.com/users/";
    axios({
      url: API_URL + nicknameInput.value,
      method: "GET",
    })
      .then((response) => {
        if (response.data.error) {
          throw response.data.error;
        }
        setData({ ...response.data, error: false });
        setIsPending(false);
      })
      .catch((error) => {
        setData({
          ...error.response.data,
          error: true,
          status: error.response.status,
        });
        setIsPending(false);
      });
  };
  return (
    <div className="github-find">
      <div className="grid grid-cols-3 mb-4">
        <form
          className="flex flex-col"
          onSubmit={(event) => handleFormSubmit(event)}
        >
          <span className="font-bold text-zinc-700">Find User</span>
          <div className="flex items-center">
            <label>
              <input
                type="text"
                className="transtion border-2 border-zinc-300 py-1 px-2 rounded focus:outline-none focus:border-rose-300"
                placeholder="Text nickname"
              />
            </label>
            <button
              disabled={isPending}
              className="transition text-white border-2 border-zinc-700 bg-zinc-700 py-1 px-3 rounded ml-3 hover:bg-zinc-600 hover:border-zinc-600"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {isPending && <p className="text-rose-500 font-bold">Loading...</p>}
        {data && data.error && !isPending && (
          <p className="text-rose-500 font-bold">
            Error ({data.status}): {data.message}
          </p>
        )}
        {data && !data.error && !isPending && (
          <div className="text-zinc-700 rounded ">
            <div className="flex justify-between">
              <div>
                <h3 className="transition text-2xl font-bold underline underline-2 hover:text-rose-500">
                  <a href={data.html_url} target="_blank" rel="noreferrer">
                    {data.login}
                  </a>
                </h3>
                <p className="text-sm ">{data.bio}</p>
                <hr className="my-1" />
                <p className="text-base font-bold">Name: {data.name}</p>
                <p className="text-base font-bold">Location: {data.location}</p>
                <p className="text-base font-bold">
                  Since: {data.created_at.slice(0, 10)}
                </p>
              </div>
              <img
                src={data.avatar_url}
                alt="avatar"
                className="w-32 h-32 rounded ml-3"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GithubFindUser;
