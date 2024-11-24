import { PrismaClient } from "@prisma/client";
import { musicModel } from "../models/musicModel";

export class musicRepository {

    prisma:PrismaClient = new PrismaClient();
    

    getAllMusics = async () => {
        try { 
            const musics = await this.prisma.music.findMany();
            return musics;
        } catch (e) {
            console.log("Erro: ", e)
        }
    }

    createMusic = async (musicToBeCreated:musicModel) => {
       try { 
        const music = await this.prisma.music.create({
            data:   {
                    name: musicToBeCreated.name
                }
        }
        );
        return music;
    } catch (e) {
        console.log("Erro: ", e)
    }
    }

    editMusic = async (id:number, musicToBeEdited:musicModel) => {
       try { 
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
        console.log("Erro: ", e)
    }
    }

    deleteMusic = async (id:number) => {
        try { 
            const music = await this.prisma.music.delete({
                where: {
                    id: id
                }
            });
            return music;
        } catch (e) {
            console.log("Erro: ", e)
        }
    }
}