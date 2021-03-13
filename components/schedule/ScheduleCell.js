
const ScheduleCell = ({booked, cStyle, index}) => {

  const baba = "w-12 h-12 bg-pink-400 inline-block";
    return (
        <div className="w-8 h-8 inline-block object-none flex-shrink-0 flex-nowrap">
            
            {(booked)
                ? (
                    <div className={cStyle}>{index}</div>
                ) 
                : (
                    <div className="w-12 h-12 bg-gray-100 inline-block">{index}</div>
                )}
        </div>
    )
}
export default ScheduleCell;