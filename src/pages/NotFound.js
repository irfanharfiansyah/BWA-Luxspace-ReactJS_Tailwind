import React from "react";
import Header from "parts/Header";
import SiteMap from "parts/HomePage/SiteMap";
import Foooter from "parts/Foooter";
import PageErrorMessage from "./PageErrorMessage";

export default function NotFound() {
	return (
		<>
			<Header theme="black"></Header>
			<PageErrorMessage></PageErrorMessage>
			<SiteMap></SiteMap>
			<Foooter></Foooter>
		</>
	);
}
