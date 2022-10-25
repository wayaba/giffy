import { Route, Link } from 'wouter'
import './App.css'
import SearchResults from './pages/SearchResults'
import Home from './pages/Home'
import Detail from './pages/Detail'
import { GifsContextProvider } from './context/GifsContext'

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <h1 className="p-3 m-2 text-8xl cursor-pointer">Buscador de GIFs</h1>
        </Link>
        <GifsContextProvider>
          <Route path="/" component={Home} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/search/:query" component={SearchResults} />
        </GifsContextProvider>
      </section>
    </div>
  )
}

export default App
