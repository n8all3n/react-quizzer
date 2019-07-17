import React from 'react';
import '../quiz.css';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

class QuizCard extends React.Component {
    static propTypes = {
        questionNum: PropTypes.number,
        question: PropTypes.string,
        answer: PropTypes.string
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
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h2 className="header">Question # {this.props.questionNum}</h2>
                        <p>
                            <ReactMarkdown source={this.props.question} />
                        </p>
                    </div>
                    <div className="flip-card-back">
                        <h2 className="header">Answer</h2>
                        <p>
                            <ReactMarkdown source={this.props.answer} />
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default QuizCard;