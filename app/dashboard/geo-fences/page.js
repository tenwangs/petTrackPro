// 'use client';
// import React, { useState, useEffect } from 'react';
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Circle,
//   useMapEvents,
// } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import dynamic from 'next/dynamic';
// import { icon } from 'leaflet';

// const Icon = icon({
//   iconUrl: '../../../assets/images/marker.png',
//   iconSize: [32, 32],
// });

// const Map = () => {
//   const [coordinatesList, setCoordinatesList] = useState([
//     {
//       posLat: '27.5142',
//       posLong: '90.4336',
//       dzongkhag: 'Thimphu',
//       gewog: 'Kawang',
//       registeredAt: new Date('2024-04-30'),
//     },
//   ]);
//   const [fetching, setFetching] = useState(false);
//   const [boundaryCoordinates, setBoundaryCoordinates] = useState(null);
//   const [boundaryRadius, setBoundaryRadius] = useState(5000); // Initial radius

//   useEffect(() => {
//     setTimeout(() => {
//       setFetching(false);
//     }, 5000);
//   }, []);

//   const handleMapClick = (e) => {
//     const { lat, lng } = e.latlng;
//     setBoundaryCoordinates({ lat, lng });
//   };

//   const handleBoundaryClick = (e) => {
//     // Prevent default behavior to keep the map static
//     e.originalEvent.preventDefault();

//     setBoundaryRadius(boundaryRadius + 1000); // Increase radius by 1000 meters
//   };

//   return (
//     <>
//       {fetching ? (
//         <div className='flex flex-col justify-center items-center lg:h-[65vh]'>
//           <h1>Loading...</h1>
//         </div>
//       ) : coordinatesList.length ? (
//         <MapContainer
//           center={[27.5142, 90.4336]}
//           zoom={9}
//           preferCanvas={true}
//           style={{ width: '100%', height: '600px', position: 'relative' }}
//         >
//           <TileLayer
//             url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           />
//           <Markers coordinatesList={coordinatesList} />
//           <BoundaryCircle
//             boundaryCoordinates={boundaryCoordinates}
//             boundaryRadius={boundaryRadius}
//             onClick={handleBoundaryClick}
//           />
//           <MapClickHandler setBoundaryCoordinates={setBoundaryCoordinates} />
//         </MapContainer>
//       ) : (
//         <div className='flex flex-col items-center justify-center min-h-[50vh]'>
//           <p>Location not found</p>
//           <p className='text-muted-foreground'>No pets with location found</p>
//         </div>
//       )}
//     </>
//   );
// };

// const Markers = ({ coordinatesList }) => {
//   return coordinatesList.map((user, index) => (
//     <Marker
//       key={index}
//       position={[parseFloat(user.posLat), parseFloat(user.posLong)]}
//       icon={Icon}
//     />
//   ));
// };

// const BoundaryCircle = ({ boundaryCoordinates, boundaryRadius, onClick }) => {
//   return (
//     boundaryCoordinates && (
//       <Circle
//         center={[boundaryCoordinates.lat, boundaryCoordinates.lng]}
//         radius={boundaryRadius}
//         pathOptions={{ color: 'blue' }}
//         eventHandlers={{ click: onClick }}
//       />
//     )
//   );
// };

// const MapClickHandler = ({ setBoundaryCoordinates }) => {
//   const map = useMapEvents({
//     click: (e) => {
//       const { lat, lng } = e.latlng;
//       setBoundaryCoordinates({ lat, lng });
//     },
//   });

//   return null;
// };

// export default dynamic(() => Promise.resolve(Map), { ssr: false });

'use client';
import React, { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Circle,
  useMapEvents,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';
import { icon } from 'leaflet';

const Icon = icon({
  iconUrl: '../../../assets/images/marker.png',
  iconSize: [32, 32],
});

const Map = () => {
  const [coordinatesList, setCoordinatesList] = useState([
    {
      posLat: '27.5142',
      posLong: '90.4336',
      dzongkhag: 'Thimphu',
      gewog: 'Kawang',
      registeredAt: new Date('2024-04-30'),
    },
  ]);
  const [fetching, setFetching] = useState(false);
  const [boundaryCoordinates, setBoundaryCoordinates] = useState(null);
  const [boundaryRadius, setBoundaryRadius] = useState(5000); // Initial radius

  useEffect(() => {
    setTimeout(() => {
      setFetching(false);
    }, 5000);
  }, []);

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    setBoundaryCoordinates({ lat, lng });
  };

  const handleBoundaryClick = (e) => {
    // Prevent default behavior to keep the map static
    e.originalEvent.preventDefault();

    setBoundaryRadius(boundaryRadius + 1000); // Increase radius by 1000 meters
  };

  const checkPetLocation = (user) => {
    if (!boundaryCoordinates) return false;

    const userPosition = [parseFloat(user.posLat), parseFloat(user.posLong)];
    const distance = getDistance(userPosition, [
      boundaryCoordinates.lat,
      boundaryCoordinates.lng,
    ]);

    return distance > boundaryRadius;
  };

  const getDistance = (latlng1, latlng2) => {
    const lat1 = latlng1[0];
    const lon1 = latlng1[1];
    const lat2 = latlng2[0];
    const lon2 = latlng2[1];

    const R = 6371e3; // metres
    const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c; // in metres
    return d;
  };

  return (
    <>
      {fetching ? (
        <div className='flex flex-col justify-center items-center lg:h-[65vh]'>
          <h1>Loading...</h1>
        </div>
      ) : coordinatesList.length ? (
        <>
     
        <MapContainer 
        className='border-[1px] rounded-xl border-[#ccc] h-full'
          center={[27.5142, 90.4336]}
          zoom={9}
          preferCanvas={true}
          style={{ width: '50%',height:"950px", position: 'relative' }}
        >
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Markers coordinatesList={coordinatesList} />
          <BoundaryCircle
            boundaryCoordinates={boundaryCoordinates}
            boundaryRadius={boundaryRadius}
            onClick={handleBoundaryClick}
          />
          <MapClickHandler setBoundaryCoordinates={setBoundaryCoordinates} />
          {coordinatesList.map(
            (user, index) =>
              checkPetLocation(user) && <Alert key={index} user={user} />
          )}
        </MapContainer>
        </>
      ) : (
        <div className='flex flex-col items-center justify-center min-h-[50vh]'>
          <p>Location not found</p>
          <p className='text-muted-foreground'>No pets with location found</p>
        </div>
      )}
      
    </>
  );
};

const Markers = ({ coordinatesList }) => {
  return coordinatesList.map((user, index) => (
    <Marker
      key={index}
      position={[parseFloat(user.posLat), parseFloat(user.posLong)]}
      icon={Icon}
    />
  ));
};

const BoundaryCircle = ({ boundaryCoordinates, boundaryRadius, onClick }) => {
  return (
    boundaryCoordinates && (
      <Circle
        center={[boundaryCoordinates.lat, boundaryCoordinates.lng]}
        radius={boundaryRadius}
        pathOptions={{ color: 'blue' }}
        eventHandlers={{ click: onClick }}
      />
    )
  );
};

const MapClickHandler = ({ setBoundaryCoordinates }) => {
  const map = useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      setBoundaryCoordinates({ lat, lng });
    },
  });

  return null;
};

const Alert = ({ user }) => {
  return (
    <div className='absolute top-0 left-0 m-4 p-4 bg-red-500 text-white'>
      <p>{`${user.dzongkhag}, ${user.gewog}`}</p>
      <p>{`Pet registered on: ${user.registeredAt}`}</p>
      <p>Alert: Pet is outside the boundaries!</p>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Map), { ssr: false });
