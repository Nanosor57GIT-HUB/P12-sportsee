import React from 'react';

import Name from './stats/subComponents/Name';
import Energy from './stats/subComponents/Energy';
import AnalyzesTemplate from './stats/subComponents/analyzes/AnalyzesTemplate'



const StatsUser = (props) => {

 
  console.log(props.data);

    return (
      
      <div className="container-user">
        
      <Name data={props.data} />
        <div className="analyze">
       <AnalyzesTemplate data={props.data} />
          <Energy data={props.data} />
        </div>
      </div>
    );
};

export default StatsUser;