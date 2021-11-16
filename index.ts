import express from 'express';


class Server {
    private app: express.Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
    }

    public listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: '+ this.port);
        })
    }
}

export default Server;