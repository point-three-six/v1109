class Client {
    constructor(){
        this.subscribers = {};
        this.socket = new WebSocket('ws://localhost:9000');

        this.socket.addEventListener('message', (event) => {
            let msg = JSON.parse(event.data);
            this.emit(msg.action, msg.payload);
        });

        setTimeout(() => this.emit('visitors', [{ id: 1, lastName: 'Wright', firstName: 'Jon', escort : 'Justin Hendrix', timeOut : 60 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', escort : 'Justin Hendrix', timeOut : 60  },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', escort : 'Justin Hendrix', timeOut : 60  },
        { id: 4, lastName: 'Stark', firstName: 'Arya', escort : 'Justin Hendrix', timeOut : 60  },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', escort : 'Justin Hendrix', timeOut : 60  },
        { id: 6, lastName: 'Melisandre', firstName: 'Ferrara', escort : 'Justin Hendrix', timeOut : 60  },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', escort : 'Justin Hendrix', timeOut : 60  }]),100);
    }

    emit(event, payload){
        for(let subscriber in this.subscribers){
            let subscribed = this.subscribers[subscriber];
            if(event in subscribed){
                subscribed[event](payload, event);
            }
        }
    }

    // subscribe to an event & provide callback function
    subscribe(event, subscriber, callback){
        if(!(subscriber in this.subscribers)){
            this.subscribers[subscriber] = {};
        }
        this.subscribers[subscriber][event] = callback;
    }
}

export default Client;