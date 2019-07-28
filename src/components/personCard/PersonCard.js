import React from 'react';
import Avatar from '../../components/Avatar/Avatar';
import Summary from '../../components/Description/Summary';
import data from '../../data/authors';
import { Link } from 'react-router-dom';
import './PersonCard.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

function personCard({ onButtonClick, onSearch }) {
  const term = '';

  function search(arr, searchWord) {
    return arr.filter((item) => item.name.indexOf(searchWord) > 0);
  }

  const visibleItems = term === '' ? onSearch : search(onSearch, term);

  return visibleItems.map((item, index) => {
    return (
      <div className="card-container" key={index}>
        <Card>
          <CardContent>
            <div className="person-card-container">
              <Avatar data={item} />
              <div className="description-container">
                <Summary data={item} />
                <CardActions>
                  <Button size="small" variant="outlined">
                    <Link to="/personalpage" id={index} onClick={onButtonClick}>
                      Узнать больше
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
