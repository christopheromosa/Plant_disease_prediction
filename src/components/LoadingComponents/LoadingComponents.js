import React from "react";
import ReactLoading from "react-loading";
import styles from "./LoadingComponents.modal.css"
export default function LoadingComponents() {
  return (
    <div className="container1">
      <ReactLoading
        type="spinningBubbles"
        color="#32a83a"
        height={100}
        width={100}
        backgroundColor="yellow"

      />
    </div>
  );
}
