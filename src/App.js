import React from "react";
import { Case, Switch } from "./components";

function App() {
  return (
    <Switch value="121">
      <Case value="12">
        <div />
      </Case>
      <Case default>131</Case>
    </Switch>
  );
}

export default App;
