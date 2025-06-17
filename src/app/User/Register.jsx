import React from 'react'

export default function Register({userInfo}) {

    

  let {userData , setUserData} = userInfo;
  let handleForm=(event)=>{
    let form = event.target
    let userObj={
        uname:form.uname.value,
       uemail:form.uemail.value,
       upassword:form.upassword.value,
       uphone:form.uphone.value
    }
    let data=[...userData];
    data.push(userObj);
    setUserData(data)

    console.log(data)
    form.reset();
    event.preventDefault();
  }

  return (
    
  
  
    <div class="min-h-screen flex items-center justify-center bg-blue-400">

 
  <div class="bg-white p-16 rounded shadow-2xl ">

    <h2 class="text-3xl font-bold mb-10 text-gray-800">Create Your Account</h2>

    <form class="space-y-5" onSubmit={handleForm}>

      <div>
        <label class="block mb-1 font-bold text-gray-500">Name</label>
        <input type="text" name="uname" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
      </div>

      <div>
        <label class="block mb-1 font-bold text-gray-500">Email</label>
        <input type="email" name="uemail" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
      </div>

      <div>
        <label class="block mb-1 font-bold text-gray-500">Password</label>
        <input type="password" name="upassword" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
      </div>
      <div>
        <label class="block mb-1 font-bold text-gray-500">Phone No</label>
        <input type="phone" name="uphone" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
      </div>

      <button class="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">Sign Up</button>

    </form>

  </div>

</div>

  

  )
}
