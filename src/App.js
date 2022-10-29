import React from "react";
import Card from "./components/Card";
import Data from "./data.json";
import List from "./components/UniqueList/List";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import { FaFacebook,FaYoutube } from 'react-icons/fa';
import ReactBootstrap from "./components/React_Bootstrap/ReactBootstrap";
// import State from "./components/State";
import CONDITIONAL_RENDERING  from "./CONDITIONAL_RENDERING/Home";
import EVENT_HANDLER_CLASS from "./components/EVENT_HANDLER_CLASS";
import EVENT_BINDING from "./components/EVENT_BINDING/index";
import HOOKS_USESTATE2 from "./components/HOOKS_USESTATE/index2"
import Form from "./components/FORM/Form";
import Child from "./components/STATE_LIFTING/Child";
import Home from "./components/STATE_LIFTING/Home";
const users = [
    {
        fullName : "MR Tuhin",
        age :"32",
        phones :[
            {home: "01738666"},
            {office : "889089"},
        ]
    },
    {
        fullName : "MR Tuhin khan",
        age :"35",
        phones :[
            {home: "018112339"},
            {office : "88908998"},
        ]
    }
]

function App(){
   const data = "i am from parent (App)"
    
   const handleChildData =(childData)=>{
    console.log("APP: " + childData);
   }
   
   //let items=[];
    // for(let x=0; x<Data.length; x++){
    //      items.push(<Card titleText={Data[x].title} descText={Data[x].desc}/>
    //      )
    // }
    //mapping
    // items =Data.map((item,index)=> <Card key={index} titleText={item.title} descText={item.desc}/>)
    return <div>
        <h1 className="headingStyle">Todo App</h1>
    
        {Data.map((item,index)=> <Card key={index} titleText={item.title} descText={item.desc}/>)}
        <List />

        <h2 className="headingStyle">Nested List</h2>
        {
        users.map((user,index)=>(
        <article key={index}>
            <h3>FullName :{user.fullName}</h3>
            <p>Age :{user.age}</p>
            {
            user.phones.map((phone,index)=>
                <div key={index}>
                    <p>Home : {phone.home}</p>
                    <p>Office : {phone.office}</p>
                </div>
            )}
        </article>
        ))}
            <span>
                <FaFacebook className="icons"/>
               
            </span>
            <span>
            <FaYoutube className="icons"/>
            </span>
        <Card1 name="card1" desc="this is the desc"/>
        <Card2 name="card2"/>

        <ReactBootstrap />

        {/* <State /> */}

        <CONDITIONAL_RENDERING />
        <EVENT_HANDLER_CLASS />
        <EVENT_BINDING />
        <HOOKS_USESTATE2 />
        <Form />
                {/* state lifting */}
        <Child data={data} onChildData={handleChildData}/>


        <Home />
    </div>
}
export default App;