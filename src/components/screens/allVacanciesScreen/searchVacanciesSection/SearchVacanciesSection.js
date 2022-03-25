import './SearchVacanciesSection.css'

export const SearchVacanciesSection = () => {
    return (
        <div className="srch-vacancies-container">
            <div className="srch-vacancies-header d-flex flex-column mt-3">
                <span>Тільки найкращі вакансії</span>
                <h1>Знайди роботу для себе</h1>
            </div>
            <form action="">
                <div>
                    <div className="row">
                        <div className="col-md">
                            <input type="text" id="upper-input-1" placeholder="Напиши назву посади ( нап. вилочний погржчик, склад, фабрика... )"/>
                        </div>
                        <div className="col-md">
                            <input type="text" id="upper-input-2" placeholder="Напиши назву країни або населеного пункту"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <input type="text" id="lower-input-1" placeholder="На який періуд плануєш їхати"/>
                        </div>
                        <div className="col-md">
                            <input type="text" id="lower-input-2" placeholder="Для скількох осіб шукаєш роботу"/>
                        </div>
                        <div className="col-md">
                            <input type="text" id="lower-input-3" placeholder="Тип документів"/>
                        </div>
                    </div>
                </div>
            </form>
            <div className='buttons d-flex'>
                <div>
                    <button className='search-vacancies-bttn'>
                        <div className='search-button-name'>Пошук вакансії</div>
                    </button>
                </div>
            </div>
        </div>
    )
}