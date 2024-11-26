/*eslint-disable*/
import LazyLoad from 'react-lazy-load';

const LocationList = ({ locations }) => {
  return (
    <div className="location-list">
      {locations.map((location, index) => (
        <LazyLoad key={index} height={300} offset={100}>
          <div className="location">
            <h3>{location.name}</h3>
            <iframe
              src={`https://maps.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`}
              width="100%"
              height="200"
              allowFullScreen
              title={location.name}
            />
          </div>
        </LazyLoad>
      ))}
    </div>
  );
};

export default LocationList;
