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
            {hourArray.map((hour, index) => {let colStart = `col-start-${index+1}`; <div key={index} className={`w-30 box-border h-12 ${colStart} col-span-1 row-span-1 row-start-${props.row} border-r border-gray-300`}><ScheduleHour hour={hour} color={props.color} row={props.row} index={index} key={index}/></div>})}
        </>
    );
    }

export default ScheduleDay;