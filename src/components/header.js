import React from 'react';

import TopNav from './top-nav';

export default function Header(props) {
    return(
        <header>
            <TopNav 
                onGenerateAuralUpdate={()=> props.onGenerateAuralUpdate()}
                onRestartGame={() => props.onRestartGame()}
            />
            <h1>HOT or COLD</h1>
        </header>
    )
}