"use client";
import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import { MainField } from "../mainField/MainField";

export default function Gap() {
  const [volume, setVolume] = React.useState(10);
  return (
    <section className={style.gap__section}>
      <Container>
        <h3 className={style.gap__title}>Gap</h3>
        <form
          className={style.form}
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <label className={style.label} htmlFor="volume-slider">
            gap:
          </label>
          <input
            type="range"
            id="volume-slider"
            min={0}
            max={150}
            value={volume}
            onChange={(event) => {
              setVolume(parseInt(event.target.value, 10));
            }}
          />
        </form>
        <div className={style.box} style={{ gap: volume + "px" }}>
          <div className={style.inner__box}></div>
          <div className={style.inner__box}></div>
          <div className={style.inner__box}></div>
          <div className={style.inner__box}></div>
        </div>
      </Container>
    </section>
  );
}
