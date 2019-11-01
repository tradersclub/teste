import React, { Component } from 'react';
import '../../assets/styles/Shared.css';
import logo from '../../assets/img/logo-tc.png';

export default class App extends Component {

    render() {
        return (
            <div style={{
                display: 'flex', height: '100vh'
            }}>
                <section class='menu'>
                    <div class='logo-container'>
                        <img src={logo} alt="Logo" />
                    </div>
                </section>
                <div style={{ flex: 8, backgroundColor: 'yellow' }}></div>
            </div>
        );
    }
}