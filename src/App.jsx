import React,{useState} from 'react'


const App = () => {

  let [page, setPage] = useState(true);
  const clickEvent = () => {setPage(!page);}; 
  





  let [pageName,setPageName] = useState('Home');






  let [Text, setText] = useState("");
  console.log("render");
  console.log(Text);






  const cars = [
    {brand: "Toyota", model: "yaris", topSpeed: "190km/h"},
    {brand: "Mercedes", model: "C63", topSpeed: "260km/h"},
    {brand: "Mazda", model: "6", topSpeed: "210km/h"},
    {brand: "Mazda", model: "Civic", topSpeed: "200km/h"},
    {brand: "Audi", model: "A4", topSpeed: "220km/h"},
  ];

  /* const listHTML = cars.map((e, i) => { 
    return (<li key={i}> {e.brand} - {e.model} {e.topSpeed}</li>)
  }); */
  let [CarText, setCarText] = useState("");






  return (
    <div>
      <h1>Practice</h1>
      <hr/> 


      <button onClick={clickEvent}>Change</button>
      {page ? <div><h4>Homepage</h4></div> : <div><h4>Landing Page</h4></div>}




      <hr/> 
      <button onClick={() => setPageName('Home')}>Home</button>
      <button onClick={() => setPageName('Landing')}>Landing</button>
      <button onClick={() => setPageName('About')}>About</button>
      <div>
        {pageName === "Home" && <div><h4>Home</h4></div>}
        {pageName === "About" && <div><h4>About</h4></div>}
        {pageName === "Landing" && <div><h4>Landing</h4></div>}
      </div>





      <hr/>
      <form>
        {Text.length < 3 && <label>Min 3 char</label>}     
        <input type="text" name="text" value={Text} onChange={(e) => {setText(Text = e.target.value) }}/>
        <div><h4>{Text}</h4></div>
        <input type="submit" value="Submit" disabled={Text.length < 3}/>
      </form>




      <hr/>
      <ul>
        <label>Szűrés</label>
        <input type="text" name="text" value={CarText} onChange={(e) => {setCarText(Text = e.target.value) }}/>
        {/* {listHTML} */}
        {/* {cars.map(car => <li key={car.model}>{car.brand} - {car.model} {car.topSpeed}</li>)} */}
        {cars.map(car => {
          return car.brand.startsWith(CarText) && <li key={car.model}>{car.brand} - {car.model}    {car.topSpeed}</li>
        })}
      </ul>



    </div>
  );
}

export default App;
