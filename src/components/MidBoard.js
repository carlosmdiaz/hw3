import React,{Component} from 'react';
import './myStyles.css'
//always import react first

//LEARN ARROW FUNCTIONS! 

function Midboard(){
    return(     
    <div>
        <div className='pad'>
        <h1 className='primary'>Color Board Simulator</h1>
      
            <h1 className='bottomtext'>Simular created by: Jenny, Kristel and Carlos</h1>
            <div className='pad-left'>
            <h5>Color picker:</h5>
                <div className='pad-edit'>
                <h4>Edit</h4></div>
                    <div className='left-pad-color1'>
                        <br />
                        left-pad-color1
                    </div>
                        <br />
                    <div className='left-pad-color2'>
                        <br />
                        left-pad-color2
                    </div>
                        <br />
                    <div className='left-pad-color3'>
                        <br />  
                        left-pad-color3
                    </div>

                </div>
            <div className='pad-middle'>
                <h5>Drag and Drop colors:</h5>
                
                    <div className='mid-pad-circle1'>mid-pad-circle1</div>
                    <div className='mid-pad-circle2'>mid-pad-circle2</div>
                    <div className='mid-pad-circle3'>mid-pad-circle3</div>
            </div>
        </div>

        {/* TODO add 3 COLOR PICKS ON CSS */}

        <h1 className='bottomtext'>If you're reading this, you're awesome. :)</h1>

    </div>


    )
}


export default Midboard
