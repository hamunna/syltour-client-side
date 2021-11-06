import { useEffect, useState } from "react"

const useProducts = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/myOrders')
			.then(res => res.json())
			.then(data => setProducts(data));
	}, []);
	// return necessary things
	return [products, setProducts];
}

export default useProducts;