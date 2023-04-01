import React from 'react'
import { StyledHeader,Nav,Logo ,Image} from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Button } from './styles/Button.styled'
import { Flex } from './styles/Flex.styled'


export default function Header() {
  return (
   <StyledHeader >
    <Container>
   <Nav>
    <Logo src="img3.png" alt=""/>
    <Button>Try It Free</Button>
   </Nav>
   <Flex>
    <div>
      <h1>
        Build The Community Your Fans Will Love
      </h1>
    
    <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. 
     Dolorem neque quas quod magni at quisquam, harum magnam atque, 
     ea ipsa tempore excepturi nam labore eaque cum fugiat dolor, libero in 
     repudiandae voluptas? Incidunt ex voluptate aperiam error dicta expedita magnam ad, itaque 
     quidem totam, earum vero adipisci accusantium obcaecati labore?

    </p>
    <Button bg="#ff0099" color="#fff">
      Get Started For Free

    </Button>
    </div>
    <Image src="img2.png" alt=""/>
   </Flex>
    </Container>
    
   </StyledHeader>
  )
}

