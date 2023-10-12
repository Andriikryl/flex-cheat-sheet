"use client";
import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import { MainField } from "../mainField/MainField";
import InnerBox from "../innerBox/InnerBox";
import clsx from "clsx";
import BlockDescription from "../blockDescription/BlockDescription";

export default function Display() {
  const [selectedOption, setSelectedOption] = React.useState("block");
  return (
    <section className={style.display}>
      <Container>
        <h2 className={style.display__title}>Display ?</h2>
        <form className={style.form}>
          <fieldset>
            <legend className={style.legend}>Chose layout mode</legend>
            <select
              className={style.select}
              value={selectedOption}
              onChange={(event) => {
                setSelectedOption(event.target.value);
              }}
            >
              <option value="block">block</option>
              <option value="flex">flex</option>
            </select>
          </fieldset>
        </form>
        <MainField
          className={clsx(style.box, {
            [style.flex]: selectedOption === "flex",
          })}
        >
          <InnerBox />
          <InnerBox />
          <InnerBox />
          <InnerBox />
        </MainField>
        <div className={style.bg__box}>
          <BlockDescription text={selectedOption + " " + "container"} />
        </div>
      </Container>
    </section>
  );
}
