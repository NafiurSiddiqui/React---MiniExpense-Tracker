// function Card(props) {
//  const customClass = 'card ' + props.className;
//  return <div className={customClass}>{props.children}</div>;
// }

// export default Card;

import React from 'react';

function Card(props) {
 const classes = 'card ' + props.className;
 return <div className={classes}>{props.children}</div>;
}

export default Card;
