"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import clsx from "clsx";
import { motion } from "framer-motion";
import Button from "@/components/button/Button";
import BlockDescription from "@/components/blockDescription/BlockDescription";
import InnerBox from "@/components/innerBox/InnerBox";
import TaskDescription from "@/components/taskDescription/TaskDescription";
import { MainField } from "@/components/mainField/MainField";
import { Container } from "../container/Container";

export default function AlieItems() {
  const [end, setEnd] = useState(false);
  const [center, setCenter] = useState(false);
  const [start, setStart] = useState(false);
  const handleClickStart = () => {
    setStart(true);
    setEnd(false);
    setCenter(false);
  };
  const handleClickEnd = () => {
    setEnd(true);
    setStart(false);
    setCenter(false);
  };
  const handleClickCenter = () => {
    setCenter(true);
    setEnd(false);
    setStart(false);
  };

  let alignItemsValue = "_____   ";

  if (start) {
    alignItemsValue = "start";
  } else if (center) {
    alignItemsValue = "center";
  } else if (end) {
    alignItemsValue = "end";
  }

  return (
    <section className={style.alieItems__section}>
      <Container>
        <TaskDescription qustion={"align-items"} answer={alignItemsValue} />
        <div className={style.flex__group}>
          <Button text={"Start"} onClick={handleClickStart} />
          <Button text={"Center"} onClick={handleClickCenter} />
          <Button text={"End"} onClick={handleClickEnd} />
        </div>
        <MainField
          className={clsx(
            style.box,
            {
              [style.centered]: center,
              [style.ended]: end,
              [style.started]: start,
            },
            style.box__size
          )}
        >
          <InnerBox />
        </MainField>
        <BlockDescription text="flex container" />
      </Container>
    </section>
  );
}
