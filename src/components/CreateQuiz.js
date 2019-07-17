import React from 'react';
import '../quiz.css';
import CreateQuestion from '../components/CreateQuestion';
import ReactMarkdown from 'react-markdown';
class CreateQuiz extends React.Component {
        constructor() {
            super();

            this.state = {
                question: '',
                answer: '', 
                questions:[],
                editIndex: null
            }
        }
    
        onSave = (newQuestion, newAnswer) => {
            console.log(newQuestion + ' ' + newAnswer);

            if (!this.state.editIndex) {
                this.setState(prevState => ({
                    questions: [...prevState.questions, {question: newQuestion, answer: newAnswer}]
                }));
            }
           
            this.setState({
                question: '',
                answer: '',
                editIndex: null
            });

            //https://stackoverflow.com/questions/28121272/whats-the-best-way-to-update-an-object-in-an-array-in-reactjs
        }
    
        printState = () => {
            console.log(this.state.questions);
        }

        render() {
            return (
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Question</th>
                                <th scope="col">Answer</th>
                            </tr>
                        </thead>
                        <tbody>
                        {  
                            this.state.questions.map((value, index) => {
                                return <tr key={index}>
                                            <td><ReactMarkdown source={value.question}/></td>
                                            <td><ReactMarkdown source={value.answer}/></td>
                                       </tr> 
                            })
                        }
                       </tbody>
                    </table>
                    
                    
                    <button onClick={this.printState}>Yo</button>
                    <CreateQuestion question={this.state.question} answer={this.state.answer} onSave={this.onSave}/>
                </div>
        )
    }
}
export default CreateQuiz;