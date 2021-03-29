import Navbar from '../components/navigation/Navbar';
import GroupLine from '../components/GroupLine';
import FooterMenu from '../components/navigation/FooterMenu';
import {
    SwipeableList,
  } from 'react-swipeable-list';
  import 'react-swipeable-list/dist/styles.css';

 
export default function groups() {

return (<>
    <div className="sticky top-0 z-50" ><Navbar page="My Groups"/></div>

     <div className="overflow-y-scroll antialiased font-sans bg-gradient-to-r from-gray-100 to-gray-100 via-white">
        <div className="m-0 min-w-full min-h-full">
            <div className="container overflow-x-auto overflow-y-auto">
                <div className="inline-block min-w-full overflow-hidden">
                        <SwipeableList>
                        <GroupLine />
                        </SwipeableList>
                </div>
            </div>
            <FooterMenu page='groups'/>
        </div>
    </div>
    </>
    )
}