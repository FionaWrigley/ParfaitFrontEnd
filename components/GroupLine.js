//import groups from '../groups.json';
import Link from 'next/link';
import {useEffect, useState} from 'react';

const GroupLine = () => {

    const [groups,  setGroups] = useState([]);
    const [ready, setReady] = useState(false);
  
    useEffect(() => {

        fetch('http://localhost:5000/groups',
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
          })
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            setGroups(data);
            setReady(true);
        });

    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer my-token',
    //         },

    //         body: JSON.stringify({ title: 'React POST Request Example' })
    //     };
    //     fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
    //         .then(response => response.json())
    //         .then(data => this.setState({ postId: data.id }));
    // }




    },[]);

    return (
        (ready) ? 
        <div>
            {groups.map((element, index) => <Link href="scheduletester" key={index}>
                <div
                    className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 border-2 border-gray-100 space-x-3">
                    <img className="h-11 w-11 rounded-full inline " src={element.groupPic} alt=""/>
                    <p className="mt-8 text-center  font-bold text-indigo-800 inline">{element.groupName}</p>
                </div>
            </Link>)}
        </div>
        : <div>Loading...</div>

    )
}
export default GroupLine;