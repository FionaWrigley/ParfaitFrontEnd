
const ScheduleCell = ({booked, cStyle, index}) => {

    return (
            (booked)
                ? (
                    <div className={cStyle}></div>
                ) 
                : (
                    <div className="h-12 w-px bg-gray-100"></div>
                )
    )
}
export default ScheduleCell;