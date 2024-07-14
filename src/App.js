import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Firstbar from "./components/Firstbar/Firstbar";
import Dialogs from './components/Dialogs/Dialog';
import NewNews from './components/News/NewNews'
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Импортируем  из нашего установленного модуля роутер и роуьер браузера.
import Musics from './components/Musics/Music';
import Settings from './components/Settings/Setting';

/* внутри нашей константы мы создаем разметку страницы, где
* header отвечает за шапку страницы
* nav за ленту страницы */

const App = (props) => {
  return (
          /*каждой разметке мы даем класс, т.е. присваимваем ей имя, для того, что бы
          в css файле вписать классам их парамаетры, в данном случае grid*/

          /* в header мы добаили логотип, благодаря src, которая определяет местонахождние
          файла*/

    <BrowserRouter> {/* Из начально, когда мы запрашиваем просто Роутером возвращать какую-либо страницу
                        реакт не понимает нас и просит, что если хотим использовать эту систему роутингов
                        т.е. переключение страниц, то сделайте обрамление, оберните этот код специальной
                        компонентной, например BrowserRouter  */}
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <Firstbar />
        <div class='app-wrapper-content'>
          <Routes>
          <Route path='/profile' element={<Profile/>} /> {/*при нажатии по ссылкуам у нас должен меняться путь
                                                             в браузерной строке и наша задача как-то анализировать
                                                             этот путь и подставлять нужную компоненту вместо этого пути
                                                             для это погоает нам Route*/}
          <Route path='/dialogs' element={<Dialogs/>} />
          <Route path='/news' element={<NewNews/>} />
          <Route path='/music' element={<Musics/>} />
          <Route path='/settings' element={<Settings/>} />
          <Route path='/logProfile' element={<Profile/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  )
}


export default App;
