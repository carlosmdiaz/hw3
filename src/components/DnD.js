/* import React from 'react';
import ReactDOM from 'react-dom';
import MidBoard from './MidBoard'



class DnD extends React.Component {

    state = {
        tasks: [{name:"BLUE", category:"beat", bgcolor:"blue"},
                {name:"RED", category:"beat", bgcolor:"red"},
                {name:"YELLOW", category:"beat", bgcolor:"yellow"},
                {name:"GREEN", category:"beat", bgcolor:"green"},
                {name:"PINK", category:"beat", bgcolor:"pink"},
                {name:"PURPLE", category:"beat", bgcolor:"purple"}]      
    }

    /* state = {
        assign: [{name:"Ya Beatses", category:"yourBeats", bgcolor:"gray"}]
    } 

    onDragOver = (event) => {
        event.preventDefault();
    }

    onDragStart = (ev, id) => {
        console.log('dragstart: ', id);
        ev.dataTransfer.setData("id", id);
    }

   onDrop = (event, a) => {
        let id = event.dataTransfer.getData("id");

        let tasks =this.state.tasks.filter((task) => {
            if(task.name = id) {
                task.category = a;
            }
            return task;
        })

        this.setState({
            ...this.state,
        })
    } 

    render() {
        var tasks = {
            beat: []
        }
        var assign = {
            yourBeats:[]
        }

        this.state.tasks.forEach((tsk)=> {
            tasks[tsk.category].push(
                <div key={tsk.name} 
                onDragStart = {(e)=> this.onDragStart(e,tsk.name)}
                draggable 
                className="draggable" 
                style = {{backgroundColor: tsk.bgcolor}}>
                    {tsk.name}
                </div>
            )
        })

        return (
          <div className="container-drag">
              <h1 className="header">Design Board</h1>

              <div className="beat1" 
                onDragOver={(e)=>this.onDragOver(e)}
                onDrop={(e)=>{this.onDrop(e,"beat1")}}>
                  <span className="task-header">BEAT 1</span>
                    {tasks.beat1}
              </div>
            <br></br>
              <div className="beat2" 
                onDragOver={(e)=> this.onDragOver(e)}
                onDrop={(e)=>this.onDrop(e, "beat2")}>
                  <span className="task-header">BEAT 2</span>
                  {tasks.beat2}
              </div>
            <br></br>
              <div className="beat3" 
                onDragOver={(e)=> this.onDragOver(e)}
                onDrop={(e)=>this.onDrop(e, "beat3")}>
                  <span className="task-header">BEAT 3</span>
                  {tasks.beat3}
              </div>
            <br></br>
              <div className="beat4" 
                onDragOver={(e)=> this.onDragOver(e)}
                onDrop={(e)=>this.onDrop(e, "beat4")}>
                  <span className="task-header">BEAT 4</span>
                  {tasks.beat4}
              </div>
            <br></br>
              <div className="beat5" 
                onDragOver={(e)=> this.onDragOver(e)}
                onDrop={(e)=>this.onDrop(e, "beat5")}>
                  <span className="task-header">BEAT 5</span>
                  {tasks.beat5}
              </div>
            <br></br>
              <div className="beat6" 
                onDragOver={(e)=> this.onDragOver(e)}
                onDrop={(e)=>this.onDrop(e, "beat6")}>
                  <span className="task-header">BEAT 6</span>
                  {tasks.beat6}
              </div>
            <br></br>
            <br></br>
              <div className="droppable"
                onDragOver={(e)=> this.onDragOver(e)}>
                    onDrop={(e)=>this.onDrop(e, "assign")}
                    <span className="task-header">YOUR BEATS</span>
                    {tasks.assign}
              </div> 

          </div>
        );
      }

}

export default DnD */