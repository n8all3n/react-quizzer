import React from 'react';
import '../quiz.css';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

class CreateQuestion extends React.Component {
    static propTypes = {
        question: PropTypes.string,
        answer: PropTypes.string,
        index: PropTypes.number,
        onSave: PropTypes.func
    };
    
   
    constructor(props) {
        super();
        
        this.state = {
            question: props.question,
            answer: props.answer
        };
      }

      handleQuestionChange(e) {
        this.setState({ question: e.target.value });
      }

      handleAnswerChange(e) {
        this.setState({ answer: e.target.value });
      }

      handleSave = () => {
        this.props.onSave(this.state.question, this.state.answer, this.props.index);
        this.setState({
            question: '',
            answer: ''
        });
      }

      render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="question">Question</label>
                    <textarea id="question" rows="4" cols="50" className="form-control" value={this.state.question} onChange={this.handleQuestionChange.bind(this)}></textarea>
                    <div className="rendered">
                        <ReactMarkdown source={this.state.question} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="answer">Answer</label>
                    <textarea id="answer" rows="4" cols="50" className="form-control" value={this.state.answer} onChange={this.handleAnswerChange.bind(this)}></textarea>
                    <div className="rendered">
                        <ReactMarkdown source={this.state.answer} />
                    </div>
                </div>
                <button className="btn btn-primary" onClick={this.handleSave}>Save</button>
            </div>
        )
    }
}
export default CreateQuestion;