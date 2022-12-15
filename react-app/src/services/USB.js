class USB {
    constructor(){
        this.device = null;
    }

    connect(){
        // first check to see if device was previously paired
        // if not, prompt for device.
        window.navigator.usb.getDevices({
            filters: [{ vendorId: 10473 }] 
        }).then((results) => {
            if(results.length == 1){
                
            } else {
                window.navigator.usb.requestDevice({
                    filters: [{ vendorId: 10473 }] 
                }).then((device) => {
                    console.log('Paired & connected device.');
                }).catch((error) => { console.error(error); });
            }
        }).catch((error) => { console.error(error); });
    }
}

export default USB;