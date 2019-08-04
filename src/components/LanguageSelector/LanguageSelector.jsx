import React from 'react';
import i18n from '../../i18n';
import './LanguageSelector.css';
import Button from '@material-ui/core/Button';
import { withNamespaces } from 'react-i18next';

function LanguageSelector({ t, changeLang }) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    changeLang(lng);
  };

  return (
    <div className="lang">
      <Button onClick={() => changeLanguage('ru')}>Русский</Button>
      <Button onClick={() => changeLanguage('by')}>Беларуская</Button>
      <Button onClick={() => changeLanguage('en')}>English</Button>
    </div>
  );
}

export default withNamespaces()(LanguageSelector);
