import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Services from './components/Services'
import Practitioners from './components/Practitioners';
import Learners from './components/Learners'
import LearnerDashboard from './components/AuthenticatedLearner/LearnerDashboard';
import './custom.css'
import AboutUs from './components/AboutUs';

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/Practitioners' component={Practitioners} />
        <Route path='/Learners' component={Learners} />
        <Route path='/Services' component={Services} />
        <Route path='/AboutUs' component={AboutUs} />
        <Route path='/LearnerDashboard' component={LearnerDashboard} />
    </Layout>
);