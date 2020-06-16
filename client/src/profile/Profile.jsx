import React, { useState } from 'react';

import MovementList from '../shared/MovementList.jsx';

import { fakeMovements, fakeUsers } from '../services/fakeData';

const Profile = () => {
  const [user, setUser] = useState(fakeUsers[0]);
  // track states of leader and follower lists

  return (
    <div>
      <div className="lg:flex bg-gray-200 justify-between">
        <img className="flex-col object-contain h-full w-48" src={user.imageUrl} alt={user.username} />
        <div className="">
          <p className="">User bio:</p>
          <p className="">{user.bio}</p>
        </div>
      </div>

      <div>
        <button>Start a Movement</button>
        <button>Join a Movement</button>
      </div>
      <div>
        <h1>Leader of These Movements:</h1>
        <MovementList />
      </div>
      <div>
        <h1>Member of These Movements:</h1>
        <MovementList />
      </div>
    </div>
  );
};

export default Profile;

/* Tailwind Card Example from Docs
<div className="max-w-sm w-full lg:max-w-full lg:flex">
<div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={cardImageStyle} title={name} />
<div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
  <div className="mb-8">
    <p className="text-sm text-gray-600 flex items-center">{location}</p>
    <div className="text-gray-900 font-bold text-xl mb-2">{name}</div>
    <p className="text-gray-700 text-base">{description}</p>
  </div>
  <div className="flex items-center">
    <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar" />
    <div className="text-sm">
      <p className="text-gray-900 leading-none">Jonathan</p>
      <p className="text-gray-600">Aug 18</p>
    </div>
  </div>
</div>
</div>
*/
