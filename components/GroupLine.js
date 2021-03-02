//import groups from '../groups.json';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

const GroupLine = () => {

    const [groups,
        setGroups] = useState([]);
    const [ready,
        setReady] = useState(false);
    const router = useRouter();

    useEffect(() => {

        fetch('http://localhost:5000/groups', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
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
                    res.json().then((data) => {
                        console.log(data);
                        setGroups(data);
                        setReady(true);
                });
            }}).catch(err => console.log("Oops: "+err));
            

        //     const requestOptions = {         method: 'POST',         headers: {
        // 'Content-Type': 'application/json',             'Authorization': 'Bearer
        // my-token',         },         body: JSON.stringify({ title: 'React POST
        // Request Example' })     };
        // fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
        // .then(response => response.json())         .then(data => this.setState({
        // postId: data.id })); }
    }, []);

    return ((ready)
        ? <div>
                {groups.map((element, index) => <Link href="scheduletester" key={index}>
                    <div
                        className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 border-2 border-gray-100 space-x-3">
                        <img
                            className="h-11 w-11 rounded-full inline"
                            src={window
                            .URL
                            .createObjectURL(new Blob([new Uint8Array(element.groupPic.data)], {type: 'image/jpeg'}))}
                            alt="i"/> 
                        <p className="mt-8 text-center  font-bold text-indigo-800 inline">{element.groupName}</p>
                    </div>
                </Link>)}
            </div>
        : <div>Loading...</div>)
}
export default GroupLine;