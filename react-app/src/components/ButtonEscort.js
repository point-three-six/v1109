//import { ThemeProvider, createTheme } from '@mui/system';
import Fab from '@mui/material/Fab';
import NearMeIcon from '@mui/icons-material/NearMe';


function ButtonEscort(props){
    return (
        <Fab sx={{
            position : 'fixed',
            bottom : '80px',
            right : '45px',
            backgroundColor : 'rgb(138, 13, 13)',
            color : 'whitesmoke',
            "&:hover": {
                backgroundColor: "rgb(199, 116, 116)"
            }

        }} variant="extended" onClick={props.onClick}>
            <NearMeIcon sx={{ mr: 1 }} />
            Escort
        </Fab>
    );
}

export default ButtonEscort;