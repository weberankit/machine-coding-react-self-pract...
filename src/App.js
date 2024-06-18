import logo from './logo.svg';
import './App.css';
import { useContext, useState } from 'react';
//import { Context } from 'react';
/*
import Todolist from './componenet/Todolist';
import Slider from "./componenet/Slide"
import ToDoListAdv from './componenet/ToDoListAdv';
import AdvHighAddtowish from './componenet/AdvHighAddtowish';
import TodoList from './practiseSamething/todoList';
import Clock from './componenet/Clock';*/
import Accordion from './componenet/Accordion';
import LiftingOne from './componenet/LiftingState-one';
import SearchSuggestion from './componenet/SearchSuggestion';
import AddCart from './componenet/AddCart';
import Pagination from './componenet/Pagination';
import BackendPagination from './componenet/BackendPagination';
function App(){
  return(
    <>
    {
    /*<Todolist/>
    <Slider/>
     <ToDoListAdv/>
     <AdvHighAddtowish/>
     <TodoList/>
       <Clock/>
        <Accordion/>
        <LiftingOne/>
        <SearchSuggestion/>
         <AddCart/>
         <Pagination/>
    */
 
 <BackendPagination/>
    }

    </>
  )
}

export default App;
