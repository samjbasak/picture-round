import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';




class Picture extends React.Component {
    state = {
        pictures: ['badminton.jpg', 'rugby.jpg', 'javalin.png', 'bowls.jpg', 'football.jpeg', 'tennis.jpeg', 'baseball.jpg', 'bobsleigh.jpg', 'fencing.jpg', 'kayaking.jpg', 'kayaking.jpg'],
        picture: 0,
        styling: [1,1,1,1,1,1,1,1,1],
        score: 0,
        boxes: 0
    }
    
    nextPicture(answer) {
        let interum = this.state
        if(answer && interum.picture < interum.pictures.length-1) {interum.score += (2 - 0.2*interum.boxes)}
        if(interum.picture < interum.pictures.length-1) {interum.picture++}
        this.setState({pictures: interum.pictures,
			picture: interum.picture,
			styling: [1,1,1,1,1,1,1,1,1],
			score: interum.score,
			boxes: 0
			})
    }

    clickBox(box) {
        let interum = this.state
        interum.styling[box] = 0
        interum.boxes++
        this.setState({pictures: interum.pictures,
			picture: interum.picture,
			styling: interum.styling,
			score: interum.score,
			boxes: interum.boxes
			})
    }
    
    render() {
        return (
            <div className="container">
		<img src={require(`./images/${this.state.pictures[this.state.picture]}`)}/>
		<button onClick={() => this.nextPicture(true)}>Correct</button>
		<button onClick={() => this.nextPicture(false)}>Incorrect</button>
		<div className="box box0" onClick={() => this.clickBox(0)} style={{opacity: this.state.styling[0]}}></div>
		<div className="box box1" onClick={() => this.clickBox(1)} style={{opacity: this.state.styling[1]}}></div>
		<div className="box box2" onClick={() => this.clickBox(2)} style={{opacity: this.state.styling[2]}}></div>
		<div className="box box3" onClick={() => this.clickBox(3)} style={{opacity: this.state.styling[3]}}></div>
		<div className="box box4" onClick={() => this.clickBox(4)} style={{opacity: this.state.styling[4]}}></div>
		<div className="box box5" onClick={() => this.clickBox(5)} style={{opacity: this.state.styling[5]}}></div>
		<div className="box box6" onClick={() => this.clickBox(6)} style={{opacity: this.state.styling[6]}}></div>
		<div className="box box7" onClick={() => this.clickBox(7)} style={{opacity: this.state.styling[7]}}></div>
		<div className="box box8" onClick={() => this.clickBox(8)} style={{opacity: this.state.styling[8]}}></div>
		<h1>Round: {this.state.picture+1<this.state.pictures.length ? this.state.picture+1 : this.state.picture}</h1>
                <h1>Current Score: {this.state.score.toFixed(1)}</h1>
	    </div>
        )
    }

}

ReactDOM.render(<Picture />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
