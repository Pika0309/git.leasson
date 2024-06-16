import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Firstbar from "./components/Firstbar/Firstbar";

/* внутри нашей константы мы создаем разметку страницы, где
* header отвечает за шапку страницы
* nav за ленту страницы */

const App = () => {
    return(
        /*каждой разметке мы даем класс, т.е. присваимваем ей имя, для того, что бы
          в css файле вписать классам их парамаетры, в данном случае grid*/

        /* в header мы добаили логотип, благодаря src, которая определяет местонахождние
        файла*/

        <div className='app-wrapper'>
           <Header/>
           <NavBar/>
           <Profile/>
           <Firstbar/>
        </div>

    )
}


export default App;
