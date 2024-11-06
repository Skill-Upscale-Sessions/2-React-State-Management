import React from 'react'
import { ContentSection, HomepageContainerDarkBackground, ImageContainer } from '../../../styles/homePage'

function SampleSection() {
  return (
    <HomepageContainerDarkBackground height={"100vh"}>
        <ContentSection>
            <ImageContainer>
                <img src="https://placehold.co/600x400" alt="sample" />
                <h1>Sample Section</h1>
            </ImageContainer>
            <h1>
                This is a sample section that can be used to create a new section.
            </h1>
        </ContentSection>
    </HomepageContainerDarkBackground>
  )
}

export default SampleSection;