import React, { Component } from 'react';
import ModuleBar from '../components/ModuleBar';
import Header from '../components/Header';

export default class Lesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: '/assets/videos/aula02.mp4',
    };
  }

  render() {
    const { uri } = this.state;
    return (
      <div>
        <Header />
        <ModuleBar />
        <div className="videoaula">
          <video width="720" height="410" controls="controls" src={uri}>
            <track kind="captions" />
          </video>
        </div>
      </div>
    );
  }
}
