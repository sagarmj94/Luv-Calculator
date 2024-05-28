import React from "react";
import Banner from "./Banner ";
import AccessibleImage from "./AccessibleImage ";
import AsideSection from "./AsideSection ";
import "./DummyPage.css";
const DummyPage = () => {
  return (
    <main className="complex-page">
      <a href="#main-content" className="skip-link">
        Gym Content is below
      </a>
      <Banner />
      <div className="content-area">
        <section aria-labelledby="main-heading" id="main-content">
          <h1 id="main-heading" tabIndex={"0"}>
            Main Content Area
          </h1>
          <p id="Sub heading" tabIndex={"0"}>
            This is the main description for the gym admission
          </p>
          <AccessibleImage
            src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Gym Walking Image"
          />
        </section>
        <AsideSection />
      </div>
    </main>
  );
};

export default DummyPage;
