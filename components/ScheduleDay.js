import ScheduleHour from './ScheduleHour';
import ScheduleCell from './ScheduleCell';
import React, {useState, useEffect} from 'react';

export function ScheduleDay(scheduleEvents, cStyle) {

    let dayArr = [];
    let events = [];

    events = scheduleEvents;
    let str = scheduleEvents.cStyle;
    console.log(scheduleEvents);
    console.log("cstyle1: "+cStyle);
    console.log("str1: "+str);

    for (let i = 0; i < 24; i++) {

        dayArr.push({hour: i, booked: false});

        events
            .scheduleEvents
            .map((element, index) => {

                const startTime = element
                    .startTime
                    .substring(0, 2);
                const endTime = element
                    .endTime
                    .substring(0, 2);

                if (i >= startTime && i <= endTime) {

                    dayArr[i] = {
                        hour: i,
                        booked: true
                    };
                }
            })
    }

    return (
        <div class = "flex h-12 w-auto flex-nowrap">
            {dayArr.map((entry, index) => <ScheduleCell booked={entry.booked} cStyle={scheduleEvents.cStyle} index={index} key={index}/>)}
        </div>
    );
}

export default ScheduleDay;