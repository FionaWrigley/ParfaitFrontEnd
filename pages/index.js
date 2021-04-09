import 'react-swipeable-list/dist/styles.css';
import { useRouter } from 'next/router'

export default function Home() {
  
 
  const router = useRouter()
    // Make sure we're in the browser
    if (typeof window !== 'undefined') {
      router.push('/login')
    }
    return null;
  }
  
 
