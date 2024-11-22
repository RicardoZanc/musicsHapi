import * as Hapi from '@hapi/hapi';
import { MusicRoutes } from './routes/musicRoutes';

const musicRoutes:MusicRoutes = new MusicRoutes()

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route(musicRoutes.routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();