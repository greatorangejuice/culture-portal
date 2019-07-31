import React from 'react';
import './AuthorOfTheDay.css';
import authors from '../../data/authors';

const AuthorOfTheDay = () => (
    <span className="author-of-the-day-card">{`Автор дня ${String.fromCodePoint(0x1F3C5)}`}</span>
);

export const calculateAuthorOfTheDayIndex = () => {
    const authorsCount = authors.length;
    const today = new Date().getDate();
    const currentDay = Number(localStorage.getItem('dayTracked'));
    if (!currentDay) {
        localStorage.setItem('dayTracked', today);
    }
    if (currentDay !== today) {
        const newAuthorOfTheDayIndex = Math.floor(Math.random() * authorsCount);
        localStorage.setItem('authorOfTheDay', newAuthorOfTheDayIndex);
        return newAuthorOfTheDayIndex;
    }
    return Number(localStorage.getItem('authorOfTheDay'));
};

export default AuthorOfTheDay;
