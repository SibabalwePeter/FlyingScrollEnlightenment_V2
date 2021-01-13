import * as React from 'react';
import { Container} from 'reactstrap';
import CustomizedAccordions from './Learners_GradesProgrammes'

class Learners extends React.PureComponent {
    public render() {
        return (
            <Container>
                <h2>Learners</h2>
                    <h5>Career Development Programme</h5>
                    <p>
                        Flying Scroll Enlightenment career development programme prepares high school learners to be more competitive in global economic activities
                        as 4IR integral strength of world economy. 
                    </p>
                    <p>
                        Our career development programme provides a method for schools to systematise guidelines and learner experiences around various
                        categories encompass virtually all occupations from entry through professional levels. These alignment of occupations are used as an
                        organizing tool for programme design, a model for guidance and instruction, and a mechanism for continuous transition from secondary
                        education to post-secondary education.
                    </p>
                    <h6>Career Programme Activities for Learners</h6>
                    <p>
                        During the next four years of schooling, grade 9, 10, 11, and 12 learners will be involved in a career and educational planning process called
                        the Career Development Programme. This learner-directed process targets two goals:
                        <ul>
                            <li> To help learners find meaning in their school subjects and activities by relating them to their personal and career goals and to the real world.</li>
                            <li> To teach learners skills and knowledge that can be used throughout their life to manage their education and career decisions.</li>
                        </ul>
                    </p>
                    <CustomizedAccordions/>
                <br/>
          </Container>
        );
    }
};
export default Learners;