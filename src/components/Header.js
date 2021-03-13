import React from 'react';

const Header =(props) => 
(
    <div className="header">
        <div className='container'>
            <h1 class="header__title">{props.title}</h1>
           {props.subTitle && <h2 className="header__subtitle">{props.subTitle}</h2>}
        </div>
    </div>
)

export default Header;