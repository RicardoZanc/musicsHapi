import { PrismaClient } from "@prisma/client";
import { musicModel } from "../models/musicModel";

export class musicRepository {

    prisma:PrismaClient = new PrismaClient();
    

    getAllMusics = async () => {
        const musics = await this.prisma.music.findMany();
        return musics;
    }

    createMusic = async (musicToBeCreated:musicModel) => {
        const music = await this.prisma.music.create({
         data:   {
                name: musicToBeCreated.name
            }
        }
        );
        return music;
    }

    editMusic = async (id:number, musicToBeEdited:musicModel) => {
       try { console.log(`Controller called:\nid: ${id}\nmscEdited: ${musicToBeEdited}`)
        const music = await this.prisma.music.update({
            where: {
                id: id,
            },
            data: {
                name: musicToBeEdited.name
            }
        });
        return music;
    } catch (e){
        console.log(e)
    }
    }

    deleteMusic = async (id:number) => {
        const music = await this.prisma.music.delete({
            where: {
                id: id
            }
        });
        return music;
    }
}