import SearchResult from './Components/SearchResult'
import Header from './Components/Header'
// import Grids from "./Components/Grids"
// import Boxes from './Components/Boxes'
// import Button from './Components/Button'
import GridList from './Components/GridList'
import React, { useState } from 'react'
// import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container'

const useStyle = makeStyles((theme) => ({
  container: {
    // background: "red",
    marginTop: 10
  }
}));

function App() {
  const classes = useStyle();
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e);
  }
  console.log(value);
  return (
    <React.Fragment>
      <Header onChange={(v) => handleChange(v)} />
      <Container maxWidth="lg" className={classes.container}>
        {value ? <SearchResult value={value} /> : <GridList />}


        <br />
        {/* <Grids></Grids> */}
        {/* <Boxes></Boxes> */}
        {/* <Button /> */}
      </Container>
    </React.Fragment>
  );
}

export default App;
