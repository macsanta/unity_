import React, {Component} from 'react';
import {SectionOne} from "./section_one/SectionOne";
import {SectionTwo} from "./section_two/SectionTwo";


class PolicyScreen extends Component {
    render() {
        return (
            <div>
                <SectionOne/>
                <SectionTwo/>
            </div>
        );
    }
}

export default PolicyScreen;