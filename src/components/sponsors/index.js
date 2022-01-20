import React from 'react';

import Plaksha from './plaksha.png';
import WolframLogo from './wolfram.png';
import DevfolioLogo from './devfolio.png';
// import AthenaLogo from './athena.png';
import AOPSLogo from './aops.png';
import WwcDelhiLogo from './wwc.jpeg';
import TaskadeLogo from './taskade.png';
import Balsamiq from './balsamiq.png';
import Rosenfield from './rosenfield.png';
import Replit from './replit.png';
import styles from './sponsor.module.css';
import Cake from './interview-cake.svg';
import Codechef from './codechef.svg';
import StreamYard from './streamyard.png';
import Ndss from './ndss.png';
import Athena from './athena.png';
import DigitalIndia from './Digital_India_logo.png';

const logoStyles = {
  height: '150px',
  width: 'auto',
};

export default () => (
  <>
    <div
      style={{
        margin: '3em 0',
      }}
    >
      <div className={styles.sponsorAll}>
        <div className={styles.aboveComunity}>
          <a href="https://www.digitalindia.gov.in/" target="_blank" rel="nofollow" style={{ marginLeft: '35px' }}>
            <img alt="Digital India" src={DigitalIndia} style={logoStyles} />
          </a>
          <a
            href="https://www.athenaeducation.co.in/"
            target="_blank"
            rel="nofollow"
            style={{ marginLeft: '25%' }}
          >
            <img alt="Code chef" src={Athena} style={{ width: '20rem' }} />
          </a>
          <p style={{ textAlign: 'center' }}>Powered by Athena</p>
          <a href="https://plaksha.edu.in/" target="_blank" rel="nofollow">
            <img alt="Plaksha" src={Plaksha} style={logoStyles} />
          </a>
          <a href="https://www.codechef.com/" target="_blank" rel="nofollow">
            <img alt="Code chef" src={Codechef} style={logoStyles} />
          </a>
        </div>
        <div
          style={{
            fontSize: '30px',
            marginBottom: '30px',
            textAlign: 'center',
            marginTop: '30px',
          }}
        >
          Community Partners
        </div>
        <div
          style={{ marginTop: '1.5rem', marginLeft: 'auto' }}
          className={styles.sponsorAll}
        >
          <a href="https://balsamiq.com/" target="_blank" rel="nofollow">
            <img alt="balsamiq" src={Balsamiq} style={{ height: '100px' }} />
          </a>
          <a href="http://rosenfeldmedia.com/" target="_blank" rel="nofollow">
            <img
              alt="rosenfield"
              src={Rosenfield}
              style={{ height: '100px', marginLeft: '2rem' }}
            />
          </a>
        </div>
        <a href="https://replit.com/" target="_blank" rel="nofollow">
          <img
            alt="replit"
            src={Replit}
            style={{ height: '80px', marginTop: '1.5rem' }}
          />
        </a>
        <div style={{ marginTop: '2rem' }} className={styles.sponsorAll}>
          <a href="https://www.wolfram.com/language/" target="_blank" rel="nofollow">
            <img
              alt="Wolfram"
              src={WolframLogo}
              style={{ height: '80px', marginLeft: '2rem' }}
            />
          </a>
          <a href="https://artofproblemsolving.com/" target="_blank" rel="nofollow">
            <img
              alt="AOPS"
              src={AOPSLogo}
              style={{ height: '80px', marginLeft: '2rem' }}
            />
          </a>
          <a href="https://taskade.com/" target="_blank" rel="nofollow">
            <img
              alt="Taskade"
              src={TaskadeLogo}
              style={{ height: '80px', marginLeft: '2rem' }}
            />
          </a>
          <a href="https://www.interviewcake.com/" target="_blank" rel="nofollow">
            <img
              alt="Interview Cake"
              src={Cake}
              style={{ height: '80px', marginTop: '2rem' }}
            />
          </a>
          <a href="https://streamyard.com/" target="_blank" rel="nofollow">
            <img
              alt="Stream Yard"
              src={StreamYard}
              style={{ height: '80px', marginTop: '2rem' }}
            />
          </a>
          <a href="https://newdelhi.nss.org/" target="_blank" rel="nofollow">
            <img
              alt="ndss"
              src={Ndss}
              style={{ height: '80px', marginTop: '2rem' }}
            />
          </a>
        </div>
      </div>
      <div
        style={{
          maxWidth: '900px',
          margin: '30px auto',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      ></div>
    </div>
  </>
);
