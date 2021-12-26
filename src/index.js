import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Affix, Button } from "antd";

const Demo = () => {
  const [top, setTop] = useState(10);
  const [bottom, setBottom] = useState(10);
  const N = 20;
  return (
    <>
      <Affix offsetTop={top}>
        <Button type="primary" onClick={() => setTop(top + 10)}>
          Affix top
        </Button>
      </Affix>
      {[...Array(N + 1).keys()].map((i) => (
        <br key={i} />
      ))}
      <Affix offsetBottom={bottom}>
        <Button type="primary" onClick={() => setBottom(bottom + 10)}>
          Affix bottom
        </Button>
      </Affix>
    </>
  );
};

ReactDOM.render(<Demo />, document.getElementById("container"));
