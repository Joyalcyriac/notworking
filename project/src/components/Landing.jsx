import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './landing.css';
import { Button, Card, CardHeader, CardContent, Typography } from '@mui/material';

const Landing = () => {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3005/view")
      .then(response => {
        setWorkers(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleContact = (worker) => {
    console.log(`Contact ${worker.name}`);
    // Implement your logic for handling contact here
  };

  const renderWorkers = () => {
    return workers.map((worker) => (
      <Card className="cards" key={worker._id} variant="outlined" style={{ marginTop: '10px', marginBottom: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', width: '300px', marginLeft: '10px', borderRadius: '6%' }}>
        <img
          src={`data:image/jpeg;base64,${Buffer.from(worker.image1.data).toString('base64')}`}
          style={{ borderRadius: '50%', objectFit: 'cover', width: '100px', height: '100px', marginTop: '10px', marginLeft: '10px' }}
          alt="Worker"
        />
        <CardHeader
          title={worker.name}
          subheader={worker.job}
        />
        <CardContent>
          <Typography variant="body1">
            Phone: {worker.phone}
          </Typography>
          <Typography variant="body1">
            Experience: {worker.experience}
          </Typography>
          <Typography variant="body1">
            Location: {worker.location}
          </Typography>
        </CardContent>
        <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" onClick={() => handleContact(worker)}>Contact</Button>
        </CardContent>
      </Card>
    ));
  };

  return (
    <>
      <div className='back'>
        <h1>Everyday Experts - Your Skilled Daily Worker Hub</h1>
        <p>
          <b>Discover skilled daily workers for all your home and maintenance needs.</b><br />
          From carpentry to cleaning, our platform connects you with reliable professionals ready to tackle any task.<br />
          Browse our diverse selection and get your projects done hassle-free with Everyday Experts.
        </p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {renderWorkers()}
      </div>
    </>
  );
};

export default Landing;
