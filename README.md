## NEXT.js 13

run the development server:

```bash
npm run dev
```

All the pages will be in app

`app/page.jsx` is the homepage

[API routes] are here: http://localhost:3000/api/hello. 
This endpoint is in `pages/api/hello.js`.
The `pages/api` directory is mapped to `/api/*`. 


## Cool Things

<ul>
  <li>Done for you: Compiling, Minifying, Bundling, Code Splitting</li>
  <li>Page based Route system</li>
  <li>It will create files for you to save time (HTML, JS, CSS)</li>
  <li>pre-renders every page by default (html is generated on a server BEFORE sent to client browser)</li>
</ul>


## Images
<p>images are lazy-loaded and optimized for web to be responsive</p>

Example:
<br/>
  import Image from 'next/image';

```bash
  const YourComponent = () => ( 
    <Image
      src="/images/profile.jpg" // Route of the image file 
      height={144} // Desired size with correct aspect ratio 
      width={144} // Desired size with correct aspect ratio 
      alt="Your Name" 
    /> 
  );
```

## Pre-rendering

<ul>
  <li> nextjs generates HTML for each page in advance instead of JS doing it all</li>
  <li> better performance</li>
  <li> regular react apps without nextjs dont do pre-rendering</li>
  <li> 2 types: static generation and server-side rendering</li>
  
  <ul>
    <li>static: method that generates html at build time. the methods reused for each request.</li>
    <li>server-side: method that generates html on each request</li>
  </ul>
 
  <li>development mode (running npm run dev) pages are pre-rendered on every request</li>
  <li>production mode, static generation happens once at built time and NOT On every request</li>
  <li>you can choose which render method to use for each page</li>
  <li>use static whenever possible bc your page can be built once and served by CDN (faster)</li>
  <li>can i pre-render this page AHEAD of a user's request? if yes....use static....if not...use server-side (slower)</li>
  <li>static generation does NOT require data fetching, but if you do need to fetch you can use getStaticProps</li>
</ul>

## SWR

<ul>
  <li>react hook for data fetching on the client side</li>
  <li>handles caching, revalidation, focus tracking, refetching on interval</li>
</ul>

Example:
<br/>

```bash
import useSWR from 'swr';

function Profile() { 
  const { data, error } = useSWR('/api/user', fetch); 

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
} 
```

## Dynamic Route

<ul>
  <li>Pages that begin with [ and end with ] are dynamic routes</li>
  <li> /pages/posts/[id].js will create a page that is dynamic</li>
  <li>you also need getStaticPaths to return an array of possible id values</li>
  <li>you also need getStaticProps to fetch data for the post with the id</li>
  <li>Like getStaticProps, getStaticPaths can fetch data from any data source</li>
</ul>

Example:
<br/>

```bash
export async function getAllPostIds() { 
  // Instead of the file system, 
  // fetch post data from an external API endpoint 
  const res = await fetch('..'); 
  const posts = await res.json(); 
  return posts.map((post) => { 
    return { 
      params: { 
        id: post.id, 
      }, 
    }; 
  }); 
} 
```


## Catch-All Routes

<ul>
  <li>Dynamic routes can be extended to catch all paths by adding three dots (...) inside the brackets.</li>
</ul>

Example:
<br/>

```bash
return [ 
  {
    params: {
      id: ['a', 'b', 'c'], 
    }, 
  }, 
  ... 
]; 
```


## 404 Pages

<p>To create a custom 404 page, create pages/404.js. This file is statically generated at build time.</p>

Example:
<br/>
pages/404.js

```bash
  export default function Custom404() { 
    return <p>404 - Page Not Found</p>
  }}
  ```
  

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.