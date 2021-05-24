import {useRouter} from 'next/router'
import {useEffect, useState} from 'react';
import Plainheader from '../components/navigation/Plainheader';
import ScheduleLine from '../components/schedule/ScheduleLine';
import GroupImages from '../components/GroupImages'
import {add, format} from 'date-fns';
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

//required to prevent tailwind purge of dynamic css
const purgecss = [
        ['row-start-1', 'row-start-2', 'row-start-3', 'row-start-4', 'row-start-5', 'row-start-6', 'row-start-7', 'row-start-8', 'row-start-9', 'row-start-10', 'row-start-11', 'row-start-12', 'row-start-13', 'row-start-14', 'row-start-15', 'row-start-16', 'row-start-17', 'row-start-18', 'row-start-19', 'row-start-20', 'row-start-21', 'row-start-22', 'row-start-23', 'row-start-24', 'row-start-25', 'row-start-26', 'row-start-27', 'row-start-28', 'row-start-29', 'row-start-30'],
        ['col-start-1', 'col-start-2', 'col-start-3', 'col-start-4', 'col-start-5', 'col-start-6', 'col-start-7', 'col-start-8', 'col-start-9', 'col-start-10', 'col-start-11', 'col-start-12', 'col-start-13', 'col-start-14', 'col-start-15', 'col-start-16', 'col-start-17', 'col-start-18', 'col-start-19', 'col-start-20', 'col-start-21', 'col-start-22', 'col-start-23', 'col-start-24', 'col-start-25', 'col-start-26', 'col-start-27', 'col-start-28', 'col-start-29', 'col-start-30', 'col-start-31']
    ]

const groupschedule = () => {

    const router = useRouter()
    
    const [groupID,
        setGroupID] = useState(router.query.groupID);
    const [scheduleData,
            setScheduleData] = useState([]);
    const [ready,
            setReady] = useState(false);
    const [numberOfDays,
                setNumberOfDays] = useState(28);

    const contactColor = ["bg-green-200", "bg-yellow-100", "bg-indigo-200" , "bg-pink-200", "bg-purple-200"];

    let schedDate = new Date();
    let dayArray = [];
    let hourArray = ['', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm']

        for( let i=0; i < numberOfDays; i++){
            dayArray.push(schedDate);
            schedDate = add(schedDate, {days: 1});
        }

    useEffect(() => {
        let querystring = "/"+groupID+"/"+format(new Date(), "yyyy-MM-dd")+'/'+numberOfDays;

        fetch(process.env.parfaitServer+'/groupschedule'+ querystring, {
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
                            setScheduleData(data);
                            setReady(true);
                        })
            }
        }).catch(err => console.log("Oops: " + err));
    }, [groupID, numberOfDays]);


    const confirm = () => {

        let warningMsg = 'Are you sure you want to leave '+scheduleData.groupName+'? You will no longer see group member schedules.';


        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                 
                <div className="py-2 align-middle inline-block min-w-full md:min-w-3/4 lg:min-w-3/4 sm:px-6 lg:px-8">
                <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                  <div className='bg-white min-w-1/2 text-center px-6'>
                  <div className='p-6 text-center justify-center text-gray-800 flex min-w-full'>
                <svg className="h-12 w-12 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                
      </svg>
            
            <h1 className ='font-extrabold text-2xl text-center ml-5 mt-3'>Leave group</h1>
            </div>
            <p className='p-8 text-black text-xl'>{warningMsg}</p>
            <div className = 'p-6'>
            <button
              className="mr-2 w-50 inline-flex justify-end py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={onClose}>Cancel</button>
            <button
                className="w-20 inline-flex justify-end py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                onClick ={ () => { 
                    leaveGroup();
                    onClose();
                  }}>
                      Leave
            </button>
            </div>
            </div>
            </div>
            </div>
       
          )}}) 


    }

    const leaveGroup = () => {

                fetch(process.env.parfaitServer+'/leavegroup/'+groupID, {
            method: 'GET',
             headers: {'Content-Type': 'application/json; charset=utf-8'},
            credentials: 'include'
        }).then((res) => {
                if(res.status == 401){
                    router.push('/login');
                }else{
                    router.push('/groups')
                }
            }).catch(err => console.log("Oops: "+err));
    }

    return (<><div className='landscape:hidden'>
        <Plainheader backpage="groups" page="groupschedule" leaveFunction={confirm}/></div>
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
                           { hourArray.map((hour, hourIndex) => (hourIndex > 0) ?
                                            <div key={hourIndex} className = {`w-60 col-start-${(hourIndex)} col-span-2 box-border row-start-2 row-span-1`}>
                                                <div key={`hour${hourIndex}`} className={`text-xxs w-60 text-center box-border h-4 col-start-${(hourIndex)} col-span-2 -left-20 row-start-2 row-span-1`}>{hour}</div>  
                                                <div className={`w-30 h-4 col-start-${(hourIndex)} col-span-1 row-start-3 row-span-1 box-border border-r border-gray-300`}></div>     
                           </div>: <></>)}
                        </div>
                )}
</div>  
                     
                {scheduleData.members.map((element, index) =>
                    <ScheduleLine 
                    key = {index}
                    member={element} 
                    contactColor ={contactColor[index%5]}
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