import ScheduleDay from './ScheduleDay';
import { useEffect, useState } from 'react';

const ScheduleLine = (props) => {

    let today = new Date();
    let newdate = today.toDateString();
    let dayArray = ['', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm' ]

    const contactColor = ["indigo-200", "pink-200", "green-200", "yellow-100", "purple-200"];
    const [memberSchedules, setMemberSchedules] = useState(props.contacts);

    return (
        <div className="overflow-x-scroll grid grid-cols-25 gap-y-0.5">
            <div className="h-8 bg-gray-50 col-span-24 col-start-2 row-span-1 row-start-1">{newdate}</div>
            {/* <div className="w-720 h-8 bg-gray-50 col-span-{24}"> */}
            {dayArray.map((element, index) => 
                //let column = '"h-8 col-span-1 row-span-1 row-start-2"';
                <div key={index} className={`h-8 col-span-1 col-start-${index+2} row-span-1 row-start-2`}>
                    <div className="h-4 text-xs">{element}</div>
                    <div className="w-15 h-4 border-r border-gray-200"></div>
                </div>)}
                    {/* </div> */}
            {props.contacts.map((element, index) => 
            <>
            <div  className={`h-8 row-start-${index+3} row-span-1 col-start-1 col-span-1`}>{element.fname + " " +element.lname}</div>
            
            <ScheduleDay
                scheduleEvents={element.memberEvents}
                color={contactColor[index%6]}
                row={index+3}/></>)} 
        </div>
    )
}
export default ScheduleLine;