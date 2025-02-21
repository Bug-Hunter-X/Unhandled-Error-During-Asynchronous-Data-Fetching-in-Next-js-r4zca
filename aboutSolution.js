```javascript
// pages/aboutSolution.js

export default function About() {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataAsync();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
}

async function fetchData() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  throw new Error('Network request failed'); // Simulate a network error
}
```