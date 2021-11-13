import React, { Component } from 'react';
import Nav from './Nav'
import DevRow from './DevRow'
import SkillsRow from './SkillsRow'

export default class Dev extends Component {

    render() {
        return (
            <>
            <Nav /> 
            <DevRow />
            <SkillsRow />
            </>

        )
    }

}