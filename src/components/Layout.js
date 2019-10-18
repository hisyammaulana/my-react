import React from 'react';

// import { Container } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

export const Layout = (props) => (
    <Container>
        {props.children}
    </Container>
)