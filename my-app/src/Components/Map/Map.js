import React from 'react';
import Preloader from '../Preloader/Preloader';

export default function Map(props) {
  return (
    <>
      <div className="map">
        {props.isLoading ? (
          <Preloader />
        ) : (
          <div className="map__img">{props.isMap}</div>
        )}
      </div>
    </>
  );
}
