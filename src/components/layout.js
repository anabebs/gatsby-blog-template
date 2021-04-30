import React from 'react';
import { Global, css } from '@emotion/core';
import Header from './header';
import Helmet from 'react-helmet';
import useSiteMetaData from '../hooks/useSiteMetaData';
import Hero from './hero';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetaData();
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }
          * + * {
            margin-top: 1rem;
          }
          html,
          body {
            margin: 0;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, 'SegoeUI', Roboto,
              Helvetica, Arial, sans-serif;
            font-size: 18px;
            line-height: 1.4;

            > div {
              margin-top: 0;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: #222;
              line-height: 1.1;

              + * {
                margin-top: 0.5rem;
              }
            }

            strong {
              color: #222;
            }

            li {
              margin-top: 0.25rem;
            }
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main
        css={css`
          margin: 2rem auto 4rem;
          max-width: 90vw;
          width: 900px;
        `}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;