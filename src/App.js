import "./app.css"
//import Bootable from './Bootable'
import { useState } from "react"
import { Mockaroo } from "./Mockaroo.js";
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
  function newterm(e) {
    console.log("search", e);
  }

  return (


    <div>
      {/* <Bootable/> */}


      <div id="li-container" >
        <h1 className="name">REACT TECH</h1>
        <ul id="ul-container" className={data ? "#ul-container " : "#ul-container activ"}>

          <li ><a id="list-item" href="#">HOME</a></li>
          <li><a id="list-item" href="#">ABOUT</a></li>
          <li><a id="list-item" href="#">CONTACT</a></li>
          <li ><a id="list-item" href="#">SETTING</a></li>

        </ul>



        <a href="#" onClick={Bar} ><i className={data ? "fas fa-times" : "fas fa-bars"}></i></a>


      </div>
      <div id="search-div" >
        {
          search ? <h1>{searchcount}</h1>
            : null}
        <input id="search-bar" type="text" onChange={ontype} />
        <button id="search-button" onClick={() => setsearch(true)}>Search</button>

        <br />
        <div className="name-container">
          {Mockaroo.map((item,i) => {

            <h4 id="name-list" key={i}>

              <br />
              {item.full_name}
              </h4>
})}
        </div>

      </div>

    </div>
  );
}


export default App
