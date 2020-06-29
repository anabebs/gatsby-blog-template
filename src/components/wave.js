import React, { useState } from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const Wave = () => {
  const [waves, setWaves] = useState(0);
  const label = `${waves} ${waves === 1 ? 'wave' : 'waves'}`;
  return (
    <div>
      <button
        css={css`
          background: orange;
          border: none;
          color: white;
          font-size: 1.25rem;
        `}
        onClick={() => setWaves(waves + 1)}
      >
        {label}
      </button>
      <br />
      <Link to="/">&larr; back to home</Link>
    </div>
  );
};

export default Wave;
