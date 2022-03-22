import { useEffect, useState } from "react";

const useQuery = (callback, dependencyList = [], initialValue = undefined) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    callback().then((res) => {
      setData(res.data.data);
      setLoading(false);
    });
  }, dependencyList);
};

export default useQuery;
