import "./app.css"
//import Bootable from './Bootable'
import { useState } from "react"
import { Mockaro } from "./Mockaro.js"
import trimmer from "./projimages/trimmer.jpg"
import airdopes from "./projimages/51ZT3aMrJIL._AC_UL480_QL65_.jpg";
import  avengerhoddie from "./projimages/Avengers hoddie.jpg";
import mobile from "./projimages/download (1).jpg"
//var Mockaroo= require("./Mockaroo.js");
function App() {
  // var fast=document.querySelector(".fa-times"); 
  //  const items=document.querySelectorAll("#list-item"); 
  //   //setfas(!fas)
  // constructor(){
  //   super();
  //      const symbol={data:false };
  // }
  
  const [data, setdata] = useState(false);
  const [searchcount, setsearchcount] = useState();
  const [search, setsearch] = useState(false);
  function Bar() {
    setdata(!data)

  }

  function ontype(e) {

    setsearchcount(e.target.value)
    console.log(searchcount);
    setsearch(false);

  }
  

  return (
    <div >
      {/* <Bootable/> */}


      <div id="li-container" >
        <h1 id="name">REACT TECH</h1>
       <div id="new-list-container">
        <ul id="ul-container" className={data ? "#ul-container " : "#ul-container activ"}>

          <li ><a id="list-item" href="#">HOME</a></li>
          <li><a id="list-item" href="#">ABOUT</a></li>
          <li><a id="list-item" href="#">CONTACT</a></li>
          <li ><a id="list-item" href="#">SETTING</a></li>

        </ul>


        </div> 
        <a href="#" onClick={Bar} ><i className={data ? "fas fa-times" : "fas fa-bars"}></i></a>
       

      </div>
      <div id="search-div" >
        {
          search ? <h1>{searchcount}</h1>
            : null}
        <input id="search-bar" type="text" onChange={ontype} />
        <button id="search-button" onClick={() => setsearch(true)}>Search</button>

                               
        <div className='name-container'>
          {Mockaro.map((item,i) => {
            console.log(item.first_name);
            <p key={i}>
           {  item.first_name }<br/>
                console.log(item.first_name);
             </p>
            
            
             })}
         </div>
         </div>
      
             <div id="products-list">
              
              <nav id="product">  
              <img src={trimmer}  className="images"/>
              <h3 className="product-name"></h3>
              </nav>
              
              <nav id="product"> 
               <img src={airdopes} className="images"/>
               <h3 className="product-name"></h3>
              </nav>
              
              <nav id="product">
              <img src={avengerhoddie} className="images"/>
              <h3 className="product-name"></h3>
              
              </nav>
              
              <nav id="product">
              <img src={mobile} className="images"/>
             <nav id="product-attribute">
              <h3 className="product-name"> SAMSUNG </h3>
              <h6 className="product-model">GALAXY 330A</h6>
              <i id="cart" className="fas fa-bars">mkjn</i>
              </nav>
              </nav>
             </div>
    </div>
  );
}


export default App
