import React from 'react';
import Avatar from './Avatar';
export default function Stories() {
  const userdata = [
    {
      firstname: 'manjunath',
      lastname: 'kalburgi',
    },
    {
      firstname: 'Suman',
      lastname: 'Habib',
    },
  ];
  return (
    <div>
      <div>
        {userdata.map((item) => {
          return <Avatar user={item} />;
        })}
      </div>
    </div>
  );
}
