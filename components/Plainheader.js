import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Plainheader= () => {

    const backIcon = <FontAwesomeIcon icon={faArrowLeft} size = "lg" />

return (
<nav className="bg-pink-200">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-12">
           <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
      <div className="ml-3 absolute left-0 ">
          <div>
            <button className="bg-pink-200 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
              {backIcon}
            </button>
          </div>
        </div>
        
        <div className="flex-shrink-0 flex items-center">
          {/* <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
          <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" /> */}
         <img className="block lg:hidden h-8 w-auto" src="/images/logo.svg" alt="Logo"/>
        
        </div>
      
        </div>
      
      
    
      </div>
      </div>

</nav>
)
}


export default Plainheader;