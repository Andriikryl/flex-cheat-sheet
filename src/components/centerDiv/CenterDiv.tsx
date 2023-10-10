"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import clsx from "clsx";
import { motion } from "framer-motion";
import BlockDescription from "@/components/blockDescription/BlockDescription";
import InnerBox from "@/components/innerBox/InnerBox";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import CodeBlock from "@/components/codeBlock/CodeBlock";
import { Container } from "../container/Container";

export default function CenterDiv() {
  const [isJustifyCenter, setIsJustifyCenter] = useState(false);
  const [isAlignCenter, setIsAlignCenter] = useState(false);

  const handleJustifyCenterChange = () => {
    setIsJustifyCenter((prev) => !prev);
  };

  const handleAlignCenterChange = () => {
    setIsAlignCenter((prev) => !prev);
  };

  const boxStyles = {
    justifyContent: isJustifyCenter ? "center" : "initial",
    alignItems: isAlignCenter ? "center" : "initial",
  };

  let justifyContentValue = "______";
  let aliitemsCenterValue = "______";

  if (isJustifyCenter) {
    justifyContentValue = "center";
  }
  if (isAlignCenter) {
    aliitemsCenterValue = "center";
  }

  return (
    <section className={style.center}>
      <Container>
        <h4 className={style.center__title}>So...... how center a div?</h4>
        <div className={style.flex__group}>
          <div>
            <motion.div className={clsx(style.box)} style={boxStyles}>
              <InnerBox />
            </motion.div>
            <BlockDescription text="flex container" />
          </div>
          <form className={style.form}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox.Root
                className={style.CheckboxRoot}
                id="c1"
                checked={isJustifyCenter}
                onCheckedChange={handleJustifyCenterChange}
              >
                <Checkbox.Indicator className={style.CheckboxIndicator}>
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label className={style.Label} htmlFor="c1">
                justify-content: center;
              </label>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox.Root
                className={style.CheckboxRoot}
                id="c2"
                checked={isAlignCenter}
                onCheckedChange={handleAlignCenterChange}
              >
                <Checkbox.Indicator className={style.CheckboxIndicator}>
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label className={style.Label} htmlFor="c2">
                align-items: center;
              </label>
            </div>
          </form>
          <CodeBlock
            classN={".container"}
            propertyOne={"display"}
            valueOne={"flex"}
            propertyTwo={"justify-content"}
            valueTwo={justifyContentValue}
            propertyThree={"align-items"}
            valueThree={aliitemsCenterValue}
          />
        </div>
      </Container>
    </section>
  );
}
