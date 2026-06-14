import { Link } from 'react-router-dom'
import styles from './BackLink.module.css'

export function BackLink() {
  return (
    <Link to="/" className={styles.link}>
      Back to overview
    </Link>
  )
}
