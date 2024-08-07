import CardAnime from "@/components/ui/CardAnime"
import Navbar from "@/components/ui/Navbar"
import { getAnimeById } from "@/lib/getData"
import { IconStarFilled } from "@tabler/icons-react"

interface Props{
    params: {
        id: number
    }
}

export default async function AnimeId({params} : Props) {
    const anime = await getAnimeById(params.id)
    return (
        <>
            <Navbar/>
            <div className="max-w-screen-xl flex mx-auto p-4 h-auto">
                <CardAnime
                    title={anime.title}
                    photo={anime.images.webp.large_image_url}
                    id={anime.mal_id}
                />
                <div>
                    <div className="max-w-screen-xl mx-auto px-4 pb-3 h-auto">
                        <p className="text-4xl font-black text-gray-900 dark:text-white pb-5">Synopsis</p>
                        <p className="text-xs text-gray-900 dark:text-white">{anime.synopsis}</p>
                    </div>
                    <div className="max-w-screen-xl flex flex-col  mx-auto px-4 h-auto">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-black text-gray-900 dark:text-white pr-2">Ratting</h1>
                            <IconStarFilled color="yellow"/>
                        </div>
                        <h1 className="text-2xl font-black text-gray-700 dark:text-white pr-2">{anime.score}</h1>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-xl flex mx-auto p-4 h-auto ">
            <iframe
                className="max-w-screen-xl flex mx-auto p-4"
                loading="lazy"
                width={'100%'}
                height={'600'}
                src={anime.trailer.embed_url}
            />
            </div>
        </>
    )
}