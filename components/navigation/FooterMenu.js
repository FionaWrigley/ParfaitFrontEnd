import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUser, faUsers, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import {useState, useEffect} from 'react';

const FooterMenu= (props) => {

  const [groupFormat, setGroupFormat] = useState('bg-black');
  const [scheduleFormat, setScheduleFormat] = useState('');


  useEffect(() => {

  if(props.page === 'myschedule'){
    console.log('in click handler')
    setScheduleFormat('bg-black');
    setGroupFormat('');
  }
})

    const backIcon = <FontAwesomeIcon icon={faArrowLeft} size = "lg" />
    const groupsIcon = <FontAwesomeIcon icon={faUsers} size = "lg" />
    const calIcon = <FontAwesomeIcon icon={faCalendarAlt} size = "lg" />

return (
<nav>
  <div className="min-w-full mx-auto fixed bottom-0">
    <div className="w-full relative flex items-center  h-12 bg-gradient-to-r from-pink-200 to-indigo-200">
        <Link href="/groups" ><div className= {` ${groupFormat} bg-opacity-5 text-gray-600 w-1/2 h-full flex content-center justify-center items-center`}><>{groupsIcon}</></div></Link>
        <Link href="/myschedule" ><div className= {` ${scheduleFormat} bg-opacity-5 text-gray-600 w-1/2 h-full flex justify-center content-center items-center`} ><>{calIcon}</></div></Link>
      </div>
      </div>
</nav>
)
}

export default FooterMenu;
