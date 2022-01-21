import React, { useState } from 'react';

export default function TestHook() {
    // useEffect(() => {
    //     // 此hook相当于是componentDidMount的效果
    //     console.log("dom updated...")
    // })
    let [product, setProduct] = useState([
        { name: 'coderlei', age: 18, id: Date.now() }
    ])
    /* 添加商品 */
    function addProduct() {
        setProduct([
            ...product,
            { name: 'coderlei', age: "17", id: Date.now() }
        ])
    }
    return <>
        {
            product.map((item) => {
                return <div key={item.id}>
                    <p>name：{item.name}，age：{item.age}</p>
                    <button onClick={() => addProduct()}>add</button>
                </div>
            })
        }
    </>;
}
