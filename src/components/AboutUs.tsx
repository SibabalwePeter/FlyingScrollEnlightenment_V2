import * as React from 'react';
import { Button, Card, CardText, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';

class AboutUs extends React.PureComponent {
    public render() {
        return (
            <Container>
                
                <h2>About</h2>
                    <p>
                        Flying Scroll Enlightenment holistic educational system model is driven by <strong>Investment in Human Capital</strong> and <strong>Intellectual Standard</strong>. Our
                        holistic educational system model opens an opportunity to change lives, acquire good outcomes and maximize resources, thus breaking the
                        cycle of poverty and generational repetition of low educational attainment is a fundamental reason of actuality.
                    </p>
                    <br/>
                <div className="row">
                <div className="col-8">
                        
                <h5>Career Development Programme</h5>
                <p>
                    This unit focuses on several elements of career development programme/activities. Career development programme is an ongoing programme
                    and very personal, learners may find it valuable to spend more time in some of activities or to independently complete these activities and
                    update their portfolios.
                </p>
                <p>
                    The learner-directed process targets two goals:<br/>
                    <ul>
                        <li>To help learners find meaning in their school subjects and activities by relating them to their personal and career goals, and to the real world.</li>
                        <li>To educate learners, skills and knowledge that will be used throughout life, to manage their education and career decisions.</li>
                    </ul>
                </p>
                <h5>Education System Programme</h5>
                <p>
                    Education, and knowledge is a fundamental key factor in development – it is vital for economic and social progress worldwide. Our education
                    system programme promote educational quality and intellectual standard, to ensure learners access educational quality and standard process
                    in order to obtain confidence in economic activities, political, social stability, advancement of a country, and meet the demands of Fourth
                    Industrial Revolution (4IR).
                </p>
                <h5>Youth Development Programme</h5>
                <p>
                    Educational and economical productivity, growth and maintenance necessitates ongoing long-term human investment capital strategic
                    approach in empowering communities and post-school graduates and under-qualify candidates. This unit specifically designed to address the 
                    intergenerational outcomes, restoring good atmosphere in society and centralise potential-connection to improve and strengthen socioeconomic outcome.
                </p>
                <h5>Flying Scroll Enlightenment (Pty) Ltd Actuality</h5>
                <p>
                    We are copiously concerned about dominant implementation of 4IR which will wholly annihilate the South African and African structure of
                    policies, economic system, and education system, profoundly vigour the call of reformation nor transformation.
                </p>
                <p>
                    The labour market calls for a standard shift requires the need for a highly technologically driven workforce demands a shift in skills and
                    educational requirements. Flying Scroll Enlightenment implement a system that take disadvantage learners and individuals to standard, to
                    possess futuristic required skills that allows 4IR to flourish. Therefore two main influential rudiments are our recommendations for reason of
                    actuality:<br/>
                    <ul>
                        <li>Investment in Human Capital</li>
                        <li>Intellectual Standard to Learners</li>
                    </ul>
                </p>
                <p>
                    Career Development Programme unit is an entry service in the market for first four years.
                </p>
                </div>
                <div className="col mt-4">
                    <Card>
                            <CardTitle className="m-4"><h3>Contact Us</h3></CardTitle>
                        <CardText>
                        <Form className="m-4">
                            <FormGroup >
                                <Label>Name</Label>
                                <Input className="form-control form-control-lg" type="text" name="name" placeholder="e.g Jack" />
                            </FormGroup>
                            <FormGroup>
                                <Label>E-mail</Label>
                                <Input className="form-control form-control-lg" type="email" name="email" placeholder="e.g Jack@abc.com" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Message</Label>
                                <Input className="form-control form-control-lg" type="textarea" name="message" />
                            </FormGroup>
                            <FormGroup>
                                <Button className="btn btn-primary" type="submit" name="sbmit">Submit</Button>
                            </FormGroup>
                        </Form>
                        </CardText>
                    </Card>
                    </div>
                </div>
            </Container>
        );
    }
};

export default AboutUs;
