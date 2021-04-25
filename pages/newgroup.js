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
    const [errorMessage,
        setErrorMessage] = useState("");
        const router = useRouter();

    const submitUsers = (m) => {
        setGroupMembers(m);
        console.log(m);
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

        console.log("members ", groupMembers)
        let index = groupMembers.findIndex(i => i.memberID == (""+userID));
        
        if (index > -1) {
            groupMembers.splice(index, 1)
        }
        console.log('updated members ', groupMembers)
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
            }
            }).catch(err => {
                setErrorMessage("Oops, we are currently experiencing problem, please try again later");
            })             
    }

    return ( <><div className="sticky top-0 z-50"><Plainheader backpage="groups" page="newgroup"/></div>
             <p className="errorMsg text-sm text-red-600">{errorMessage}</p>
      {
        (!createGroup)
            ? <> 
            <FindUsers handleSubmit = {
                submitUsers
            } /> </>
            : <>< div className = "mt-6" > <div>
                <div className="px-4 sm:px-0">
                    <h2 className="text-lg font-medium leading-6 text-indigo-900">Create Group</h2>
                    <p className="mt-1 text-sm text-gray-600">
                        Upload a group name and description.
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div className="form-control col-span-6 sm:col-span-3">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Group name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    ref = {register({ required: true, minLength: 2, maxLength: 50, pattern: /^[ A-Za-z0-9_@./#&+-]*$/ })}
                                    className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/>
                                    {errors.name && errors.name.type === "required" && (
                                        <p className="errorMsg text-sm text-red-600">Group name is required.</p>
                                      )}
                                      {errors.name && (errors.name.type === "minLength" || errors.name.type === "maxLength" ) && (
                                        <p className="errorMsg text-sm text-red-600">Group name must be between 2 and 50 characters.</p>
                                      )}
                                      {errors.name && errors.name.type === "pattern" && (
                                        <p className="errorMsg text-sm text-red-600">Group name may contain letters, numbers, or the following characters - , _, @, ., /, #, &, + ..</p>
                                      )}
                            </div>
                            <div className="form-control">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                    About
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="description"
                                        name="description"
                                        ref={register({pattern: /^[ A-Za-z0-9_@./#&+-]*$/})}
                                        rows="3"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md focus:outline-none"
                                        placeholder="brief bio about your group"></textarea>
                                </div>
                                {errors.description && errors.description.type === "pattern" && (
                                        <p className="errorMsg text-sm text-red-600">Group name may contain letters, numbers, or the following characters - , _, @, ., /, #, &, + ..</p>
                                )}
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
                                                <p className="text-indigo-900 text-md font-semibold">{element.fname + " " + element.lname}</p>
                                            </SwipeableListItem>
                                         // </div> 
                                    )}
                                </SwipeableList>
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