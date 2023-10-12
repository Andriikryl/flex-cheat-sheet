"use client";
import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import { motion } from "framer-motion";
import { MainField } from "../mainField/MainField";
import clsx from "clsx";
import BlockDescription from "../blockDescription/BlockDescription";

export default function AlignSelf() {
  const [selectedOption, setSelectedOption] = React.useState("row");
  const [selectedSelf, setSelectedSelf] = React.useState("start");
  return (
    <section className={style.self}>
      <Container>
        <h3 className={style.self__title}>
          Align-Self........................ hmmmmmmm
        </h3>
        <form className={style.form__direaction}>
          <fieldset>
            <legend className={style.legend}>flex diraction</legend>
            <select
              className={style.select}
              value={selectedOption}
              onChange={(event) => {
                setSelectedOption(event.target.value);
              }}
            >
              <option value="row">row</option>
              <option value="column">column</option>
            </select>
          </fieldset>
        </form>
        <form className={style.form}>
          <fieldset>
            <legend className={style.legend}>align-self</legend>
            <select
              className={style.select}
              value={selectedSelf}
              onChange={(event) => {
                setSelectedSelf(event.target.value);
              }}
            >
              <option value="start">flex-start</option>
              <option value="center">cnter</option>
              <option value="end">flex-end</option>
            </select>
          </fieldset>
        </form>
        <MainField
          className={clsx(style.box, {
            [style.row]: selectedOption === "row",
          })}
        >
          <motion.div
            className={clsx(
              style.inner__box,
              { [style.start]: selectedSelf === "start" },
              { [style.center]: selectedSelf === "center" },
              { [style.end]: selectedSelf === "end" }
            )}
            layout
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
              opacity: 0,
              x: -200,
            }}
            transition={{ opacity: { duration: 0.6 }, x: { duration: 1.2 } }}
          >
            <span>I am self {selectedSelf} !!!</span>
          </motion.div>
          <motion.div
            className={style.inner__box}
            layout
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
              opacity: 0,
              x: -200,
            }}
            transition={{ opacity: { duration: 0.6 }, x: { duration: 1.2 } }}
          ></motion.div>
          <motion.div
            className={style.inner__box}
            layout
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
              opacity: 0,
              x: -200,
            }}
            transition={{ opacity: { duration: 0.6 }, x: { duration: 1.2 } }}
          ></motion.div>
          <motion.div
            className={style.inner__box}
            layout
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
              opacity: 0,
              x: -200,
            }}
            transition={{ opacity: { duration: 0.6 }, x: { duration: 1.2 } }}
          ></motion.div>
        </MainField>
        <BlockDescription text="flex container" />
      </Container>
    </section>
  );
}
