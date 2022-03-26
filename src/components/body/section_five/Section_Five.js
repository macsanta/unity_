import './Section_Five.css'
import arrow from "../../../content/arrow-right.png";
import viber from "../../../content/Viber.png";
import facebook from "../../../content/Facebook.png";
import instagram from "../../../content/Instagram.png";
import linkedin from "../../../content/LinkedIn.png";
import tiktok from "../../../content/TikTok.png";
import youtube from "../../../content/YouTube.png";
import telegram from "../../../content/Telegram.png";

export const SectionFive = () => {
    return (
        <div className='container'>
            <div className='about-us-header'>
                <span>Хто ми такі? <br/>
                      Та звідки ми з`явились?
                </span>
            </div>
            <div className='about-us-details d-flex justify-content-between'>
                <div>
                    <p>Ми є одним з лідерів міжнародного ринку праці і <br/>
                        однією з найбільших HR-компаній в світі згідно з <br/>
                        Staffing Industry Analysts. Ми також працюємо <br/>
                        локально, тому ми завжди близькі до співробітників і <br/>
                        кандидатів. Серед численних пропозицій Ви знайдете <br/>
                        посаду, яка відповідає вашим очікуванням. Відповідає <br/>
                        вашим навичкам і освіті.</p>
                    <p>
                        Ми соціально відповідальні і займаємося розвитком <br/>
                        ринку праці.
                    </p>
                </div>
                <div>
                    <p>Ми будемо підтримувати зв'язок з вами протягом <br/>
                        усього періоду співпраці. Ви можете розраховувати <br/>
                        на нашу підтримку в плануванні вашої подальшої <br/>
                        кар'єри.
                    </p>
                    <p>
                        Шукаєте тимчасову роботу? Чи на постійній основі? <br/>
                        Можливо Вас цікавить преїзд на постійне місце проживання? <br/>
                        Ви прийшли правильно, у нас є все що для вас потрібно!
                    </p>
                </div>
            </div>
            <div className='question-content'>
                <div className='quest-txt'>
                    <p>У вас є запитання?</p>
                </div>
                <div className='text-input d-flex'>
                    <div>
                        <div>
                            <input type="text" className="custom-input" placeholder="ВВЕДІТЬ АДРЕС ПОЧТИ АБО НОМЕР ТЕЛЕФОНУ" aria-label=""/>
                        </div>
                    </div>
                    <div>
                        <button className='send-button'>
                            <div className='d-flex'>
                                <div className='send-button-name'>Відправити</div>
                                <div><img src={arrow} alt="" className='send-button-arrow'/></div>
                            </div>
                        </button>
                    </div>
                </div>
                <div className='text-social-media-five d-flex mb-5 mt-2'><p >Слідкуйте за нами: </p >
                    <span className='social-icons'>
                            <img src={viber} alt=""/>
                            <img src={facebook} alt=""/>
                            <img src={instagram} alt=""/>
                            <img src={linkedin} alt=""/>
                            <img src={tiktok} alt=""/>
                            <img src={youtube} alt=""/>
                            <img src={telegram} alt=""/>
                        </span>
                </div>
            </div>
        </div>
    )
}