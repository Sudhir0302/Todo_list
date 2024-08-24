import {useState,useEffect} from 'react';
import { FaTrash } from 'react-icons/fa';
import "./App.css";
import Additems from './Additems';
import Search from './Search';
import apiRequest from './apiRequest';
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
function Todo()
{
   const API_URL='http://localhost:3500/items';
   const [items,setItems]=useState([])

   const [newitems,setNewitems]=useState('')

   const [search,setSearch] =useState('')

   const [fetcherror,setFetcherror]=useState(null)

   const[isLoading,setIsLoading]=useState(true);

   useEffect(()=>{
     const fetchItems =async ()=>{
        try{
          const response=await fetch(API_URL);
          if (!response.ok) throw new Error('Failed to fetch items');
          console.log(response)
          const listitems= await response.json();
          console.log(listitems)
          setItems(listitems)
          setFetcherror(null)
        } catch(err){
            setFetcherror(err.message)
        }finally{
          setIsLoading(false)
        }
     }
     setTimeout(() => {
      (async ()=> await fetchItems())()
     }, 2000);
   },[])

  const additem = async (item)=>{ //it is a function but it is written as arrow function which takes item as parameter **NOTE that it is not a map function***
    const id=items.length ? items[items.length-1].id + 1 : 1; // to add id to the new item
    const add={id, checked : false , item} // fromat of the item (i.e.objects)
    const newitems=[...items,add] /// adding existing items to the array
    setItems(newitems) //updating the items using setitems
    //localStorage.setItem("tictactoe",JSON.stringify(items))

    const postOptions={
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(add)
    }
    const result= await apiRequest(API_URL,postOptions)
    if(result) setFetcherror(result)

   }
   const handleclick= async (id)=>{
      
      const listitems=items.map((item)=>
        item.id===id ?{...item,checked:!item.checked} : item
      )
      setItems(listitems)
      
      const myItem = listitems.filter((item)=> item.id===id)
      const updateOptions={ 
        method: 'PATCH',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({checked:myItem[0].checked})
      }
      const reqUrl = `${API_URL}/${id}`
      const result= await apiRequest(reqUrl,updateOptions)
      if(result) setFetcherror(result)
      //localStorage.setItem("tictactoe",JSON.stringify(items))
   }
   const handledelete = async (id)=>{

      const listitems=items.filter((item)=>
        item.id!==id
      )
      setItems(listitems)

      const deleteOptions ={
        method: 'DELETE'
      }
      const reqUrl = `${API_URL}/${id}`
      const result= await apiRequest(reqUrl,deleteOptions)
      if(result) setFetcherror(result)
      //localStorage.setItem("tictactoe",JSON.stringify(items))
   }

   function handleSubmit(e) ///handling newitems adding
   {
      e.preventDefault() //prevents reloading the page everytime when you submit the form
     // alert("additems")
      if(!newitems.trim()) return;//returns if there's empty input
      additem(newitems)
      setNewitems('')
   }
   return(
    <main>
      <header>TODO LIST</header>
      <Search search={search} setSearch={setSearch}/>
      <br></br>
      <Additems 
        newitems={newitems}
        setNewitems={setNewitems}
        handleSubmit={handleSubmit}
      />  
      <div className='todo'>
        {isLoading && <p>Loading items...</p>}
        {fetcherror && <p>{`Error : ${fetcherror}`}</p>}
        {!isLoading&& !fetcherror&&
        <main>
          {(items.length) ? (
          <ul className='ul'>
            {items.filter(item=>(item.item).toLowerCase().includes(search.toLowerCase())).map((item)=>
              <li key={item.id}>
                <input className='input'
                  type="checkbox" 
                  onChange={()=>handleclick(item.id)}
                  checked={item.checked}
                />
                <label 
                  style={(item.checked)?{textDecoration: 'line-through'}: null}>{item.item}
                </label>
                <FaTrash 
                    className="button" 
                    tabIndex="0" 
                    onClick={()=>handledelete(item.id)}
                    aria-label={`Delete ${item.item}`}
                />
              </li>
            )}
        </ul>
        ) : <p>You're list is empty!!!</p>}
        </main>}
      </div>
    </main>
   )
}
export default App;