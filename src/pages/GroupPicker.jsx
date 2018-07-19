import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MiniIcon from './../components/MiniIcon';
import { ROUNDS } from './../util/Constants';
import { GIRLS } from './../util/Girls';
import { shuffle } from './../util/Functions';

export default function GroupPicker(props) {
    const options = ROUNDS.map(group => <option key={group.key} value={group.key}>{group.name}</option>)
    let girlList = GIRLS.filter(girl => {
        switch(props.group) {
            case '1':
                return !girl.left
            case '2':
                return !girl.left && !girl.elim1;
            case '0':
            default:
                return true;
        }
    });
    girlList = shuffle(girlList) // let's not be bias :)
    const girlObj = girlList.map(girl => <MiniIcon key={girl.name} girl={girl} />);

    return(
        <div className='group-picker'>
            <select value={props.group} onChange={props.onChange}>
                {options}
            </select>
            <br />
            <br />
            <Link to='/sort'>
                <button type='button' className='start-btn'>
                    START!
                </button>
            </Link>
            <br />
            <br />
            <div className='group-picker-all'>
                {girlObj}
            </div>
        </div>
    );
}