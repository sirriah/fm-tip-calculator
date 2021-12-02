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
      <header>
        <h1 className={classes.srOnly}>Splitter</h1>
        <p className={classes.heading1} aria-hidden="true">
          Spli
          <br />
          tter
        </p>
      </header>
      <main>
        <Card className="calculator">
          <Form />
        </Card>
      </main>
    </div>
  );
}

export default App;
