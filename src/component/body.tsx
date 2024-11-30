import React from "react";
import First_view from "./First_view/first_view";
import Pick_editor from "./Pick_editor/edito_pick";
import Tech_reviews from "./Tech_reviews/tech_review";
import Must_read from "./Must_Read/must_read";
import Reviews from "./Reviews/review";
import Gadgets from "./Gadgets/gadgets";
import Games from "./Games/games";
import Technology from "./Technology/technology";
import Newsletter from "./Newsletter/newsletter";
import Footer from "./footer";
import Prodcast_2 from "./Prodcasts/prodcast_2";
import Prodcast_1 from "./Prodcasts/prodcast_1";
export default function Body() {
  return (
    <>
      <First_view />
      <div className="bg-[#F5F5F5]">
        <Pick_editor />
        <Tech_reviews />
        <Prodcast_1 />

        <Must_read />
        <Reviews />

        <Gadgets />
        <Prodcast_2 />
        <Games />
        <Technology />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}
