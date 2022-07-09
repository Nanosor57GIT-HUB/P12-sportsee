import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './service/useFetch';

const UseService = () => {
  // const {userId} = 12
  const { userId } = useParams();

  const {
    data: user,
    // error,
    // isLoading,
  } = useFetch(`http://localhost:3000/user/${userId}`);
  console.log(user);
  // console.log(user.data.keyData);
  
//  const test = user.data.keyData
//  console.log(test);

  const { data: performance } = useFetch(
    `http://localhost:3000/user/${userId}/performance`
  );
  console.log(performance);
 // console.log(performance.data.kind);


  const { data: activity } = useFetch(
    `http://localhost:3000/user/${userId}/activity`
  );
  console.log(activity);
 //console.log(activity.data.sessions[1]);

  const { data: session } = useFetch(
    `http://localhost:3000/user/${userId}/average-sessions`
  );
  console.log(session);
//  console.log(session.data.sessions[0]);

  return (
    <div>
      {/* {isLoading && <div className="loading">Chargement en cours ...</div>}
      {error && (
        <div className="error">
          Désolé, une erreur est survenue pendant le chargement ...
        </div>
      )} */}
    </div>
  );
};;

export default UseService;

//http://localhost:3000/user/${userId}
//http://localhost:3000/user/${userId}/activity
//http://localhost:3000/user/${userId}/average-sessions
//http://localhost:3000/user/${userId}/performance