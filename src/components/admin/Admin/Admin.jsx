import {useState, useEffect, useContext} from "react";
import {useNavigate, Route, Routes, NavLink} from "react-router-dom";
import "./admin.scss"
import {adminPageRoutes} from "../../routes/Routes";
import axios from "axios";
import {MyContext} from "../../app/App";


const Admin = () => {
    let value = useContext(MyContext);
    const navigate = useNavigate();

    const SiteMenus = [
        {
            name: "Dashboard",
            url: "/",
            img: "../images/admin/home.png"
        },
        {
            name: "Biz haqimizda",
            url: "/aboutus",
            img: "../images/admin/about.png"
        },
        {
            name: "Aloqa",
            url: "/contacta",
            img: "../images/admin/contact-us.png"
        },
        {
            name: "Yangilikar",
            url: "/newsa",
            img: "../images/admin/news.png"
        },
        {
            name: "Bo'limlar",
            url: "/servicea",
            img: "../images/admin/customer.png"
        },
        {
            name: "Xabarlar",
            url: "/message",
            img: "../images/admin/message.png"
        },
        {
            name: "Xodimlarni qo'shish",
            url: "/add-employee",
            img: "../images/admin/message.png"
        },
        {
            name: "QVP",
            url: "/add-qvp",
            img: "../images/admin/message.png"
        },
        {
            name: "Bo'sh ish o'rni ",
            url: "/add-vacancy",
            img: "../images/admin/message.png"
        },
        {
            name: "Statistika qo'shish",
            url: "/add-statistic",
            img: "../images/admin/message.png"
        },
        {
            name: "Xavfsizlik",
            url: "/safety",
            img: "../images/admin/lock.png"
        },
    ];

    // useEffect(() => {
    //     axios.get(`${value.url}dashboard/home/`, {
    //         headers: {
    //             "Authorization": `Token ${localStorage.getItem("token")}`
    //         }
    //     }).then((response) => {
    //         setStatisticsCount(response.data)
    //         setCountPrice(response.data.balance)
    //     }).catch((error) => {
    //         if (error.response.statusText == "Unauthorized") {
    //             window.location.pathname = "/";
    //             localStorage.removeItem("token");
    //         }
    //     });
    //
    //     if (sessionStorage.getItem("menu")) {
    //     } else sessionStorage.setItem("menu", "1");
    //
    // }, []);


    return <div className="admin-home">
        <div className="left-box">
            <div className="logo">
                <img onClick={() => navigate('/')} src="../images/logo2.png" alt=""/>
            </div>

            <div className="line"></div>

            <div className="admin-navbar">
                {
                    SiteMenus.map((item, index) => {
                        return <NavLink to={item.url} key={index}
                                        className={`nav-item ${({isActive}) => isActive ? "active" : ""}`}>
                            <img src={item.img} alt=""/>
                            <span> {item.name}</span>
                        </NavLink>
                    })
                }
            </div>
        </div>
        <div className="right-box">
            <div className="top-box">
                <div></div>
                <div className="title">
                    Admin panel
                </div>
                <div className="icons">
                    <div onClick={() => {
                        localStorage.removeItem('token');
                        window.location.pathname = "/";
                    }} className="exit"><img src="./images/logout.png" alt=""/></div>
                </div>
            </div>

            <div className="bottom-box">
                <Routes>
                    {
                        adminPageRoutes.map((route, index) => (
                            <Route key={index} {...route} />
                        ))
                    }
                </Routes>
            </div>
        </div>
    </div>
};

export default Admin