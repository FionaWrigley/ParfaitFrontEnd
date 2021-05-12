import FooterMenu from '../components/navigation/FooterMenu';
import Navbar from '../components/navigation/Navbar';
import {useEffect, useState} from 'react';


const EventList = (dateField) => {

    const [events, setEvents] = useState([]);
    const [ready,
        setReady] = useState(false);

    useEffect(() => {

        fetch(process.env.parfaitServer+'/scheduleday/'+dateField.dateField, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
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

    }, []);

    return ((ready)?
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
    
     </>: <>Not ready</>)
    }
        export default EventList;












