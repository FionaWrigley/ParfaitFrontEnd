import Calendar from 'react-calendar';
import FooterMenu from '../components/navigation/FooterMenu';
import Navbar from '../components/navigation/Navbar';
import 'react-calendar/dist/Calendar.css';
import {useEffect, useState} from 'react';

const {PARFAIT_SERVER} = process.env;

const myschedule = () => {

    let newDate = new Date();
    let today = newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate();
    const [date,
        setDate] = useState(today);
    const [schedEvents,
        setSchedEvents] = useState([]);
    const [ready,
        setReady] = useState(false);

    useEffect(() => {

        fetch('http://localhost:5000/scheduleday', {
            method: 'POST',
            body: JSON.stringify({date}),
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
                            //console.log(data);
                            setSchedEvents(data);
                            setReady(true);
                            //.log(schedEvents);
                        })
            }
        }).catch(err => console.log("Oops: " + err));

    }, []);

    return (
        <> 
    <Navbar/> 
    <Calendar/> 
    {
        schedEvents.map((element, index) => { <> {/* <div>{element.startDate}</div>
                <div>{element.startTime}</div>
                <div>{element.endDate}</div>
                <div>{element.endTime}</div> */
            } < div > random text </div>
                <div>{element.name}</div > <div>{element.description}</div> </>
               })
    }
        <FooterMenu/> 
        </>
        )}

        export default myschedule;