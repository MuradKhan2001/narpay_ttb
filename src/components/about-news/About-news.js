import React, {useContext, useEffect, useState} from 'react';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import axios from "axios";
import Aos from "aos";
import {MyContext} from "../app/App";

function AboutNews() {
    let value = useContext(MyContext);
    const [news, setNews] = useState({});

    useEffect(() => {
        axios.get(`${value.url}news/${sessionStorage.getItem("news")}/`, {
            headers: {
                "Accept-Language": localStorage.getItem('language') ? localStorage.getItem('language') : "uz"
            }
        }).then((response) => {
            setNews(response.data);
        }).catch(() => {
        });

        Aos.init({duration: 1000});
    }, []);


    return (
        <>
            <div className="news-container">
                <Navbar/>
                {
                    news ?  <div className="employee-box">
                        <div className="employee-photo">
                            {
                                news.image ?
                                    <img src={news.image} alt=""/> :
                                    <video src={news.video} controls></video>
                            }
                        </div>
                        <div className="employee-text">
                            <div className="employee-content">
                                <div className="name-employee">
                                    {news.title}
                                </div>
                                <div className="line-for-name"></div>
                                <div className="main-text">
                                    {news.description}
                                </div>
                                <div className="date-news">
                                    {news.date}
                                </div>
                            </div>
                            <div className="employee-line"></div>
                        </div>
                    </div> : ""
                }
                <Footer/>
            </div>
        </>
    );
}

export default AboutNews;