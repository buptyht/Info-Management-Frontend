import React, { Component, } from 'react';
import { PageTitle,Module } from '../../components';


class Gis extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }



  render() {

    return (
      <div>
        <PageTitle titles={['监测预警','GIS地图']} />
        <Module>
          <p>设备欣喜</p>
        </Module>
      </div>

    );
  }
}

export default Gis;

