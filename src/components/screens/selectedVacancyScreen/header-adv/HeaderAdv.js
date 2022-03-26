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
                        <button className='vacancy-tg-viber'>
                            <div className='d-flex'>
                                <div><img src={telegram} alt="" id='tg-bttn base'/></div>
                                <div className='tg-button-name'>TELEGRAM</div>
                            </div>
                        </button>
                    </div>
                    <div>
                        <button className='vacancy-tg-viber'>
                            <div className='d-flex'>
                                <div><img src={viber} alt="" id='viber-bttn base'/></div>
                                <div className='viber-button-name'>НАШ VIBER</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}