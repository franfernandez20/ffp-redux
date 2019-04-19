import React from 'react'

class Tester extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.fetchData2();
  }

  fetchData() {
    fetch('https://gameinfo.albiononline.com/api/gameinfo/guildmatches/rLhvcvtkSJOO3rifLT2-Iw')
      .then(e => console.log(e));
  }

  fetchData2() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'http://catfacts-api.appspot.com/api/facts?number=99'
    fetch(proxyUrl + targetUrl)
      .then(blob => blob.json())
      .then(data => {
        console.table(data);
        // document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
        // return data;
      })
      .catch(e => {
        console.log(e);
        return e;
      });
  }

  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Tester;