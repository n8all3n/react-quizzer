import React from 'react';
import QuizCard from '../components/QuizCard';
import quizJSON from '../quiz.json';
import PropTypes from 'prop-types';
class Quiz extends React.Component {
    static propTypes = {
        quiz: PropTypes.object
    };

    constructor() {
        super();
        
        this.state = {
            currQuestion: 1,
            questions: quizJSON.questions
        };
    }

    onNextClick = () => {
        this.setState({ currQuestion: this.state.currQuestion + 1 });
    }

    onPreviousClicked = () => {
        this.setState({ currQuestion: this.state.currQuestion - 1 });
    }

    previousDisabled = () => {
        if (this.state.currQuestion === 1) {
            return true;
        }

        return false;
    }

    nextDisabled = () => {
        if (this.state.currQuestion === this.state.questions.length) {
            return true;
        }

        return false;
    }

  render() {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <QuizCard questionNum={this.state.currQuestion} question={this.state.questions[this.state.currQuestion -1].question} answer={this.state.questions[this.state.currQuestion -1].answer}/>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="control-container">
                        <button type="button" className="btn btn-primary prev-button" 
                                onClick={this.onPreviousClicked} disabled={this.previousDisabled()}>&laquo; Previous</button>
                        <button type="button" className="btn btn-primary next-button" 
                            onClick={this.onNextClick} disabled={this.nextDisabled()}>Next &raquo;</button>
                    </div>
                </div>
            </div>
           
        </div>
    );
  }
}

export default Quiz;
