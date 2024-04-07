import React from 'react';
import Navbar from '../Navbar';
import BookAmbulanceHero from './BookAmbulanceHero';
import { Link } from 'react-router-dom';
import AmbulanceBookingForm from './AmbulanceBookingForm';

const BookAmbulance = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <BookAmbulanceHero></BookAmbulanceHero>
            <AmbulanceBookingForm></AmbulanceBookingForm>
        </div>
    );
};

export default BookAmbulance;