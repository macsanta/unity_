import React, {Component} from 'react';
import {HeaderAdv} from "./header-adv/HeaderAdv";
import {SelectedVacancyBody} from "./selectedVacancyBody";


class SelectedVacancyScreen extends Component {
    render() {
        return (
            <div>
                <HeaderAdv/>
                <SelectedVacancyBody/>
            </div>
        );
    }
}

export default SelectedVacancyScreen;