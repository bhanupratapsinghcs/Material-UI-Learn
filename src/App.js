import Album from './Components/Album'
import Header from './Components/Header'
import Grids from "./Components/Grids"
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container'

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
}));

function App() {
  const classes = useStyle();
  return (
    <div className="App" className={classes.root} >
      <Header></Header>
      <Container maxWidth="md">
        <Grids></Grids>
      </Container>

    </div>
  );
}

export default App;
