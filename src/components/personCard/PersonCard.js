import React, { Fragment } from 'react';
import Avatar from '../../components/Avatar/Avatar';
import Summary from '../../components/Description/Summary';
import AuthorOfTheDayLabel, { calculateAuthorOfTheDayIndex } from '../../components/AuthorOfTheDay/AuthorOfTheDay';
import { Link } from 'react-router-dom';
import './PersonCard.css';
import data from '../../data/authors';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import i18n from '../../i18n';

function CardContainer({ isAuthorOfTheDay, key, authorId, onClick, item }) {
  return (
      <div className={`card-container ${isAuthorOfTheDay ? 'author-of-the-day' : ''}`} key={key}>
        <Card>
          <CardContent className="author-of-the-day__container">
            <div className="person-card-container">
              <Avatar data={item} />
              {isAuthorOfTheDay ? <AuthorOfTheDayLabel /> : ''}
              <div className="description-container">
                <Summary data={item} />
                <CardActions>
                  <Button size="small" variant="outlined">
                    <Link to="/personalpage" id={authorId} onClick={onClick}>
                      {i18n.t('learnMore')}
                    </Link>
                  </Button>
                </CardActions>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
  );
}

function personCards({ onButtonClick, onSearch }) {
  const term = '';

  function search(arr, searchWord) {
    return arr.filter((item) => item.name.indexOf(searchWord) > 0);
  }

  const visibleItems = term === '' ? onSearch : search(onSearch, term);

  const authorOftheDayIndex = calculateAuthorOfTheDayIndex();
  let authorOfTheDay = '';

  const authors = visibleItems.map((item, index) => {
    const isAuthorOfTheDay = data[authorOftheDayIndex].name === visibleItems[index].name;
    if (isAuthorOfTheDay) {
      authorOfTheDay = (
          <CardContainer
              isAuthorOfTheDay
              key={index}
              authorId={item.id - 1}
              onClick={onButtonClick}
              item={item}
          />
      );
      return '';
    }
    return (
        <CardContainer
            key={index}
            authorId={item.id - 1}
            onClick={onButtonClick}
            item={item}
        />
    );
  });

  return (
      <Fragment>
        {authorOfTheDay}
        {authors}
      </Fragment>
  );
}

export default personCards;
