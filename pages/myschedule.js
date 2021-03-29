import 'react-swipeable-list/dist/styles.css';
import Calendar from 'react-calendar';
import FooterMenu from '../components/navigation/FooterMenu';
import EventList from '../components/EventList';
import Navbar from '../components/navigation/Navbar';
import 'react-calendar/dist/Calendar.css';
import {useEffect, useState} from 'react';
import { format } from 'date-fns'
import {
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
 

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => console.info('swipe action triggered')}>
        Delete
      </SwipeAction>
    </TrailingActions>
  );

const myschedule = () => {
    
    const [date,
        setDate] = useState(new Date());
        const [events, setEvents] = useState([]);
        const [ready,
            setReady] = useState(false);
        
    useEffect(() => {

        let fetchDate = format(date, 'yyyy-MM-dd');

        fetch('http://localhost:5000/scheduleday/'+fetchDate, {
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
        <div className= ''>
            <Navbar page="My Schedule"/>
            <div className= "flex justify-center m-2">
                <Calendar 
                onChange={setDate}
                value={date}/>
            </div>

            { (ready)?
                <SwipeableList
                    fullSwipe = {true}
                    // type = 'IOS'
                >
                    {/* <div className='bg-gradient-to-r from-gray-100 to-gray-100 via-white'> */}
                        
                        {events.map((element, index) =>
                    <SwipeableListItem
                        
                        trailingActions={trailingActions()} key = {index}>
                        <div className='bg-gradient-to-r from-gray-100 to-gray-100 via-white min-w-full  border-b border-b-2 border-gray-200'>               
                            <div className="px-5 py-4 text-md font-semibold min-w-full">
                                <div className="flex items-center">
                                    <div className="ml-3 h-full">
                                            <div className='text-sm'>{`${element.startTime.slice(0,5)} ${new Date(element.startDate).toDateString()} - ${element.endTime.slice(0,5)} ${new Date(element.endDate).toDateString()}`}</div>                                       
                                            <div className="text-md text-weight-bold text-gray-900 whitespace-no-wrap">{`${element.eventName} ~ ${element.eventDescription}`}</div>
                                    </div>
                        </div></div></div>
                        </SwipeableListItem>
                    )} 
                </SwipeableList>
 : <>Not ready</>}
    <FooterMenu page='myschedule'/> 
        </div>)
}
        
        export default myschedule;