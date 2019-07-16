import React from 'react';
import ReactCardFlip from 'react-card-flip';

import PropTypes from 'prop-types';

class QuizCard extends React.Component {
    static propTypes = {
        questionNum: PropTypes.number
    };
    
    constructor() {
        super();
          this.state = {
          isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }
    
      render() {
        return (
          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical" infinite>
            <div className="card" key="front">
                <div className="card-header">
                    Question # {this.props.questionNum}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <button onClick={this.handleClick}>Click to flip</button>
                </div>
            </div>
            <div className="card" key="back">
                <div className="card-header">
                   Answer
                </div>
                <div className="card-body">
                    <p className="card-text">answer</p>
                    <button onClick={this.handleClick}>Click to flip</button>
                </div>
            </div>

          </ReactCardFlip>
        )
      }
}

export default QuizCard;