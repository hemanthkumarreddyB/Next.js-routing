import React from "react";
import styles from "./projects.module.css";
import Link from "next/link";
const ProjectList = () => {
  return (
    <main>
      <h1>ProjectList</h1>
      <ul className={styles.ul}>
        <Link href="/projects/Prathap">
          <li>Prathap</li>
        </Link>
        <Link href="/projects/Rajesh">
          <li>Rajesh</li>
        </Link>
        <Link href="/projects/Naveen">
          <li>Naveen</li>
        </Link>
        <Link href="/projects/Uday">
          <li>Uday</li>
        </Link>
        .
      </ul>
    </main>
  );
};

export default ProjectList;
