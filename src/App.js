import Card from './components/UI/Card';
import Form from './components/Form/Form';

import classes from './App.module.css';


function App() {
  return (
    <div className={classes.App}>
      <div aria-label="splitter">
        <h1 className={classes.heading1} aria-hidden="true">Spli<br/>tter</h1>
      </div>
      <Card className="calculator">
      <Form />
      </Card>
    </div>
  );
}

export default App;
