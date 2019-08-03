import React from 'react';
import i18n from '../../i18n';
import '../LanguageSelector/LanguageSelector.css';
import Button from '@material-ui/core/Button';
import { withNamespaces } from 'react-i18next';

function LanguageSelector ({ t }) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div>
      <Button onClick={() => changeLanguage('ru')}>Русский</Button>
      <Button onClick={() => changeLanguage('en')}>English</Button>
    </div>
  )
}

export default withNamespaces()(LanguageSelector);