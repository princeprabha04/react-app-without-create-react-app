import React from 'react';

import {ReactSVG}  from 'react-svg'
function MySVGIcon(props) {
  const { iconName } = props;
  return (
    <ReactSVG  src={require(`./assets/${iconName}.svg`)}  />
  );
}

export default MySVGIcon;
