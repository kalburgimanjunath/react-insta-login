import React, { Component, useState } from 'react';
import Avatar from './Avatar';
import PostItem from './PostItem';
export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [
        // {
        //   firstname: 'manjunath',
        //   lastname: 'kalburgi',
        //   location: 'Ravi nagar',
        //   city: 'hubli',
        //   country: 'india',
        //   post_image_url: 'https://via.placeholder.com/300/09f/fff.png',
        //   post_video_url: '',
        // },
        // {
        //   firstname: 'Suman',
        //   lastname: 'Habib',
        //   location: 'Ravi nagar',
        //   city: 'hubli',
        //   country: 'india',
        //   post_image_url: 'https://via.placeholder.com/300/09f/fff.png',
        //   post_video_url: '',
        // },
      ],
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  userdata = [
    {
      firstname: 'manjunath',
      lastname: 'kalburgi',
      location: 'Ravi nagar',
      city: 'hubli',
      country: 'india',
      post_image_url: 'https://via.placeholder.com/300/09f/fff.png',
      post_video_url: '',
    },
    {
      firstname: 'Suman',
      lastname: 'Habib',
      location: 'Ravi nagar',
      city: 'hubli',
      country: 'india',
      post_image_url: 'https://via.placeholder.com/300/09f/fff.png',
      post_video_url: '',
    },
  ];

  render() {
    const { error, isLoaded, items } = this.state;
    console.log(items);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      );
    }
    // return (
    //   <div>
    //     Post
    //     <Avatar user={this.userdata} />
    //     <div>Full Name</div>
    //     <div>Address,Location,City,Country</div>
    //     <PostItem user={this.userdata} />
    //   </div>
    // );
  }
}
