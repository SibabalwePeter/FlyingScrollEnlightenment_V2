import * as React from 'react';
import { Container } from 'reactstrap';

const questions = ['Build kitchen cabinets (Realistic = R)',
    'Lay brick or tile (R)',
    'Build kitchen cabinets(Realistic = R)',
    'Lay brick or tile(R)',
    'Develop a new medicine(Investigative = I)',
    'Study ways to reduce water pollution(I)',
    'Write books or plays(Artistic = A)',
    'Play a musical instrument(A)',
    'Teach an individual an exercise routine(Social = S)',
    'Help people with personal or emotional problems(S)',
    'Buy and sell stocks and bonds(Enterprising = E)',
    'Manage a retail store(E)',
    'Develop a spreadsheet using computer software(Conventional = C)',
    'Proofread records or forms(C)',
    'Repair household appliances(R)',
    'Raise fish in a fish hatchery(R)',
    'Conduct chemical experiments(I)',
    'Study the movement of planets(I)',
    'Compose or arrange music(A)',
    'Draw pictures(A)',
    'Give career guidance to people(S)',
    'Perform rehabilitation therapy(S)',
    'Operate a beauty salon or barber shop(E)',
    'Manage a department within a large company(E)',
    'Install software across computers on a large network(C)',
    'Operate a calculator(C)',
    'Assemble electronic parts(R)',
    'Drive a truck to deliver packages to offices and homes(R)',
    'Examine blood samples using a microscope(I)',
    'Investigate the cause of a fire(I)',
    'Create special effects for movies(A)',
    'Paint sets for plays(A)',
    'Do volunteer work at a non - profit organization(S)', 
    'Teach children how to play sports(S)',
    'Start your own business(E)',
    'Negotiate business contracts(E)',
    'Keep shipping and receiving records(C)',
    'Calculate the wages of employees(C)',
    'Test the quality of parts before shipment(R)',
    'Repair and install locks(R)',
    'Develop a way to better predict the weather(I)',
    'Work in a biology lab(I)',
    'Write scripts for movies or television shows(A)',
    'Perform jazz or tap dance(A)',
    'Teach sign language to people who are deaf or hard of hearing(S)',
    'Help conduct a group therapy session(S)',
    'Represent a client in a lawsuit(E)',
    'Market a new line of clothing(E)',
    'Inventory supplies using a hand - held computer(C)',
    'Record rent payments(C)',
    'Set up and operate machines to make products(R)',
    'Put out forest fires(R)',
    'Invent a replacement for sugar(I)',
    'Do laboratory tests to identify diseases(I)',
    'Sing in a band(A)',
    'Sing in a band(A)',
    'Take care of children at a day - care center(S)',
    'Teach a high - school class(S)',
    'Sell merchandise at a department store(E)',
    'Manage a clothing store(E)',
    'Keep inventory records(C)',
    'Stamp, sort, and distribute mail for an organization(C)']

class Questions extends React.PureComponent {
    public render() {
        return (
            <Container>
                <table className="table table-striped table-hover table-bordered table-align-centre">
                    <thead >
                        <tr className="text-centre bordered">
                            <th scope="col" >Strongly dislike</th>
                            <th scope="col">dislike</th>
                            <th scope="col">unsure</th>
                            <th scope="col">like</th>
                            <th scope="col" className="align-centre">Strongly like</th>
                            <th scope="col">Question</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map(question=> (
                            <tr>
                                <td><input className="form-check-input" type="radio" name={question} value={1} /></td>
                                <td><input className="form-check-input" type="radio" name={question} value={2} /></td>
                                <td><input className="form-check-input" type="radio" name={question} value={0} /></td>
                                <td><input className="form-check-input" type="radio" name={question} value={4} /></td>
                                <td><input className="form-check-input" type="radio" name={question} value={5} /></td>
                                <td>{question}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </Container>
        );
    }
};

export default Questions;