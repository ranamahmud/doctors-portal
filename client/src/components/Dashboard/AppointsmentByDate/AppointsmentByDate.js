import React from 'react';

const AppointsmentByDate = ({ appointments }) => {
    return (
        <div>
            <h1>Appointments: {appointments.length}</h1>
            {
                appointments.map(app => <li key={app._id}>{app.name}</li>)
            }
        </div>
    );
};

export default AppointsmentByDate;