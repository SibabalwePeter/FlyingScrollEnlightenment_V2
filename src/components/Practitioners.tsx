import * as React from 'react';
import { Container} from 'reactstrap';

import PractitionerCareers from './Practitioner_Careers'

class Practitioners extends React.PureComponent {
    public render() {
        return (
            <Container>
         <h2>Practitioners</h2>
                    <h5>Career Development Programme</h5>
                    <p>
                        Flying Scroll Enlightenment career development programme prepares high school learners to be more competitive in global economic activities
                        as 4IR integral strength of world economy. 
                    </p>
                <p >
                        Our career development programme provides a method for schools to systematise guidelines and learner experiences around various
                        categories encompass virtually all occupations from entry through professional levels. These alignment of occupations are used as an
                        organizing tool for programme design, a model for guidance and instruction, and a mechanism for continuous transition from secondary
                        education to post-secondary education.
                    </p>
                    
                    <h5>Practitioners</h5>
                    <p>
                        A wide range of programmes and services provided in schools to assist learners to gain knowledge, skills, attitudes and behaviours to manage
                        their academics and world of work.
                    </p>
                    <h6>Programme Standards </h6>
                    <p>
                        Career development practitioners work in a range of occupations and of settings and providing services to schools, and post-school candidates.
                        A wide range of programmes a services provided in schools to assist learners to gain knowledge, skills, attitudes and behaviours to manage
                        their academics and world of work. 
                    </p>
                    <p>
                        Flying Scroll Enlightenment Career Development Programme Framework intentionally designed to support career programmes in fulfilling the
                        roles and accountabilities of career development practitioners and management team to:
                        <ul>
                            <li>Identify a career development plan with suitable holistic model fundamentals of the company to promote more effectiveness and productiveness.</li>
                            <li>Obtain systematic response on performance/work rate and progress against their career development plan.</li>
                            <li>Obtain an accredited development activities – postgraduate certificate/any related training certificate in academic practice.</li>
                            <li>Recognise an additional training skills from the company for understanding its holistic model and standard.</li>
                        </ul>
                    </p>
                    <h5>Practitioners</h5>
                    <p>
                        Career development supporting tools – gathered resources sets to help learners to make informed career decisions, and economical
                        exposure. Resources contains all content areas for specific activity module, and career cluster alignment.
                    </p>
                    <h6>Career Cluster Alignment</h6>
                    <p>
                        Career cluster is an organizational occupations and careers grouped to assist career practitioners in modifying rigorous career
                        programmes/activities for learners.
                    </p>
                    <PractitionerCareers />
          </Container>
               
        );
    }
};

export default Practitioners;