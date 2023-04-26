import React ,{useState} from 'react'
import Products from './Products';
const App = () => {
  const [search,setSearch] = useState("");
  const [data,setData] = useState([]);
  const YOUR_APP_ID = '9ceb6a4a';
  const YOUR_APP_KEY = '9f12c05b5ae125c11b30c856d71ffc96';
  const changehandler = e =>{
    setSearch(e.target.value);
  }
  const submithandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=50&calories=591-722&health=alcohol-free`)
  .then(res => res.json())
  .then(data =>{
    setData(data.hits);
  })
    //   console.log(search);
   }
  return (
    <div>
      <center>
        <h3 className='header'>Food Recipe Search</h3>
        <form onSubmit={submithandler}>
          <input type='text' placeholder='search recipe' onChange={changehandler}  /><br /><br />
          <input type='submit' value='search' name='search' />
        </form>
        {data.length >=1 ? <Products data={data}/> : <h1 style={{color:'red'}}>sorry ! No results Found...</h1>}
      </center>
    </div>
  )
}

export default App