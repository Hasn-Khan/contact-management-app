import React from 'react';
import Map from './Map';
import { useCountryData } from '../hooks/useCovidData';

const Dashboard: React.FC = () => {
  const { data: countryData, isLoading, error } = useCountryData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <h1>Dashboard</h1>
      <Map countries={countryData} />
    </div>
  );
};

export default Dashboard;
