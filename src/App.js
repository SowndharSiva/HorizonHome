import React, { useState } from "react";  
import './App.css';  

 
const translations = {  
  en: { home: "Home", movies: "Movies", tvshows: "TV Shows", sports: "Sports", live: "Live", slogan: "Grab the show and start earning" },  
  fr: { home: "Accueil", movies: "Films", tvshows: "Émissions de télévision", sports: "Sports", live: "En direct", slogan: "Prenez le volant et commencez à gagner" },  
  de: { home: "Zuhause", movies: "Filme", tvshows: "Fernsehsendungen", sports: "Sport", live: "Live", slogan: "Greifen Sie das Steuer und beginnen Sie zu verdienen" },  
  ru: { home: "Главная", movies: "Фильмы", tvshows: "ТВ шоу", sports: "Спорт", live: "Прямой эфир", slogan: "Схватите руль и начинайте зарабатывать" },  
  es: { home: "Inicio", movies: "Películas", tvshows: "Programas de TV", sports: "Deportes", live: "En vivo", slogan: "Toma el volante y comienza a ganar" },  
  zh: { home: "主页", movies: "电影", tvshows: "电视剧", sports: "体育", live: "直播", slogan: "抓住方向盘，开始赚钱" },  
};   


const languages = [  
  { code: 'en', label: 'English' },  
  { code: 'fr', label: 'French' },  
  { code: 'de', label: 'German' },  
  { code: 'ru', label: 'Russian' },  
  { code: 'es', label: 'Spanish' },  
  { code: 'zh', label: 'Chinese' },  
];  

function App() {  
  const [lanCode, setLanCode] = useState("en"); 
  const language = translations[lanCode];

  return (  
    <div className="bg-container">  
      <nav className="navbar-container">  
        <h1 className="company-name">Lycaus</h1>  
        <div className="menu-items">  
          <p className="menu-item">{language.home}</p>  
          <p className="menu-item">{language.movies}</p>  
          <p className="menu-item">{language.tvshows}</p>  
          <p className="menu-item">{language.sports}</p>  
          <p className="menu-item">{language.live}</p>  
          <input type="search" className="search-bar" placeholder="Search" />
        </div>  
        <div className="setting-box">  
          <p className="setting-text">Settings</p>  
          <select id="language-select" value={lanCode} onChange={(e) => setLanCode(e.target.value)} className="language-dropdown">  
            {languages.map((lang) => (  
              <option key={lang.code} value={lang.code}>  
                {lang.label}  
              </option>  
            ))}  
          </select>  
        </div>  
      </nav>  
      <div className="home-container">
        <div>
        <h1 className="home-slogan">{language.slogan}.</h1>
        <button className="watch-button">Watch Now</button>
        </div>
        
        <img src="https://img.freepik.com/premium-photo/blue-toy-car-with-face-that-says-smiley-front_7023-549372.jpg?ga=GA1.1.655012544.1718520401&semt=ais_hybrid" className="image" alt="car"/>
      </div>
    </div>  
  );  
}  

export default App;