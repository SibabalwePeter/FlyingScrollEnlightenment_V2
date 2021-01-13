import React from 'react';
import {
  Card, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import '../Styles/Home.css';
import Slideshow from './Slideshow';

const Home = () => {
  return (
    <div>
      <Slideshow/>
      <br/>
      <CardDeck>
          <Card>
            <CardBody>
              <CardTitle><h5>Career Development </h5></CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
              <CardText>Flying Scroll Enlightenment career development programme is defined as career education, career information, career exploration, career advice and counselling..</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Education System Programme</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
              <CardText>This programme close the achievement gap, particularly for less privilege learners, creates opportunity for educational officials to invest outside….</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Youth Development Programme</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
              <CardText>This programme specifically designed to address the intergenerational outcomes, we are impacting; for example, high school drop-out, teen pregnancy and gap-years learners…..</CardText> 
            </CardBody>
          </Card>
        </CardDeck>
        <br/>
    </div>
  );
}

export default Home;