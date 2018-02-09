import * as http from 'http';
import app from '../app';

const port = parseInt(process.env.PORT, 10) || 4000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
console.log(`Server up on port ${port}`);
