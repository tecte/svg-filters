import React from 'react';
import PropTypes from 'prop-types';

import deepClone from '../../helpers/deepClone';

import PrimitivePanel from '../PrimitivePanel';

import './Constructor.css';

const getResultsList = (primitives, index) => {
  return primitives.slice(0, index)
    .map(item => item.id);
};

const Contsructor = ({primitives}) => {
  return (
    <div className="Contsructor">
      &lt;filter id="#filter">
      <div className="Contsructor__container">
        {primitives.map((primitive, index) => {

          if (primitive.children && primitive.children.length > 0) {
            primitive = deepClone(primitive);

            primitive.children = primitive.children.map(item => {
              return (
                <div
                  key={item.id}
                  className="Contsructor__item">
                  <PrimitivePanel
                    parentId={primitive.id}
                    primitive={item}
                    resultsList={getResultsList(primitives, index)}
                  />
                </div>
              );
            });
          }

          return (
            <div
              key={primitive.id}
              className="Contsructor__item">
              <PrimitivePanel
                primitive={primitive}
                resultsList={getResultsList(primitives, index)}
              />
            </div>
          );
        })}
      </div>

      &lt;/filter>
    </div>
  );
};

export default Contsructor;

Contsructor.propTypes = {
  primitives: PropTypes.array.isRequired
};