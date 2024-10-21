// src/components/Home.js
import React from 'react';
import { FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import './home.css'; // Подключаем стили для главной страницы

const Home = () => {
    return (
        <div className="home">
            {/* Заголовок и основная информация */}
            <section className="hero">
                <h1 className="hero-title">Autotrading Детейлинг Студио</h1>
                <p className="hero-subtitle">Профессиональный уход за вашим автомобилем</p>
            </section>

            {/* Информация об услугах детейлинга */}
            <section id="services" className="services">
                <div className="service-item">
                    <img src="dtlg.jpg" alt="Экстерьер Детейлинг" className="service-image" />
                    <h2>Экстерьер Детейлинг</h2>
                    <p>Профессиональная чистка, полировка и защита кузова вашего авто.</p>
                </div>
                <div className="service-item">
                    <img src="https://www.tonirovanie.ru/images/catalog/210728/50.jpg" alt="Интерьер Детейлинг" className="service-image" />
                    <h2>Интерьер Детейлинг</h2>
                    <p>Глубокая чистка и восстановление салона автомобиля.</p>
                </div>
                <div className="service-item">
                    <img src="https://drossel.ua/files/foto-v-tovare/keramika_3.jpg" alt="Керамическое покрытие" className="service-image" />
                    <h2>Керамическое покрытие</h2>
                    <p>Надежная защита и блеск на длительное время.</p>
                </div>
            </section>

            {/* Преимущества детейлинг студии */}
            <section className="info">
                <div className="info-item">
                    <h3>Качество</h3>
                    <p>Только проверенные материалы и профессиональное оборудование.</p>
                </div>
                <div className="info-item">
                    <h3>Опыт</h3>
                    <p>Опытные специалисты с многолетним стажем в сфере автодетейлинга.</p>
                </div>
                <div className="info-item">
                    <h3>Удобство</h3>
                    <p>Забота о вашем времени — мы работаем быстро и качественно.</p>
                </div>
            </section>

            {/* Футер с контактной информацией */}
            <footer className="footer">
                <p>© 2024 Autotrading Детейлинг Студио. Все права защищены.</p>
                <p>Телефон: +7 (708) 098-00-07 | Email: info@autotrading.kz</p>
                <p>Адрес: г. Шымкент, проспект Абылайхана, 77</p>
                <div className="footer-icons">
                        <a href="https://www.instagram.com/autotrading_kz?igsh=MWsyNnMxc2w2aGFvbg==" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="footer-icon" />
                        </a>
                        <a href="https://2gis.kz/shymkent/geo/70000001080484124" target="_blank" rel="noopener noreferrer">
                            <FaMapMarkerAlt className="footer-icon" />
                        </a>
                    </div>
            </footer>
        </div>
    );
};

export default Home;
