import './ResultsOfSearchVacancies.css'
import welder from '../../../../content/welder.png'
import gardener from '../../../../content/gardener.png'
import builder from '../../../../content/builder.png'
import location from '../../../../content/location.png'
import sun from '../../../../content/sun.png'
import home from '../../../../content/home.png'
import moon from '../../../../content/moon.png'
import {Link, Route, Router, Routes} from "react-router-dom";
import {createBrowserHistory} from 'history'
import SelectedVacancyScreen from "../../selectedVacancyScreen/SelectedVacancyScreen";
import {SelectedVacancyBody} from "../../selectedVacancyScreen/selectedVacancyBody";
import React from "react";

export const ResultsOfSearchVacancies = () => {
    const newHistory = createBrowserHistory();

    return (
            <div>
                <div className='search-result-headers d-flex justify-content-around'>
                    <div className='result-amount'>
                        <span>3 результата</span> По вашому запиту
                    </div>
                    <div className='result-sorting'><span>Сортувати за: </span>Гарячі вакансії</div>
                </div>
                <div className='card-content d-flex'>
                    <div className="card border-0">
                            <img src={welder} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <a href="/selectedVacancy" id="card-title-link"><h5 className="card-title">Зварювальник <br/>TIG 140</h5></a>
                                <div className='vacancies-details'>
                                    <span><img src={location} alt=""/>Błonie ( 30 км від Варшави )</span> <br/>
                                    <span><img src={sun} alt=""/>Лише денні змін ( 10 год / день )</span> <br/>
                                    <span><img src={home} alt=""/>Житло надаємо безкоштовно</span> <br/>
                                </div>
                                <div className='salary mt-3'><span>9000</span> злт нетто / місяць</div>
                            </div>
                    </div>
                    <div className="card border-0">
                        <img src={gardener} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">польові <br/>роботи</h5>
                            <div className='vacancies-details'>
                                <span><img src={location} alt=""/>Przemyśl</span> <br/>
                                <span><img src={sun} alt=""/><img src={moon} alt=""/>Денні та нічні зміни ( 8 год /день )</span>
                                <br/>
                                <span><img src={home} alt=""/>Житло 9 злт / доба</span> <br/>
                            </div>
                            <div className='salary mt-3'><span>5400</span> злт нетто / місяць</div>
                        </div>
                    </div>
                    <div className="card border-0">
                        <img src={builder} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Працівник<br/>будови</h5>
                            <div className='vacancies-details'>
                                <span><img src={location} alt=""/>Stryków ( 20 км від Лодзі )</span> <br/>
                                <span><img src={sun} alt=""/>Лише денні змін ( 10 год / день )</span> <br/>
                                <span><img src={home} alt=""/>Ненадаємо</span> <br/>
                            </div>
                            <div className='salary mt-3'><span>7500</span> злт нетто / місяць</div>
                        </div>
                    </div>
                </div>
            </div>

    )
}