import { getAnimeScroll } from "@/lib/getData";
import Navbar from "./Navbar";
import CardAnime from "./CardAnime";

export default async function Dashboard() {

    const animes = await getAnimeScroll()

    return (
        <>
            <Navbar/>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-auto">
                {animes.map((ele, index) => (
                    <CardAnime title={ele.title} photo={ele.photo} id={ele.id}/>
                ))}
            </div>
        </>
    )
}