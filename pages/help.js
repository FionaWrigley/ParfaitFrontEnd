import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignOutAlt, faEdit, faUser, faArrowLeft, faUsers, faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import Plainheader from '../components/navigation/Plainheader'
const help = () => {

    const groupIcon = <FontAwesomeIcon icon={faEdit} size="lg"/>
    const profileIcon = <FontAwesomeIcon icon={faUser} size='lg' />
    const groupsIcon = <FontAwesomeIcon icon={faUsers} size = "lg" />
    const calIcon = <FontAwesomeIcon icon={faCalendarAlt} size = "lg" />
    const backIcon = <FontAwesomeIcon icon={faArrowLeft} size="lg"/>
    const logoutIcon = <FontAwesomeIcon icon={faSignOutAlt} size="lg"/>

return (
    <><div className="sticky top-0 z-50"><Plainheader backpage="editprofile" page="help"/></div>

{/* My Groups help */}
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          My Groups
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          My Groups allows you to see a list of your groups, and to create new ones.
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 grid grid-cols-2 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 col-start-1" >
                <div className='w-5 h-5'>
                    {profileIcon}
                </div>
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 col-start-2 sm:col-span-1">
                    Edit profile / settings
            </dd>
          </div>
          <div className="bg-white px-4 py-5 grid grid-cols-2 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
            <div className='w-6 h-6'>
                    {groupIcon}
                </div>
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
              Create group
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 grid grid-cols-2 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
                <div className='w-7 h-7'>
                    {groupsIcon}
                </div>
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
              My Groups
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 grid grid-cols-2 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
                <div className='w-6 h-6'>
                    {calIcon}
                </div>
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 col-span-1">
              My Schedule
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              About
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
             To see a group schedule, select the group from the list. To leave a group, vist the group schedule and select leave group.
            </dd>
          </div>
        </dl>
      </div>
    </div>

{/* My Schedule help */}
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          My Schedule
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
        My schedule allows you to manage your individual schedule and create, edit, delete events.
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 grid grid-cols-2 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 col-start-1" >
                <div className='w-5 h-5'>
                    {profileIcon}
                </div>
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 col-start-2 sm:col-span-1">
                    Edit profile / settings
            </dd>
          </div>
          <div className="bg-white px-4 py-5 grid grid-cols-2 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
            <div className='w-6 h-6'>
                    {groupIcon}
                </div>
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
              Create Event
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 grid grid-cols-2 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
                <div className='w-7 h-7'>
                    {groupsIcon}
                </div>
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
              Groups
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 grid grid-cols-2 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
                <div className='w-6 h-6'>
                    {calIcon}
                </div>
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 col-span-1">
              My Schedule
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              About
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
             Select a date to see specific events on that date. Select an event to edit it. Swipe left on an event to delete it.
            </dd>
          </div>
        </dl>
      </div>
    </div>

{/* Group Schedule help */}
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Group Schedule
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
            View 4 week schedule for group members
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 grid grid-cols-2 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 col-start-1" >
                <div className='w-5 h-5'>
                    {backIcon}
                </div>
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 col-start-2 sm:col-span-1">
                    Return to groups
            </dd>
          </div>
          <div className="bg-white px-4 py-5 grid grid-cols-2 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
            <div className='w-6 h-6'>
                    {logoutIcon}
                </div>
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
              Leave group
            </dd>
          </div>

          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              About
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Rotate device to see full schedule view.
            </dd>
          </div>
        </dl>
      </div>
    </div>

{/* Setting help */}
<div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Edit profile / Settings
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Upload profile pic, update member details, change password, change theme.
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 grid grid-cols-2 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 col-start-1" >
                <div className='w-5 h-5'>
                    {backIcon}
                </div>
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 col-start-2 sm:col-span-1">
                    Return to groups
            </dd>
          </div>
          <div className="bg-white px-4 py-5 grid grid-cols-2 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
            <div className='w-6 h-6'>
                    {logoutIcon}
                </div>
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
              Log out of Parfait
            </dd>
          </div>

        </dl>
      </div>
    </div>
    </>

)

}

export default help;