import { Outlet, LiveReload, Link, Meta } from "@remix-run/react"
import globalStylesUrl from "./styles/global.css"

export const links = () => [{ rel: 'stylesheet', href: globalStylesUrl }]


export const meta = () => {
  const description = "Take home todo app built with remix.js"
  const keywords = 'Remix.js, React.js, Tailwind CSS'
  return {
    description,
    keywords,
  }
}

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
      {/* <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width,
      initial-scale=1' />
      <Meta /> */}
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
          Remix Todos
        </Link>
        <ul className="nav">
          <li>
            <Link to='/todo'>
              TodoList
            </Link>
          </li>
          <Link to='/todo/new'>
              TodoForm
            </Link>
        </ul>
      </nav>
      <div className="c">
        {children}
      </div>
    </>
  )
  
}