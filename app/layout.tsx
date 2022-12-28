import Nav from '../components/Nav';
import '../styles/globals.css';

export default function RootLayout({ children }) {
  const header = (
    <header className="w-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold underline">Erin's Website</h1>
        <p>Welcome to my portfolio.</p>
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
