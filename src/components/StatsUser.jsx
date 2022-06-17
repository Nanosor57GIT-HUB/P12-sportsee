import React from 'react';
import Name from './subComponents/Name';
import Analytics from './subComponents/Analytics';
import Energy from './subComponents/Energy';


const StatsUser = () => {


    return (
      <div className="container-user">
        <Name />

        <div className="analyze">
          <Analytics />
          <Energy  />
        </div>
      </div>
    );
};

export default StatsUser;

//http://localhost:3000/user/${userId}
//http://localhost:3000/user/${userId}/activity
//http://localhost:3000/user/${userId}/average-sessions
//http://localhost:3000/user/${userId}/performance