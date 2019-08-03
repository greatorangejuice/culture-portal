import React from 'react';
import './Footer.css';
import Typography from '@material-ui/core/Typography';
import i18n from '../../i18n';

function Footer() {
    return (
        <footer>
            <Typography variant="body2" align="center" color="inherit">
                {i18n.t('footer')}    
            </Typography>
        </footer>
    );
}

export default Footer;
