import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link, Routes
} from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router";

import Body from "./components/body/Body";
import './App.css'
import PolicyScreen from "./components/screens/policyScreen/PolicyScreen";
import AllVacanciesScreen from "./components/screens/allVacanciesScreen/AllVacanciesScreen";
import SelectedVacancyScreen from "./components/screens/selectedVacancyScreen/SelectedVacancyScreen";
import unity from "./content/Unity(dark).png";
import unity_light from "./content/Unity(light).png";
import langUkr from "./content/lang-ukr.png";
import viber from "./content/Viber.png";
import facebook from "./content/Facebook.png";
import instagram from "./content/Instagram.png";
import linkedin from "./content/LinkedIn.png";
import tiktok from "./content/TikTok.png";
import youtube from "./content/YouTube.png";
import telegram from "./content/Telegram.png";

class App extends Component {

    render() {
        return (
            <Router>
                    <div className='App'>
                        <div className='header'>
                            <header className='row navbar'>
                                <div className='container d-flex'>
                                    <div className='col-2'>
                                        <div className='block'><img src={unity} alt="" className="img-logo"/></div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='block d-flex'>
                                            <ul className="nav justify-content-center">
                                                <li className="nav-item active">
                                                    <Link to='/' className="nav-link link-dark" target='_parent'>
                                                        Головна
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/vacancies' className="nav-link link-dark" target='_parent'>
                                                        Вакансії
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='#' className="nav-link link-dark">
                                                        Корисно знати
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='#' className="nav-link link-dark">
                                                        Про Unity
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='#' className="nav-link link-dark">
                                                        Контакти
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='block lang-section'>
                                            <span className='lang-el-1'>Клієнт</span>
                                            <span className='lang-el-2'></span>
                                            <span className='lang-el-3'>Dla Partnerów</span>
                                            <span><img src={langUkr} alt="" className='img-ukr'/></span>
                                        </div>
                                    </div>
                                </div>
                            </header>
                        </div>
                        <Routes>
                            <Route path='/' element={<Body/>}/>
                            <Route path='/vacancies' element={<AllVacanciesScreen/>}/>
                            <Route path='/policy' element={<PolicyScreen/>}/>
                            <Route path='/selectedVacancy' element={<SelectedVacancyScreen/>}/>
                        </Routes>
                        <div className='footer'>
                            <header className='row navbar'>
                                <div className='container d-flex'>
                                    <div className='col-2'>
                                        <div className='block'><img src={unity_light} alt="" className="img-logo"/></div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='block d-flex'>
                                            <ul className="nav nav-foot  mt-5">
                                                <li className="nav-item active">
                                                    <Link to='/' className="nav-link link-light" target='_top'>
                                                        Головна
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/vacancies' className="nav-link link-light" target='_top'>
                                                        Вакансії
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='#' className='nav-link link-light' target='_top'>
                                                        Корисно знати
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='#' className='nav-link link-light' target='_top'>
                                                        Про Unity
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='#' className='nav-link link-light' target='_top'>
                                                        Контакти
                                                    </Link>
                                                </li>
                                                <li className="nav-item mt-4">
                                                    <Link to='/policy' className='nav-link link-light' target='_top'>
                                                        Політика щодо обробки персональних даних
                                                    </Link>
                                                </li>
                                                <li className="nav-item mt-4">
                                                    <Link to='#' className='nav-link link-light' target='_top'>
                                                        Завантажити резюме
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='block lang-section-footer'>
                                            <span className='lang-el-1-footer'>Клієнт</span>
                                            <span className='lang-el-2-footer'></span>
                                            <span className='lang-el-3-footer'>Dla Partnerów</span>
                                            <span><img src={langUkr} alt="" className='img-ukr'/></span>
                                            <div className='icons-footer'>
                                                <img src={viber} alt="Viber"/>
                                                <img src={facebook} alt="Facebook"/>
                                                <img src={instagram} alt="Instagram"/>
                                                <img src={linkedin} alt="LinkedIn"/>
                                                <img src={tiktok} alt="TikTok"/>
                                                <img src={youtube} alt="YouTube"/>
                                                <img src={telegram} alt="Telegram"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rights-footer col-lg">
                                        <span>Copyright © 2021 UNITY Sp z.o.o. All Rights Reserved.</span>
                                    </div>
                                </div>
                            </header>
                        </div>
                    </div>
            </Router>
        );
    }
}

export default App;
