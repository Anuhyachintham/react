import React from "react";
import  ReactDOM  from "react-dom/client";

import Car from "./Components/Car";
import Garage from "./Components/prop";
import Brandname from "./Components/Pro2";
import Modelname from "./Components/Prop3";
import Football from "./Components/event";
import Body from "./Components/event2";
import Head from "./Components/event3";
import Goal from "./Components/condition";
import Glist from "./Components/List";
import NavItems from "./Components/list2";
import Gkey from "./Components/Key";
import MyForm from "./Components/Forms";
import Form from "./Components/Form2";
import TextForm from "./Components/Form3";
import Option from "./Components/Form4";
import Multiple from "./Components/form5";
import Country from "./Components/Form6";
import FavouriteColor from "./Components/hook";
import MultiHook from "./Components/Mulhook";
import Timer from "./Components/useEffect";
import Hook from "./Components/effect2";
import Home from "./Components";
import Authchecked from "./Components/Auth";
import Todu from "./Components/Todolist";
import PropDrilling from "./Components/propdrilling";
import Abc from "./Components/Abc";


function App() {
    return <div>
      <Car/>
      <Garage/>
      <Brandname/>
      <Modelname/>
      <Football/>
      <Body/>
      <Head/>
      <Goal/>
      <Glist/>
      <NavItems/>
      <Gkey/>
      <MyForm/>
      <Form/>
      <TextForm/>
      <Option/>
      <Multiple/>
      <Country/>
      <FavouriteColor/>
      <MultiHook/>
      <Timer/>
      <Hook/>
      <Home/>
      <Authchecked username={"John"}/>
      <Todu/>
      <PropDrilling/>
      <Abc/>
    </div>
  }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
