import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUser, faUsers, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import {useState, useEffect} from 'react';

const FooterMenu= (props) => {

  const [groupFormat, setGroupFormat] = useState('bg-white');
  const [scheduleFormat, setScheduleFormat] = useState('');


  useEffect(() => {

  if(props.page === 'myschedule'){
    setScheduleFormat('bg-white');
    setGroupFormat('');
  }
})

    const groupsIcon = <FontAwesomeIcon icon={faUsers} size = "lg" />
    const calIcon = <FontAwesomeIcon icon={faCalendarAlt} size = "lg" />

return (
<nav>
  <div className="min-w-full mx-auto fixed bottom-0">
    <div className="w-full relative flex items-center h-12 bg-gradient-to-r from-pinkish to-pinkish dark:bg-gray-800 dark:from-gray-800 dark:to-gray-800">
        <Link href="/groups" ><div className= {`${groupFormat} bg-opacity-40 dark:bg-opacity-5 text-gray-600 dark:text-white w-1/2 h-full flex content-center justify-center items-center`}><div className='w-6 h-6'>{groupsIcon}</div></div></Link>
        <Link href="/myschedule" ><div className= {`${scheduleFormat} bg-opacity-40 dark:bg-opacity-5 text-gray-600 dark:text-white w-1/2 h-full flex justify-center content-center items-center`}><div className='w-4 h-4'>{calIcon}</div></div></Link>
     
      </div>
      </div>
</nav>
)
}
export default FooterMenu;
