import React from 'react';
import Container from 'react-bootstrap/Container';

import './App.css';

function App() {
    return (
        <body>

            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                crossOrigin="anonymous"
            />

            <Container className="row-cols-12">
                <Container className="col-sm-2"/>
                <Container className="col-sm-8">
                    <div className="header">
                        <img src="https://data.worldbank.org/assets/images/logo-wb-header-en.svg" alt="logo" width="100%"/>
                    </div>
                    <hr/>
                    <div className="content">
                        <h1 className="header">World Bank Quiz</h1>
                        Welcome to the World Bank Quiz!&nbsp;
                        <span role="img" aria-label="tada">🎉</span>
                    </div>
                </Container>
                <Container className="col-sm-2"/>
            </Container>

        </body>
    );
}

export default App;
