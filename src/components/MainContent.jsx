// src/components/MainContent.jsx

import React from 'react';
import Card from './dashborad/Card'


const MainContent = () => {
  return (
    <main className="flex-1 p-4 overflow-x-hidden overflow-y-auto bg-gray-200">
    <Card/>
    </main>
  );
};

export default MainContent;
