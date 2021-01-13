import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Card, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, Row, Col
  } from 'reactstrap';
import ArtsPicture from '../Pictures/Arts.jpg';
import Science from '../Pictures/Science.jpeg';
import Farming from '../Pictures/Farming.jpeg';
import Law from '../Pictures/Law.jpeg';
import Industrial from '../Pictures/Industrial.jpeg';
import Accounting from '../Pictures/Accounting.jpeg';
import Hospitality from '../Pictures/Hospitality.jpeg';
import SocialWorker from '../Pictures/SocialWorker.jpeg';
import CityPlanning from '../Pictures/CityPlannng.jpeg';
import Architecture from '../Pictures/Architecture.jpeg';
import Education from '../Pictures/Education.jpeg';
import RealEstate from '../Pictures/RealEstate.jpeg';
import IT from '../Pictures/IT.jpeg';
import Finance from '../Pictures/Finance.jpeg';
import HealthSciences from '../Pictures/HealthSciences.jpeg';
import Transportation from '../Pictures/Transportation.jpeg';
import Animals from '../Pictures/Animals.jpeg';

function TabPanel(props: { [x: string]: any; children: any; value: any; index: any; }) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const PractitionerCareers =()=> {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
            <Tab label="Arts, A/V Technology and Communications" {...a11yProps(0)} />
            <Tab label="Science, Technology, Engineering and Mathematics" {...a11yProps(1)} />
            <Tab label="Plants, Agriculture and Natural Resources" {...a11yProps(2)} />
            <Tab label="Law, Public Safety, Corrections and Security" {...a11yProps(3)} />
            <Tab label="Transportation, Distribution and Logistics" {...a11yProps(4)} />
            <Tab label="Marketing, Sales and Service" {...a11yProps(5)} />
            <Tab label="Business, Management and Administration" {...a11yProps(6)} />
            <Tab label="Hospitality and Tourism" {...a11yProps(6)} />
            <Tab label=">Human Services" {...a11yProps(6)} />
            <Tab label="Education and Training " {...a11yProps(6)} />
            <Tab label="Architecture, Design and Construction" {...a11yProps(6)} />
            <Tab label="Finance, Banking, Inveents and Insurance" {...a11yProps(6)} />
            <Tab label="Health Sciences, Care and Prevention" {...a11yProps(6)} />
            <Tab label="Information Technology (IT)" {...a11yProps(6)} />
            <Tab label="Agriculture, Animals and Natural Resources" {...a11yProps(6)} />
            <Tab label="Manufacturing (Mechanical/Industrial)" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Card>
            <Row>
                <Col>
                    <CardImg top width="50%" src={ArtsPicture} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="50%" src={ArtsPicture} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="50%" src={ArtsPicture} alt="cardn images cap"></CardImg>
                </Col>
            </Row>
            <CardBody>
            <CardTitle><h5>Arts, A/V Technology and Communications</h5></CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in creative or performing arts, communication or A/V technology</CardSubtitle>
            <CardText>
                Actor &bull;
                Art &bull;
                Broadcast &bull;
                Camera Operator &bull;
                Composer and Music &bull;
                Film and Video &bull;
                Cartographer &bull;
                News Reporter &bull;
                Photographer &bull;
                Producer and Director &bull;
                Set and Exhibit Designer &bull;
                Technical Writer &bull;
                Graphic Designer
            </CardText>
            </CardBody>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Card>
            <Row>
                <Col>
                    <CardImg top width="100%" src={Science} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                <CardImg top width="100%" src={Science} alt="cardn images cap"></CardImg>
            </Col>
            <Col>
                <CardImg top width="100%" src={Science} alt="cardn images cap"></CardImg>
            </Col>
            </Row>
            <CardBody>
            <CardTitle><h5>Science, Technology, Engineering and Mathematics</h5></CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in problem-solving, discovering, collecting and analysing information and applying findings to problems in science, math and engineering.</CardSubtitle>
            <CardText>
                Aerospace Engineerbr&bull;
                Biologistbr&bull;
                Chemist&bull;
                Electrical and Electronics Engineer&bull;
                    Geographer&bull;
                Petroleum Engineer &bull;
                Mechanical Engineer&bull;
                Meteorologist&bull;
                Physicist&bull;
                Safety Engineer
            </CardText>
            </CardBody>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Card>
            <Row>
                <Col>
                    <CardImg top width="100%" src={Farming} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={Farming} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={Farming} alt="cardn images cap"></CardImg>
                </Col>
            </Row>
            <CardBody>
            <CardTitle><h5>Plants, Agriculture and Natural Resources</h5></CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in activities involving plants, usually in an outdoor setting.</CardSubtitle>
            <CardText>
                Agricultural Engineer&bull;
                Agricultural Scientist&bull;
                Animal Trainer&bull;
                Chef&bull;
                Conservation Scientist&bull;
                Farm Equipment Mechanic&bull;
                Fish and Game Warden&bull;
                Forester&bull;
                Veterinarian&bull;
                Zoologist
            </CardText>
            </CardBody>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Card>
            <Row>
                <Col>
                    <CardImg top width="100%" src={Law} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={Law} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={Law} alt="cardn images cap"></CardImg>
                </Col>
            </Row>
            <CardBody>
            <CardTitle><h5>Law, Public Safety, Corrections and Security</h5></CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in judicial, legal and protective services for people and property.</CardSubtitle>
            <CardText>
                Coroner&bull;
                Corrections Officer&bull;
                Court Clerk&bull;
                Detective and Investigator&bull;
                Fire fighter&bull;
                Judge&bull;
                Lawyer&bull;
                Life Guard and Ski Patrolman&bull;
                Police Patrol Officer
            </CardText>
            </CardBody>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Card>
            <Row>
                <Col>
                    <CardImg top width="100%" src={Transportation} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={Transportation} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={Transportation} alt="cardn images cap"></CardImg>
                </Col>
            </Row>
            <CardBody>
            <CardTitle><h5>Transportation, Distribution and Logistics</h5></CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in the movement of people, and goods by road, pipeline, air, railroad or water.</CardSubtitle>
            <CardText>
                Air Traffic Controller&bull;
                Airplane Pilot&bull;
                Automobile Mechanic&bull;
                Flight Attendant&bull;
                Motorboat Mechanic&bull;
                School Bus Driver&bull;
                Subway and Streetcar Operator&bull;
                Traffic Technician&bull;
                Transportation Agent
            </CardText>
            </CardBody>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Card>
            <Row>
                <Col>
                    <CardImg top width="100%" src={RealEstate} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={RealEstate} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={RealEstate} alt="cardn images cap"></CardImg>
                </Col>
            </Row>
            <CardBody>
            <CardTitle><h5>Marketing, Sales and Service</h5></CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in bringing others to a point of view through personal persuasion, using sales or promotional techniques.</CardSubtitle>
            <CardText>
                Advertising Salesperson&bull;
                Buyer and Purchasing Agent&bull;
                Customer Service Representative&bull;
                Floral Designer&bull;
                Market Research Analyst&bull;
                Public Relations Specialist&bull;
                Real Estate Agent&bull;
                Sales Manager&bull;
                Telemarketer
            </CardText>
            </CardBody>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Card >
            <Row>
                <Col>
                    <CardImg top width="100%" src={Accounting} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={Accounting} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={Accounting} alt="cardn images cap"></CardImg>
                </Col>
            </Row>
            <CardBody>
            <CardTitle><h5>Business, Management and Administration</h5></CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in organizing, directing and evaluating business functions.</CardSubtitle>
            <CardText>
                Accountant&bull;
                Advertising Manager&bull;
                Computer Operator&bull;
                Court Reporter&bull;
                Management Analyst&bull;
                Meeting and Convention Planner&bull;
                Payroll Clerk&bull;
                Property and Real Estate Manager&bull;
                Shipping and Receiving Clerk&bull;
                Statistician
            </CardText>
            </CardBody>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Card>
            <Row>
                <Col>
                    <CardImg top width="100%" src={Hospitality} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={Hospitality} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={Hospitality} alt="cardn images cap"></CardImg>
                </Col>
            </Row>
            <CardBody>
            <CardTitle><h5>Hospitality and Tourism</h5></CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in providing services to others in travel planning and hospitality services in hotels, restaurants and recreation.</CardSubtitle>
            <CardText>
                Baggage Porter and Bellhop&bull;
                Chef and Dinner Cook&bull;
                Food Service Worker&bull;
                Hotel Manager&bull;
                Janitor/Housekeeper Supervisor&bull;
                Reservation and Ticket Agent&bull;
                Restaurant Manager&bull;
                Tour Guide&bull;
                Travel Agent
            </CardText>
            </CardBody>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={8}>
        <Card >
            <Row>
                <Col>
                    <CardImg top width="100%" src={SocialWorker} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={SocialWorker} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={SocialWorker} alt="cardn images cap"></CardImg>
                </Col>
            </Row>
            <CardBody>
            <CardTitle><h5>Human Services</h5></CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in helping others with their mental, spiritual, social, physical or career needs.</CardSubtitle>
            <CardText>
                Child Care Worker&bull;
                Clergy&bull;
                Cosmetologist&bull;
                Counsellor&bull;
                Funeral Director&bull;
                Manicurist&bull;
                Professional Makeup Artist&bull;
                Financial Adviser&bull;
                Psychologist&bull;
                Residential Counsellor&bull;
                Social Worker
            </CardText>
            </CardBody>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={9}>
        <Card>
            <Row>
                <Col>
                    <CardImg top width="100%" src={Education} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={Education} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={Education} alt="cardn images cap"></CardImg>
                </Col>
            </Row>
            <CardBody>
            <CardTitle><h5>Education and Training</h5></CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in planning, managing and providing educational services, including support services, library and information services.</CardSubtitle>
            <CardText>
                Audio/Visual Specialist&bull;
                Coach and Sports Instructor&bull;
                College/University Administrator&bull;
                Teacher/Professor&bull;
                Librarian&bull;
                Public Health Educator&bull;
                Special Education Teacher&bull;
                Speech Pathologist
            </CardText>
            </CardBody>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={10}>
        <Card >
            <Row>
                <Col>
                    <CardImg top width="100%" src={Architecture} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={Architecture} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={Architecture} alt="cardn images cap"></CardImg>
                </Col>
            </Row>
            <CardBody>
            <CardTitle><h5>Architecture, Design and Construction</h5></CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in designing, planning, managing, building and maintaining physical structures.</CardSubtitle>
            <CardText>
                    Architect&bull;
                    Cabinetmaker&bull;
                    Carpenter&bull;
                    Construction Manager&bull;
                    Electrician&bull;
                    Civil Engineer&bull;
                    General Construction Worker&bull;
                    Highway Maintenance Worker&bull;
                    Interior Designer&bull;
                    Sheet Metal Worker Surveying and Mapping&bull;
                    Technician
            </CardText>
            </CardBody>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={11}>
        <Card>
            <Row>
                <Col>
                    <CardImg top width="100%" src={Finance} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={Finance} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={Finance} alt="cardn images cap"></CardImg>
                </Col>
            </Row>
            <CardBody>
            <CardTitle><h5>stmFinance, Banking, Inveents and Insurance</h5></CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in financial and investment planning and management, and providing banking and insurance services.</CardSubtitle>
            <CardText>
                Accounting Clerk&bull;
                Appraiser&bull;
                Credit Analyst&bull;
                Credit Checker&bull;
                Economist&bull;
                Financial Counsellor&bull;
                Insurance Adjuster and Examiner&bull;
                Insurance Agent&bull;
                Loan Officer&bull;
                Tax Preparer
            </CardText>
            </CardBody>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={12}>
        <Card >
            <Row>
                <Col>
                    <CardImg top width="100%" src={HealthSciences} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={HealthSciences} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={HealthSciences} alt="cardn images cap"></CardImg>
                </Col>
            </Row>
            <CardBody>
            <CardTitle><h5>Health Sciences, Care and Prevention</h5></CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in helping others by providing diagnostic, therapeutic, informational and environmental services, including researching and developing new health care services.</CardSubtitle>
            <CardText>
                Anaesthesiologist&bull;
                Athletic Trainer&bull;
                Chiropractor&bull;
                Dentist&bull;
                Emergency Medical Technician&bull;
                Physical Therapist&bull;
                Occupational Therapist&bull;
                Pharmacist&bull;
                Physician&bull;
                Registered Nurse
            </CardText>
            </CardBody>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={13}>
        <Card>
            <Row>
                <Col>
                    <CardImg top width="100%" src={IT} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={IT} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={IT} alt="cardn images cap"></CardImg>
                </Col>
            </Row>
            <CardBody>
            <CardTitle><h5>Information Technology (IT)</h5></CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in the design, development, support and management of hardware, software, multimedia, systems integration services and technical support.</CardSubtitle>
            <CardText>
                Computer/Information Systems Manager&bull;
                Computer Engineer&bull;
                Computer Programmer&bull;
                Computer Security Specialist&bull;
                Computer Support Specialist&bull;
                Computer Systems Analyst&bull;
                Data Communications Analyse&bull;
                IT Mechanic
            </CardText>
            </CardBody>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={14}>
        <Card>
            <Row>
                <Col>
                    <CardImg top width="100%" src={Animals} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={Animals} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={Animals} alt="cardn images cap"></CardImg>
                </Col>
            </Row>
            <CardBody>
            <CardTitle><h5>Agriculture, Animals and Natural Resources</h5></CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in activities involving the training, raising, feeding and caring for animals.</CardSubtitle>
            <CardText>
                Agricultural Engineer&bull;
                Agricultural Scientist&bull;
                Animal Trainer&bull;
                Chef&bull;
                Conservation Scientist&bull;
                Farm Equipment Mechanic&bull;
                Fish and Game Warden&bull;
                Forester&bull;
                Veterinarian&bull;
                Zoologist
            </CardText>
            </CardBody>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={15}>
        <Card >
            <Row>
                <Col>
                    <CardImg top width="100%" src={Industrial} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={Industrial} alt="cardn images cap"></CardImg>
                </Col>
                <Col>
                    <CardImg top width="100%" src={Industrial} alt="cardn images cap"></CardImg>
                </Col>
            </Row>
            <CardBody>
            <CardTitle><h5>Manufacturing (Mechanical/Industrial)</h5></CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Interest in applying mechanical principles to practical situations using machines, hand tools or techniques. / Interest in repetitive, organized activities in a factory or industrial setting.</CardSubtitle>
            <CardText>
                Chemical Engineer&bull;
                Forklift Operator&bull;
                Gas and Oil Plant Operator&bull;
                Jeweller&bull;
                Locksmith&bull;
                Metal/Plastic Processing Worker&bull;
                Office Machine Repairer&bull;
                Power Plant Operator&bull;
                Shoe and Leather Worker
                Welder
            </CardText>
            </CardBody>
        </Card>
      </TabPanel>
    </div>
  );
}
export default PractitionerCareers;

