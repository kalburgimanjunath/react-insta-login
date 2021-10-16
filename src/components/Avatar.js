import React from 'react';
export default function Avatar({ user }) {
  // console.log(user);
  return (
    <div>
      <div className="avatar">
        <div className="d-flex justify-content-center h-100">
          <div className="image_outer_container">
            <div className="green_icon"></div>
            <div className="image_inner_container">
              <img src="https://i.pinimg.com/originals/43/96/61/439661dcc0d410d476d6d421b1812540.jpg" />
            </div>
          </div>
          <div className="profile-title ">
            <a href="#">
              {user.firstname} {user.lastname}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
