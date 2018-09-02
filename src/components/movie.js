import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import imdb from '../imdb-icon.png'

class Movie extends Component {

    constructor() {
        super()
        this.state = {
            movieList: []
        }
    }
    async componentDidMount() {
        let MovieListRequest = await fetch('http://starlord.hackerearth.com/movieslisting')
        let MovieList = await MovieListRequest.json()
        console.log(MovieList)
        this.setState({ movieList: MovieList })
    }
    render() {
        return (
            <MultiThemeProvider>
                <List>
                    <Subheader>Recent chats</Subheader>
                    {
                        this.state.movieList.map((movie) => {
                            return <ListItem
                                primaryText={movie.movie_title}
                                leftAvatar={<a href={movie.movie_imdb_link} target="_blank"><Avatar src={imdb} /></a>}
                                rightIcon={<CommunicationChatBubble />}
                            />
                        })
                    }
                </List>
            </MultiThemeProvider>
        );
    }
}

export default Movie;
