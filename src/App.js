import React from "react";
import { Case, Switch } from "./components";

const App = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date().getDay());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().getDay());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Switch value={currentTime}>
      <Case value={0}>Sunday</Case>
      <Case value={1}>Monday</Case>
      <Case value={2}>Tuesday</Case>
      <Case value={3}>Wednesday</Case>
      <Case value={4}>Thursday</Case>
      <Case value={5}>Friday</Case>
      <Case value={6}>Saturday</Case>
    </Switch>
  );
};

export default App;
