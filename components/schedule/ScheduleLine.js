import ScheduleDay from './ScheduleDay';

const ScheduleLine = (props) => {

    rowStart = `row-start-${props.row}`;

    return (  
        <> 
        <div className={`mt-1 text-m text-gray-600 dark:text-white text-bold px-2 flex-shrink h-12 col-start-1 col-span-1 row-start-${props.row} row-span-1`}>{props.member.fname + " "+props.member.lname}</div> 
        <div className ={`h-12 col-start-2 col-span-1 ${rowStart} flex flex-row flex-nowrap row-span-1`}>
        {props.member.events.map((element, index) =>  
            <div key={index} className='grid grid-col-24 box-border border-r border-gray-200'>
                <ScheduleDay day={element} row={props.row} color={props.contactColor}/>
            </div>
        )}
        </div>
        </>
  
    )
}
export default ScheduleLine;