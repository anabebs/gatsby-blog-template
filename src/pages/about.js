import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>about me</h1>
    <p>This is all about me</p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);
