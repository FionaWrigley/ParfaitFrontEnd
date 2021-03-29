import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'react-swipeable-list/dist/styles.css';
import login from './login'
import { useRouter } from 'next/router'

export default function Home() {
  
 
  const router = useRouter()
    // Make sure we're in the browser
    if (typeof window !== 'undefined') {
      router.push('/login')
    }
    return null;
  }
  
 
