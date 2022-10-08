import React from "react";
import Header from "parts/Header";
import Hero from "parts/HomePage/Hero";
import JustArrived from "parts/HomePage/JustArrived";
import BrowseRoom from "parts/HomePage/BrowseRoom";
import Clients from "parts/Clients";
import SiteMap from "parts/HomePage/SiteMap";
import Foooter from "parts/Foooter";
import useScrollAnchor from "helpers/hooks/useScrollAnchor";
import useModalDOM from "helpers/hooks/useModalDOM";
export default function HomePage() {
	useScrollAnchor();
	useModalDOM();
	return (
		<>
			<Header theme="white" position="absolute"></Header>
			<Hero></Hero>
			<BrowseRoom></BrowseRoom>
			<JustArrived></JustArrived>
			<Clients></Clients>
			<SiteMap></SiteMap>
			<Foooter></Foooter>
		</>
	);
}
