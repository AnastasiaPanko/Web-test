import React from 'react'
import MyButton from '../UI/MyButton/MyButton';
import classes from './home.module.css'

const Home = () => {
    return <div className={classes.home}>
        <h2 className={classes.caption}>Web development project</h2>
        <h2 className={classes.caption_note}>Very suitable to support all web development projects</h2>
        <div className={classes.home_button}>
            <MyButton className={classes.helpful_info}>OUR SERVICES</MyButton>
            <MyButton className={classes.helpful_info}>HIRE IS NOW</MyButton>
        </div>
    </div>;
};

export default Home;
