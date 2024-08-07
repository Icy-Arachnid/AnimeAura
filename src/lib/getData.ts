import { AnimeID } from "@/interfaces/AnimeById"
import { AnimeHome } from "@/interfaces/AnimeDashboard"
export const getAnimeScroll= async () => {
    try {
        const datos = await fetch(`https://api.jikan.moe/v4/anime?page=1100&limit=20&sort=desc`)
        const data = await datos.json() as AnimeHome
        const animes = data.data.map((ele) => {
            return {
                title: ele.title,
                photo: ele.images.webp.large_image_url,
                id: ele.mal_id
            }
        })

        return animes
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