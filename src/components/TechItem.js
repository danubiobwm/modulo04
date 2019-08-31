import React from 'react';
import Proptypes from 'prop-types';

function TechItem({ tech, onDelete }){
  return(
    <li >
    {tech}
    <button onClick={onDelete} type='button'>remover</button>
    </li>
  );
}
TechItem.defaultProps={
  tech: 'Oculto',
};

TechItem.defaultProps={
  tech:Proptypes.string, 
  onDelete:Proptypes.func.isRequired, 
};

export default TechItem;