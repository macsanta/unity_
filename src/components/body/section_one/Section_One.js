import './Section_One.css'
import arrow from '../../../content/arrow-right.png'
import clip from '../../../content/button-clip.png'
import viber from '../../../content/Viber.png'
import facebook from '../../../content/Facebook.png'
import instagram from '../../../content/Instagram.png'
import linkedin from '../../../content/LinkedIn.png'
import tiktok from '../../../content/TikTok.png'
import youtube from '../../../content/YouTube.png'
import telegram from '../../../content/Telegram.png'
import circle_grl from '../../../content/grl_1.png'
import double_right from '../../../content/double-right.png'

export const SectionOne = () => {
    return (
        <div>
            <div className='container-one d-flex justify-content-between'>
                <div className='first-container'>
                    <div id='el-1'><span>ХТО ЯК НЕ UNITY?</span></div>
                    <div id='el-2'>
                        <span className='black-text'>МИ ЗБУДУЄМО ТВОЄ</span>
                        <span className='blue-text'>МАЙБУТНЄ У ЄВРОПІ</span>
                    </div>
                    <div id='el-3'>
                        <span>Ми прислухаємось до думки кожного</span>
                        <span>працівника, аби ставати ще кращими.</span>
                    </div>
                    <div className='buttons d-flex'>
                        <div>
                            <button className='main-button'>
                                <div className='main-button-container'>
                                    <div className='button-name'>СПИСОК ВАКАНСІЙ</div>
                                    <div><img src={arrow} alt="" className='button-arrow'/></div>
                                </div>
                            </button>
                        </div>
                        <div>
                            <button type='button' className='clip-button'>
                                <img src={clip} alt=""/>
                            </button>
                        </div>
                    </div>
                    <div className='d-flex mt-4'>
                        <div className='text-social-media'><p >Слідкуйте за нами: </p></div>
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
                <div>
                    <div className='second-container d-flex'>
                        <div className='double-right'><img id='double-right' src={double_right} alt=""/></div>
                        <div className='circle_grl'><img id='circle_grl' src={circle_grl} alt=""/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

