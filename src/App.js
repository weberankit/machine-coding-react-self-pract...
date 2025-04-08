import logo from './logo.svg';
import './App.css';
import { useContext, useState } from 'react';
//import { Context } from 'react';
/*;*/
import Todolist from './componenet/Todolist';
import Slider from "./componenet/Slide"
import ToDoListAdv from './componenet/ToDoListAdv';
import AdvHighAddtowish from './componenet/AdvHighAddtowish';
import TodoList from './practiseSamething/todoList';
import Clock from './componenet/Clock'
import Accordion from './componenet/Accordion';
import LiftingOne from './componenet/LiftingState-one';
import SearchSuggestion from './componenet/SearchSuggestion';
import AddCart from './componenet/AddCart';
import Pagination from './componenet/Pagination';
import BackendPagination from './componenet/BackendPagination';
import Scrollintersection from './componenet/Intersection-api/Scrollintersection';
import ClockPra from './practiseSamething/clockPra';
import Infinite from "./componenet/InfiniteScrolling/Infinite1st"
import WebDesign from './componenet/figma/WebDesign';
import DarkCom from './componenet/DarkMode/DarkCom';
import Form from './componenet/FormSubmit/Form';
import FormUseRef from './componenet/FormSubmit/FormUseRef';
import ThirdToDoList from './componenet/to-do-list-with-cross/3rdTodolist';
import InfiniteScroll2nd from './componenet/InfiniteScrolling/Infinite2nd';
import ParentPhoneOtp from './componenet/OTP-form/ParentPhoneOtp';
import OtpParent from './practiseSamething/otpInput/OtpParent';
function App(){
  return(
    <>
    {
    /*<Todolist/>
   
     <ToDoListAdv/>
     <AdvHighAddtowish/>
     <TodoList/>

 
        <SearchSuggestion/>
          <AddCart/>
         
         

      <Clock/>

  <BackendPagination/>

<ClockPra/>


 <WebDesign/>
 <DarkCom/>
<Form/>
 <FormUseRef/>
<Scrollintersection/>
<ThirdToDoList/>
 <Accordion/>
    <LiftingOne/>
      <Infinite/>
  <Pagination/>
 <Slider/>
<InfiniteScroll2nd/>
  <ParentPhoneOtp/>
    */
  
 
  
    }
 
   <OtpParent/>
    </>
  )
}

export default App;
