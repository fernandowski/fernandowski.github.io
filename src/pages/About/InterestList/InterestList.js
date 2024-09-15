import './InterestList.css';
import React from "react";
import Interest from "../Interest/Interest";

function InterestList() {
    const interests = [
        {
            name: 'Code Samples',
            link: 'https://github.com/fernandowski',
            title: 'GitHub'
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/fernando-lopez-04474984/',
            title: 'Social Media'
        }
    ]
    return (
        <div className='interests-list'>
            {interests.map(({name, link, title}) => {
                return (
                    <Interest key={name} name={name} link={link} title={title}/>
                )
            })}
        </div>
    )
}

export default InterestList;
