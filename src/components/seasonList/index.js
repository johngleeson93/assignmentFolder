import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { number } from 'prop-types';
import { useParams } from "react-router";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SeasonList( {numberOfSeasons} ) {
    const classes = useStyles();
    let { id } = useParams();
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    let seasonItems = [];

    for (let n = 1; n<=numberOfSeasons; n++){
        let label = `Season ${n}`;
        let link = `/tvShows/${id}/season/${n}`;
        seasonItems.push(<a href={link}>
                <ListItem
                    button
                    selected={selectedIndex === n}
                    onClick={(event) => handleListItemClick(event, n)}
                >
                    <ListItemText primary={label} />
                </ListItem>
                <Divider></Divider>
                </a>)
    };


    return (
        <div className={classes.root}>
            {seasonItems.map((e) => (e))}
        </div>
    )
}