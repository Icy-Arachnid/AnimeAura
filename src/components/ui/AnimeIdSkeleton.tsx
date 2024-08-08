import { CardAnimeSkeleton } from "./CardAnimeSkeleton"
import { Skeleton } from "./skeleton"

export const AnimeIdSkeleton = () => {
    return (
        <>
            <div className="max-w-screen-xl flex mx-auto p-4 h-auto">
                <CardAnimeSkeleton/>
            <div>
                <div className="max-w-screen-xl mx-auto px-4 pb-3 h-auto">
                    <Skeleton className="h-8 w-[120px] bg-slate-600 mt-2"/>
                    <Skeleton className="h-12 w-[600px] bg-slate-600 mt-2"/>
                </div>
                <div className="max-w-screen-xl flex flex-col  mx-auto px-4 h-auto">
                    <div className="flex items-center">
                        <Skeleton className="h-8 w-[120px] bg-slate-600 mt-2"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="max-w-screen-xl flex items-center justify-center mx-auto p-4 h-auto ">
            <Skeleton className="w-full h-[600px] bg-slate-600 mx-auto p-4"/>
        </div>
        </>
    )
}