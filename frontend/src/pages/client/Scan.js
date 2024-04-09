import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { type } from "@testing-library/user-event/dist/type";
// import { Axios } from "axios";
import { axios } from "../../utils/axios_config";
import { ResultTable, TableItems } from "../../components/ResultTable";
// import axios from "axios";
import { axiosPermissionsRoles } from "../../utils/axios_config";

export default function Scan() {
	const [imgSource, setImgSource] = useState("");
	const [uploaded, setUploaded] = useState(false);
	const [file, setFile] = useState(null);
	const [petName, setPetName] = useState("Your Pet Name");
	const [percentage, setPercentage] = useState(0);
	const [products, setProducts] = useState([]);
	const [petAge, setPetAge] = useState(-1);
	const [displayItemTable, setDisplayItemTable] = useState(false);
	const [userID, setUserID] = useState("");

	const petList = {
		0: "Abyssinian",
		1: "American Bulldog",
		2: "American_pit_bull_terrier",
		3: "Basset Hound",
		4: "Beagle",
		5: "Bengal",
		6: "Birman",
		7: "Bombay",
		8: "Boxer",
		9: "British Shorthair",
		10: "Chihuahua",
		11: "Egyptian Mau",
		12: "English Cocker Spaniel",
		13: "English Setter",
		14: "German Shorthaired",
		15: "Great pyrenees",
		16: "Havanese",
		17: "Japanese Chin",
		18: "Keeshond",
		19: "Leonberger",
		20: "Maine_coon",
		21: "Miniature_pinscher",
		22: "Newfoundland",
		23: "Persian",
		24: "Pomeranian",
		25: "Pug",
		26: "Ragdoll",
		27: "Russian Blue",
		28: "Saint Bernard",
		29: "Samoyed",
		30: "Scottish Terrier",
		31: "Shiba Inu",
		32: "Siamese",
		33: "Sphynx",
		34: "Staffordshire Bull Terrier",
		35: "Wheaten Terrier",
		36: "Yorkshire Terrier",
	};
	useEffect(() => {
		getUserID();
	}, []);
	const handleUpload = (file) => {
		const formData = new FormData();
		formData.append("file", file);
		formData.append("userID", userID);
		setPetName("");
		fetch("http://127.0.0.1:8000/uploadImg", {
			method: "POST",
			body: formData,
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log("Upload success ", data);
				let predictionAr = data[0];
				let max = 0;
				let position = 0;
				for (let i = 0; i < predictionAr.length; i++) {
					if (max < predictionAr[i]) {
						max = predictionAr[i];
						position = i;
					}
				}
				if (max > 0.8) {
					setPetName(petList[position]);
					setPercentage(Math.round(max * 10000) / 100);
				}
			})
			.catch((error) => {
				console.log("Error ", error);
				setPetName("Cannot scan this image!");
				setPercentage(0);
			});
	};

	const uploadFile = (e) => {
		console.log(userID);
		if (e.target.files.length) {
			const src = URL.createObjectURL(e.target.files[0]);
			setImgSource(src);
			setFile(e.target.files[0]);
			setUploaded(true);
		}
	};
	const getPetItems = () => {
		axios
			.get("/api/product")
			.then((data) => {
				const productsAr = [];
				setProducts([]);
				data.data.map((e) => {
					if (e.items != null) {
						e.items.map((item) => {
							if (item.pet_name == petName && item.ages.length > 0) {
								item.ages.map((age) => {
									if (age == petAge) {
										productsAr.push(e);
									}
								});
							}
						});
					}
				});
				setProducts(productsAr);
				setDisplayItemTable(true);
			})
			.catch((e) => {
				console.log(e);
			});
	};
	const handleInputChange = (e) => {
		setPetAge(parseInt(e.target.value));
	};
	function getUserID() {
		const token = localStorage.getItem("token");
		axiosPermissionsRoles(token)
			.get("/api/user/current")
			.then((data) => {
				setUserID(data.data._id);
			})
			.catch((e) => {
				console.log(e);
			});
	}
	function LoadSection() {
		if (!uploaded) {
			return (
				<div class="flex flex-1 items-center flex-col p-4">
					<p class="relative inline cursor-pointer text-xl font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
						Take a photo
					</p>
					<h2 class="p-5">Or</h2>
					<div class="border border-dashed border-gray-500 relative">
						<input
							type="file"
							accept="image/*"
							id="fileUploader"
							class="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"
							onChange={uploadFile}
						/>
						<div class="text-center p-10 absolute top-0 right-0 left-0 m-auto">
							<h4>
								Drop files anywhere to upload
								<br />
								or
							</h4>
							<p class="">Select Files</p>
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div className="flex flex-1 items-center flex-col space-y-5">
					<div className="flex">
						<div class="m-3" style={{ height: "fit-content" }}>
							<button
								class="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
								id="scanBtn"
								onClick={() => handleUpload(file)}
							>
								<span class="mr-2">Scan</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentcolor"
										d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
									></path>
								</svg>
							</button>
						</div>

						<div class="m-3">
							<button
								class="bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center "
								onClick={() => clearResult()}
							>
								<span class="mr-2">Close</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentcolor"
										d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div className="flex flex-col">
						<img className="" src={imgSource} id="img" />
					</div>
				</div>
			);
		}
	}
	function PetName() {
		return (
			<div class="flex flex-1 max-w-xs items-center border-l-8 border-emerald-500 bg-emerald-50 p-4 text-emerald-900 shadow-lg">
				<div class="min-w-0">
					<h2 class="overflow-hidden text-ellipsis whitespace-nowrap">
						742 Evergreen Terrace, Springfield Country
					</h2>
				</div>
			</div>
		);
	}
	function clearResult() {
		setUploaded(false);
		setPetName("Your Pet Name");
		setPercentage(0);
	}

	return (
		<div className="mclient_header">
			<Header />

			{/* upload section */}
			<div className="container flex flex-col justify-center items-center p-4">
				<div class="flex w-4/5">
					{LoadSection()}
					<div className="flex flex-1 flex-col justify-center items-center p-4">
						<div class="flex max-w-xs items-center border-l-8 border-emerald-500 bg-emerald-50 p-4 text-emerald-900">
							<div class="min-w-0">
								<h2 class="overflow-hidden text-ellipsis whitespace-nowrap text-xl">
									{petName}
								</h2>
							</div>
						</div>
						<p className="p-2 text-xs">{"Accuracy: " + percentage + "%"}</p>
						{percentage > 0 ? (
							<div>
								<div className="text-center p-4">
									Enter your pet age (month)
								</div>
								<div class="flex gap-4">
									<input
										class="h-12 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600"
										type="text"
										placeholder="Your pet name"
										onChange={handleInputChange}
									/>
									<button
										class="h-12 min-w-[8rem] rounded-lg border-2 border-emerald-600 bg-emerald-500 text-emerald-50 shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-600"
										onClick={getPetItems}
									>
										Submit
									</button>
								</div>
							</div>
						) : (
							""
						)}
						{/* table */}
					</div>
				</div>
				<div>
					{displayItemTable ? (
						<ResultTable items={products} />
					) : (
						"Your products list will display here"
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
}
