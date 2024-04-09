import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Product } from "../../components/Product";
import food from "../../assets/products/food.webp";
import { ProductModel } from "../../components/ProductModal";
import { axios } from "../../utils/axios_config";
import VND_formatter from "../../utils/VND_formatter";

export default function Shop() {
	const categories = ["Foods", "Pet Toys", "Vacxin"];
	const [toggleModel, setToggleMdodel] = useState(false);
	const displayModel = () => {
		setToggleMdodel(true);
		console.log("display model");
	};
	const hideModel = () => {
		setToggleMdodel(false);
		console.log("hide model");
	};
	const [products, setProducts] = useState([]);
	useEffect(() => {
		axios
			.get("/api/product")
			.then((data) => {
				setProducts(data.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	return (
		<div className="mclient_header">
			<Header />

			{toggleModel ? (
				<ProductModel
					onCloseBtnClick={hideModel}
					name="Thức ăn cho mèo con và mèo mẹ ROYAL CANIN Mother & Babycat"
					description="Thức ăn hạt cho mèo con và mèo mẹ ROYAL CANIN Mother & Babycat tạo thói quen ăn uống cho mèo. Dựa theo tuổi của mèo, cần cho ăn một ngày 3 lần vào các giờ cố định. Cho ăn tại một chỗ để tạo thói quen tốt cho mèo. Lưu ý không cho ăn quá nhiều. Nên cho mèo ăn thức ăn chế biến riêng, không cho ăn thức ăn thừa của người. Vì thức ăn của người có nhiều thành phần khiến mèo bị rối loạn tiêu hóa, ảnh hưởng đến sức khỏe của mèo. Bảo đảm cung cấp đủ nước uống cho mèo. Nếu thấy nước bị mèo làm bẩn, cần thay nước mới ngay lập tức."
					price="290.000d"
				/>
			) : (
				<div className="grid grid-cols-4 gap-4">
					{products.map((el) => {
						return (
							<Product
								name={el.name}
								img={el.images[0] || food}
								price={VND_formatter(el.price)}
								onProductClick={displayModel}
								data={el}
							/>
						);
					})}
				</div>
			)}
			{/* <ProductModel /> */}
			<Footer />
		</div>
	);
}
