import ScheduleHour from './ScheduleHour';

export function ScheduleDay(props) {

    let hourArray = [];
    let events = [];

    for (let i = 0; i < 24; i++) {  
        let minuteArray=[];

        for(let j = 0; j < 60; j++){ 
            minuteArray.push(false);
        }
        hourArray.push(minuteArray);
    }

    for (let i = 0; i < 24; i++) {
        props.day
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
                            hourArray[i][j] = true;
                            }
                        }
                    }else if (i > startHour && i < endHour){ //all minutes for this hour should be booked
                        
                        for (let j = 0; j < 60; j++) {
                            hourArray[i][j] = true;
                        }
                    }else if (i == endHour && i > startHour){ //check for events that don't end on the hour

                        for (let j = 0; j < 60; j++) {

                            if(j < endMin){ //mins from start minute up should be booked
                            hourArray[i][j] = true;
                            }
                        }

                    }else if (i == startHour && i == endHour){ //check for events less than an hour

                        if(j >= startMin){ //mins from start minute up should be booked

                            for (let j = 0; j < 60; j++) {

                                if(j >= startMin && j < endMin){ //mins from start minute up should be booked
                            
                                let numMins = (60* i)+j;
                                hourArray[i][j] = true;
                                }   
                            }
                        }
                    }
            })
        }

    return (
        <>
            {hourArray.map((hour, index) => <div key={index} className={`w-30 box-border h-12 col-start-${index+1} col-span-1 row-span-1 ${'row-start-'+props.row} border-r border-gray-300`}><ScheduleHour hour={hour} color={props.color} row={props.row} index={index} key={index}/></div>)}
        </>
    );
    }

export default ScheduleDay;

//  purgecss: row-start-1, row-start-2, row-start-3, row-start-4, row-start-5, row-start-6, row-start-7, row-start-8, row-start-9, row-start-10, row-start-11, row-start-12, row-start-13, row-start-14, row-start-15, row-start-16, row-start-17, row-start-18, row-start-19, row-start-20, row-start-21, row-start-22, row-start-23, row-start-24, row-start-25, row-start-26, row-start-27, row-start-28, row-start-29, row-start-30
//  purgecss: col-start-1, col-start-2, , col-start-3, col-start-4, col-start-5, col-start-6, col-start-7, col-start-8, col-start-9, col-start-10, col-start-11, col-start-12, col-start-13, col-start-14, col-start-15, col-start-16, col-start-17, col-start-18, col-start-19, col-start-20, col-start-21, col-start-22, col-start-23, col-start-24, col-start-25, col-start-26, col-start-27, col-start-28, col-start-29, col-start-30, col-start-31