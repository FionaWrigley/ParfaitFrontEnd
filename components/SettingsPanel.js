
import {useState, useEffect} from 'react';
import React from 'react';
import {useTheme} from 'next-themes'


const SettingsPanel = () => {

    const {theme, setTheme} = useTheme('')

    return ( 
    <><div className="mt-4 sm:mt-0">
        <div>
            <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Settings</h3 >
            </div>
        </div >
        <div>
            <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">     
                            <div className="ml-10 flex items-center justify-center w-full mb-12">
                                <label htmlFor="toggleB" className="flex items-center cursor-pointer" >
                                    {/* <!-- toggle --> */}
                                    <div className="relative">
                                        {/* <!-- input --> */}
                                            <input type="checkbox" id="toggleB" className="sr-only"
                                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
                                            {/* <!-- line --> */}
                                            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                                            {/* <!-- dot --> */}
                                            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                                    </div>
                                    {/* <!-- label --> */}
                                    <div className="ml-3 text-gray-700 dark:text-white w-full font-medium">
                                        Dark Mode
                                    </div>
                                </label>
</div></div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-right sm:px-6">
                            </div>
                        </div>
    </form>
</div>

</div >
                        


        </>
        
    )


}
export default SettingsPanel;