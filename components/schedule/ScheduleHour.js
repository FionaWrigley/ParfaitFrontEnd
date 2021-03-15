import ScheduleCell from './ScheduleCell';

const ScheduleHour  = (props) => {


  return (
      props.hour.map((entry, index) => <ScheduleCell booked={entry} color={props.color} index={index} key={index}/>
      )
  )
}
export default ScheduleHour;