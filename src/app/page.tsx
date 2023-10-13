import AlieItems from "@/components/alieItems/AlieItems";
import AlignSelf from "@/components/alignSelf/AlignSelf";
import Basis from "@/components/basis/Basis";
import CenterDiv from "@/components/centerDiv/CenterDiv";
import Display from "@/components/display/Display";
import FlexDirection from "@/components/flexDirection/FlexDiraction";
import FlexThree from "@/components/flexThree/FlexThree";
import Grow from "@/components/grow/Grow";
import Hero from "@/components/hero/Hero";
import JustyfContent from "@/components/justyfContent/JustyfContent";
import SpacePos from "@/components/spacePos/SpacePos";

export default function Home() {
  return (
    <>
      <Hero />
      <Display />
      <AlieItems />
      <AlignSelf />
      <Basis />
      <FlexDirection />
      <SpacePos />
      <JustyfContent />
      <Grow />
      <FlexThree />
      <CenterDiv />
    </>
  );
}
