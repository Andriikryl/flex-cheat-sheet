import AlieItems from "@/components/alieItems/AlieItems";
import CenterDiv from "@/components/centerDiv/CenterDiv";
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
      <AlieItems />
      <FlexDirection />
      <FlexThree />
      <SpacePos />
      <JustyfContent />
      <Grow />
      <CenterDiv />
    </>
  );
}
