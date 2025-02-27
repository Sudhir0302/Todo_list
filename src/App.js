import {useState,useEffect} from 'react';
import { FaTrash } from 'react-icons/fa';
// import "./App.css";
import Additems from './Additems';
import Search from './Search';
// import apiRequest from './apiRequest';
function App()
{
  return(
    <div>
    <Todo />
    </div>
  )
}

/*
const call=(e)=>{
  console.log(e.target.innerText);
  alert("helloooo")
}
function Test()
{
   return(
    <div>
      <h1>hello</h1>
      <button onClick={(e)=>{call(e)}}>check</button>
    </div>
   );
}

const list = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
  },
  ];

function List()
{
  return(
    <div>
      {list.map((func)=>(
        <div key={func.objectID}>
        <h2>{func.title}</h2>
        <h2>{func.url}</h2>
        </div>
      ))}
    </div>
  );
}

function State()
{
  const[count,setCount]=useState(1);
  
  function plus()
  {
    setCount();
  }
  
  function minus()
  {
     if(count>0)
      {
      setCount(count-1);
     }
  }
  return(
    <div>
      <button onClick={plus}>+</button><br></br>
      <span>{count}</span><br></br>
      <button onClick={minus}>-</button>
    </div>
  );
}
*/
// function Todo()
// {
//    const API_URL='http://localhost:3500/items';
//    const [items,setItems]=useState([])

//    const [newitems,setNewitems]=useState('')

//    const [search,setSearch] =useState('')

//    const [fetcherror,setFetcherror]=useState(null)

//    const[isLoading,setIsLoading]=useState(true);

//    useEffect(()=>{
//      const fetchItems =async ()=>{
//         try{
//           const response=await fetch(API_URL);
//           if (!response.ok) throw new Error('Failed to fetch items');
//           console.log(response)
//           const listitems= await response.json();
//           console.log(listitems)
//           setItems(listitems)
//           setFetcherror(null)
//         } catch(err){
//             setFetcherror(err.message)
//         }finally{
//           setIsLoading(false)
//         }
//      }
//      setTimeout(() => {
//       (async ()=> await fetchItems())()
//      }, 2000);
//    },[])

//   const additem = async (item)=>{ //it is a function but it is written as arrow function which takes item as parameter **NOTE that it is not a map function***
//     const id=items.length ? items[items.length-1].id + 1 : 1; // to add id to the new item
//     const add={id, checked : false , item} // fromat of the item (i.e.objects)
//     const newitems=[...items,add] /// adding existing items to the array
//     setItems(newitems) //updating the items using setitems
//     //localStorage.setItem("tictactoe",JSON.stringify(items))

//     const postOptions={
//       method: 'POST',
//       headers: {
//         'Content-Type' : 'application/json'
//       },
//       body: JSON.stringify(add)
//     }
//     const result= await apiRequest(API_URL,postOptions)
//     if(result) setFetcherror(result)

//    }
//    const handleclick= async (id)=>{
      
//       const listitems=items.map((item)=>
//         item.id===id ?{...item,checked:!item.checked} : item
//       )
//       setItems(listitems)
      
//       const myItem = listitems.filter((item)=> item.id===id)
//       const updateOptions={ 
//         method: 'PATCH',
//         headers: {
//           'Content-Type' : 'application/json'
//         },
//         body: JSON.stringify({checked:myItem[0].checked})
//       }
//       const reqUrl = `${API_URL}/${id}`
//       const result= await apiRequest(reqUrl,updateOptions)
//       if(result) setFetcherror(result)
//       //localStorage.setItem("tictactoe",JSON.stringify(items))
//    }
//    const handledelete = async (id)=>{

//       const listitems=items.filter((item)=>
//         item.id!==id
//       )
//       setItems(listitems)

//       const deleteOptions ={
//         method: 'DELETE'
//       }
//       const reqUrl = `${API_URL}/${id}`
//       const result= await apiRequest(reqUrl,deleteOptions)
//       if(result) setFetcherror(result)
//       //localStorage.setItem("tictactoe",JSON.stringify(items))
//    }

