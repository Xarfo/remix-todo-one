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
      <link href="/dist/output.css" rel="stylesheet"></link>
        <title>{ title ? title : 'Remix Todo App'}</title>
      </head>
      <body>
        {/* <h1 class='text-3xl text-red-500'>Tailwind Test</h1> */}
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
            <button>
            <Link to='/todo'>
              View Todo List
            </Link>
            </button>
          <button>
          <Link to='/todo/new'>
              Add Todo to List
            </Link>
          </button>
        </ul>
      </nav>
      <div className="c">
        {children}
      </div>
    </>
  )
  
}