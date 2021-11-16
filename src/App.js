import { useState } from "react"

// components
import { Navbar } from "./components/Navbar"
import { CompRoutes } from "./components/CompRoutes"
import { Footer } from "./components/Footer"

const App = () => {

  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-500 dark:text-gray200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <CompRoutes />
        <Footer />
      </div>
    </div>
  )
}

export default App;
