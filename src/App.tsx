import React from "react";
import { Page } from "./components/Page";
import { DemoCard } from "./components/Card";
import { JokeFactory } from "./factories";

function App() {
  const joke = JokeFactory.create();

  return (
    <Page>
      <DemoCard title={joke[0]} content={joke[1]} onClick={() => {}} />
    </Page>
  );
}

export default App;
