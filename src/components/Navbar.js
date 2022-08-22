import React,{useState,useEffect} from "react"
import {AppBar,Toolbar,Typography,Button,IconButton,Slide,styled,Box,Tab,Tabs,Stack} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import About from './About'
import TechStack from './TechStack'
import Work from './Work'
import DrawerComponent from "./Drawer"
import MobileDrawer from './MobileDrawer'





const Navbar= ({theme})=>{
    const [scrolling,setScrolling]=useState(false)
    const [scrollTop, setScrollTop]=useState(0)
    const[value,setValue]=useState(0)
    const[open,setOpen]=useState(false)
    const updateValue=(e,v)=>{
       
        setValue(v)
    }
    

const StyledToolbar=styled(Toolbar)(({theme})=>(
{
display:"flex",
justifyContent:"space-between"
}
))
const StyledBox=styled(Box)(({theme})=>(
{
display:"flex",
justifyContent:"space-evenly",
alignItems:"center"
}
))
const StyledNav=styled(AppBar)(({theme})=>(
{
backgroundColor:'white',
'z-index':10
}
))

    useEffect(()=>{
           function handleScroll(e){
        setScrollTop(e.target.documentElement.scrollTop)
        setScrolling(e.target.documentElement.scrollTop>scrollTop)
    }


        window.addEventListener('scroll',handleScroll)
        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }

    },[scrolling,scrollTop])

    useEffect(()=>{
       return  setScrolling((prev)=>prev!==scrolling)
    },[scrolling])



    return (
        <div   >
            <Slide in={!scrolling}>
         <StyledNav >
            <StyledToolbar sx={{flex:4}}>
                <StyledBox>
                <IconButton
               onClick={()=>setOpen((prev)=>!prev)}
                aria-label="Menu"
                sx={{display:{xs:"block",sm:"none"},color:'rgb(20, 15, 35)'}}
                >
                    <MenuIcon/>
                </IconButton>
                <Box sx={{display:'flex',flexDirection:'column'}}>
                 
                    <Typography variant='h5' component='h4'  sx={{color:"rgb(107, 20, 41)",fontWeight:'bold'}} >
                        WeCoGlobe
                  
              </Typography>

                </Box>
                
               
                </StyledBox>
                <StyledBox sx={{flex:4,display:{xs:'none',sm:'flex'}}}>
      <Tabs value={value} onChange={updateValue} >
        <Tab  sx={{color:'rgb(20, 15, 35)',fontWeight:'bold'}} label="About Us"/>
           <Tab  sx={{color:'rgb(20, 15, 35)',fontWeight:'bold'}}component={Button}  color='inherit' label="How we Work"/>
              <Tab sx={{color:'rgb(20, 15, 35)',fontWeight:'bold'}} color='inherit' label="Technology stack"/>
        </Tabs>              

                </StyledBox>
                <StyledBox  sx={{justifyContent:'space-evenly',flex:1}}>
                    

<Button  variant='contained' color="calm">Sign Up</Button>
                </StyledBox>
                
            </StyledToolbar>


         </StyledNav>
          </Slide>
          <Box sx={{marginTop:{xs:'60px',sm:'67px'}}}>
            <Stack direction='row' gap={36}>
<DrawerComponent />
<MobileDrawer open={open} setOpen={setOpen}/>
{value===0 && <About sx={{marginLeft:500,border:'2px solid red','z-index':100}} />}
{value===1 && <Work  />}
{value===2 && <TechStack />}
            </Stack>

          </Box>


        </div>
    )
}
export default Navbar