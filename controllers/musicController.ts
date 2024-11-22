import { Request, ResponseToolkit } from "@hapi/hapi";
import { musicRepository } from "../repositories/musicRepository"
import { musicModel } from "../models/musicModel";

export class musicController {
    repository:musicRepository = new musicRepository();
    getAllMusics = async () => {
        return await this.repository.getAllMusics()
    }
    
    createMusic = async ({payload}:Request, h:ResponseToolkit) => {
        const musicToBeCreated:musicModel = JSON.parse(JSON.stringify(payload))
        return await this.repository.createMusic(musicToBeCreated)
    }
    
    editMusic = async ({params: {id}, payload}:Request, h:ResponseToolkit) => {
        console.log(`Controller called:\nid: ${id}\npayload: ${payload}`)
        const musicToBeEdited:musicModel = JSON.parse(JSON.stringify(payload))
        return await this.repository.editMusic(Number(id), musicToBeEdited)
    }

    deleteMusic = async ({params: {id}}:Request, h:ResponseToolkit) => {
        return await this.repository.deleteMusic(Number(id))
    }
}