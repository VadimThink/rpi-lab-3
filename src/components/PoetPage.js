import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { Grid, Box, Container, Typography } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import Slider from 'react-slick';
import { useParams } from 'react-router-dom';
import { poets } from '../poets.json';
import classes from '../styles/PoetPage.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useLanguage from '../hooks/useLanguage';

function Arrow({ next, onClick }) {
    return (
        <div onClick={onClick} className={`${classes.arrowWrapper} ${next ? classes.right : classes.left}`}>
            {next ? <ArrowForwardIos className={classes.arrow} /> : <ArrowBackIos className={classes.arrow} />}
        </div>
    );
}

function PoetPage() {
    const { id } = useParams();
    const { getLang } = useLanguage();
    const poet = poets[id];
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: classes.slider,
        arrows: true,
        // autoplay: true,
        nextArrow: <Arrow next={true} />,
        prevArrow: <Arrow />,
    };
    const lang = getLang();

    return (
        <Grid item xs={12} className={classes.main}>
            <Container maxWidth="lg">
                <Box className={classes.poetInfo}>
                    <img className={classes.media} src={poet.photo} title={poet.name[lang]} alt="poet" />
                    <Box className={classes.wrapper}>
                        <Typography component="h2" variant="h5" className={classes.name} gutterBottom>
                            {`${poet.name[lang]} (${poet.born} - ${poet.died})`}
                        </Typography>
                        <Typography variant="body2" component="p" className={classes.info}>
                            {poet.info[lang]}
                        </Typography>
                    </Box>
                </Box>
                <Timeline lineColor={'#ddd'}>
                    {poet.timeline.map(({ date, title, info }, i) => (
                        <TimelineItem key={i} dateText={date} style={{ color: '#e86971' }}>
                            <h3>{title[lang]}</h3>
                            <p className={classes.timeline}>{info[lang]}</p>
                        </TimelineItem>
                    ))}
                </Timeline>
                <Slider {...sliderSettings}>
                    {poet.slides.map((url, i) => (
                        <div key={i} className={classes.sliderItem}>
                            <img src={url} alt="loading" />
                        </div>
                    ))}
                </Slider>
                <iframe
                    className={classes.iframe}
                    src={`https://www.youtube.com/embed/${poet.video}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullScreen
                    title="video"
                ></iframe>
                <iframe src={`https://www.google.com/maps/embed?pb=${poet.location}`} title="map" className={classes.iframe} allowFullScreen="" loading="lazy"></iframe>
            </Container>
        </Grid>
    );
}

export default PoetPage;
