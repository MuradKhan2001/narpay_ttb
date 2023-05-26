import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";
import "./index.scss";
import "aos/dist/aos.css";
import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import uz from "./components/lng/uz/uz.json";
import ru from "./components/lng/ru/ru.json";
import Loader from "./components/loader/Loader";

const App = React.lazy(() => import('./components/app/App'));


i18next.use(initReactI18next).init({
    resources: {
        uz: {
            translation: uz,
        },
        ru: {
            translation: ru,
        },
    },
    lng: localStorage.getItem("lng") || "uz",
});

export default i18next


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <React.Suspense fallback={<Loader/>}>
            <Router>
                <App/>
            </Router>
        </React.Suspense>
    </React.StrictMode>
);
