import React from "react";
import Tag from "../Tag/Tag";
import styles from "./TagList.module.css";

const TagList = ({ names }) => {
  return (
    <ul className={styles.container}>
      <li>
        <Tag name="React" />
      </li>
      <li>
        <Tag name="Node" />
      </li>
      <li>
        <Tag name="Html" />
      </li>
    </ul>
  );
};

export default TagList;
