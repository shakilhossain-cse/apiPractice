const callApi = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayApi(data));
}
callApi();

const displayApi = data => {
    const root = document.getElementById('root');
    data.forEach( comment => {
    
       const div =  document.createElement('div');

       div.innerHTML= `
       <div class="w-3/4 mx-auto bg-red-200 shadow-4xl rounded border my-10">
       <div class="p-8">
           <div class=" border w-16 rounded-full absolute left-1/2  h-16 bg-white flex justify-center items-center">
               <h2 class="text-center text-4xl font-bold">${comment.id}</h2>
           </div>
           <h2 class="text-3xl font-bold my-4">Name : <span class="text-blue-700 font-semibold">${comment.body.slice(0 , 10)}</span> </h2>
           <h2 class="text-3xl font-bold my-4">Email   : <span class="text-blue-700 font-semibold">${comment.email}</span> </h2>
           <p class="text-3xl font-bold my-4">Comment : <span class="text-blue-700 font-normal">${comment.body.slice(0 , 40)}....</span></p>
       </div>
   </div>
       `;
       root.appendChild(div);
    })
}