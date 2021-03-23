import Calendar from 'react-calendar';
import FooterMenu from '../components/navigation/FooterMenu';
import EventList from '../components/EventList';
import Navbar from '../components/navigation/Navbar';
import 'react-calendar/dist/Calendar.css';
import {useEffect, useState} from 'react';

const myschedule = () => {
    // let newDate = new Date();
    // let today = newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate();
    const [date,
        setDate] = useState(new Date());
        const [events, setEvents] = useState([]);
        const [ready,
            setReady] = useState(false);

    useEffect(() => {

        fetch('http://localhost:5000/scheduleday/'+date, {
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

    return (<>
        <Navbar/> 
        <Calendar 
            onChange={setDate}
            value={date}/>
        
       { (ready)?
    <> 

    <div>{events.map((element, index) =>
        <div key={index}>
        <div>{element.startDate}</div>
        <div>{element.startTime}</div>
        <div>{element.endDate}</div>
        <div>{element.endTime}</div>
        <div>{element.eventName}</div> 
        <div>{element.eventDescription}</div> </div>
    )} 
    </div>
 </>: <>Not ready</>}
    <FooterMenu/> 
        </>)
}
        
        export default myschedule;