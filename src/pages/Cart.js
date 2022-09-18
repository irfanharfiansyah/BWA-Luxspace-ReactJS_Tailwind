import React from "react";
import Header from "parts/Header";
import ShoppingCart from "parts/Cart/ShoppingCart";
import ShippingDetails from "parts/Cart/ShippingDetails";
import SiteMap from "parts/HomePage/SiteMap";
import Breadcrumb from "components/Breadcrumb";
import Foooter from "parts/Foooter";

export default function Cart() {
	return (
		<>
			<Header theme="black"></Header>
			<Breadcrumb
				list={[
					{ url: "/", name: "Home" },
					{ url: "/cart", name: "Shopping Cart" },
				]}
			></Breadcrumb>
			<section className="md:py-16">
				<div className="container mx-auto px-4">
					<div className="flex -mx-4 flex-wrap">
						<ShoppingCart></ShoppingCart>
						<ShippingDetails></ShippingDetails>
					</div>
				</div>
			</section>
			<SiteMap></SiteMap>
			<Foooter></Foooter>
		</>
	);
}
