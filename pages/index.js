import { useRouter } from 'next/router'
import { useEffect } from 'react'
 
export default function Home() {
 
  const router = useRouter()
    // Make sure we're in the browser
    if (typeof window !== 'undefined') {

      useEffect(() => {

        if (localStorage.getItem('loggedIn') === 'true'){

        fetch(process.env.parfaitServer+ '/loggedin', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
              credentials: 'include'
           })
           .then(res => { 
              switch(res.status){
              case 204: 
                  router.push('/groups');
                  break;
              case 401: 
                  router.push('/login');
                  break;
              }
          }).catch(err => {

              //setErrMsg("Oops, we are currently experiencing problem, please try again later")
              console.log("Oops: "+err)
          });
    }else{
      router.push('/login');
    }
  },[])
    }
    return null;
  }
  
 
