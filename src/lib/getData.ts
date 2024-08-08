import { AnimeID } from "@/interfaces/AnimeById"
import { AnimeHome } from "@/interfaces/AnimeDashboard"



export const getAnimeScroll= async (id?: string) => {
    const page = id || '1'
    try {
        const datos = await fetch(`https://api.jikan.moe/v4/anime?page=${page}&limit=20&sort=desc`)
        const data = await datos.json() as AnimeHome
        const animes = data.data.map((ele) => {
            return {
                title: ele.title,
                photo: ele.images.webp.large_image_url,
                id: ele.mal_id
            }
        })

        return {
            animes: animes,
            totalPage: data.pagination.items.total
        }
    } catch (error) {
        console.log(error)
        throw('Error al seleccionar los animes')
    }
}


export const getAnimeById = async (id: number) => {
    try {
        const datos = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
        const data = await datos.json() as AnimeID
        const anime = data.data

        return anime
    } catch (error) {
        console.log(error)
        throw('Error al seleccionar los animes')
    }
}