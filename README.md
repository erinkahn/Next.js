This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.jsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


---------------

## NOTES

<h1>Next.js</h1>

Next.js is a React framework that handles most things for you

<ul>
  <li>Done for you: Compiling, Minifying, Bundling, Code Splitting</li>
  <li>Page based Route system</li>
  <li>It will create files for you to save time (HTML, JS, CSS)</li>
  <li>pre-renders every page by default (html is generated on a server BEFORE sent to client browser)</li>
</ul>


<h2>Installation</h2>

(You need node version 10.13 or later)

npx create-next-app@latest nextjs-app

cd nextjs-app

npm run dev



<h2>Images</h2>
<p>images are lazy-loaded and optimized for web to be responsive</p>

Example:
<br/>
  import Image from 'next/image';

  const YourComponent = () => ( <br/>
    <Image <br/>
      src="/images/profile.jpg" // Route of the image file <br/>
      height={144} // Desired size with correct aspect ratio <br/>
      width={144} // Desired size with correct aspect ratio <br/>
      alt="Your Name" <br/>
    /> <br/>
  );

<h2>Pre-rendering</h2>

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


<h2>getStaticProps</h2>

<ul>
  <li>runs at build time in production if its an exported function</li>
  <li>you can fetch data and sent it as props to the page inside the function</li>
  <li>"Hey, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!"</li>
  <li>can only be exported from a page since react needs the data before the page is rendered</li>
  <li>if you dont need to pre-render data, use client-side rendering with js</li>
</ul>

Example:
<br/>
export default function Home(props) { ... }<br/><br/>

export async function getStaticProps() { <br/>
  // Get external data from the file system, API, DB, etc. <br/>
  const data = ... <br/> <br/>

  // The value of the `props` key will be <br/>
  //  passed to the `Home` component <br/>
  return { <br/>
    props: ...<br/>
  } <br/>
} <br/>

<h2>SWR</h2>

<ul>
  <li>react hook for data fetching on the client side</li>
  <li>handles caching, revalidation, focus tracking, refetching on interval</li>
</ul>

Example:
<br/>
import useSWR from 'swr'; <br/>

function Profile() { <br/>
  const { data, error } = useSWR('/api/user', fetch); <br/>

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
} <br/>


<h2>getServerSideProps</h2>

<ul>
  <li>if you need to fetch data at request time instead of build time, you use server-side rendering and export getServerSideProps instead of getStatic Props from your page</li>
  <li>if your data is likely to change, you use server-side with getServerSideProps</li>
</ul>

Example:
<br/>
export async function getServerSideProps(context) { <br/>
  return { <br/>
    props: { <br/>
      // props for your component <br/>
    }, <br/>
  }; <br/>
}<br/>


<h2>Dynamic Routes</h2>

<ul>
  <li>Pages that begin with [ and end with ] are dynamic routes</li>
  <li> /pages/posts/[id].js will create a page that is dynamic</li>
  <li>you also need getStaticPaths to return an array of possible id values</li>
  <li>you also need getStaticProps to fetch data for the post with the id</li>
  <li>Like getStaticProps, getStaticPaths can fetch data from any data source</li>
</ul>

Example:
<br/>
export async function getAllPostIds() { <br/>
  // Instead of the file system, <br/>
  // fetch post data from an external API endpoint <br/>
  const res = await fetch('..'); <br/>
  const posts = await res.json(); <br/>
  return posts.map((post) => { <br/>
    return { <br/>
      params: { <br/>
        id: post.id, <br/>
      }, <br/>
    }; <br/>
  }); <br/>
} <br/>


<h2>Development vs Production</h2>

<ul>
  <li>In development (npm run dev or yarn dev), getStaticPaths runs on every request.</li>
  <li>In production, getStaticPaths runs at build time.</li>
</ul>


<h2>Fallback</h2>

<ul>
  <li>If fallback is false from getStaticPaths, then any paths not returned by getStaticPaths will result in a 404 page.</li>
  <li>If fallback is true, then the behavior of getStaticProps changes to:
    <ul>
      <li>The paths returned from getStaticPaths will be rendered to HTML at build time.</li>
      <li>The paths that have not been generated at build time will not result in a 404 page. Instead, Next.js will serve a “fallback” version of the page on the first request to such a path.</li>
      <li>In the background, Next.js will statically generate the requested path. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.</li>
    </ul>
  </li>
  <li>If fallback is blocking, then new paths will be server-side rendered with getStaticProps, and cached for future requests so it only happens once per path.</li>
</ul>


<h2>Catch-All Routes</h2>

<ul>
  <li>Dynamic routes can be extended to catch all paths by adding three dots (...) inside the brackets.</li>
</ul>

Example:
<br/>
return [ <br/>
  { <br/>
    params: { <br/>
      // Statically Generates /posts/a/b/c <br/>
      id: ['a', 'b', 'c'], <br/>
    }, <br/>
  }, <br/>
  //... <br/>
]; <br/>


<h2>404 Pages</h2>

<p>To create a custom 404 page, create pages/404.js. This file is statically generated at build time.</p>

Example:
<br/>
// pages/404.js <br/>
export default function Custom404() { <br/>
  return <p>404 - Page Not Found</p>}}