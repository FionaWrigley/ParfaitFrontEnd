import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

const Confirm = (props) => {

      return(
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className="py-2 align-middle inline-block min-w-full md:min-w-3/4 lg:min-w-3/4 sm:px-6 lg:px-8">
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <div className='bg-white min-w-1/2 text-center px-6'>
              <div className='p-6 text-center justify-center text-gray-800 flex min-w-full'>
            <svg className="h-12 w-12 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            
  </svg>
        
        <h1 className ='font-extrabold text-2xl text-center ml-5 mt-3'>{props.yesLabel}</h1>
        </div>
        <p className='p-8 text-black text-xl'>{props.msg}</p>
        <div className = 'p-6'>
        <button
          className="mr-2 w-50 inline-flex justify-end py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={onClose}>{props.noLabel}</button>
        <button
        className="w-20 inline-flex justify-end py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
        onClick ={ () => {
            props.handleConfirm;
             onClose();
        }}
          
          >Delete</button>
        </div>
        </div>
        </div>
        </div>
      )}}) )
}
export default Confirm;