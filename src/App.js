import { ThemeProvider } from "styled-components";
import { Container } from "./Component/styles/Container.styled"
import Header from "./Component/Header";
import content from "./Component/content";
import Card from "./Component/Card";
import Footer from "./Component/Footer";
const theme={
  colors:{
    header:"voilet",
    body:"white",
    footer:"gray"

  },
  mobile:"768px",
}
function App(){
  return(
    <ThemeProvider theme={theme}>
       <>
    <Header/>
     <Container>
   
   {content.map((item,index)=>(
   <Card key={index} item={item}/>
   )
   )}
   </Container>
   <Footer/>
  
    </>
  

    </ThemeProvider>
  )
   
  
}
export  default App;