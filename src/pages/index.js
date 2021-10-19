import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home({ routes }) {
  const router = useRouter()

  console.log('routes', routes)

  const selectTransitType = (type) => {
    router.push(type)
  }

  return (
    <div>
      <button onClick={() => selectTransitType('route')}>By route</button>
      <button onClick={() => selectTransitType('stop')}>By stop #</button>
    </div>
  )
}
