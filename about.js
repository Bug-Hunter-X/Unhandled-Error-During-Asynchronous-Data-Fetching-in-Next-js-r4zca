```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // Simulate a long-running task that might throw an error
  const data = fetchData(); // This could throw an error

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