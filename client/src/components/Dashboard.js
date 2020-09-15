import React from 'react';
import DashboardList from './Constants';
import DashCard from './DashCard';

import './dashBoard.css';

export default function Dashboard() {
  return (
    <div className="dashBoard">
      {DashboardList.map((dashCardObj) => (
        <DashCard key={dashCardObj.id} {...dashCardObj} />
      ))}
    </div>
  );
}
