import React from "react";

export default function UserList({ userInfo }) {
  let { userData, setUserData } = userInfo;
  let userRow = userData.map((items, index) => {

    function deleteRow(currentIndex){
      if(confirm("Are you shure You Want to Delete ?")){
        let filterData=userData.filter((v,i)=> i!==currentIndex);
      setUserData(filterData)
      }
      
    }
    return (
      <tr>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            {index+1}</td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          {items.uname}
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
           {items.uemail}
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
           {items.upassword}
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
           {items.uphone}
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button onClick={()=>deleteRow(index)}>delete</button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      {userData.length}
      <div class=" mx-auto bg-white rounded shadow-md">
        <h2 class="text-2xl font-semibold leading-tight">Users</h2>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    SL.NO
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Email
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Password
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Phone
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                userRow.length>=1
                ?
                userRow
                :
                <tr>
                    <td td class="px-5 py-5 border-b border-gray-200 bg-white text-sm" colSpan={5}>
                     No User Found
                    </td>
                </tr>
                } 
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
