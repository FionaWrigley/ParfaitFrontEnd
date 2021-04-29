
const ScheduleCell = (props) => {

    cellColor=`bg-${props.color}`;

    return (
            (props.booked)
                ? (
                    <div className={`h-12 w-1/2px ${cellColor} inline-block`}></div>
                ) 
                : (
                    <div className="h-12 w-1/2px bg-gray-200 dark:bg-gray-700 inline-block"></div>
                )
    )
}
export default ScheduleCell;