import Card from "./components/UI/Card";
import Form from "./components/Form/Form";

import classes from "./App.module.css";
/*
App component
The headline is designed to be broken. I used the aria-label and aria-hidden for the screen readers
*/
function App() {
  return (
    <div className={classes.App}>
      <div aria-label="splitter">
        <h1 className={classes.heading1} aria-hidden="true">
          Spli
          <br />
          tter
        </h1>
      </div>
      <Card className="calculator">
        <Form />
      </Card>
    </div>
  );
}

export default App;
