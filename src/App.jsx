import React,{useState} from 'react'


const App = () => {
  let [page, setPage] = useState(true);
  const clickEvent = () => {setPage(!page);}; 
  
  
  let [pageName,setPageName] = useState('Home');

  return (
    <div>
      <h1>Practice</h1>



      <button onClick={clickEvent}>Change</button>
      {page ? <div><h4>Homepage</h4></div> : <div><h4>Landing Page</h4></div>}





      <button onClick={() => setPageName('Home')}>Home</button>
      <button onClick={() => setPageName('Landing')}>Landing</button>
      <button onClick={() => setPageName('About')}>About</button>
      <div>
        {pageName === "Home" && <div>Home</div>}
        {pageName === "About" && <div>About</div>}
        {pageName === "Landing" && <div>Landing</div>}
      </div>



    </div>
  );
}

export default App;
