import { Suspense } from "react"
import AnimeInfo from "@/components/ui/AnimeInfo"
import Navbar from "@/components/ui/Navbar"

interface Props{
    params: {
        id: number
    }
}

export default function AnimeId({ params } : Props) {
    return (
        <>
            <Navbar/>
            <AnimeInfo id={params.id}/>
        </>
    )
}