import user from '../../../../content/users.png'
import viber from '../../../../content/Viber.png'
import facebook from '../../../../content/Facebook.png'
import instagram from '../../../../content/Instagram.png'
import linkedin from '../../../../content/LinkedIn.png'
import telegram from '../../../../content/Telegram.png'
import icon from '../../../../content/Icon.png'
import location from '../../../../content/location.png'
import list from '../../../../content/clipboard-list.png'
import calendar from '../../../../content/calendar.png'
import home from '../../../../content/home.png'
import notification from '../../../../content/notification.png'
import welder_video from '../../../../content/welder-video.png'
import play from '../../../../content/play-white.png'

import './SelectedVacancyBody.css'

export const SelectedVacancyBody = () => {

    return(
        <div className='container'>
            <div className='selected-vacancy-header'>
                <div><span>Відкрита вакансія</span></div>
                <div><h1>Зварювальник tig 140</h1></div>
                <div className='d-flex justify-content-between mt-4'>
                    <div className='d-flex'>
                        <div className='free-place'>
                            <img src={user} alt=""/>
                            <span>10 вільних місць</span>
                        </div>
                        <div className='icons-for-vacancy'>
                        <a href='https://invite.viber.com/?g2=AQBoRIqGrKx%2BKk83b31gmbs9o00ejfuFz5Ua5p7Z7AAod5eqdbc5KaYROGdQokTj' target="_blank"><img src={viber} alt="Viber"/></a>
                        <a href='https://www.facebook.com/106079551979276/posts/110426328211265/?d=n' target="_blank"><img src={facebook} alt="Facebook"/></a>
                        <a href='https://www.instagram.com/p/CZJZoiyo3sG/?igshid=YmMyMTA2M2Y=' target="_blank"><img src={instagram} alt="Instagram"/></a>
                            {/* <img src={linkedin} alt="LinkedIn"/> */}
                            <a href='https://t.me/unityworkua' target='_blank'><img src={telegram} alt="Telegram"/></a>
                        </div>
                    </div>
                    <div className='share-vacancy'>
                        <a href="">Поділитись вакансією</a>
                        <img src={icon} alt=""/>
                    </div>
                </div>
            </div>
            <div className='horizontal-line-top'></div>
            <div className='vacancy-details d-flex'>
                <div className='d-flex flex-column mt-4'>
                    <div className='d-flex mb-4'>
                        <div className='my-1'><img src={location} alt=""/></div>
                        <div className='mx-4'>
                            <span>Місце роботи:</span><p>Передмістя Варшави ( Błonie 30 від Варшави )</p>
                        </div>
                    </div>
                    <div className='d-flex mb-4'>
                        <div className='my-1'><img src={list} alt=""/></div>
                        <div className='mx-4'>
                            <span>Обов'язки: </span><p>Зварка методом tig-141 компонентів з нержавіючої сталі,<br/> работа в цеху по виготовленню драбин та їх частин</p>
                        </div>
                    </div>
                    <div className='d-flex mb-4'>
                        <div className='my-1'><img src={calendar} alt=""/></div>
                        <div className='mx-4'>
                            <span>Графік роботи: </span><p>Зміна 10-12 годин. 5-6 днів в тиждень.<br/> Денні зміни. 220-240 робочих годин в місяць<br/> Можливі зміни у зв`язку з пандемією COVID-19</p>
                        </div>
                    </div>
                    <div className='d-flex mb-4'>
                        <div className='my-1'><img src={home} alt=""/></div>
                        <div className='mx-4'>
                            <span>Проживання: </span><p>Надаємо безкоштовно, зі всіма зручностями.<br/> 3-4 чол. в кімнаті.</p>
                        </div>
                    </div>
                    <div className='d-flex mb-4'>
                        <div className='my-1'><img src={notification} alt=""/></div>
                        <div className='mx-4'>
                            <span>Вимоги: </span><p>До 60 років, досвід роботи на подібній роботі від 1 року,<br/> вічливий, трудолюбивий, не конфліктний, Готовий до фізичної <br/> роботи. Знання польської мови не обов`язково, головне <br/> бажання і гарантія навчання мови на рівні необхідному для <br/> розуміння.</p>
                        </div>
                    </div>
                </div>
                <div className='vert-line'></div>
                <div>
                    <div className='welder_video_container'>
                        <img id='welder_video' src={welder_video} alt=""/>
                        <img id='play' src={play} alt=""/>
                    </div>
                    <div className='card-vac-assessment d-flex flex-column'>
                        <div className='card-vac-assessment-content'>
                            <div className='header-assessment mb-2'>Оцінка вакансії</div>
                            <div className='help-voting mb-2'>можна проголосувати, <br/> натиснувши на кружечки</div>
                            <div className='header-voting'>Робота</div>
                            <div className='btn-voting mb-2'>
                                <button className='ellipse_blue'></button>
                                <button className='ellipse_blue'></button>
                                <button className='ellipse_blue'></button>
                                <button className='ellipse_white'></button>
                                <button className='ellipse_white'></button>
                            </div>
                            <div className='header-voting'>Житло</div>
                            <div className='btn-voting mb-2'>
                                <button className='ellipse_blue'></button>
                                <button className='ellipse_blue'></button>
                                <button className='ellipse_blue'></button>
                                <button className='ellipse_blue'></button>
                                <button className='ellipse_blue'></button>
                            </div>
                            <div className='header-voting'>Координатор</div>
                            <div className='btn-voting mb-2'>
                                <button className='ellipse_blue'></button>
                                <button className='ellipse_blue'></button>
                                <button className='ellipse_blue'></button>
                                <button className='ellipse_blue'></button>
                                <button className='ellipse_white'></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='horizontal-line-bottom'></div>
            <div className='additional'>
                Номер запису в реєстрі агентства з працевлаштування: 2010
                <br/> <br/>
                <p>Повідомляємо, що ми поспілкуємося з обраними кандидатами. Просимо дописати наступну клаузулу: "Я даю згоду на обробку моїх персональних даних, які містяться в документі CV, а також в інших
                    переданих мною документах, фірмою Gi Group Poland S.A. , яка знаходиться у Вроцлаві вул. Гвяздзіста 66, як для потреб виконуваного рекрутування, так і після його закінчення. Водночас я даю згоду
                    на залишення переданих документів, пов'язаних з рекрутуванням фірмою Gi Group Poland S.A., а також на обробку моїх персональних даних для створення і ведення електронної бази даних, що
                    уможливить використання моїх персональних даних в наступних процесах рекрутування, згідно із законом про захист персональних даних від 29 серпня 1997 р. (цілісний текст: Dz.U. 2015 poz. 2135).
                    Свої дані я подаю добровільно, я знаю про право доступу до них та виправлення. Я був повідомлений, що адміністратором моїх особових даних є фірма Gi Group Poland S.A., яка знаходиться у
                    Вроцлаві вул. Гвяздзіста 66. Я даю згоду на відкриття для доступу моїх персональних даних іншим товариствам, які залежні і пов'язані з Gi Group Poland S.A. у розумінні положень Кодексу
                    комерційних товариств, а також потенційним роботодавцям для цілей, що пов'язані з виконуваними тепер або в майбутньому процесами рекрутування".
                </p>
            </div>
            <div>
                <button className='sent-CV'>
                    <div className='sentCV-name'>Надішли своє резюме</div>
                </button>
            </div>
        </div>
    )
}