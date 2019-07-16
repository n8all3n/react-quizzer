import React from 'react';
import QuizCard from '../components/QuizCard';

class Quiz extends React.Component {
    constructor() {
        super();
        this.state = {
            currQuestion: 1
        };
    }
  render() {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <QuizCard questionNum={this.state.currQuestion}/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div>
                        <button type="button" class="btn btn-primary">&laquo; Previous</button>
                        <button type="button" class="btn btn-primary">Next &raquo;</button>
                    </div>
                </div>
            </div>
           
        </div>
    );
  }
}

export default Quiz;
