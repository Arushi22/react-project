import React from 'react';
import { useRouteError } from 'react-router-dom';

function Error() {
    const err = useRouteError();
    console.log(err);

  return (
    <div>
        <h1>sopmethong went wrong</h1>
        <h3>{err.status} : {err.statusText}</h3>
    </div>
  )
}

export default Error