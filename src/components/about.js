import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className="main">
            <div className="main__item">
                <h3 className="main__title">Неліктен бізді таңдау керек?</h3>
                <p className="main__text">
                    Біз аптасына 7 күн 24 сағат, жылына 365 күн жұмыс істейміз.<br />
                    Егер сізде мәселе болса, біз оны міндетті түрде шешеміз. Біз 100% жұмыс істейміз, бізде қорқатын ештеңе жоқ.<br />
                    Бізде үнемі жеңілдіктер мен акциялар бар. Сіз әрқашан өзіңізге қолайлы нәрсені таба аласыз.<br />
                    Кейде тапсырыспен бірге тосын сый жібереміз.
                </p>
                <a href="https://www.instagram.com/showroom.aminka/" className="link">
                    Есептеу және тапсырыс жасау
                </a>
            </div>
        </div>
    );
};

export default About;
