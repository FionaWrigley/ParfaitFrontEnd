import {useState, useEffect} from 'react';
import useDebounce from './functional/useDebounce';
import Image from 'next/image'
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";
//import Link from 'next/link';


const FindUsers = ({handleSubmit}) => {

  const [searchTerm, setSearchTerm] = useState('hello');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [groupMembers, setGroupMembers] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 800);
  // const [isLoading, setIsLoading] = useState(false);

useEffect(

  () => {
    
    //search will only run every .8 seconds, rather than every key stroke.
    if (debouncedSearchTerm && !isSearching) {
      
      setIsSearching(true); //while searching - no other requests should be made
      
      fetch(process.env.parfaitServer+'/users/'+debouncedSearchTerm, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
          },
            credentials: 'include'
        }).then((res) => {
          switch (res.status) {
              case 401:
                  router.push('/login');
                  break;
              case 403:
                  router.push('/login');
                  break;
              case 200:
                  res.json()
                      .then((data) => {
                        setResults(data);
                        setIsSearching(false);
                    })
                  }})
                  
            .catch(err => console.log("Oops: "+err));
    
          } else { 
      setResults([]);
    }
  },
  [debouncedSearchTerm]
);

const handleChecked = (event) => {//member selected so add to group member list
  
  if(event.target.checked){
     let index = results.findIndex(i => i.memberID == (""+event.target.value));
     groupMembers.push(results[index]);
    
    }else{ //member has been deselected, if member is in group member list - remove

     let index = 
     groupMembers.findIndex(i => i.memberID == (""+event.target.value));
     
     if (index>=0){ 
     groupMembers.splice(index, 1);
     } 
   }
}
//make checkbox appear checked for previously selected group members
const isSelected = (id) => {

   if(groupMembers.some(e => e.memberID == id)){
      return true;
    }else{
      return false;
      }
 }

 //pass group member list back to create group page
 const handleClick = (event) => {
    handleSubmit(groupMembers);
  }
    return (
      <>
     
        <div className="mt-6">      
        <div className="px-4 sm:px-0 text-center">
        <h3 className="text-lg font-medium leading-6 text-indigo-900 dark:text-white">Add Group Members</h3 >
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-200">
            Added group members will be able to see your availability
        </p>
    </div>
        <div className="w-full inline-flex pt-2 relative mx-auto text-gray-600 justify-center">
        <input className="border-2 border-gray-300 bg-white dark:bg-gray-200 h-10 px-1 w-1/2 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search"
          onChange={e => setSearchTerm(e.target.value)} />
      </div>
      </div>
      { (isSearching) ?
        <div className="mt-8 align-middle min-w-full justify-center overflow-visible text-center flex items-center">
        <PulseLoader color="#c7d2fe" loading={isSearching} size={15} />
       </div>

      :
      <div className="grid grid-col-results gap-y-2 mt-4">
       {results.map((element, index) => <>
                        <span key={'span'+index}
                          className="mx-2 col-start-1 col-span-1 inline-block h-11 w-11 rounded-full overflow-hidden bg-gray-100 items-center">
                        { (element.profilePicPath === "") ?
                                                 <svg
                                                    className="h-11 w-11 text-gray-300"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                                                </svg> :
                        <div
                        key={index}
                        className={`h-11 w-11 rounded-full`}>
                            <Image
                            src={element.profilePicPath}
                            alt=""
                            width={150}
                            height={150} />
                        </div>}
                      </span>
                        <p className="col-start-2 text-left col-span-1 font-bold text-indigo-800 dark:text-white">{element.fname} {element.lname}</p>
                        
                        <input type ='checkbox'
                              key = {element.memberID}
                              value= {element.memberID}

                              className = "dark:bg-gray-200 col-start-3 col-span-1 h-6 w-6 rounded-full right-0"
                              defaultChecked={isSelected(element.memberID)}
                              onChange={handleChecked}
                        /></>
        // </div>
       )}
      </div>}
      <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-right sm:px-6 bottom-0">
                <button
                    type="submit"
                    onClick={handleClick}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Next 
                </button>
            </div>
</>
    );
}

export default FindUsers;