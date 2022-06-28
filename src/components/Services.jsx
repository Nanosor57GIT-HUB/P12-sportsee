import React from 'react';
import StatsUser from './StatsUser';
import AnalyzesTemplate from './stats/subComponents/analyzes/AnalyzesTemplate';
import UseFetch from './UseFetch';

const Services = () => {

     const userId = 12;
     
     const { data, error, isLoading } = UseFetch(
       `http://localhost:3000/user/${userId}`
     );

 const { data2 } = UseFetch(
   `http://localhost:3000/user/${userId}/activity`
 );

  const { data3 } = UseFetch(
    `http://localhost:3000/user/${userId}/average-sessions`
  );

   const { data4 } = UseFetch(
     `http://localhost:3000/user/${userId}/performance`
   );

    return (
      <div>
        {isLoading && <div className="loading">Chargement en cours ...</div>}
        {error && (
          <div className="error">
            Désolé, une erreur est survenue pendant le chargement ...
          </div>
        )}
        {data && <StatsUser data={data.data} />}
        {data4 && <AnalyzesTemplate data={data.data} />}
      </div>
    );
    

};

export default Services;
