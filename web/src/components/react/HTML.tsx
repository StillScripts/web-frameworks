/** @jsxImportSource react */
import React from "react";

const string = `here's some <strong>HTML!!!</strong>`;

const HTML = () => (
  <p dangerouslySetInnerHTML={{ __html: string }}></p>
);

export default HTML;
