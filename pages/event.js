
import React from 'react';
import Plainheader from '../components/navigation/Plainheader';
import { useForm } from "react-hook-form";
 import {useRouter} from 'next/router';

const event = () => {

    const router = useRouter();
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => formSubmit(data);
    const formSubmit = (form) => {

        fetch('http://localhost:5000/createevent', {
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
        <Plainheader page='myschedule'/>
             <div className="mt-3 sm:mt-0">
                <div>
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Create event</h3 >
                    </div>
                </div >
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="eventName" className="block text-sm font-medium text-gray-700">Event Name</label>
                                <input
                                    type="text"
                                    name="eventName"
                                    ref={register}
                                    className = "mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="eventDescription" className="block text-sm font-medium text-gray-700">Event description</label>
                                <textarea
                                    name="eventDescription"
                                    ref={register}
                                    className = "mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/>
                            </div>
                            <div className="w-full col-span-6 sm:col-span-4 grid grid-cols-6 gap-6">           
                            <div className="col-span-3">
                                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Date</label>
                                <input
                                    type="date"
                                    name="startDate"
                                    ref={register}
                                    // defaultValue={event.startDate}
                                    className = "mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/>
                            </div>

                            <div className="col-span-3">
                                <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">Time</label>
                                <input
                                    type="time"
                                    ref={register}
                                    name="startTime"
                                    // defaultValue={startTime}
                                    className = "mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/>
                            </div>
                            </div> 
                            
                            <div className="w-full col-span-6 sm:col-span-4 grid grid-cols-6 gap-6">           
                            <div className="col-span-3">
                                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End date</label>
                                <input
                                    type="date"
                                    ref={register}
                                    name="endDate"
                                    // defaultValue={event.endDate}
                                    
                                    className = "mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/>
                            </div>

                            <div className="col-span-3">
                                <label htmlFor="endTime" className="block text-sm font-medium text-gray-700">End time</label>
                                <input
                                    type="time"
                                    ref={register}
                                    name="endTime"
                                    // defaultValue={event.endTime}
                                    className = "mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/>
                            </div>
                        </div>
                        <div className="col-span-6 flex">
                            <div className="flex items-center h-5">
                                <input
                                    ref = {register}
                                    name="repeated"
                                    type="checkbox"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="repeated" className="font-medium text-gray-700">Repeat event</label>
                            </div>
                        </div>
                        <div className="col-span-2">
                       
                        <label htmlFor="frequency" className="block text-sm font-medium text-gray-700">End time</label>
                            
                        <select ref={register} name={'frequency'}>
                            <option value='null'>--select--</option>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Annually">Annually</option>
                        </select>
                        </div>
                        <div className="col-span-3">
                                <label htmlFor="repeatUntil" className="block text-sm font-medium text-gray-700">End date</label>
                                <input
                                    type="date"
                                    ref={register}
                                    name="repeatUntil"
                                    // defaultValue={event.endDate}
                                    className = "mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/>
                            </div>
                        
                    
                </div>
            </div> 
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
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