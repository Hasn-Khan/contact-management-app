import { useQuery, UseQueryOptions } from '@tanstack/react-query';

const fetchGlobalData = async (): Promise<any> => {
  const response = await fetch('https://disease.sh/v3/covid-19/all');
  if (!response.ok) {
    throw new Error('Failed to fetch global data');
  }
  return response.json();
};

const fetchCountryData = async (): Promise<any> => {
  const response = await fetch('https://disease.sh/v3/covid-19/countries');
  if (!response.ok) {
    throw new Error('Failed to fetch country data');
  }
  return response.json();
};

const fetchHistoricalData = async (): Promise<any> => {
  const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  if (!response.ok) {
    throw new Error('Failed to fetch historical data');
  }
  return response.json();
};

export const useGlobalData = () => {
  const options: UseQueryOptions<any, Error> = {
    queryKey: ['globalData'],
    queryFn: fetchGlobalData,
  };

  return useQuery(options);
};

export const useCountryData = () => {
  const options: UseQueryOptions<any, Error> = {
    queryKey: ['countryData'],
    queryFn: fetchCountryData,
  };

  return useQuery(options);
};

export const useHistoricalData = () => {
  const options: UseQueryOptions<any, Error> = {
    queryKey: ['historicalData'],
    queryFn: fetchHistoricalData,
  };

  return useQuery(options);
};
