import React from 'react';
import './AuthorOfTheDay.css';
import authors from '../../data/authors';
import i18n from '../../i18n';

const AuthorOfTheDay = () => (
    <span className="author-of-the-day-card">{`${i18n.t('authorOfTheDay')} ${String.fromCodePoint(0x1F3C5)}`}</span>
);

export const calculateAuthorOfTheDayIndex = () => {
    const authorsCount = authors.length;
    const today = new Date().getDate();
    const currentDay = Number(localStorage.getItem('dayTracked'));
    if (currentDay !== today) {
        const newAuthorOfTheDayIndex = Math.floor(Math.random() * authorsCount);
        localStorage.setItem('authorOfTheDay', newAuthorOfTheDayIndex);
        localStorage.setItem('dayTracked', today);
        return newAuthorOfTheDayIndex;
    }
    return Number(localStorage.getItem('authorOfTheDay'));
};

export default AuthorOfTheDay;
