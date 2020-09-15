import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DashboardList from './Constants';
import DashCard from './DashCard';

export default function Dashboard() {
  const useStyles = makeStyles((theme) => ({
    cardContainer: {
      display: 'grid',
      'grid-template-columns': 'repeat(auto-fit, minmax(250px, 1fr))',
      'grid-gap': '20px',
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      {DashboardList.map((dashCardObj) => (
        <DashCard key={dashCardObj.id} {...dashCardObj} />
      ))}
    </div>
  );
}
