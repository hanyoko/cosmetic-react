import axios from 'axios';
import React from 'react';
import { API_URL } from '../config/apiurl';
import useAsync from '../customHook/useAsync';

async function getProducts(){
    const response = await axios.get(
        `${API_URL}/products`
    );
    return response.data;
}
const Products = () => {
    const state = useAsync(getProducts,[]);
    const { loading, data, error } = state;
    if (loading) return <div>로딩 중 ....</div>;
    if (error) return <div>에러가 발생했습니다.</div>;
    if (!data) return null;
    return (
        <div>
            {data.products.map(pr => <div><p>{pr.name}</p>
            <p>{pr.price}</p><p>{pr.seller}</p></div>)}
        </div>
    );
};

export default Products;