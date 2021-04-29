import {useRouter} from 'next/router'
import {useEffect, useState} from 'react';
import Plainheader from '../components/navigation/Plainheader';
import ScheduleLine from '../components/schedule/ScheduleLine';
import GroupImages from '../components/GroupImages'
import {add, format} from 'date-fns';
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";

const groupschedule = () => {

    const router = useRouter()
    const [groupID,
        setGroupID] = useState(router.query.groupID);
    const [scheduleData,
            setScheduleData] = useState([]);
    const [ready,
            setReady] = useState(false);
    const [numberOfDays,
                setNumberOfDays] = useState(30);

    const contactColor = ["bg-indigo-200", "bg-pink-200", "bg-green-200", "bg-yellow-100", "bg-purple-200"];

    let schedDate = new Date();
    let dayArray = [];
    let hourArray = ['1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm']

        for( let i=0; i < numberOfDays; i++){
            dayArray.push(schedDate);
            schedDate = add(schedDate, {days: 1});
        }

    useEffect(() => {
        let querystring = "/"+groupID+"/"+format(new Date(), "yyyy-MM-dd")+'/'+numberOfDays;
        console.log(querystring);

        fetch(process.env.parfaitServer+'/groupschedule'+ querystring, {
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

                            setScheduleData(data);
                            console.log("this is the data")
                            console.log(data);
                            setReady(true);
                        })
            }
        }).catch(err => console.log("Oops: " + err));
    }, [groupID, numberOfDays]);

    return (<><div className='landscape:hidden'>
        <Plainheader backpage="groups" page="groupschedule"/></div>
        {
        (ready)
        ? <div> 
                <div className="m-2  landscape:hidden">
                <div className="w-full justify-center flex items-center">
                           <GroupImages groupID={groupID} size={12}/></div>
                </div>
                <div className="px-4 sm:px-0 text-center m-2 landscape:hidden"><p  className="font-bold text-indigo-900 dark:text-white text-black text-xl">{scheduleData.groupName}</p>
                <p  className="mt-1 text-m text-gray-600 dark:text-gray-200">{scheduleData.groupDescripton}</p></div>

                <div className="overflow-x-scroll grid grid-col-schedule gap-y-0.5 landscape:h-full"> {/* outer grid */}
                
                <div className ='box-border h-16 col-start-2 col-span-1 row-start-1 flex flex-row flex-nowrap'>
                    {dayArray.map((day, dayIndex) =>
                        <div key={`day${dayIndex}`} className={`overflow-y-hidden grid grid-col-24 box-border`}> {/* calendar grid */}
                        <div className={`text-sm text-center h-8 box-border col-start-1 col-span-24 row-start-1 row-span-1}`}>{day.toDateString()}</div>
                           { hourArray.map((hour, hourIndex) => 
                                            <div key={hourIndex} className = {`w-60 col-start-${hourIndex+1} col-span-2 box-border row-start-2 row-span-1`}>
                                                <div key={`hour${hourIndex}`} className={`text-xxs w-60 text-center box-border h-4 col-start-${hourIndex+1} col-span-2 -left-20 row-start-2 row-span-1`}>{hour}</div>  
                                                <div className={`w-30 h-4 col-start-${hourIndex+1} col-span-1 row-start-3 row-span-1 box-border border-r border-gray-300`}></div>
                           </div>)}
                        </div>
                )}
</div>  
                     
                {scheduleData.members.map((element, index) =>
                    <ScheduleLine 
                    key = {index}
                    member={element} 
                    contactColor ={contactColor[index%6]}
                    row = {index+2}/>
                )}  
                </div>
            </div>
        : <div className="mt-8 align-middle min-w-full justify-center overflow-visible text-center flex items-center">
        <PulseLoader color="#c7d2fe" loading={!ready} size={15} />
       </div>}   
        </>)
}

export default groupschedule;

//  purgecss: row-start-1, row-start-2, row-start-3, row-start-4, row-start-5, row-start-6, row-start-7, row-start-8, row-start-9, row-start-10, row-start-11, row-start-12, row-start-13, row-start-14, row-start-15, row-start-16, row-start-17, row-start-18, row-start-19, row-start-20, row-start-21, row-start-22, row-start-23, row-start-24, row-start-25, row-start-26, row-start-27, row-start-28, row-start-29, row-start-30
//  purgecss: col-start-1, col-start-2, , col-start-3, col-start-4, col-start-5, col-start-6, col-start-7, col-start-8, col-start-9, col-start-10, col-start-11, col-start-12, col-start-13, col-start-14, col-start-15, col-start-16, col-start-17, col-start-18, col-start-19, col-start-20, col-start-21, col-start-22, col-start-23, col-start-24, col-start-25, col-start-26, col-start-27, col-start-28, col-start-29, col-start-30, col-start-31