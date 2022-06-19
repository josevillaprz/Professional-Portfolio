import React from "react";

const H2 = ({ text }) => {
  return <h2 style={styles.h2}>{text}</h2>;
};

export default H2;

const styles = {
  h2: {
    fontSize: "2.4rem",
    fontWeight: "500",
  },
};
