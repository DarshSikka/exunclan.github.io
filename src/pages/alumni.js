import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container';
import Card from '../components/card';
import Navbar from '../components/navbar';

import styles from './alumni.module.css';

const Grid = ({ children }) => <div className={styles.grid}>{children}</div>;
Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

const AlumniPage = ({ data }) => (
  <Layout>
    <SEO title="Alumni" />

    <Container>
      <Navbar />
      <div
        style={{
          padding: '10rem 0',
        }}
      >
        <h1>Alumni</h1>
        <p>
          Exun has an immense, well-connected alumni network that provides
          mentorship and support to its members.
        </p>
        {data.allAlumniJson.nodes.map(batch => (
          <div key={batch.year}>
            <h2 style={{ marginTop: '5rem' }}>
              Batch of
              {` ${batch.year}`}
            </h2>
            <Grid>
              {batch.alumni.map(alum => (
                <Card key={alum.name} className={styles.card}>
                  <div
                    style={{
                      fontWeight: '600',
                      fontSize: '1.1em',
                    }}
                  >
                    {alum.name}
                  </div>
                  <div
                    style={{
                      fontSize: '0.9em',
                    }}
                  >
                    {alum.role}
                  </div>
                </Card>
              ))}
            </Grid>
          </div>
        ))}
      </div>
    </Container>
  </Layout>
);
AlumniPage.propTypes = {
  data: PropTypes.shape({
    allAlumniJson: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }).isRequired,
};

export default AlumniPage;

export const query = graphql`
  query AlumniQuery {
    allAlumniJson {
      nodes {
        year
        alumni {
          name
          role
        }
      }
    }
  }
`;
