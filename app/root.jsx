import { Outlet, LiveReload, Link } from "@remix-run/react"


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
      <head>
        <title>{ title ? title : 'Remix Todo App'}</title>
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
          <h1>Todo Application(Remix + Tailwind)</h1>
        </Link>
        <ul className="nav">
          <li>
            <Link to='/todo'>
              View Task List
            </Link>
          </li>
          <li>
          <Link to='/todo/new'>
              Add Task to List
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