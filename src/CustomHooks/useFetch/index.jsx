import { useState, useEffect } from "react";
import axios from "axios";

// Отправка GET запроса при помощи axios, получаем объект с данными, моментом ожидания, ошибку, время запроса в консоли.
const useFetch = (url) => {
  const [data, setData] = useState(null),
    [isPending, setIsPending] = useState(true),
    [error, setError] = useState(null);

  useEffect(() => {
    const startTime = Date.now();
    const headers = {
      "Content-Type": "application/json",
    };

    // cleanup useEffect
    const abortCont = new AbortController();

    axios({
      url,
      method: "GET",
      signal: abortCont.signal,
      headers: headers,
    })
      .then((res) => {
        console.log("Axios URL: ", url);
        if (res.status !== 200) {
          throw Error("Could not fetch the data for that resource");
        }
        let nowTime = Date.now();
        let seconds = Math.floor((nowTime - startTime) / 1000);
        let milliseconds = Math.floor((nowTime - startTime) % 1000);
        console.log(
          `Load time ${seconds}.${milliseconds} seconds of ${res.config.url}`
        );
        console.log("Axios response: ", res);
        return res.data;
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          console.log("Axios Error: ", error);
          setIsPending(false);
          setError(error.message);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
