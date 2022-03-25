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
        <div>
            <div className='container-four d-flex justify-content-between'>
                <img id='double-right-blue' src={double_right} alt=""/>
                <div className='circle_couple'>
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
            </div>
        </div>
    )
}

export default SectionFour