import Navbar from '../components/navigation/Navbar';
import FooterMenu from '../components/navigation/FooterMenu';
import Link from 'next/link';
  import {useEffect, useState} from 'react';
  import {useRouter} from 'next/router';
  import {
      SwipeableListItem,
      SwipeAction,
      TrailingActions,
    } from 'react-swipeable-list';
    import 'react-swipeable-list/dist/styles.css';
import GroupImages from '../components/GroupImages';
  
    const trailingActions = () => (
      <TrailingActions>
        <SwipeAction
          destructive={true}
          onClick={() => console.info('swipe action triggered')}>
          Delete
        </SwipeAction>
      </TrailingActions>
    );
  
   const groups = () => {
  
      const [groupData,
          setGroupData] = useState([]);
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
                              setGroupData(data);
                              setReady(true);
                          })
              }
          }).catch(err => console.log("Oops: " + err));
      }, []);
  
      const handleDelete = () => {
          //donothing
      }

return (<>
    <div className="sticky top-0 z-50" ><Navbar page="My Groups"/></div>

     <div className="overflow-y-scroll antialiased font-sans bg-gradient-to-r from-gray-100 to-gray-100 via-white">
        <div className="m-0 min-w-full min-h-full">
            <div className="min-w-full container overflow-x-auto overflow-y-auto">
                <div className="inline-block min-w-full overflow-hidden">
                        {/* <SwipeableList> */}
                        {(ready)
        ? <> {
            groupData.map((element, index) => 
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
                           
                            <GroupImages groupID={element.groupID} size={6}/>
                       
                            <div className="ml-3 h-full">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    {element.groupName}
                                </p>
                            </div>
                        </div>
                    </div>
                   
                </div>

            </Link>
            </SwipeableListItem>)}
          </>
        : <div>Loading...</div >}
                        {/* </SwipeableList> */}
                </div>
            </div>
            <FooterMenu page='groups'/>
        </div>
    </div>
    </>
    )
}

export default groups;