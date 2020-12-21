import Album from './Components/Album'
import Header from './Components/Header'
import Grids from "./Components/Grids"
import Paper from '@material-ui/core/Paper'
import { makeStyles, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container'

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  container: {
    // background: "red",
    marginTop: 10
  }
}));

function App() {
  const classes = useStyle();
  return (
    <div className="App" className={classes.root} >
      <Header></Header>
      <Container maxWidth="md" className={classes.container}>
        <Grids></Grids>
      </Container>

    </div>
  );
}

export default App;
