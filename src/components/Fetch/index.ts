import { useState, useEffect } from "react";

const FetchData = (url: string) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  }, []);

  return { data, loading, error }
}

export default FetchData;