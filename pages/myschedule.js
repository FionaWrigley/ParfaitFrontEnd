import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import FooterMenu from '../components/navigation/FooterMenu';
import Navbar from '../components/navigation/Navbar';
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";
import {useEffect, useState} from 'react';
import { format } from 'date-fns'
import {
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';

  const trashIcon = <FontAwesomeIcon icon={faTrashAlt} size="lg"/>
 
  const trailingActions = (id) => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
         onClick={() => deleteEvent(id)}
        >
        <div className="px-3 text-right py-auto bg-red-700 text-1xl align-middle justify-items-end align-middle text-white text-weight-xbold">
          <div className="flex justify-end m-3">
          <div className="h-6 w-6">{trashIcon}</div></div>
          <div>Delete</div> 
        </div>
      </SwipeAction>
    </TrailingActions>
  );

const deleteEvent = (eventID) => {

    fetch(process.env.parfaitServer+'/deleteevent', {
        method: 'POST',
        body: JSON.stringify({eventID}),
        headers: {
            'Content-Type': 'application/json'
        },
            credentials: 'include'
        })
        .then(res => {
            //do something
        }).catch(err => {
            //setErrorMessage("Oops, we are currently experiencing problem, please try again later")
            console.log("Oops: "+err)}
            );
}
  
const myschedule = () => {
    
    const [date,
        setDate] = useState(new Date());
        const [events, setEvents] = useState([]);
        const [ready,
            setReady] = useState(false);
        
    useEffect(() => {

        let fetchDate = format(date, 'yyyy-MM-dd');

        fetch(process.env.parfaitServer+'/scheduleday/'+fetchDate, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then((res) => {
            switch (res.status) {
                case 200:
                    res
                        .json()
                        .then((data) => {
                            setEvents(data); 
                            setReady(true);
                        })
            }
        }).catch(err => console.log("Oops: " + err));

    },[date]);

    return (
        <>
            <div className="sticky top-0 z-50"><Navbar page="My Schedule"/></div>
            <div className= "flex justify-center m-2">
                <Calendar 
                className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white"
                onChange={setDate}
                value={date}/>
            </div>
            <div className ='overflow-y-scroll'>
            { (ready)?
                <SwipeableList fullSwipe = {true}> 
                    {events.map((element, index) =>
                    <SwipeableListItem 
                        trailingActions={trailingActions(element.eventID)} key = {element.eventID}>
                        <div className=' border-b border-b-2 border-gray-200 dark:border-gray-700'>               
                            <div className="px-5 py-4 text-md font-semibold min-w-full">
                                <div className="flex items-center">
                                    <div className="ml-3 h-full">
                                            <div className='text-sm text-gray-600 dark:text-gray-200'>{`${element.startTime.slice(0,5)} ${new Date(element.startDate).toDateString()} - ${element.endTime.slice(0,5)} ${new Date(element.endDate).toDateString()}`}</div>                                       
                                            <div className="text-md text-weight-bold text-gray-900 dark:text-white whitespace-no-wrap">{`${element.eventName} ~ ${element.eventDescription}`}</div>
                                    </div>
                        </div></div></div>
                        </SwipeableListItem>
                    )} 
                </SwipeableList>
 : <div className="mt-8 align-middle min-w-full justify-center overflow-visible text-center flex items-center">
 <PulseLoader color="#c7d2fe" loading={!ready} size={15} />
</div>}
</div><div>
    <FooterMenu page='myschedule'/></div>
        </>)
}
        export default myschedule;