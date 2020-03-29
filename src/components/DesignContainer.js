import React from 'react';
import ReactDOM from 'react-dom';



class DesignContainer extends React.Component {

    state = {
        tasks: [{name:"BLUE", category:"beat1", bgcolor:"blue"},
                {name:"RED", category:"beat2", bgcolor:"red"},
                {name:"YELLOW", category:"beat3", bgcolor:"yellow"},
                {name:"GREEN", category:"beat4", bgcolor:"green"},
                {name:"PINK", category:"beat5", bgcolor:"pink"},
                {name:"PURPLE", category:"beat6", bgcolor:"purple"}]
    }

    props = {
        assign: [{name:"Ya Beatses", category:" ", beats:"yourbeats", bgcolor:"gray"}]
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDragStart = (ev, id) => {
        console.log('dragstart: ', id);
        ev.dataTransfer.setData("id", id);
    }

   /* onDrop = (ev, a) => {
        let id = ev.dataTransfer.getData("id");

        let tasks =this.state.tasks.filter((task) => {
            if(task.name = id) {
                task.category = a;
            }
            return task;
        })

        this.setState({
            ...this.state,
        })
    } */

    render() {
        var tasks = {
            beat1: [],
            beat2: [],
            beat3: [],
            beat4: [],
            beat5: [],
            beat6: [],
            yourbeats: [], 
        }
        var assign = {
            yourbeats:[]
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

export default DesignContainer