import Plainheader from '../components/navigation/Plainheader';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
var compareAsc = require('date-fns/compareAsc')

const event = () => {

    const router = useRouter();
    const { register, handleSubmit, errors, watch } = useForm();
    const startDate = useRef({});
    startDate.current = watch("startDate", "");
    const endDate = useRef({});
    endDate.current = watch("endDate", "");
    const startTime = useRef({});
    startTime.current = watch("startTime", "");
    const repeated = useRef({});
    repeated.current = watch("repeated", "");
    const onSubmit = data => formSubmit(data);
    const [errMsg, setErrMsg] = useState('');
    
    
    const formSubmit = (form) => {

        setErrMsg('');

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
                }).catch(err => setErrMsg("Oops, we are currently experiencing a problem, please try again later"));
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
                                    className = "mt-1 h-9 dark:bg-gray-700 mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                                    ref={register({ 
                                        required: 'Event name is required', 
                                        minLength: { value: 2, message: 'Event name must be between 2 and 50 characters' }, 
                                        maxLength: { value: 50, message: 'Event name must be between 2 and 50 characters' }, 
                                        pattern: { value: /^[ A-Za-z0-9_@./#&+'!,$*-]*$/, message: "Event name may contain letters, numbers, or the following characters - _ @ . / # & + , ! ' $ *"}
                                    })}/>
                                       {errors.eventName && <p className="errorMsg text-sm rounded-lg mt-1 text-red-500">{errors.eventName.message}</p>}
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <textarea
                                    name="eventDescription"
                                    placeholder="Event details"
                                    className = "mt-1 block dark:bg-gray-700 w-full rounded-lg mt-1 dark:bg-white shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                                    ref={register({pattern: {value: /^[ A-Za-z0-9_@./#&+'!,$*-]*$/, message: "Event description may contain letters, numbers, or the following characters - _ @ . / # & + , ! ' $ *" } })}/>
                                              
                                    {errors.eventDescription && <p className="errorMsg rounded-lg mt-1 text-sm text-red-500">{errors.eventDescription.message}</p>}
                            </div>
                            <div className="w-full col-span-6 sm:col-span-4 grid grid-cols-6 gap-6">           
                            <div className="col-span-3">
                                <label htmlFor="startDate" className="block text-sm font-medium dark:text-white text-gray-700">Date</label>
                                <input
                                    type="date"
                                    name="startDate"
                                    className = "mt-1 h-9 dark:bg-gray-700 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                                    ref={register({
                                        required: 'Event start date is required'
                                    })}/>
                                {errors.startDate && <p className="errorMsg rounded-lg mt-1 text-sm text-red-500">{errors.startDate.message}</p>}

                            </div>

                            <div className="col-span-3">
                                <label htmlFor="startTime" className="block text-sm font-medium dark:text-white text-gray-700">Time</label>
                                <input
                                    type="time"
                                    name="startTime"
                                    className = "mt-1 h-9 dark:bg-gray-700 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                                    ref={register({
                                        required: 'Event start time is required'
                                    })}/>
                                {errors.startTime && <p className="errorMsg rounded-lg mt-1 text-sm text-red-500">{errors.startTime.message}</p>}
                            </div>
                            </div> 
                            
                            <div className="w-full col-span-6 sm:col-span-4 grid grid-cols-6 gap-6">           
                            <div className="col-span-3">
                                <label htmlFor="endDate" className="block text-sm dark:text-white font-medium text-gray-700">End date</label>
                                <input
                                    type="date"
                                    name="endDate"
                                    defaultValue={startDate.current}
                                    className = "mt-1 h-9 dark:bg-gray-700  block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                                    ref={register({
                                        validate: (value) =>
                                        (value >= startDate.current || "The end date cannot be before the start date")
                                      })} />
                                      {errors.endDate && <p className="errorMsg rounded-lg mt-1 text-sm text-red-500">{errors.endDate.message}</p>}
                            </div>

                            <div className="col-span-3">
                                <label htmlFor="endTime" className="block text-sm dark:text-white font-medium text-gray-700">End time</label>
                                <input
                                    type="time"
                                    name="endTime"
                                    defaultValue={startTime.current}
                                    className = "mt-1 h-9 dark:bg-gray-700 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                                    ref={register({
                                        validate: (value) =>
                                        (( endDate.current > startDate.current || (value > startTime.current)) || "End time must be after the start time")
                                      })} />
                                      {errors.endTime && <p className="errorMsg rounded-lg mt-1 text-sm text-red-500">{errors.endTime.message}</p>}
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
                            
                        <select className = "h-9 rounded-lg mt-1 dark:bg-gray-700 "name='frequency' 
                        ref={register({
                                validate: (value) =>
                                         ((!repeated.current || (repeated.current && (value != 'null'))) || "Frequency is required if repeat is checked")      
                            })} >
                            <option value='null'>--select--</option>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Annually">Annually</option>
                        </select>
                        {errors.frequency && <p className="errorMsg rounded-lg mt-1 text-sm text-red-500">{errors.frequency.message}</p>}

                        </div>
                        <div className="col-span-3">
                                <label htmlFor="repeatUntil" className="block text-sm font-medium text-gray-700 dark:text-white">End repeat</label>
                                <input
                                    type="date"
                                    name="repeatUntil"
                                    className = "mt-1 dark:bg-gray-700 h-9 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                                    ref={register({
                                        validate: (value) =>
                                                 ((!repeated.current || (repeated.current && (value > endDate.current ))) || "Frequency is required if repeat is checked")      
                                    })}
                                    />
                            </div>
                        
                    
                </div>
            </div> 
            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-right sm:px-6 flex w-full justify-end">
            <p className="mt-1 text-m text-red-500 justify-end rounded-full mr-5 inline">{errMsg}</p>
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