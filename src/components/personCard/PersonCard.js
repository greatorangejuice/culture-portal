import React from 'react';
import Avatar from '../../components/Avatar/Avatar';
import Summary from '../../components/Description/Summary';
import AuthorOfTheDayLabel, { calculateAuthorOfTheDayIndex } from '../../components/AuthorOfTheDay/AuthorOfTheDay';
import { Link } from 'react-router-dom';
import './PersonCard.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import i18n from '../../i18n';

function personCard({ onButtonClick, onSearch }) {
  const term = '';

  function search(arr, searchWord) {
    return arr.filter((item) => item.name.indexOf(searchWord) > 0);
  }

  const visibleItems = term === '' ? onSearch : search(onSearch, term);

  const authorOftheDayIndex = calculateAuthorOfTheDayIndex();

  return visibleItems.map((item, index) => {
    const isAuthorOfTheDay = authorOftheDayIndex === index;
    return (
      <div
          className={`card-container ${isAuthorOfTheDay ? 'author-of-the-day' : ''}`}
          key={index}
      >
        <Card>
          <CardContent className="author-of-the-day__container">
            <div className="person-card-container">
              <Avatar data={item} />
              { isAuthorOfTheDay ? <AuthorOfTheDayLabel /> : '' }
              <div className="description-container">
                <Summary data={item} />
                <CardActions>
                  <Button size="small" variant="outlined">
                    <Link to="/personalpage" id={index} onClick={onButtonClick}>
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
  });
}

export default personCard;
