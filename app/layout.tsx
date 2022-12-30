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
    <header className="w-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold underline">Erin's NextJS 13 App</h1>
        <p>Welcome to my site of chaos where I train in nextjs and learn things hands on.</p>
        <br/>
        <Nav/>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div>
        <br/>
        <h3>Developed by Erin Kahn</h3>
      </div>
    </footer>
  )
  return (
    <html lang="en">
      <head />
      <body>
        <div className="mx-auto">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
