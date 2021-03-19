// import Link from 'next/link';
// import Head from 'next/head';
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react';
import Plainheader from '../components/navigation/Plainheader';
import ScheduleLine from '../components/schedule/ScheduleLine';
import {add, format} from 'date-fns';

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
    let hourArray = ['', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm']

        for( let i=0; i < numberOfDays; i++){
            dayArray.push(schedDate);
            schedDate = add(schedDate, {days: 1});
        }

    useEffect(() => {

        let querystring = "/"+groupID+"/"+format(new Date(), "yyyy-MM-dd")+'/'+numberOfDays;
        console.log(querystring);

        fetch('http://localhost:5000/groupschedule'+ querystring, {
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

                            console.log('data//////');
                            console.log(data);
                            setScheduleData(data);
                            setReady(true);
                        })
            }
        }).catch(err => console.log("Oops: " + err));
    }, [groupID, numberOfDays]);

    return ((ready)
        ? <div>
                <Plainheader/>
                <div className="m-2">
                    {/* <img
                  src="/images/profile.jpg"
                  img className="m-auto flex h-20 w-20 rounded-full inline "
                  alt="Group Name"
                /> */}
                </div>
                <div>{scheduleData.groupName}</div>
                <div>{scheduleData.groupDescripton}</div>
                
                <div className="overflow-x-scroll grid grid-col-schedule gap-y-0.5"> {/* outer grid */}
                
                {/* <div className="col-start-2 col-span-1 row-start-1 row-span-1 grid grid-col-30 bg-gray-100 box-border"> */}
                <div className ='h-16 col-start-2 col-span-1 row-start-1 flex flex-row flex-nowrap'>

                 
    
                    
                    {dayArray.map((day, dayIndex) =>  <>
                        <div className={`grid grid-col-24 bg-gray-100 box-border border-r border-gray-300`}> 
                        <div className={`text-sm text-center h-8 col-start-1 col-span-24 row-start-1 row-span-1}`}>{day.toDateString()}</div>
                        {/* <div className={`h-4 col-start-${dayIndex+1} col-span-1 row-start-2 row-span-1 grid grid-col-24 bg-gray-100`}> */}
                           { hourArray.map((hour, hourIndex) => <>
                                <div className={`text-xxs w-30 h-4 col-start-${hourIndex+1} col-span-1 row-start-2 row-span-1`}>{hour}</div>
                                <div className={`w-30 h-4 col-start-${hourIndex+1} col-span-1 row-start-3 row-span-1 border-r border-gray-300`}></div>
                           </>)}
                        </div>
                   
                   </>
                   
                    )}
             
                
     
                    {/* {hourArray.map((hour, dayIndex) => 
                        <div className={`h-8 col-start-${dayIndex+1} col-span-1 row-start-1 row-span-1}`}>{hour}</div>
                    )} */}
</div>  
                    
                
                {scheduleData.members.map((element, index) =>
                    <ScheduleLine 
                    member={element} 
                    contactColor ={contactColor[index%6]}
                    row = {index+3}/>
                )}  
                </div>
            </div>
        : <div>loading</div>)
}

export default groupschedule;