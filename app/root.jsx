import { Outlet, LiveReload, Link } from "@remix-run/react"

export default function App () {
  return (
   
   <Document>
     <Layout>
      <Outlet />
    </Layout>
   </Document>
  )
}

function Document({ children, title }) {
  return (
    <html lang='en'>
      <head>
        <title>{ title ? title : 'Remix Blog'}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' ?
        <LiveReload /> : null}
      </body>
    </html>

  )
}

function Layout({children}) {
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='logo'>
          Remix Todo
        </Link>
        <ul className="nav">
          <li>
            <Link to='/todos'>
              Todo
            </Link>
          </li>
        </ul>
      </nav>
      <div className="c">
        {children}
      </div>
    </>
  )
  
}
