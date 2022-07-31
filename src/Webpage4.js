import React, { Component } from 'react';
import './morbagh.css'
import Cards from './Cards';
import suit1 from './images/cloth14.PNG';
import suit2 from './images/cloth16.PNG';
import suit3 from './images/cloth15.PNG';
import suit4 from './images/cloth18.PNG';
function Webpage4() {
    return ( 
        <div id='cardarea' className='webpg4'>
            <h3 className='sale'>SALE</h3>
            <div className='row'>
                <div className='col-md-3'>
                <Cards name="Noir Hues-Printed-3P " type="Rs 2041" img={suit1}/>
                


                </div>
            <div className='col-md-3'>
            <Cards name="Flora Fantasia-Printed-2P" type="Rs 1502" img={suit2}/>
            </div>
            <div className='col-md-3'>
            <Cards name="Dusky Breeze-Printed-2P" type="Rs 1348" img={suit3}/>
            </div>
            

            <div className='col-md-3'>
            <Cards name="Dusky Breeze-Printed-2P" type="Rs 1348" img={suit4}/>
            </div>

            </div>



        </div>

     );
}

export default Webpage4;