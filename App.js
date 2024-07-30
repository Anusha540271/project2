
import React, { useState } from 'react';

 
export default function Signup() {
  const [Data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
 
  const handleSignup = () => {
   
    console.log('data:', Data);
  };
 
 
  return (
    <div className="App">
      <h1>Signup</h1>
      <input
        type="text"
        placeholder="First Name"
        value={Data.firstName}
        onChange={(e) =>
          setData({ ...Data, firstName: e.target.value })
        }
      />
     <br/>
      <input
        type="email"
        placeholder="Email"
value={Data.email}
        onChange={(e) =>
          setData({ ...Data, email: e.target.value })
        }
      />
       <br/>
       <input
        type="password"
        placeholder="Passowrd"
        value={Data.Password}
        onChange={(e) =>
          setData({ ...Data, Password: e.target.value })
        }
      />
       <br/>
       <hr/>
      <button onClick={handleSignup} className='btn btn-outline-danger'>Sign Up</button>
    </div>
  );
}