import * as React from 'react';
import { Container } from 'reactstrap';
import * as AssessmentStore from '../../store/Assessment';
import '../../store/Assessment';

const questions = [
    'A Operate a printing press',
    'B Study the cause of earthquake',
    'C Planting and Harvesting crops',
    'R Replace a car windo and fender',
    'E Analyse and reports and records',
    'E Operate a machine',
    'F Work in a office',
    'G Answer customer questions',
    'D Writting reports',
    'I helping former inmates(prisoner) to find work',
    'K Design a freeway road',
    'N Plan educational lessons',
    'M Balance a checkbook',
    'N Take an X-Ray',
    'O Write a computer program',
    'C Training animals',
    'C Be in charge of planting forest',
    'A Present in a TV show or a movie',
    'D Solve a burglary',
    'E Check product Quality',
    'E Build and airport',
    'F Keep company business recorde',
    'E Put together small tools',
    'O Design a website',
    'L Tutor students',
    'C Work at a zoo',
    'I Take care of children',
    'N Plan special diets',
    'E making three dimenstions items',
    'D Analyse handwriting',
    'B Design indoor sprinkler systems',
    'E Run a factory sewing machine',
    'F Develop personel policies',
    'C Train race horses',
    'D guard a office building',
    'G run a store',
    'A Write a news paper article',
    'F Use a calculator',
    'M Help people in mental health clinic',
    'K Renovate houses',
    'L Care for children',
    'D Locatemissing person',
    'M Plan estate disbursements/payments',
    'O Data capturing',
    'A Design a book cover',
    'E build toys with written instructions',
    'B Figure why someone is sick',
    'P Fyling airplane',
    'C Learn how things grow and stay alive',
    'G Sell cars',
    'H Work as a restuarant host or hostess',
    'D Fight fire',
    'F Keep payroll records for a company',
    'I Work in a nursing home',
    'Hire compant staff members',
    'Run ventilators/breathing machines',
    
]

const Choice = (e: { target: any; }) => {
    const category = e.target.name.charAt(0);
    AssessmentStore.Statstable(category, e.target.value);
}

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
                        {questions.map(question => (
                            <tr>
                                <td><input className="form-check-input" type="radio" name={question} value={-2} onClick={Choice} /></td>
                                <td><input className="form-check-input" type="radio" name={question} value={-1} onClick={Choice} /></td>
                                <td><input className="form-check-input" type="radio" name={question} value={0} onClick={Choice} /></td>
                                <td><input className="form-check-input" type="radio" name={question} value={1} onClick={Choice} /></td>
                                <td><input className="form-check-input" type="radio" name={question} value={2} onClick={Choice} /></td>
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

export default Questions