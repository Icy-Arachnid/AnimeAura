"use client";

import { useState, useEffect } from "react";
import CardAnime from "@/components/ui/CardAnime";
import Navbar from "@/components/ui/Navbar";
import { Pagination } from "@/components/ui/Pagination";
import { getAnimeScroll } from "@/lib/getData";
import Login from "@/components/ui/Login";

interface Props {
  searchParams: {
    page?: string;
  };
}

export default function Home({ searchParams }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [animes, setAnimes] = useState<any[]>([]);
  const [totalPage, setTotalPage] = useState(1);

  const handleLogin = (username: string, password: string) => {
    const adminUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
    const userUsername = process.env.NEXT_PUBLIC_USER_USERNAME;
    const userPassword = process.env.NEXT_PUBLIC_USER_PASSWORD;

    if (
      (username === adminUsername && password === adminPassword) ||
      (username === userUsername && password === userPassword)
    ) {
      setIsLoggedIn(true);
    } else {
      alert("Credenciales incorrectas");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { animes, totalPage } = await getAnimeScroll(searchParams.page);
      setAnimes(animes);
      setTotalPage(totalPage);
    };

    if (isLoggedIn) {
      fetchData();
    }
  }, [isLoggedIn, searchParams.page]);

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-auto">
        {animes.map((anime) => (
          <CardAnime key={anime.id} title={anime.title} photo={anime.photo} id={anime.id} />
        ))}
      </div>
      <Pagination totalPages={totalPage} />
    </>
  );
}
