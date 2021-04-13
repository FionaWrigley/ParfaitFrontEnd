import {useRouter} from 'next/router'
import {useEffect, useState} from 'react';
import Plainheader from '../components/navigation/Plainheader';
import ScheduleLine from '../components/schedule/ScheduleLine';
import GroupImages from '../components/GroupImages'
import {add, format} from 'date-fns';
import { css } from "@emotion/core";
import DotLoader from "react-spinners/DotLoader";

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

    const contactColor = ["indigo-200", "pink-200", "green-200", "yellow-100", "purple-200"];

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
        <Plainheader page="groups"/></div>
        {
        (ready)
        ? <div> 
                <div className="m-2  landscape:hidden">
                <div className="w-full justify-center flex items-center">
                           <GroupImages groupID={groupID} size={12}/></div>
                </div>
                <div className="px-4 sm:px-0 text-center m-2 landscape:hidden"><p  className="font-bold text-indigo-900 text-black text-xl">{scheduleData.groupName}</p>
                <p  className="mt-1 text-m text-gray-600">{scheduleData.groupDescripton}</p></div>

                <div className="overflow-x-scroll grid grid-col-schedule gap-y-0.5 bg-gray-100 landscape:h-full"> {/* outer grid */}
                
                <div className ='h-16 col-start-2 col-span-1 row-start-1 flex flex-row flex-nowrap'>
                    {dayArray.map((day, dayIndex) =>
                        <div key={`day${dayIndex}`} className={`overflow-y-hidden grid grid-col-24 bg-gray-100 box-border border-r border-gray-300`}> {/* calendar grid */}
                        <div className={`text-sm text-center h-8 col-start-1 col-span-24 row-start-1 row-span-1}`}>{day.toDateString()}</div>
                           { hourArray.map((hour, hourIndex) => <div key={hourIndex} className = {`w-60 col-start-${hourIndex+1} col-span-2 row-start-2 row-span-1`}>
                                <div key={`hour${hourIndex}`} className={`text-xxs w-60 text-center h-4 col-start-${hourIndex+1} col-span-2 -left-20 row-start-2 row-span-1`}>{hour}</div>  
                                <div className={`w-30 h-4 col-start-${hourIndex+1} col-span-1 row-start-3 row-span-1 border-r border-gray-300`}></div>
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
        : <div><DotLoader color="#c7d2fe" loading={!ready} size={60} /></div>}   
        </>)
}

export default groupschedule;