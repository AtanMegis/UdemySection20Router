import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
	return (
		<>
			<ul>
				<li>
					<Link to="/products/book">A book</Link>
				</li>
				<li>
					<Link to="/products/pig">A pig</Link>
				</li>
				<li>
					<Link to="/products/dog">A dog</Link>
				</li>
			</ul>
		</>
	);
};

export default Products;
