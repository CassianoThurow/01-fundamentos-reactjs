import styles from './Header.module.scss'
import igniteLogo from '../../assets/igniteSimbol.svg'

export function Header(){
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo Ignite" />
    </header>
  )
}