import Nav from '../components/Nav';
import '../styles/globals.css';

// the root layout MUST contain the html and body tags
// shared layout across all pages
// this file must be included in the app directory
// canNOT be set to a client component
export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  const header = (
    <header className="w-100 py-7">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-2xl font-bold underline pb-3">NextJS 13</h1>
        <p>Welcome to my app where I experiment in nextjs and learn things hands on. </p>
        <p>The intent of this app is not based on design or asthetic, but instead, functionality.</p>
        <Nav/>
      </div>
    </header>
  );

  const footer = (
    <footer className="pt-7">
      <div>
        <br/>
        <h3 className="text-center">This is the footer...cute right?</h3>
      </div>
    </footer>
  )
  return (
    <html lang="en">
      <head />
      <body>
        <div className="mx-auto px-5 max-w-5xl">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
