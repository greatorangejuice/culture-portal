import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import './WorkList.css';
import i18n from '../../i18n';

const WorkList = ({ data: { works } }) => {
    return (
        <Fragment>
            <Typography className="work-list__title" variant="h5" component="h4">
                {i18n.t('workList')} 
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>{i18n.t('work')} </TableCell>
                        <TableCell>{i18n.t('publicationYear')} </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { works.map(({ name, publishYear }, index) => {
                        return (
                            <TableRow key={name}>
                                <TableCell>{ name }</TableCell>
                                <TableCell>{ publishYear }</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Fragment>
    );
};

WorkList.propTypes = {
    data: PropTypes.shape({
        works: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                publishYear: PropTypes.string.isRequired,
            }).isRequired
        ).isRequired,
    }).isRequired,
};

export default WorkList;
