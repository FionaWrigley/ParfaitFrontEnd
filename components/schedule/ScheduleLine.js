import ScheduleDay from './ScheduleDay';
import contacts from '../contactsfile.json';

export default function ScheduleLine() {

    const contactColor = ["w-12 h-12 bg-indigo-200 inline-block", "w-12 h-12 bg-pink-200 inline-block", "w-12 h-12 bg-green-200 inline-block", "bg-yellow-100 h-12 w-12", "bg-purple-200 h-12 w-12"];

    return (
        <div className="overflow-y-scroll">
            {contacts.map((element, index) => <div className="inline-block">{element.contactName}<ScheduleDay
                scheduleEvents={element.contactSchedule}
                cStyle={contactColor[index]}
                key={index}/></div>)
}
        </div>
    )
}