import {Link} from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios';
axios

function Users() {
    const [users,setUsers] =useState([]);
    const [loading,setLoading] = useState(true)

    useEffect(() =>{
        axios('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data))
        .finally(()=> setLoading(false))
        
    },[])
    return (
        <div>
            Users
            {loading && <div> Loading ...</div>}
            <ul>
               {users.map((item)=>{
                   <li  key={item.id}>
                       <Link to={`/user/${item.id}`}>{item.name}</Link>
                   </li>
               })}
            </ul>
        </div>
    )
}

export default Users;
