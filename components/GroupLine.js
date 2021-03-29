//import groups from '../groups.json';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
  import 'react-swipeable-list/dist/styles.css';

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => console.info('swipe action triggered')}>
        Delete
      </SwipeAction>
    </TrailingActions>
  );

const GroupLine = () => {

    const [groups,
        setGroups] = useState([]);
    const [ready,
        setReady] = useState(false);
    const router = useRouter();

    useEffect(() => {

        fetch('http://localhost:5000/groups', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
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
                    res
                        .json()
                        .then((data) => {
                            setGroups(data);
                            setReady(true);
                        })
            }
        }).catch(err => console.log("Oops: " + err));
    }, []);

    const handleDelete = () => {
        //donothing
    }

    return ((ready)
        ? <> {
            groups.map((element, index) => 
            <SwipeableListItem 
            key ={index}
            trailingActions={trailingActions()}>
            <Link
                className='min-w-full'
                href={{
                pathname: 'groupschedule',
                query: {
                    groupID: element.groupID
                }
            }}
                key={index}>
                   
                <div className='min-w-full  border-b border-b-2 border-gray-200'>               
                    <div className="px-5 py-4 bg-white text-md font-semibold min-w-full">
                        <div className="flex items-center">
                           
                            <div className="flex -space-x-1 overflow-hidden">
                                <img
                                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""/>
                                <img
                                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""/>
                                <img
                                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                    alt=""/>
                                <img
                                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""/>
                            </div>

                            <div className="ml-3 h-full">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    {element.groupName}
                                </p>
                            </div>
                        </div>
                    </div>
                   
                </div>
                                      
                {/* <div
                        className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 border-2 border-gray-100 space-x-3"> */}
                {/* <img
                            className="h-11 w-11 rounded-full inline"
                            src={window
                            .URL
                            .createObjectURL(new Blob([new Uint8Array(element.groupPic.data)], {type: 'image/jpeg'}))}
                            alt="i"/>  */}
                {/* <p className="mt-8 text-center  font-bold text-indigo-800 inline">{element.groupName}</p>
                    </div> */}

            </Link>
            </SwipeableListItem>)
         } </>
        : <div>Loading...</div >)
}
export default GroupLine;