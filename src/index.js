import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import AuraApp from './AuraApp';

ReactGA.initialize('UA-139650327-1');

ReactDOM.render(<AuraApp />, document.getElementById('root'));
