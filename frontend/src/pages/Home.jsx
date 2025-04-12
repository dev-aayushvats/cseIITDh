import React from 'react';

const Home = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
            <div style={{ backgroundColor: '#004080', color: 'white', padding: '10px 0' }}>
                <h1>Welcome to IIT Dh Academic Portal</h1>
            </div>
            <div style={{ marginTop: '20px' }}>
                <p>Your gateway to academic resources and information.</p>
                <p>Explore courses, faculty, and more.</p>
            </div>
            <div style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
                © {new Date().getFullYear()} IIT Dh. All rights reserved.
            </div>
        </div>
    );
};

export default Home;