//    function handleSubmit(e) ///handling newitems adding
//    {
//       e.preventDefault() //prevents reloading the page everytime when you submit the form
//      // alert("additems")
//       if(!newitems.trim()) return;//returns if there's empty input
//       additem(newitems)
//       setNewitems('')
//    }
//    return(
//     <main>
//       <header>TODOO LIST</header>
//       <Search search={search} setSearch={setSearch}/>
//       <br></br>
//       <Additems 
//         newitems={newitems}
//         setNewitems={setNewitems}
//         handleSubmit={handleSubmit}
//       />  
//       <div className='todo'>
//         {isLoading && <p>Loading items...</p>}
//         {fetcherror && <p>{`Error : ${fetcherror}`}</p>}
//         {!isLoading&& !fetcherror&&
//         <main>
//           {(items.length) ? (
//           <ul className='ul'>
//             {items.filter(item=>(item.item).toLowerCase().includes(search.toLowerCase())).map((item)=>
//               <li key={item.id}>
//                 <input className='input'
//                   type="checkbox" 
//                   onChange={()=>handleclick(item.id)}
//                   checked={item.checked}
//                 />
//                 <label 
//                   style={(item.checked)?{textDecoration: 'line-through'}: null}>{item.item}
//                 </label>
//                 <FaTrash 
//                     className="button" 
//                     tabIndex="0" 
//                     onClick={()=>handledelete(item.id)}
//                     aria-label={`Delete ${item.item}`}
//                 />
//               </li>
//             )}
//         </ul>
//         ) : <p>You're list is empty!!!</p>}
//         </main>}
//       </div>
//     </main>
//    )
// }
// export default App;
// import React, { useState, useEffect } from 'react';
// import { FaTrash } from 'react-icons/fa';
// import Search from './Search';
// import Additems from './Additems';

function Todo() {
  const [items, setItems] = useState([]);
  const [newitems, setNewitems] = useState('');
  const [search, setSearch] = useState('');
  const [fetcherror, setFetcherror] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   // Load items from localStorage on component mount
  //   const storedItems = JSON.parse(localStorage.getItem('todoItems'));
  //   if (storedItems) {
  //     setItems(storedItems);
  //   }
  // }, []);

  // const updateLocalStorage = (newItems) => {
  //   localStorage.setItem('todoItems', JSON.stringify(newItems));
  // };

  const additem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const add = { id, checked: false, item };
    const newItems = [...items, add];
    setItems(newItems);
    // updateLocalStorage(newItems);
  };

  const handleclick = (id) => {
    const listitems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listitems);
    // updateLocalStorage(listitems);
  };

  const handledelete = (id) => {
    const listitems = items.filter((item) => item.id !== id);
    setItems(listitems);
    // updateLocalStorage(listitems);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!newitems.trim()) return;
    additem(newitems);
    setNewitems('');
  }

  return (
    <main className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg transition-all duration-300">
      <header className="text-4xl font-bold text-center text-gray-700 mb-8">
        Todo List
      </header>

      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search todos..."
          className="w-full p-4 text-lg rounded-full shadow-inner text-gray-800 border border-gray-300 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Add New Items */}
      <form onSubmit={handleSubmit} className="flex items-center justify-between mb-8">
        <input
          type="text"
          placeholder="Add a new todo..."
          className="flex-grow p-4 mr-4 text-lg rounded-full shadow-inner text-gray-800 border border-gray-300 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          value={newitems}
          onChange={(e) => setNewitems(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 focus:ring-2 focus:ring-blue-400"
        >
          Add
        </button>
      </form>

      {/* Todo List */}
      <div className="bg-gray-50 p-6 rounded-lg shadow">
        {isLoading && <p className="text-center text-lg text-gray-500">Loading items...</p>}
        {fetcherror && <p className="text-center text-red-500">{`Error: ${fetcherror}`}</p>}

        {!isLoading && !fetcherror && (
          <div>
            {items.length ? (
              <ul className="space-y-4">
                {items
                  .filter((item) => item.item.toLowerCase().includes(search.toLowerCase()))
                  .map((item) => (
                    <li
                      key={item.id}
                      className={`flex items-center justify-between p-4 border-b border-gray-300 transition-all duration-300 ${
                        item.checked ? 'bg-green-100' : 'hover:bg-gray-100'
                      } rounded-lg shadow-md`}
                    >
                      <div className="flex items-center">
                        <input
                          className="mr-4 w-5 h-5 text-blue-500 border-gray-300 rounded-full focus:ring-blue-400 transition-all duration-300 cursor-pointer"
                          type="checkbox"
                          onChange={() => handleclick(item.id)}
                          checked={item.checked}
                        />
                        <label
                          className={`text-lg font-medium transition-all duration-300 ${
                            item.checked ? 'line-through text-gray-500' : 'text-gray-800'
                          }`}
                        >
                          {item.item}
                        </label>
                      </div>
                      <FaTrash
                        className="text-red-500 cursor-pointer transition-transform transform duration-300 hover:scale-110"
                        onClick={() => handledelete(item.id)}
                      />
                    </li>
                  ))}
              </ul>
            ) : (
              <p className="text-center text-lg text-gray-500">Your list is empty!!!</p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default Todo;
