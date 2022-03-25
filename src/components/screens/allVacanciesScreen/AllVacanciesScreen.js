import React, {Component} from 'react';
import {SearchVacanciesSection} from "./searchVacanciesSection/SearchVacanciesSection";
import {ResultsOfSearchVacancies} from "./resultsOfSearchVacancies/ResultsOfSearchVacancies";


class AllVacanciesScreen extends Component {
    render() {
        return (
            <div>
                <SearchVacanciesSection/>
                <ResultsOfSearchVacancies/>
            </div>
        );
    }
}

export default AllVacanciesScreen;