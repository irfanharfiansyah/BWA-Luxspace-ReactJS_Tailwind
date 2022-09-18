import React from "react";
import Header from "parts/Header";
// import JustArrived from "parts/HomePage/JustArrived";
// import BrowseRoom from "parts/HomePage/BrowseRoom";
import Breadcrumb from "components/Breadcrumb";
import ProductDetails from "parts/Details/ProductDetails";
import Suggestion from "parts/Details/Suggestion";
import Clients from "parts/Clients";
import SiteMap from "parts/HomePage/SiteMap";
import Foooter from "parts/Foooter";

export default function Details() {
	return (
		<>
			<Header theme="black"></Header>
			<Breadcrumb
				list={[
					{ url: "/", name: "Home" },
					{ url: "/categories/91231", name: "Office Room" },
					{ url: "/categories/91231/products/7888", name: "Details" },
				]}
			></Breadcrumb>
			<ProductDetails></ProductDetails>
			<Suggestion></Suggestion>
			<Clients></Clients>
			<SiteMap></SiteMap>
			<Foooter></Foooter>
		</>
	);
}
