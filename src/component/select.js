import React from 'react';
import data2 from '../component/data2';
import data from './data';

class select extends React.Component {
  constructor() {
    super();
    this.state = {
      cityops: [],
      townops: [],
    };
  }
  componentDidMount() {
    let cityops = [];
    let townops = [];
    for (let i = 0; i < data2.length; i++) {
      cityops.push(<option>{data2[i].城市}</option>);
    }
    for (let j = 0; j < data2[0].地區.length; j++) {
      townops.push(<option>{data2[0].地區[j]}</option>);
    }
    this.setState({ cityops: cityops, townops: townops });
  }
  changeArea = e => {
    // console.log(e.target.value);
    let index = data2.findIndex(item => item.城市 === e.target.value);
    // console.log(index);
    // let cityops = [];
    let townops = [];

    for (let j = 0; j < data2[index].地區.length; j++) {
      townops.push(<option>{data2[index].地區[j]}</option>);
    }
    this.setState({ townops: townops });
  };

  render() {
    // console.log(data2);
    // let cityops = [];
    // let townops = [];

    // for (let i = 0; i < data2.length; i++) {
    //   cityops.push(<option>{data2[i].城市}</option>);

    //   for (let j = 0; j < data2[i].地區.length; j++) {
    //     townops.push(<option>{data2[i].地區[j]}</option>);
    //   }
    // }
    return (
      <>
        {/* <select id="city">
          {data2.map((item, index) => (
            <option key={index} value={item.城市}>
              {item.城市}
            </option>
          ))}
        </select> */}

        <select onChange={this.changeArea}>{this.state.cityops}</select>
        <select>{this.state.townops}</select>
      </>
    );
  }
}

export default select;
