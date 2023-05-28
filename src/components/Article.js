import React from "react";
import { minutesToRead } from "../utility";

function Article({ date = "January 1, 1970", preview, title, minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {minutesToRead(minutes)}
      <p>{preview}</p>
    </article>
  );
}

export default Article;
