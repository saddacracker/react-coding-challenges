import React, { useState, Component } from 'react';
import RocketCore from './RocketCore';

// Wrapping FunctionalRocket in memo prevents re-renders. 
export const FunctionalRocket = React.memo(function FunctionalRocket() {
  const [initialLaunchTime] = useState(Date.now());

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
});

export class ClassRocket extends Component {
  constructor() {
    super();

    this.state = {
      initialLaunchTime: Date.now()
    };
  }

  // Prevents multiple renders (you can add logic to allow)
  shouldComponentUpdate(nextProps, nextState){
      return false;
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}
