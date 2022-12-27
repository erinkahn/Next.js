import './globals.css'

export default function RootLayout({ children }) {
  const header = (
    <header>
      <div>
        <h1>Erin's Website</h1>
        <p>Welcome to my portfolio.</p>
        <br/>
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
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}
