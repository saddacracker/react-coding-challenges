import React, { useState } from 'react';
import { ClassRocket, FunctionalRocket } from './Rocket';
import '../styles/_launchpad.scss';

export default function LaunchPad() {
  const [rerenderCount, triggerRerender] = useState(0);

  setTimeout(() => { triggerRerender(rerenderCount + 1); }, 500);

  console.log('====================================');
  console.log('rerenderCount', rerenderCount);
  console.log('====================================');

  return (
    <div className="launchpad">
      <ClassRocket />
    </div>
  );
}
