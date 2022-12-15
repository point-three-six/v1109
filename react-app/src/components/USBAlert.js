
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function USBAlert(props){
    return (
        <Dialog
            open={props.open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Enable Barcode Scanner
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                The barcode scanner requires permissions. Please press the button below to enable the barcode scanner.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={props.onClose} autoFocus>
                Enable Scanner
            </Button>
            </DialogActions>
        </Dialog>
    );
}

export default USBAlert;