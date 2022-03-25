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
        <div>
            <div className='container-two d-flex justify-content-between'>
                <div>
                    <img id='double-right-blue' src={double_right} alt=""/>
                    <div className='circle_man'><img id='circle_man' src={circle_man} alt=""/></div>
                    <div className='d-flex mb-5'>
                        <div className='text-social-media-two'><p >Слідкуйте за нами: </p></div>
                        <div className='social-icons'>
                            <img src={viber} alt=""/>
                            <img src={facebook} alt=""/>
                            <img src={instagram} alt=""/>
                            <img src={linkedin} alt=""/>
                            <img src={tiktok} alt=""/>
                            <img src={youtube} alt=""/>
                            <img src={telegram} alt=""/>
                        </div>
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
