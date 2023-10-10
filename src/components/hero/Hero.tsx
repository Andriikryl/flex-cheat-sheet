"use client";
import React from "react";
import style from "./style.module.css";
import { Container } from "../container/Container";
import { motion } from "framer-motion";
import clsx from "clsx";

interface BoxBlock {
  amount: number;
  type?: string;
  animation?: string;
}

export default function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.slide__box}>
        <BoxBlock amount={10} />
        <BoxBlock amount={10} />
      </div>
      <div className={clsx(style.slide__box)}>
        <BoxBlock amount={10} type="triangel" animation="reverse" />
        <BoxBlock amount={10} type="triangel" animation="reverse" />
      </div>
      <Container>
        <div className={style.hero__box}>
          <h1 className={style.hero__title}>
            <span>F</span>
            <span>l</span>
            <span>e</span>
            <span>x</span>
            <span>cheat-sheet</span>
          </h1>
        </div>
      </Container>
      <div className={clsx(style.slide__box)}>
        <BoxBlock amount={10} type="close" animation="close-anim" />
        <BoxBlock amount={10} type="close" animation="close-anim" />
      </div>
      <div className={clsx(style.slide__box)}>
        <BoxBlock amount={10} type="circel" animation="circel-anim" />
        <BoxBlock amount={10} type="circel" animation="circel-anim" />
      </div>
    </section>
  );
}

function BoxBlock({ amount, type, animation }: BoxBlock) {
  let blocks = [];
  for (let i = 0; i < amount; i++) {
    blocks.push(
      <motion.div
        className={clsx(
          style.block,
          type === "triangel" && style.triangel__block,
          type === "close" && style.close__block,
          type === "circel" && style.circel__block
        )}
      ></motion.div>
    );
  }
  return (
    <motion.div
      className={clsx(
        style.blocks__box,
        animation === "reverse" && style.reverse,
        animation === "close-anim" && style.close__ainmate,
        animation === "circel-anim" && style.circel__ainmate
      )}
    >
      {blocks}
    </motion.div>
  );
}
