import React, {Component} from 'react';
import {SectionOne} from "./section_one";
import {SectionTwo} from "./section_two";
import SectionThree from "./section_three/Section_Three";
import SectionFour from "./section_four/Section_Four";
import {SectionFive} from "./section_five";

class Body extends Component {
    render() {
        return (
            <div>
                <SectionOne/>
                <SectionTwo/>
                <SectionThree/>
                <SectionFour/>
                <SectionFive/>
            </div>
        );
    }
}

export default Body;