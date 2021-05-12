import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image'

const GroupImages = (props) => {


    const [groupImages] = useState([]);
    const [ready,
        setReady] = useState(false);
    const router = useRouter();
    let size = 6;

    if(props.size){
        size=props.size;
    }

    useEffect(() => {
        fetch(process.env.parfaitServer+'/grouppics/' + props.groupID, {
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
                    res
                        .json()
                        .then((data) => {

                            for (let i = 0; i < data.length; i++) {

                                if (data[i].profilePicPath == "") {

                                    groupImages.push(
                                        <span
                                            key={i}
                                            className={`inline-block h-${size} w-${size} rounded-full overflow-hidden`}>
                                            <svg
                                                className="h-full w-full text-gray-300"
                                                fill="currentColor"
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                                            </svg>
                                        </span>
                                    )
                                } else {

                                    groupImages.push(<div
                                        key={i}
                                        className={`inline-block h-${size} w-${size} rounded-full overflow-hidden`}>
                                            <Image
                                            src={`${process.env.parfaitServer}/${data[i].profilePicPath}`}
                                            alt=""
                                            width={150}
                                            height={150} /></div>);
                                }
                                if (i == data.length - 1) {
                                    setReady(true);
                                }
                            } 
                        })
            }
        }).catch(err => console.log("Oops: " + err));
    }, []);

    return (
        <div className="flex -space-x-1 overflow-hidden">
            {(ready)
                ? <> {groupImages} </>
                : <> 
                    <span className="inline-block h-6 w-6 rounded-full overflow-hidden bg-gray-100">
                        <svg
                            className="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                                <path
                                d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/> 
                        </svg> 
                    </span>
                    <span className="inline-block h-6 w-6 rounded-full overflow-hidden bg-gray-100">
                        <svg
                            className="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/> 
                        </svg> 
                    </span>
                    <span className="inline-block h-6 w-6 rounded-full overflow-hidden bg-gray-100">
                        <svg
                            className="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                                <path
                                    d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/> 
                        </svg> 
                    </span>  
                </>
            }
        </div>
    )
}

export default GroupImages;