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
		<div className="">
			{showHeader && <Header />}
			{/* main content */}
			<div>
				<div>
					<Feature />
				</div>
				{/* <div className="w-full h-full p-10 flex">
					<div className="w-1/2">
						<img src="" alt="" />
					</div>
					<div className="w-1/2">
						<div className="text-xl">
							The Store which you need to choise for take care your pet.
						</div>
						<div className="text-sm text-opacity-50 text-slate-800">
							Ex reprehenderit voluptate ea anim ex magna consectetur
							reprehenderit. Velit adipisicing anim aliquip nisi Lorem cillum.
							Qui duis esse aute ullamco ut ullamco consectetur dolor duis
							veniam est. Consectetur amet ea aliqua magna sunt pariatur eu
							occaecat irure amet nisi amet ea voluptate. Minim mollit sunt
							culpa non sit veniam fugiat officia nostrud reprehenderit esse
							mollit ullamco culpa.
						</div>
					</div>
				</div> */}
				{/* <div className="w-full h-full ">
					<Carousel />
				</div> */}
				<Cta />
				<Cta2 />
			</div>
			<Footer />
		</div>
	);
}
