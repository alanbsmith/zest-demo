import React, { Component } from 'react';
import Zest from 'react-zest';
import Demo from './Demo';
import PulseDemo from './PulseDemo';

import '../assets/css/index.scss';


class App extends Component {
  render() {
    return (
      <div className="content">
        <div className="header">
          <div className="header__logo"></div>
          <div className="header__title">Zest</div>
        </div>
        <div className="body">
          <div className="section">
            <div className="section__header">React Zest</div>
            <div className="section__text">
              This library was created to provide helpful micro-animations that are simple to add to React components and work great out of the box.
            </div>
          </div>
          <div className="section">
            <div className="section__header">Getting Started</div>
            <div className="section__subheader">
              INSTALL THE MODULE
            </div>
            <div className="section__code_block">
              $ npm install —save react-zest
            </div>
            or
            <div className="section__code_block">
              $ yarn add react-zest
            </div>
            <div className="section__subheader">
              IMPORT THE WRAPPER
            </div>
            <div className="section__code_block">
              <pre>
              {`import React, { Component, PropTypes } from ‘react’;`}{'\n'}
              {`...`}{'\n'}
              <span className="highlight">{`import Zest from ‘react-zest’`}</span>{'\n'}
              {'\n'}
              {'\n'}
              {`class MyComponent extends Component {`}{'\n'}
              {}  {"..."}{'\n'}
              {`}`}{'\n'}
              </pre>
            </div>
            <div className="section__subheader">
              WRAP YOUR COMPONENT
            </div>
            <div className="section__code_block">
              <pre>
                {`...`}{'\n'}
                {`class MyComponent extends Component {`}{'\n'}
                {}  {`render() {`}{'\n'}
                {}    {`return ( `}{'\n'}
                {}      <span className="highlight">{`<Zest>`}</span>{'\n'}
                {}        {`<button>Click Here!</button> `}{'\n'}
                {}      <span className="highlight">{`</Zest>`}</span>{'\n'}
                {}    {`)`} {'\n'}
                {}  {`}`}{'\n'}
                {`}`}{'\n'}
              </pre>
            </div>
            <div className="section__subheader">
              PASS IN PROPS
            </div>
            <div className="section__code_block">
              <pre>
                ...{'\n'}
                {`render() {`}{'\n'}
                {}  {`return ( `}{'\n'}
                {}    {`<Zest`}{'\n'}
                {}      <span className="highlight">{`animationName=“wiggle”`}</span>{'\n'}
                {}      <span className="highlight">{`animationTrigger=“click”`}</span>{'\n'}
                {}      <span className="highlight">{`animationDuration={400}`}</span>{'\n'}
                {}    {`>`}{'\n'} 
                {}      {`<button>Click Here!</button> `}{'\n'}
                {}    {`</Zest>`}{'\n'}
                {}  {`);`}{'\n'}
                {`}`}{'\n'}
                {`...`}{'\n'}
            </pre>
            </div>
            <div className="section__subheader">
              RENDER AND ANIMATE!
            </div>
            <div className="section__text">
              <Zest
                animationName='wiggle'
                animationTrigger='click'
                animationDuration={400}
              >
                <button className="example-btn">Animate!</button>
              </Zest>
            </div>
          </div>
          <div className="section">
            <div className="section__header">Demo</div>
            <div className="section__text">
              We've added a little playground to toggle animations and triggers to help you get a feel for the animations. Have fun!
            </div>
            <Demo />
            <PulseDemo />
          </div>
        </div>
        <div className="footer">
          <ul className="footer__links">
            <li><a target="_blank" href="https://www.npmjs.com/package/react-zest" className="footer_link">View on npm</a></li>
            <li><a target="_blank" href="https://github.com/TheCognizantFoundry/react-zest/" className="footer_link">View the Repo</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
