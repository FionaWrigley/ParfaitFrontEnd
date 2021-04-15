import {useState, useEffect, getQueryParams} from 'react';
import { useForm } from "react-hook-form";
import FindUsers from '../components/FindUsers';
import Plainheader from '../components/navigation/Plainheader';
import {useRouter} from 'next/router';

const newgroup = () => {
    const [groupMembers,
        setGroupMembers] = useState([]);
    const [createGroup,
        setCreateGroup] = useState(false);
    const [group,
        setGroup] = useState([]);
        const router = useRouter();

    const handleUsers = (m) => {
        setGroupMembers(m);
        setGroup({
            ...group,
            members: m
        });
        setCreateGroup(true);
    }

    const saveGroup = (e) => {
        e.preventDefault();

        fetch(process.env.parfaitServer+'/creategroup', {
            method: 'POST',
            body: JSON.stringify({group}),
            headers: {
                'Content-Type': 'application/json'
            },
                credentials: 'include'
            })
            .then(res => {           
                switch(res.status){
                case 200: 
                    router.push('/groups');
                    break;
                case 204:
                    router.push('/groups');
                    break;
                }

            }).catch(err => {
                //setErrorMessage("Oops, we are currently experiencing problem, please try again later")
                console.log("Oops: "+err)}
                );           
    }





    

    return ( <><Plainheader backpage="groups" page="newgroup"/>  {
        (!createGroup)
            ? <> 
            <FindUsers handleSubmit = {handleUsers} /> </>
            : <>< div className = "mt-6" > <div>
                <div className="px-4 sm:px-0">
                    <h2 className="text-lg font-medium leading-6 text-gray-900">Create Group</h2>
                    <p className="mt-1 text-sm text-gray-600">
                        Upload a photo and group description.
                    </p>
                </div>
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="group_name" className="block text-sm font-medium text-gray-700">Group name</label>
                                <input
                                    type="text"
                                    name="group_name"
                                    id="group_name"
                                    onChange={e => setGroup({
                                    ...group,
                                    name: e.target.value
                                })}
                                    className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/></div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Photo
                                </label>
                                <div className="mt-2 flex items-center">
                                    <span
                                        className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                        <svg
                                            className="h-full w-full text-gray-300"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                                        </svg>
                                    </span>
                                    <button
                                        type="button"
                                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Change
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                    About
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="about"
                                        name="about"
                                        onChange={e => setGroup({
                                        ...group,
                                        description: e.target.value
                                    })}
                                        rows="3"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md focus:outline-none"
                                        placeholder="brief bio about your group"></textarea>
                                </div>
                            </div>
                        </div>

                        {(groupMembers.length > 0)
                            ? (groupMembers.map((element, index) => <div key={element.memberID}>{element.fname + " " + element.lname}</div>))
                            : <div>No users selected</div>}
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div> </div></>
    } </>
    );
}
export default newgroup;