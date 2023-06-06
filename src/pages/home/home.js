import React from "react";
import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import Trailer from "../../components/trailer/trailer";
import Cards from "../../components/cards/cards";
import Footer from "../../components/footer/footer";

function Home() {
    return (
        <>
            <Header />
            <Banner />
            <Trailer />
            <Cards />
            <Footer />
        </>
    );
};

export default Home;