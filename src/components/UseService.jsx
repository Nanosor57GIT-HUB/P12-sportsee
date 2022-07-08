import React from 'react';
import useFetch from './useFetch';

const UseService = () => {

 const {userId} = 12
 
    const { data: user, error, isLoading } = useFetch(
      `http://localhost:3000/user/${userId}`
    );
    console.log(user);

       const { data: performance } = useFetch(
         `http://localhost:3000/user/${userId}/performance`
       );
       console.log(performance);

          const { data: activity } = useFetch(
            `http://localhost:3000/user/${userId}/activity`
          );
          console.log(activity);

             const { data: session } = useFetch(
               `http://localhost:3000/user/${userId}/average-sessions`
             );
             console.log(session);
  
    return (
      <div>
        {isLoading && <div className="loading">Chargement en cours ...</div>}
        {error && (
          <div className="error">
            Désolé, une erreur est survenue pendant le chargement ...
          </div>
        )}
      </div>
    );
};

export default UseService;

//http://localhost:3000/user/${userId}
//http://localhost:3000/user/${userId}/activity
//http://localhost:3000/user/${userId}/average-sessions
//http://localhost:3000/user/${userId}/performance