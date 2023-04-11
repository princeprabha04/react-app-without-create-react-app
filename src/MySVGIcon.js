import React from 'react';

import {ReactSVG}  from 'react-svg'
function MySVGIcon(props) {
  const { iconName,onClick } = props;
  return (
    <ReactSVG  src={require(`./assets/${iconName}.svg`)} onClick={onClick} />
  );
}

export default MySVGIcon;
