import ScheduleDay from './ScheduleDay';

const ScheduleLine = (props) => {

    return (  
        <> 
        <div className={`mt-1 text-m text-gray-600 dark:text-white text-bold px-2 flex-shrink h-12 col-start-1 col-span-1 ${'row-start-'+props.row} row-span-1`}>{props.member.fname + " "+props.member.lname}</div> 
        <div className ={`h-12 col-start-2 col-span-1 ${'row-start-'+props.row} flex flex-row flex-nowrap row-span-1`}>
        {props.member.events.map((element, index) =>  
            <div key={index} className='grid grid-col-24'>
                <ScheduleDay day={element} row={props.row} color={props.contactColor}/>
            </div>
        )}
        </div>
        </>
  
    )
}
export default ScheduleLine;


//  purgecss: row-start-1, row-start-2, row-start-3, row-start-4, row-start-5, row-start-6, row-start-7, row-start-8, row-start-9, row-start-10, row-start-11, row-start-12, row-start-13, row-start-14, row-start-15, row-start-16, row-start-17, row-start-18, row-start-19, row-start-20, row-start-21, row-start-22, row-start-23, row-start-24, row-start-25, row-start-26, row-start-27, row-start-28, row-start-29, row-start-30
