import { ServerRoute } from "@hapi/hapi";
import { musicController } from "../controllers/musicController";
export class MusicRoutes {

    controller:musicController = new musicController();

    routes: ServerRoute[] = [
        {
            method: 'GET',
            path: '/music',
            handler: this.controller.getAllMusics
        },
        {
            method: 'POST',
            path: '/music',
            handler: this.controller.createMusic
        },
        {
            method: 'PUT',
            path: '/music/{id}',
            handler: this.controller.editMusic
        },
        {
            method: 'delete',
            path: '/music/{id}',
            handler: this.controller.deleteMusic
        }
    ]
}