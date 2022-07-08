import React from 'react';
import Name from './subComponents/Name';
import Analytics from './Analytics';
import Energy from './subComponents/Energy';
//import useFetch from '../useFetch';


const StatsUser = (props) => {

 

 // console.log(props.data);
  return (
    <div className="container-user">
      <Name data={props.data} />
      
      <div className="analyze">
        <Analytics data={props.data} />
        <Energy data={props.data} />
      </div>
    </div>
  );
};

export default StatsUser;