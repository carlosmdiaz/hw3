import React from 'react';
import ReactDOM from 'react-dom';
import './myStyles.css'
//always import react first

//LEARN ARROW FUNCTIONS! 

class Midboard extends React.Component {
<<<<<<< HEAD
    /* constructor(props)
        super(props)

        this.state = {
            color: "green "
        } */ 
        
=======

>>>>>>> cfe8302b513f679bcde7e5b0b6f53f57bf7276b3
    state = {
        tasks: [{name:"BLUE", category:"leftpadcolor1", bgcolor:"blue"},
                {name:"RED", category:"leftpadcolor2", bgcolor:"red"},
                {name:"YELLOW", category:"leftpadcolor3", bgcolor:"yellow"},
                {name:"", category:"midcolor1", bgcolor:"null"},
                {name:"", category:"midcolor2", bgcolor:"null"},
                {name:"", category:"midcolor3", bgcolor:"null"}],
        disabled: true
            };
    
    onDragStart = (ev, id) => {
        console.log('dragstart: ', id);
        ev.dataTransfer.setData("id", id);
    }
    
    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, a) => {
        let id = ev.dataTransfer.getData("id");

        let tasks =this.state.tasks.filter((task) => {
            if(task.name === id) {
                task.category = a;
            }
            return task;
        });

        this.setState({
            ...this.state,
        });
    } 

    handleClik() {
        this.setState( {disabled: !this.state.disabled} )
      } 
    


    render(){
        const {disabled} = this.state;
        var tasks = {
            leftpadcolor1: [],
            leftpadcolor2: [],
            leftpadcolor3: [],
            midcolor1: [],
            midcolor2: [],
            midcolor3: [] 
        }

        this.state.tasks.forEach((t)=> {
            tasks[t.category].push(
                <div key={t.name} 
                onDragStart = {(e)=> this.onDragStart(e,t.name)}
                draggable 
                className="draggable" 
                style = {{backgroundColor: t.bgcolor}}>
                    {t.name}
                </div>
            )
        })
        return(
            <div>
                <div className='pad'>
                    <h1 className='primary'>Color Board Simulator</h1>
                    <h1 className='bottomtext'>Simular created by: Jenny, Kristel and Carlos</h1>
                    
                        <div className='pad-edit'>
                            <button  onClick = {this.handleClik.bind(this)}> Edit</button>
                        </div>

                        <div className='pad-left'>

                            <div className='left-pad-color1'
                                onDragOver={(e)=>this.onDragOver(e)}
                                onDrop={(e)=>{this.onDrop(e,"left-pad-color1")}}>
                                    <br></br>
                                    {tasks.leftpadcolor1}
                            </div>

                            <br></br>

                            <div className='left-pad-color2'
                                onDragOver={(e)=>this.onDragOver(e)}
                                onDrop={(e)=>{this.onDrop(e,"left-pad-color1")}}>
                                <br></br> 
                                    {tasks.leftpadcolor2}
                            </div>

                            <br></br>

                            <div className='left-pad-color3'
                                onDragOver={(e)=>this.onDragOver(e)}
                                onDrop={(e)=>{this.onDrop(e,"left-pad-color3")}}>
                                <br></br> 
                                    {tasks.leftpadcolor3}
                            </div>
                            <br></br>
                            <br></br>

                        </div>
                </div>

                <div className='pad-middle'>
                <h5>Drag and Drop colors:</h5>
                
                    <div className='mid-pad-circle1'
                        onDragOver={(e)=> this.onDragOver(e)}
<<<<<<< HEAD
                        onDrop={(e)=>this.onDrop(e, "midcolor1")}
                        style = {{backgroundColor: ' '}}>
=======
                        onDrop={(e)=>this.onDrop(e, "midcolor1")}>
>>>>>>> cfe8302b513f679bcde7e5b0b6f53f57bf7276b3
                            {tasks.midcolor1}
                    </div>
                    <div className='mid-pad-circle2'
                    onDragOver={(e)=> this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "midcolor2")}>
                        {tasks.midcolor2}
                    </div>
                    <div className='mid-pad-circle3'
                        onDragOver={(e)=> this.onDragOver(e)}
                        onDrop={(e)=>this.onDrop(e, "midcolor3")}>
                            {tasks.midcolor3}
                    </div>
                </div>

            </div>
        );
    }
}


export default Midboard
