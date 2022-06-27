import style from './App.module.css'
import Cards from './components/Cards/Cards';
import Charts from './components/Chart/Charts';
import Country from './components/Country/Country';
import {fetchData} from './api/index';
import React from 'react';

class App extends React.Component {
  state = {
    data: {},
  }
  async componentDidMount() {
    const dataCovid = await fetchData();
    this.setState({data:dataCovid});
  }
  render() 
  {
    const {data} = this.state;
    return (
    <div className={style.container}>
      <Cards data={data}/>
      <Charts/>
      <Country/>
    </div>
  );
  }
}

export default App;
