"use client";
import React from "react";
import style from "./style.module.css";
import { Container } from "../container/Container";
import { MainField } from "../mainField/MainField";
import clsx from "clsx";
import BlockDescription from "../blockDescription/BlockDescription";

export default function Basis() {
  const [volume, setVolume] = React.useState(50);
  return (
    <section className={style.basis}>
      <Container>
        <h3 className={style.basis__title}>flex-basis</h3>
        <form
          className={style.form}
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <label className={style.label} htmlFor="volume-slider">
            flex-basis value:
          </label>
          <input
            type="range"
            id="volume-slider"
            min={50}
            max={350}
            value={volume}
            onChange={(event) => {
              setVolume(parseInt(event.target.value, 10));
            }}
          />
        </form>
        <MainField className={style.box}>
          <div
            className={clsx(style.inner__box)}
            style={{ flexBasis: volume + "px" }}
          >
            {volume}
          </div>
          <div className={style.inner__box}>
            <span>50</span>
          </div>
          <div className={style.inner__box}>
            <span>50</span>
          </div>
          <div className={style.inner__box}>
            <span>50</span>
          </div>
        </MainField>
        <BlockDescription text="flex container" />
      </Container>
    </section>
  );
}
