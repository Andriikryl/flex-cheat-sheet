import React from "react";
import style from "./style.module.css";
import { Container } from "../container/Container";

export default function Hero() {
  return (
    <section className={style.hero}>
      <Container>
        <div>
          <h1 className={style.hero__title}>Flex cheat-sheet</h1>
        </div>
      </Container>
    </section>
  );
}
