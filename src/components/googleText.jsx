import React from "react";

const GoogleText = (props) => {
  const { fontSize = "text-lg" } = props;
  return (
    <div className={`inline-flex ${fontSize}`}>
      <span className="text-blue-500">G</span>
      <span className="text-red-500">o</span>
      <span className="text-yellow-400">o</span>
      <span className="text-blue-500">g</span>
      <span className="text-green-600">l</span>
      <span className="text-red-500">e</span>
    </div>
  );
};

export default GoogleText;
