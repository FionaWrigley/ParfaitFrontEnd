import Link from 'next/link';
import Head from 'next/head';
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react';
import Plainheader from '../components/navigation/Plainheader';
import ScheduleLine from '../components/schedule/ScheduleLine'

const groupschedule = () => {

    const router = useRouter()
    const [groupID,
        setGroupID] = useState(router.query.groupID);
    console.log("groupID")
    console.log(router.query.groupID)
    console.log(groupID)
    let today = new Date();
    let newdate = today.toDateString();
    let dayArray = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11' ]

    const [scheduleData,
        setScheduleData] = useState([]);
    const [ready,
        setReady] = useState(false);
    let querystring = "/"+groupID+"/"+newdate;

    useEffect(() => {

        fetch('http://localhost:5000/groupschedule/'+ groupID, {
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
    }, [groupID]);

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
                

                <div className="overflow-x-scroll">
                {/* <div>
                    <div className="w-720 h-8 bg-gray-50">{newdate}</div>
                    <div className="w-720 h-8 bg-gray-50 flex">
                       {dayArray.map((element, index) =><div className="w-30 h-8">
                       <div className="w-30 h-4">{element}</div>
                        <div className="w-15 h-4"></div>
                           </div>)}
                        
                    </div>
                </div> */}
                    <ScheduleLine contacts={scheduleData.members}/>
                </div>
            </div>
        : <div>loading</div>)
}

export default groupschedule;