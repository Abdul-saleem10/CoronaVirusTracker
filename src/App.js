import styles from './App.module.css';
import {fetchData} from './Api'
import {Card,Chart,CountryPicker} from './Component'
import React from 'react';
class App extends React.Component {
  state = {
    data: {},
    country : '',
  }
  
  async componentDidMount() {
    const featchdata = await fetchData();

    this.setState({ data:featchdata })
  }
 
  handleCountryChange = async (country) => {
    const featchdata = await fetchData(country);
    this.setState({ data: featchdata, country: country });
  }
 
  render() {
    const { data } = this.state
    return (
      <>
        <h1 style={{textAlign:'center'}}>Corona Virus Tracker</h1>
      <div className={styles.container}>
        <Card data={ this.state.data}/>
        <CountryPicker handleCountryChange={ this.handleCountryChange}/>
        <Chart data={data} country={this.state.country }/>
        </div>
        </>
    );
  }
}
export default App;
