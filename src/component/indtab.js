import React, {Component} from 'react';

function Itab(props)
{
    const addstyle = () =>
    {
        if(props.out.id === props.activetab)
        {
            return {backgroundColor:'coral'}
        }
        else
        {
            return {backgroundColor:'lightgrey'}
        }
    };

    console.log(props)

    return (
        <div style = {addstyle()} onClick = {props.ctab.bind(this, props.out.id)} > {props.out.title} </div>
    );
}

export default Itab;