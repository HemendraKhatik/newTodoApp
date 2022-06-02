import React from "react";
import styles from "./index.module.css";

export default function MainContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.todoHeader}></div>

      <div className={styles.todosContainer}>
        
        <div className={styles.task}>
          <input type="checkbox" className={styles.checkbox} />
          <h1 className={styles.todo}>Task one</h1>
          <span className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34px" height="34px"
              viewBox="0 0 50 50"
            >
              <path d="M13.05 42Q11.85 42 10.95 41.1Q10.05 40.2 10.05 39V10.5H8V7.5H17.4V6H30.6V7.5H40V10.5H37.95V39Q37.95 40.2 37.05 41.1Q36.15 42 34.95 42ZM34.95 10.5H13.05V39Q13.05 39 13.05 39Q13.05 39 13.05 39H34.95Q34.95 39 34.95 39Q34.95 39 34.95 39ZM18.35 34.7H21.35V14.75H18.35ZM26.65 34.7H29.65V14.75H26.65ZM13.05 10.5V39Q13.05 39 13.05 39Q13.05 39 13.05 39Q13.05 39 13.05 39Q13.05 39 13.05 39Z" />
            </svg>
          </span>
        </div>




        <div className={styles.addNewTask}>
          <button className={styles.addBtn}>+ New task</button>
        </div>
      </div>
    </div>
  );
}
