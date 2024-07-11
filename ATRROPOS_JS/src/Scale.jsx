import React from "react";
import "./App.css";

const Scale = () => {
  return (
    <section className="parentBox">
      {Array.from({ length: 50 }).map((_, index) => {
        return (
          <div
            className="box autoScale"
          ></div>
        );
      })}
    </section>
  );
};

export default Scale;
