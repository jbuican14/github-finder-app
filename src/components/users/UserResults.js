import {useEffect, useState} from 'react'

export default function UserResults() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try{
      const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`);
      const users = await res.json();
      setUsers(users)
      setLoading(false);

    }catch(e) {
      throw new Error(e)
    }
    
  }

  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {users.map((user) => (
        <h3 key={user.login}>{user.login}</h3>
      ))}
    </div>
  )
}
