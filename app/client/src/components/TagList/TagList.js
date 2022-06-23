import React from "react";
import Tag from "../Tag/Tag";
import styles from "./TagList.module.css";

const TagList = ({ tags }) => {
  return (
    <ul className={styles.container}>
      {tags.map((tag, index) => (
        <li key={index}>
          <Tag name={tag} />
        </li>
      ))}
    </ul>
  );
};

export default TagList;
