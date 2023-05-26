import React, {useContext, useEffect, useState} from 'react';
import ReactPaginate from "react-paginate";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import axios from "axios";
import Aos from "aos";
import {MyContext} from "../app/App";

function News(props) {
    let value = useContext(MyContext);
    const {t} = useTranslation();
    const [pageNumber, setPageNumber] = useState(0);
    const [news, setNews] = useState([]);
    const worksPage = 6;
    const pagesVisited = pageNumber * worksPage;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${value.url}news/`, {
            headers: {
                "Accept-Language": localStorage.getItem('language') ? localStorage.getItem('language') : "uz"
            }
        }).then((response) => {
            setNews(response.data);
        }).catch(() => {
        });

        Aos.init({duration: 1000});
    }, []);

    const displayWorks = news.slice(pagesVisited, pagesVisited + worksPage).map((item, index) => {
        return <div key={index} className="Events-photo">
            <div className="news-box">
                <div className="img-box">
                    <img src={item.image} alt=""/>
                    <div className="name-box">
                        <div className="name-Events">
                            <div className="content1">
                                <div className="events-name">
                                    {item.name}
                                </div>
                                <div className="description">
                                    {item.description}
                                </div>
                                <div className="events-date">
                                    {item.date}
                                </div>
                                <div className="content2">
                                    <div onClick={() => {
                                        navigate("/about-news");
                                        sessionStorage.setItem("news", item.id)
                                    }} className="more-btn">
                                        {t('more')} <img src="./images/more2.png" alt=""/>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    });
    const pageCount = Math.ceil(news.length / worksPage);
    const changePage = ({selected}) => {
        setPageNumber(selected)
    };

    return (
        <>
            <div className="main-box-events">
                <Navbar/>
                <div className="organization-title">
                    {t('news')}
                </div>
                <div className="boxes-organization">
                    <div className="box-for-org">
                        <div className="row">
                            {displayWorks}
                        </div>
                    </div>
                    <ReactPaginate
                        previousLabel={<img src="./images/work-pagination-prev.png" alt=""/>}
                        nextLabel={<img src="./images/work-pagination-next.png" alt=""/>}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledCalassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default News;