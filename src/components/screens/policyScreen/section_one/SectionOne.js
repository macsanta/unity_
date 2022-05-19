import './SectionOne.css'
import viber from '../../../../content/Viber.png'
import facebook from '../../../../content/Facebook.png'
import instagram from '../../../../content/Instagram.png'
import linkedin from '../../../../content/LinkedIn.png'
import tiktok from '../../../../content/TikTok.png'
import youtube from '../../../../content/YouTube.png'
import telegram from '../../../../content/Telegram.png'
import circle_grl from '../../../../content/grl_2.png'
import lock from "../../../../content/lock.png";

export const SectionOne = () => {
    return (
        <div className='policy-sect-one'>
            <div className='container d-flex'>
                <div className='first-container'>
                    <div id='el-1'><span>Ми піклуємось про твою конфіденційність</span></div>
                    <div id='el-2'>
                        <span className='black-text'>Політика щодо обробки</span>
                        <span className='blue-text'>Персональних даних</span>
                    </div>
                    <div id='el-3'>
                        <span>Дізнайтесь більше про те, як Unity збирає та</span>
                        <span>використовує дані та про ваші права як користувача</span>
                        <span>UNITY.</span>
                    </div>
                    <div className='buttons d-flex'>
                        <div>
                            <a href='mailto:info@unityteam.pl'><button className='main-button'>
                                <div className='main-button-container'>
                                    <div className='button-name'>Сконтактуйся з нами</div>
                                </div>
                            </button>
                            </a>
                        </div>
                    </div>
                    <div className='d-flex mt-4'>
                        <div className='text-social-media'><p >Слідкуйте за нами: </p></div>
                        <div className='social-icons'>
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
                <div>
                    <div className='second-container d-flex'>
                        <div className='lock'><img id='lock' src={lock} alt=""/></div>
                        <div className='circle_grl_policy'><img id='circle_grl_policy' src={circle_grl} alt=""/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}