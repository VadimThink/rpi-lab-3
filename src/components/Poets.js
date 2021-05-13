import React, { useState } from 'react';
import { Container, Grid, makeStyles, withWidth } from '@material-ui/core';
import PoetCard from './PoetCard';
import { poets } from '../poets.json';
import useLanguage from '../hooks/useLanguage';

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

function Poets({ width }) {
    const [searchValue, setSearchValue] = useState('');
    const { getLang } = useLanguage();
    const classes = useStyles();
    const lang = getLang();

    function handleChange(e) {
        setSearchValue(e.target.value);
    }

    return (
        <Grid item xs={12} style={{ paddingBottom: 16 }}>
            {/* <SearchMenu /> */}
            <input type="search" autoComplete="off" value={searchValue} onChange={handleChange} placeholder="Поиск" />
            <Container maxWidth="md" className={classes.container} disableGutters={true}>
                <Grid item xs={12} spacing={width === 'xs' ? 0 : 3} container direction="row" justify="center" className={classes.itemContainer}>
                    {poets
                        .filter(({ name }) => new RegExp(`${searchValue}`, 'gi').test(name[lang]))
                        .map(({ name, photo, description }, i) => (
                            <PoetCard key={i} name={name[lang]} photo={photo} index={i}>
                                {description[lang]}
                            </PoetCard>
                        ))}
                </Grid>
            </Container>
        </Grid>
    );
}

export default withWidth()(Poets);
