import viber from "../../../content/Viber.png";
import facebook from "../../../content/Facebook.png";
import instagram from "../../../content/Instagram.png";
import linkedin from "../../../content/LinkedIn.png";
import tiktok from "../../../content/TikTok.png";
import youtube from "../../../content/YouTube.png";
import telegram from "../../../content/Telegram.png";
import circle_man from "../../../content/circle_man.png";
import doc_icon from "../../../content/doc-icon.png";
import mssg_icon from "../../../content/message-alt.png"
import home_icon from "../../../content/home-icon.png"
import double_right from "../../../content/chevron-double-right.png"

import './Section_Two.css'

export const SectionTwo = () => {
    return (
        <div className='full-content'>
            <div className='container d-flex'>
                <div className='first-container'>
                    <img id='double-right-blue-man' src={double_right} alt=""/>
                    <div className='circle_man'><img id='circle_man' src={circle_man} alt=""/></div>
                        <div className='text-social-media-two d-flex mb-5'><p >Слідкуйте за нами: </p >
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
                <div className='help-content'>
                    <div className='text-help'>
                        <span>ЧИМ МИ МОЖЕМО <br/>
                              ДОПОМОГТИ?
                        </span>
                    </div>
                    <div className='mt-4'><p id='spec-desc'>Наші спеціалісти нададуть відповідь вам у <br/>
                        всіх питаннях що стосується переїзду та <br/>
                        роботи в Європі</p>
                    </div>
                    <div className='help-buttons d-flex pb-3'>
                        <div><button type='button' className='doc-button'><img src={doc_icon} alt=""/>ДОКУМЕНТИ</button></div>
                        <div><button type='button' className='mssg-button'><img src={mssg_icon} alt=""/></button></div>
                        <div><button type='button' className='home-button'><img src={home_icon} alt=""/></button></div>
                    </div>
                    <div>
                        <p id='rule-desc'>Почни з виготовлення візи! А точніше – з <br/>
                            замовлення запрошення на пів року у нас. <br/>
                            Запрошення на пів року дає право Тобі <br/>
                            працювати на території Польщі протягом 180 <br/>
                            днів . Після цього Ти зобов’язаний <br/>
                            повернутися в Україну. За таким <br/>
                            запрошенням зазвичай їздять вперше, щоб <br/>
                            зрозуміти, чи підходять умови роботи і сам <br/>
                            роботодавець.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
