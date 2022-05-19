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
                <form action="https://submit-form.com/T6Zt6bRc">
                <div className='text-input d-flex'>
                    <div>
                        <div>
                            <input ttype="email" id="email" name="email" className="custom-input" placeholder="ВВЕДІТЬ АДРЕС ПОЧТИ АБО НОМЕР ТЕЛЕФОНУ" aria-label=""/>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className='send-button'>
                            <div className='d-flex'>
                                <div className='send-button-name'>Відправити</div>
                                <div><img src={arrow} alt="" className='send-button-arrow'/></div>
                            </div>
                        </button>
                    </div>
                </div>
                </form>
                <div className='text-social-media-five d-flex mb-5 mt-2'><p >Слідкуйте за нами: </p >
                    <span className='social-icons'>
                            <a href='https://invite.viber.com/?g2=AQBoRIqGrKx%2BKk83b31gmbs9o00ejfuFz5Ua5p7Z7AAod5eqdbc5KaYROGdQokTj' target="_blank"><img src={viber} alt=""/></a>
                            <a href='https://www.facebook.com/106079551979276/posts/110426328211265/?d=n' target="_blank"><img src={facebook} alt=""/></a>
                            <a href='https://www.instagram.com/p/CZJZoiyo3sG/?igshid=YmMyMTA2M2Y=' target="_blank"><img src={instagram} alt=""/></a>
                            {/* <img src={linkedin} alt=""/>
                            <img src={tiktok} alt=""/>
                            <img src={youtube} alt=""/> */}
                            <a href='https://t.me/unityworkua' target='_blank'><img src={telegram} alt=""/></a>
                        </span>
                </div>
            </div>
        </div>
    )
}