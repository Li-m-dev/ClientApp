import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function RegisterConfirmation () {
        return (
            <div className="homeContainer">
                <div className="homeWelcomeContent">
                    <h1>
                        Email Sent
                    </h1>
                    <p> Please check your email to verify your account.</p>
                </div>
            </div>
        )
}