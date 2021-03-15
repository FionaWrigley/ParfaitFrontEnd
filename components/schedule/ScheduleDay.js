import ScheduleHour from './ScheduleHour';
import ScheduleCell from './ScheduleCell';
import React, {useState, useEffect} from 'react';

export function ScheduleDay(props) {

    let dayArr = [];
    let events = [];

    events = props;
    
    console.log(props.color);

    // for (let i = 0; i < 1440; i++) {
    //     dayArr.push(false);
    // }

    for (let i = 0; i < 24; i++) {
        
        let hourArray=[];

        for(let j = 0; j < 60; j++){
            
            hourArray.push(false);
        }

        dayArr.push(hourArray);
    }

    for (let i = 0; i < 24; i++) {

        events
            .scheduleEvents
            .map((element, index) => {

                const startHour = element
                    .startTime
                    .substring(0, 2);
                const endHour = element
                    .endTime
                    .substring(0, 2);

                    const startMin = element
                        .startTime
                        .substring(3, 5);
                    const endMin = element
                        .endTime
                        .substring(3, 5);


                    if (i == startHour && i < endHour){//check for events that don't start on the hour
                        
                        for (let j = 0; j < 60; j++) {

                            if(j >= startMin){ //mins from start minute up should be booked

                            let numMins = (60* i)+j;
                            //dayArr[numMins] = true;
                            dayArr[i][j] = true;
                            }
                        }
                    }else if (i > startHour && i < endHour){ //all minutes for this hour should be booked
                        
                        for (let j = 0; j < 60; j++) {
                            let numMins = (60* i)+j;
                            //dayArr[numMins] = true;
                            dayArr[i][j] = true;
                        }
                    }else if (i == endHour && i > startHour){ //check for events that don't end on the hour

                        for (let j = 0; j < 60; j++) {

                            if(j < endMin){ //mins from start minute up should be booked
                        
                            //let numMins = (60* i)+j;
                            //dayArr[numMins] = true;
                            dayArr[i][j] = true;
                            }
                        }

                    }else if (i == startHour && i == endHour){ //check for events less than an hour

                        if(j >= startMin){ //mins from start minute up should be booked

                            for (let j = 0; j < 60; j++) {

                                if(j >= startMin && j < endMin){ //mins from start minute up should be booked
                            
                                let numMins = (60* i)+j;
                                //dayArr[numMins] = true;
                                dayArr[i][j] = true;
                                }   
                            }
                        }
                    }
            })
        }

    return (
        <>
            {dayArr.map((hour, index) => <div key={index} className={` h-12 col-start-${index+2} col-span-1 row-span-1 row-start-${props.row}`}><ScheduleHour hour={hour} color={props.color} index={index} key={index}/></div>)}

            {/* {dayArr.map((entry, index) => <ScheduleCell booked={entry} cStyle={scheduleEvents.cStyle} index={index} key={index}/>)} */}
        </>
    );
    }

export default ScheduleDay;