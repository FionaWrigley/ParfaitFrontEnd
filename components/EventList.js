import FooterMenu from '../components/navigation/FooterMenu';
import Navbar from '../components/navigation/Navbar';
import {useEffect, useState} from 'react';


const EventList = (dateField) => {

    const [events, setEvents] = useState([]);
    const [ready,
        setReady] = useState(false);


    useEffect(() => {

        console.log("event list")
        console.log(dateField.dateField)

        fetch('http://localhost:5000/scheduleday/'+dateField.dateField, {
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
                            
                            // console.log('data')
                            // console.log(data);
                            // console.log('events')
                            
                            
                            // console.log(events);
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





//import groups from '../groups.json';
// import Link from 'next/link';
// import {useEffect, useState} from 'react';
// import {useRouter} from 'next/router';

// const EventList = (dateField) => {

//     const [groups,
//         setGroups] = useState([]);
//     const [ready,
//         setReady] = useState(false);
//     const router = useRouter();


//     const loadData = async () => {
//         const response = await fetch('http://localhost:5000/scheduleday', {
//             method: 'GET',
//             headers: {'Content-Type': 'application/json'},
//             credentials: 'include'
//         }).catch(err => console.log("Oops: "+err));

//             const data = await response.json();
//             console.log(data);
            
//             groups.push(...data);
//             console.log(groups);
//             setReady(true);
//     }

//     useEffect(() => {

//         loadData();

//             }, []);

//     return ((ready)
//         ? <div>
//                 {groups.map((element, index) => <Link href="scheduletester" key={index}>
//                     <div
//                         className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 border-2 border-gray-100 space-x-3">
//                         {/* <img
//                             className="h-11 w-11 rounded-full inline"
//                             src={window
//                             .URL
//                             .createObjectURL(new Blob([new Uint8Array(element.groupPic.data)], {type: 'image/jpeg'}))}
//                             alt="i"/>  */}
//                         <p className="mt-8 text-center  font-bold text-indigo-800 inline">{element.groupName}</p>
//                     </div>
//                 </Link>)}
//             </div>
//         : <div>Loading...</div>)
// }

// export default EventList;











