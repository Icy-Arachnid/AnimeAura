
import { getAnimeScroll } from "@/lib/getData";
import Navbar from "./Navbar";
import CardAnime from "./CardAnime";
import { Pagination } from "./Pagination";


interface Props {
    searchParams: {
        id?: string
    }
}

export default async function Dashboard({searchParams}: Props) {

    const {animes, totalPage} = await getAnimeScroll(searchParams.id)
    console.log(searchParams.id)

    return (
        <>
            <Navbar/>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-auto">
                {animes.map((ele, index) => (
                    <CardAnime title={ele.title} photo={ele.photo} id={ele.id}/>
                ))}
            </div>
            <Pagination totalPages={totalPage}/>
        </>
    )
}