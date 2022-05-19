import './Section_Threee.css'
import viber from '../../../content/viber-icon-white.png'
import telegram from '../../../content/telegram-icon-white.png'
import phone from "../../../content/circle_phone.png"
import double_right from "../../../content/double-right.png";

export const SectionThree = () => {
    return (
        <div>
            <div className='container d-flex'>
                <div className='vacancies-desc'>
                    <div className='vacancies-suggest'>
                        <span>НОВІ ТА АКТУАЛЬНІ <br/>
                        ВАКАНСІЇ МОМЕНТАЛЬНО <br/>
                        З`ЯВЛЯЮТЬСЯ В ЧАТАХ</span>
                     </div>
                    <div className='vacancies-rule mt-4 mb-2'>
                        <span>Підпишись на нашу розсилку та отримуй всю нову <br/>
                              інформацію на пошту чи у будь-який месенджер!
                        </span>
                    </div>
                    <div className='share-buttons d-flex'>
                        <div>
                            <a href='https://t.me/unityworkua' target="_blank"><button className='share-telegram base'>
                                    <div className='d-flex'>
                                        <div><img src={telegram} alt="" id='tg-bttn base'/></div>
                                        <div className='tg-button-name'>TELEGRAM</div>
                                    </div>
                                </button>
                            </a>
                        </div>
                        <div>
                            <a href='https://invite.viber.com/?g2=AQBoRIqGrKx%2BKk83b31gmbs9o00ejfuFz5Ua5p7Z7AAod5eqdbc5KaYROGdQokTj' target="_blank">
                            <button className='share-viber base'>
                                <div className='d-flex'>
                                    <div><img src={viber} alt="" id='viber-bttn base'/></div>
                                    <div className='viber-button-name'>НАШ VIBER</div>
                                </div>
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='circle_phone'>
                        <img id='double-right' src={double_right} alt=""/>
                        <div><img id='circle_phone' src={phone} alt=""/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionThree