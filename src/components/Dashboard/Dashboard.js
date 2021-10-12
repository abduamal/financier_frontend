import React from 'react';
import CardGrid from "components/Treact/components/cards/TabCardGrid.js"
import MainFeature from "components/Treact/components/features/TwoColSingleFeatureWithStats2.js"
import AnimationRevealPage from "components/Treact/helpers/AnimationRevealPage.js"

export default function Dashboard() {
  return(
    <AnimationRevealPage>
      <MainFeature/>
      <CardGrid/>
    </AnimationRevealPage>
  );
}
