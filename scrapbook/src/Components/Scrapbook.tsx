import React, { useState } from 'react';
import FlipPage from 'react-flip-page';
import '../Assets/scss/scrapbook.scss';
import ChatStats from './ChatStats';

const Scrapbook: React.FC = () => {
  return (
    <div className="scrapbook">
      <h1>Anniversary Scrapbook</h1>
      <FlipPage
        orientation="horizontal"
        className="flip-book"
        showSwipeHint
        uncutPages
      >
        <div className="page">
          <h2>Welcome to Our Scrapbook</h2>
          <p>Here’s a glimpse of our Discord chat history!</p>
        </div>
        <div className="page">
          <ChatStats />
        </div>
        <div className="page">
          <h2>Looking Forward...</h2>
          <p>Here's to many more conversations and memories!</p>
        </div>
      </FlipPage>
    </div>
  );
};

export default Scrapbook;