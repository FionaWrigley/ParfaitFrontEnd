import Plainheader from '../components/navigation/Plainheader';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';

const event = () => {

    const router = useRouter();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => formSubmit(data);
    
    const formSubmit = (form) => {
        fetch(process.env.parfaitServer+'/createevent', {
                method: 'POST',
                body: JSON.stringify({form}),
                headers: {
                    'Content-Type': 'application/json'
                },
                    credentials: 'include'
                 })
                 .then(res => {
                    
                    switch(res.status){
                    case 204: 
                        router.push('/myschedule')
                        break;
                    case 401: 
                        router.push('/login')
                        break;
                    }
                }).catch(err => console.log("Oops: "+err));
    }
    return (
        <>
        <Plainheader backpage='myschedule' page="event"/>
             <div className="mt-3 sm:mt-0">
                <div>
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Create event</h3 >
                    </div>
                </div >
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <input
                                    type="text"
                                    placeholder="Event Name"
                                    name="eventName"
                                    ref={register({ required: true, minLength: 2, maxLength: 50, pattern: /^[ A-Za-z0-9_@./#&+-]*$/ })}
                                    className = "mt-1 h-9 dark:bg-gray-700 mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/>
                                       {errors.eventName && errors.eventName.type === "required" && (
                                        <p className="errorMsg text-sm rounded-lg mt-1 dark:bg-white text-red-600">Event name is required.</p>
                                      )}
                                      {errors.eventName && (errors.eventName.type === "minLength" || errors.name.type === "maxLength" ) && (
                                        <p className="errorMsg text-sm rounded-lg mt-1 dark:bg-white text-red-600">Event name must be between 2 and 50 characters.</p>
                                      )}
                                      {errors.eventName && errors.eventName.type === "pattern" && (
                                        <p className="errorMsg text-sm rounded-lg mt-1 dark:bg-white text-red-600">Event name may contain letters, numbers, or the following characters - , _, @, ., /, #, &, + ..</p>
                                      )}
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <textarea
                                    name="eventDescription"
                                    placeholder="Event details"
                                    ref={register({pattern: /^[ A-Za-z0-9_@./#&+-]*$/ })}
                                    className = "mt-1 block dark:bg-gray-700 w-full rounded-lg mt-1 dark:bg-white shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/>
                                              
                                      {errors.eventDescription && errors.eventDescription.type === "pattern" && (
                                        <p className="errorMsg rounded-lg mt-1 dark:bg-white text-sm text-red-600">Event description may contain letters, numbers, or the following characters - , _, @, ., /, #, &, + ..</p>
                                      )}
                            </div>
                            <div className="w-full col-span-6 sm:col-span-4 grid grid-cols-6 gap-6">           
                            <div className="col-span-3">
                                <label htmlFor="startDate" className="block text-sm font-medium dark:text-white text-gray-700">Date</label>
                                <input
                                    type="date"
                                    name="startDate"
                                    ref={register}
                                    // defaultValue={event.startDate}
                                    className = "mt-1 h-9 dark:bg-gray-700 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/>

                            </div>

                            <div className="col-span-3">
                                <label htmlFor="startTime" className="block text-sm font-medium dark:text-white text-gray-700">Time</label>
                                <input
                                    type="time"
                                    ref={register}
                                    name="startTime"
                                    // defaultValue={startTime}
                                    className = "mt-1 h-9 dark:bg-gray-700 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/>
                            </div>
                            </div> 
                            
                            <div className="w-full col-span-6 sm:col-span-4 grid grid-cols-6 gap-6">           
                            <div className="col-span-3">
                                <label htmlFor="endDate" className="block text-sm dark:text-white font-medium text-gray-700">End date</label>
                                <input
                                    type="date"
                                    ref={register}
                                    name="endDate"
                                    // defaultValue={event.endDate}
                                    className = "mt-1 h-9 dark:bg-gray-700  block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/>
                            </div>

                            <div className="col-span-3">
                                <label htmlFor="endTime" className="block text-sm dark:text-white font-medium text-gray-700">End time</label>
                                <input
                                    type="time"
                                    ref={register}
                                    name="endTime"
                                    // defaultValue={event.endTime}
                                    className = "mt-1 h-9 dark:bg-gray-700 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/>
                            </div>
                        </div>
                        <div className="col-span-6 flex">
                            <div className="flex items-center h-5">
                                <input
                                    ref = {register}
                                    name="repeated"
                                    type="checkbox"
                                    className="focus:ring-indigo-500 dark:bg-gray-300  h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="repeated" className="font-medium text-gray-700 dark:text-white">Repeat event</label>
                            </div>
                        </div>
                        <div className="col-span-2">
                       
                        <label htmlFor="frequency" className=" dark:text-white block text-sm font-medium text-gray-700">Repeat</label>
                            
                        <select className = "h-9 rounded-lg mt-1 dark:bg-gray-700 " ref={register} name={'frequency'}>
                            <option value='null'>--select--</option>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Annually">Annually</option>
                        </select>
                        </div>
                        <div className="col-span-3">
                                <label htmlFor="repeatUntil" className="block text-sm font-medium text-gray-700 dark:text-white">End repeat</label>
                                <input
                                    type="date"
                                    ref={register}
                                    name="repeatUntil"
                                    // defaultValue={event.endDate}
                                    className = "mt-1 dark:bg-gray-700 h-9 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/>
                            </div>
                        
                    
                </div>
            </div> 
            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-right sm:px-6">
                <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                </button>
            </div>
        </div>
    </form>
</div>

</div>
        </>
    )


}
export default event;