import telegram from '../../../../content/telegram-icon-white.png'
import viber from '../../../../content/viber-icon-white.png'

import './HeaderAdv.css'

export const HeaderAdv = () => {
    return (
        <div className='header-adv-container'>
            <div className='container'>
                <div className='header-adv'>
                <span>
                    Нові та актуальні вакансії <br/> моментально з'являються в чатах
                </span>
                </div>
                <div className='share-buttons d-flex'>
                    <div>
                        <a href='https://t.me/unityworkua' target="_blank">
                            <button className='vacancy-tg-viber'>
                                <div className='d-flex'>
                                    <div><img src={telegram} alt="" id='tg-bttn base'/></div>
                                    <div className='tg-button-name'>TELEGRAM</div>
                                </div>
                            </button>
                        </a>
                    </div>
                    <div>
                        <a href='https://invite.viber.com/?g2=AQBoRIqGrKx%2BKk83b31gmbs9o00ejfuFz5Ua5p7Z7AAod5eqdbc5KaYROGdQokTj' target="_blank">
                            <button className='vacancy-tg-viber'>
                                <div className='d-flex'>
                                    <div><img src={viber} alt="" id='viber-bttn base'/></div>
                                    <div className='viber-button-name'>НАШ VIBER</div>
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}