import viber from "../../../content/Viber.png";
import facebook from "../../../content/Facebook.png";
import instagram from "../../../content/Instagram.png";
import linkedin from "../../../content/LinkedIn.png";
import tiktok from "../../../content/TikTok.png";
import youtube from "../../../content/YouTube.png";
import telegram from "../../../content/Telegram.png";
import circle_couple from "../../../content/circle_couple.png"
import play from "../../../content/play.png"

import './Section_Four.css'
import arrow from "../../../content/arrow-right.png";
import double_right from "../../../content/chevron-double-right.png";

export const SectionFour = () => {
    return (
        <div className='full-content'>
            <div className='container d-flex'>
                <div className='circle_couple'>
                <img id='double-right-blue-couple' src={double_right} alt=""/>
                    <div><img id='circle_couple' src={circle_couple} alt=""/></div>
                </div>
                <div className='info-content'>
                    <div className='info-header'>
                        <span>Інформація яка <br/>
                            може бути цікава <br/>
                            для тебе
                        </span>
                    </div>
                    <div className='mt-4'>
                        <p id='info-desc'>Список ключових слів та фраз, коротка інформація <br/>
                            про країну в котру ви плануєте їхати на заробітки <br/>
                            чи преїжджати на постійне місце проживання.
                        </p>
                    </div>
                    <div className='details-buttons d-flex'>
                        <div>
                            <button className='detail-main-button'>
                                <div className='d-flex'>
                                    <div className='detail-button-name'>Детальніше</div>
                                    <div><img src={arrow} alt="" className='detail-button-arrow'/></div>
                                </div>
                            </button>
                        </div>
                        <div>
                            <button type='button' className='play-button'>
                                <img src={play} alt=""/>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className='for-more-details'>
                            <p>Також зі всією інформацію ви можете <br/>
                                ознайомитимь в наших соц. мережах:
                            </p>
                        </div>
                        <div className='social-icons-for-details'>
                        <a href='https://invite.viber.com/?g2=AQBoRIqGrKx%2BKk83b31gmbs9o00ejfuFz5Ua5p7Z7AAod5eqdbc5KaYROGdQokTj' target="_blank"><img src={viber} alt=""/></a>
                        <a href='https://www.facebook.com/106079551979276/posts/110426328211265/?d=n' target="_blank"><img src={facebook} alt=""/></a>
                        <a href='https://www.instagram.com/p/CZJZoiyo3sG/?igshid=YmMyMTA2M2Y=' target="_blank"><img src={instagram} alt=""/></a>
                            {/* <img src={linkedin} alt=""/>
                            <img src={tiktok} alt=""/>
                            <img src={youtube} alt=""/> */}
                            <a href='https://t.me/unityworkua' target='_blank'><img src={telegram} alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFour