import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import FindUsers from '../components/FindUsers';
import Plainheader from '../components/navigation/Plainheader';
import Image from 'next/image';
import {
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';


const newgroup = () => {

    const { register, handleSubmit, errors} = useForm();
    const onSubmit = data => formSubmit(data);

    const [groupMembers,
        setGroupMembers] = useState([]);
    const [createGroup,
        setCreateGroup] = useState(false);
    const [errMsg,
        setErrMsg] = useState("");
        const router = useRouter();

    const submitUsers = (m) => {
        setGroupMembers(m);
        setCreateGroup(true);
    }

    const trailingActions = (id) => (
        <TrailingActions>
          <SwipeAction
            destructive={true}
             onClick={() => removeUser(id)}
            >
            <div className="px-2 py-auto bg-red-500 text-1xl flex align-middle text-center text-white text-center text-weight-xbold">
                Remove
            </div>
          </SwipeAction>
        </TrailingActions>
      );

    const removeUser = (userID) => {
        let index = groupMembers.findIndex(i => i.memberID == (""+userID));
        
        if (index > -1) {
            groupMembers.splice(index, 1)
        }
    }

    const formSubmit = (form) => {
        
        let group = ({
                    ...form, 
                    members: groupMembers}); 

        fetch(process.env.parfaitServer+'/creategroup', {
            method: 'POST',
            body: JSON.stringify(group),
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
                case 401:
                    router.push('/login');
                    break;
                case 403:
                    router.push('/login');
                    break;
                case 422:
                    res => res.json()
                    .then(data => setErrMsg(data));
                    break;
            }
            }).catch(err => {
                setErrMsg("Oops, we are currently experiencing problem, please try again later");
            })             
    }

    return ( <><div className="sticky top-0 z-50"><Plainheader backpage="groups" page="newgroup"/></div>
             
      {
        (!createGroup)
            ? <> 
            <FindUsers handleSubmit = {
                submitUsers
            } /> </>
            : <>< div className = "mt-6" > <div>
                <div className="px-4 sm:px-0">
                    <h2 className="text-lg font-medium leading-6 text-indigo-900 dark:text-white">Create Group</h2>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-200">
                        Upload a group name and description.
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 space-y-6 sm:p-6">
                            <div className="form-control col-span-6 sm:col-span-3">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Group Name"
                                    id="name"
                                    className="mt-1 h-9 dark:bg-gray-700 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                                    ref = {register({ 
                                        required: 'Group name is required',
                                        minLength: {value: 2, message: 'Group name must be between 2 and 50 characters'},
                                        maxLength: {value: 50, message: 'Group name must be between 2 and 50 characters'}, 
                                        pattern: {value: /^[ A-Za-z0-9_@./#&+-]*$/ , message: 'Group name may contain letters, numbers, or the following characters - , _, @, ., /, #, &, + .'}
                                     })}/>
                                    {errors.name && <p className="errorMsg text-sm text-red-500">{errors.name.message}</p>}    
                            </div>
                            <div className="form-control">
                                <div className="mt-1">
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows="3"
                                        className="dark:bg-gray-700 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md focus:outline-none"
                                        placeholder="Brief bio about your group"
                                        ref={register({pattern: {value: /^[ A-Za-z0-9_@./#&+-]*$/, message: 'Group name may contain letters, numbers, or the following characters - , _, @, ., /, #, &, + .'} })}></textarea>
                                </div>
                                {errors.description &&  <p className="errorMsg text-sm text-red-500">{errors.description.message}</p>} 
                            </div>
                        </div>
                        
                        {(groupMembers.length > 0)
                            ? <SwipeableList fullSwipe = {true}> 
                                    {groupMembers.map((element, index) => 
                                        // <div className="ml-2 my-2" key={index}>
                                            <SwipeableListItem trailingActions={trailingActions(element.memberID)} key = {element.memberID}>
                                                <span
                                                    className="mx-2 ml-2 mt-2 col-start-1 col-span-1 inline-block h-9 w-9 rounded-full overflow-hidden bg-gray-100 items-center">
                                                    { (!element.profilePicPath) ?
                                                        <svg
                                                            className="h-9 w-9 text-gray-300"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24">
                                                            <path
                                                                d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                                                        </svg> :
                                                        <div className={`h-12 w-12 rounded-full`}>
                                                            <Image
                                                                src={`${process.env.parfaitServer}/${element.profilePicPath}`}
                                                                alt=""
                                                                width={150}
                                                                height={150} />
                                                        </div>
                                                    }
                                                </span>
                                                <p className="text-indigo-900 dark:text-white text-md font-semibold">{element.fname + " " + element.lname}</p>
                                            </SwipeableListItem>
                                         // </div> 
                                    )}
                                </SwipeableList>
                            : <div className="text-center dark:text-white">No users selected</div>}
                        <div className="mt-2 px-4 py-3 bg-gray-50 dark:bg-gray-700 text-right sm:px-6 flex flex-nowrap justify-end">
                        <p className="mr-2 errorMsg text-sm text-red-500 text-justify rounded-lg dark:bg-white">{errMsg}</p>
                        <div>
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Save
                            </button>
                        </div>
                        </div>
                    </div>
                </form>
            </div> </div></>
    } </>
    );
}
export default newgroup;