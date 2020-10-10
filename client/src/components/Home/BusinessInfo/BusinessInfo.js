import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10036, United States',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Contact us now',
        description: '+000 123 456789',
        icon: faPhone,
        background: 'primary'
    }
];
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center row">
            <div className="w-75 row">
                {
                    infosData.map(
                        info => <InfoCard info={info} />
                    )
                }
            </div>
        </section>
    );
};

export default BusinessInfo;