import ScheduleDay from './ScheduleDay';
import { useEffect, useState } from 'react';
import {addDays} from 'date-fns/addDays';



const ScheduleLine = (props) => {

    return (  
        <> 
        <div className={`h-12 col-start-1 col-span-1 row-start-${props.row}`}>{props.member.fname + " "+props.member.lname}</div> 
        <div className ={`h-12 col-start-2 col-span-1 row-start-${props.row} flex flex-row flex-nowrap`}>
        {props.member.events.map((element, index) =>  
            <div className='grid grid-col-24'>
                <ScheduleDay day={element} row={props.row} color={props.contactColor}/>
            </div>
        )}
        </div>

{/*             
            <div className='flex flex-row flex-nowrap overflow-x-scroll col-start-2 col-span-1'>
            
            {dayArray.map((day, dayIndex) => 
            //<div className ='flex-row flex-nowrap'>
            <div className="grid grid-col-24 bg-gray-100"> {/* 24 hour grid */}
                {/* <div className={`h-8 col-start-1 col-span-24 row-start-1 row-span-1}`}>{day.toDateString()}</div> */}

               {/* {props.contacts.map((element, index) =>  */}
            {/* //    <div className={`h-12 col-start-1 row-start-${index+2} row-span-1}`}> */}
                {/* <ScheduleDay
                             scheduleEvents={element.events[dayIndex]}
                             color={props.contactColor}
                             row={index+2}/>
            //    </div> */}
               {/* )} */} 
               

            {/* </div> */}
          {/* //  </div> */}
        
        </>
  
    )

    // let today = new Date();
    // let newdate = today.toDateString();
    // let dayArray = ['', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm' ]

    // const contactColor = ["indigo-200", "pink-200", "green-200", "yellow-100", "purple-200"];
    // const [memberSchedules, setMemberSchedules] = useState(props.contacts);

    // return (
    //     <div className="overflow-x-scroll grid grid-cols-31 gap-y-0.5">
    //         <div className="h-8 bg-gray-50 col-span-1 col-start-2 row-span-1 row-start-1">{newdate}</div>
    //         {/* <div className="w-720 h-8 bg-gray-50 col-span-{24}"> */}
    //         {dayArray.map((element, index) => 
    //             //let column = '"h-8 col-span-1 row-span-1 row-start-2"';
    //             <div key={index} className={`h-8 col-span-1 col-start-${index+2} row-span-1 row-start-2`}>
    //                 <div className="h-4 text-xs">{element}</div>
    //                 <div className="w-15 h-4 border-r border-gray-200"></div>
    //             </div>)}
    //                 {/* </div> */}
    //         {props.contacts.map((element, index) => 
    //         <>
    //         <div  className={`h-8 row-start-${index+3} row-span-1 col-start-1 col-span-1`}>{element.fname + " " +element.lname}</div>
            
    //         <ScheduleDay
    //             scheduleEvents={element.events}
    //             color={contactColor[index%6]}
    //             row={index+3}/></>)} 
    //     </div>
    // )





}
export default ScheduleLine;