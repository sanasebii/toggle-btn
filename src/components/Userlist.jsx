import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Userlist = () => {
    const [userList, setUserList] = useState([{}]);
    
    useEffect(() => {
        getUserList();
    }, []);

    const getUserList = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
            setUserList(response.data);
        } catch (error) {
            console.error('Error fetching user list:', error);
        }
    };

    return (
        <div>
            <h1>Userlist</h1>
            {userList.map((item) => (
                <div key={item.id} className="user">
                    <p><b>{item.id}</b> {item.title}</p>
                </div>
            ))}
            {/* <ul>
                {userList.map((item) => (
                    <li key={item.id}><b>{item.id}</b><p>{item.title}</p></li>
                ))}
            </ul> */}
        </div>
    );
};

export default Userlist;
