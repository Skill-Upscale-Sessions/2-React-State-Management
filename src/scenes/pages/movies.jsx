import React from 'react'
import { ContentSection, HomepageContainerDarkBackground, ImageContainer } from '../../styles/pageStyles'
import { Typography } from '@mui/material';

function MoviesPage() {
    const movies = [
        {
            title: "The Godfather",
            year: 1972,
            director: "Francis Ford Coppola",
            genre: "Crime, Drama",
            rating: 9.2,
            description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
        },
        {
            title: "The Shawshank Redemption",
            year: 1994,
            director: "Frank Darabont",
            genre: "Drama",
            rating: 9.3,
            description: "Two prisoners bond over a number of years, finding solace and eventual redemption through acts of common decency."
        },
    ]
  return (
    <HomepageContainerDarkBackground height={"100vh"}>
      <Typography variant="h1">MOVIES PAGE</Typography>
        <ContentSection>
            {movies.map((movie, index) => {
                return (
                    <ImageContainer key={index}>
                        <img src="https://placehold.co/400x300" alt="sample" />
                        <Typography variant='h2'>{movie.title}</Typography>
                        <Typography variant='p' maxWidth={"400px"} textAlign={"justify"}>{movie.description}</Typography>
                    </ImageContainer>
                )
            })}
        </ContentSection>
    </HomepageContainerDarkBackground>
  )
}

export default MoviesPage;