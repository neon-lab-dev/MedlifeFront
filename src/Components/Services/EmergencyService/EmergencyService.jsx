import React, { useEffect } from 'react';
import Navbar from '../../Navbar';
import EmergencyServiceHero from './EmergencyServiceHero';
import EmergencyType from './EmergencyType';
import EmergencyProcedures from './EmergencyProcedures';
import AmbulanceService from './AmbulanceService';
import Footer from '../../Footer';
import DiagnosticCenter from './DiagnosticCenter';
import LabTest from './LabTest';
import { Helmet } from 'react-helmet-async';
import ReactGA from 'react-ga';

const EmergencyService = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
      })
    return (
        <div>
            <Helmet>
        <title>Medlife Easy | Service</title>
      </Helmet>
            <Navbar></Navbar>
      <EmergencyServiceHero></EmergencyServiceHero>
      <EmergencyType></EmergencyType>
      <EmergencyProcedures></EmergencyProcedures>
      <AmbulanceService></AmbulanceService>
      <DiagnosticCenter></DiagnosticCenter>
      <LabTest></LabTest>
      <Footer></Footer>
        </div>
    );
};

export default EmergencyService;