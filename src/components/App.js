import React from 'react';
import PropTypes from 'prop-types';
import Items from './items/Items';


const App = (state) => {
  return(
  <div >
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
    <Items />
  </div>)
}


App.propTypes ={
  state:PropTypes.object.isRequired
}




export default App;