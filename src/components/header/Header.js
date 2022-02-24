import './Header.css'
import unity from '../../content/Unity(dark).png'
import langUkr from '../../content/lang-ukr.png'

export const Header = () => {
    return (
        <div>
            <div className='content'>
                <div className=' d-flex justify-content-around'>
                    <div>
                        <img src={unity} alt="" className="img-logo"/>
                    </div>
                    <div className='d-flex flex-row'>
                        <ul className="nav justify-content-center">
                            <li className="nav-item active">
                                <a className="nav-link link-dark" href="#">Головна</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link-dark" href="#">Вакансії</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link-dark" href="#">Корисно знати</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link-dark" href="#">Про Unity</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link-dark" href="#">Контакти</a>
                            </li>
                        </ul>
                    </div>
                    <div className='lang-content'>
                        <div className='lang-section'>
                            <span className='lang-el-1'>Клієнт</span>
                            <span className='lang-el-2'></span>
                            <span className='lang-el-3'>Dla Partnerów</span>
                        </div>
                        <span><img src={langUkr} alt="" className='img-ukr'/></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;