import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import ProductList from '../product_list/product_list';
import styles from './main.module.css';
import axios from 'axios';


const Main = (props) => {
    
    // 유저정보 (로그인 기능 구현 시 작성)
    // const[userInfo, setUserInfo] = useState(historyState && historyState.userInfo);

    

    const history = useHistory();
    const goToProductRegister = () => {
        history.push({
            pathname: "/product_register"
        })
    }




    //상품 리스트 객체 배열
    const[products, setProducts] = useState([]);
    const [filteredData,setFilteredData] = useState(products);

    //상품들 가져오기(상품등록 DB구현 시 경로 재작성)
    const loadProducts=() => {
        axios.get('/product/')
        .then(response => {
        //console.log(response.data)
        setProducts(response.data);
        setFilteredData(response.data);
        })
        .catch(error => {
        console.log('에러: ' + error);
        })
    }

    

    //main컴포넌트가 마운트되면  userInfo에 해당하는(지역 등) products를 받아옴
    useEffect(() => {
        // if(!userInfo) { (로그인 기능 구현 시 작성. 의존성배열userInfo 추가해야함.
        //     return;
        // }
        loadProducts()
    },[]);
    
    return (
        <div className={styles.main}>
            <Header />

            <ProductList 
            setFilteredData={setFilteredData} 
            products={products} 
            filteredData={filteredData}/>
            <Footer />

            {/* 상품등록페이지로 이동 버튼 */}
            <button onClick={goToProductRegister} className={styles.float}>
                <i className="fas fa-plus"></i>
            </button>
        </div>
    );

};

export default Main;