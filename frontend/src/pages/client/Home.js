import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";
import Feature from "../../components/Feature";
import Cta from "../../components/Cta";
import Cta2 from "../../components/Cta2";

export default function Home() {
	const [showHeader, setShowHeader] = useState(true);
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;
			setShowHeader(currentScrollPos <= 0 || prevScrollPos > currentScrollPos);
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [prevScrollPos]);
	return (
		<div className="test">
			{showHeader && <Header />}
			{/* main content */}
			<div>
				<div>
					<Feature />
				</div>
				<Cta />
				<Cta2 />
			</div>
			<Footer />
		</div>
	);
}
