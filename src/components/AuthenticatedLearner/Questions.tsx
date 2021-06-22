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
    'N Hire compant staff members',
    'F Run ventilators/breathing machines',
    'L Build kitchen cabinet',
    'N Refinance a mortgate',
    'A Sign in a concert',
    'R Direct takeoff/landing planes',
    'F Operate a cash register',
    'B Collect rocks',
    'F Start a business',
    'L Draft a blueprint',
    'L Assess student progress',
    'K Design an airplane',
    'N Wrap a sprained ankle',
    'H Guide an international tour group',
    'O Solve technical problems',
    'I provide  spiritual guidance to others',
    'C Manage veterinary clinic',
    'J Lead others',
    'E operate heavy equipment',
    'C Manage a fish hatchery',
    'E Assemble cars',
    'J Protect borders',
    'A play an instrument',
    'I Plan activities for adult day care',
    'C Research soybean use in paint',
    'I Provide customer information',
    'D Guard money in an amoured car',
    'B Study human behaviour',
    'E Fix television',
    'L Run a school',
    'A Choreographydance',
    'K Lobby or show support for a cause',
    'G Sell clothes',
    'E Work with your hands',
    'H Work an amusement park',
    'E Sell insurance',
    'H Learn about ethnic groups',
    'O Manage an information systems',
    'M Appraise the value of a house',
    'L File books at the library',
    'L Grade papers',
    'P Operat a train',
    'L Order building supplies',
    'E paint cars',
    'O Develop new computer games',
    'G Buy merchandise for a store',
    'J Workto get someone elected',
    'C Identify plants in a forest',
    'D Guard inmates in a prison',
    'K Read blueprints',
    'G Line up concerts for a band',
    'J Ask peole survey questions',
    'E Manage a factory',
    'N Work as a nurse in a hospital',
    'A paint a portrait',
    'J Testify before congress',
    'B Work with  microscope',
    'H Schedule tea times at a golf course',
    'C Classify plants',
    'O Transcribe medical records',
    'R Drive a taxi',
    'A Broadcast the news',
    'J Audit taxes for the government',
    'B Sort and date dinosaur bones',
    'N Give shorts',
    'C Design landscape',
    'O Give technology support to computer users',
    'D Work in a courtroom',
    'C Care for injured animals',
    'H Serve meals to customers',
    'E Install rivets',
    'C Raise Worms',
    'O Balance accounts',
    'L Develop learning games',
    'I Read to sick people',
    'O Repair computers',
    'E Compare sizes and shapes of objects',
    'C Fishing',
    'P Reoair bicycles',
    'D Deliver mail',
    'L Teach special education',
    'O Set up a tracking system',
    'F Manage a store',
    'G Advertise good and services',
    'P Distribute supplies to dentists',
    'H Compete in a sport event',
    'H Check in guests in hotel',
    'L Teach adults to read',
    'K Follow step by step instructions',
    'M Collect past due bills'

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