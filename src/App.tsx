import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import styles from './styles/App.module.scss'

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
      </div>
    </>
    
  )
}

export default App
