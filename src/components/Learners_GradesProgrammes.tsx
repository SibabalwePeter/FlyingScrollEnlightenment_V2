import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const CustomizedAccordions =()=> {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Grade 9 Career Programme Activities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
            <li>Career Development Overview</li>
            <li>Complete a career assessment test</li>
            <li>Complete a labour market sorting tool</li>
            <li>Research career options</li>
            <li>Evaluate occupation and post-secondary education and school options, costs and subject choice</li>
            <li>Set personal, academic and career goals</li>
            <li>Establish experiential learning plans and action plans to achieve goals</li>
            <li>Make high school subject plan</li>
            <li>Career Counselling and Mentorship</li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Grade 10 Career Programme Activities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>In-depth self-reflection activity</li>
              <li>Identify work values and linked careers</li>
              <li>Focus deeper on occupations through research and analysis of options</li>
              <li>Update subject plans</li>
              <li>Revise goals, plans and experiential learning plans</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Grade 11 Career Programme Activities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>Complete assessment test and occupation sort to link preferences to occupations</li>
              <li>Conduct educational research and tertiary institution comparison</li>
              <li>Evaluate occupation and education options</li>
              <li>Revise personal, academic and career goals</li>
              <li>Update plans, accomplishment records</li>
              <li>Explore scholarships and other financial awards</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Grade 12 Career Programme Activities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>Learn about career anchors</li>
              <li>Learn about skills and accomplishments and identify occupations using preferred skills</li>
              <li>Consider Self-employment realities (optional)</li>
              <li>Complete in-depth occupation and education research and evaluation</li>
              <li>Explore scholarships and other financial awards</li>
              <li>Establish next step goals and post-secondary plans</li>
              <li>Create resume and cover letter, master job search skills</li>
              <li>Make financial plans</li>
              <li>Sure Tertiary institution admission</li>
              <li>Reflect upon learning and experiential learning</li>
            </ul>.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default CustomizedAccordions;