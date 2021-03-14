import ScheduleDay from './ScheduleDay';
import { useEffect, useState } from 'react';

const ScheduleLine = (props) => {

    let today = new Date();
    let newdate = today.toDateString();
    let dayArray = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11' ]

    const contactColor = ["h-12 w-px bg-indigo-200 inline-block m-0", "w-px h-12 bg-pink-200 inline-block m-0", "w-px h-12 bg-green-200 inline-block m-0", "w-px bg-yellow-100 h-12 m-0", "w-px bg-purple-200 h-12 m-0"];
    const [memberSchedules, setMemberSchedules] = useState(props.contacts);

    console.log(props.contacts);
    console.log(memberSchedules);

    return (
        <div className="overflow-y-scroll grid grid-col-25">
            
            <div className="h-8 bg-gray-50 col-span-24 col-start-2 row-span-1 row-start-1">{newdate}</div>
            {/* <div className="w-720 h-8 bg-gray-50 col-span-{24}"> */}
            {dayArray.map((element, index) => 
                //let column = '"h-8 col-span-1 row-span-1 row-start-2"';
                <div className={`h-8 col-span-1 col-start-${index+2} row-span-1 row-start-2`}>
                    <div className="h-4">{element}</div>
                    {/* <div className="w-15 h-4 border-r border-gray-200"></div> */}
                </div>)}
                    {/* </div> */}
            
            {props.contacts.map((element, index) => 
            <div key={element.memberID} className={`h-8 row-start-${index+3} row-span-1`}>{element.fname + " " +element.lname}
            
            <ScheduleDay
                scheduleEvents={element.memberEvents}
                cStyle={contactColor[index]}
                key={index}/></div>)} 
        </div>
    )
}

export default ScheduleLine;