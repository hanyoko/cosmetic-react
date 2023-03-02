import React from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../config/apiurl';

const ProductList = ({p_id, p_name, p_price, p_img}) => {
    return (
        <>
        <li>
            <Link to={`/detailview/${p_id}`}>
            <img src={`${API_URL}/upload/${p_img}`} alt="" />
            <h3>{p_name}</h3>
            <p>{p_price}</p>
            <p>간단한 설명입니다.</p>
            </Link>
        </li>
        {/* <li>
            <Link to="/detailview/2">
            <img src="images/product2.png" alt="" />
            <h3>메이크업</h3>
            <p>66000원</p>
            <p>간단한 설명입니다.</p>
            </Link>
        </li>
        <li>
            <Link to="/detailview/3">
            <img src="images/product3.jpg" alt="" />
            <h3>메이크업</h3>
            <p>66000원</p>
            <p>간단한 설명입니다.</p>
            </Link>
        </li> */}
        </>
    );
};

export default ProductList;