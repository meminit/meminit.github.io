'use client'
import { useEffect, useState, useRef } from "react"

type movie = {
    combo: string,
    name: string
}

type moviesList = movie[]

export default function tool() {

    function getRandomInt(max: number) {
        console.log(max)
        return Math.floor(Math.random() * max);
    }

    const [movieList, setMovieList] = useState<moviesList>([])
    const [movieID, setMovieID] = useState<number>(0)
    const [emojicombo, setEmojiCombo] = useState<string>()
    const [movieName, setMovieName] = useState<string>()
    const [displayAnswer, setDisplayAnswer] = useState<boolean>(false)
    const input = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const loadMovies = async () => {
            const [movieRes] = await Promise.all([fetch('/static/json/guess-the-movie-by-the-emoji/movies.json')])

            const movieJson: moviesList = await movieRes.json()

            setMovieList(movieJson)



            let movieId = getRandomInt(movieJson.length)

            setEmojiCombo(movieJson[movieId].combo)
            setMovieName(movieJson[movieId].name)

        }

        loadMovies()
    }, [])

    function changeMovie() {

        if (movieList.length === 0) return;

        if (input.current) { input.current.value = '' }
        setDisplayAnswer(true)

        setTimeout(() => {

            const length = movieList.length
            setMovieID(getRandomInt(length))

            setEmojiCombo(movieList[movieID].combo)
            setMovieName(movieList[movieID].name)

            console.log(displayAnswer)
            setDisplayAnswer(false)
        }, 1000);
    }

    return (
        <>
            <div className="flex flex-col gap-5">
                <div className="w-full rounded-2xl aspect-video bg-red-500 flex flex-col items-center justify-center gap-5 relative">
                    <p className={`not-md:text-3xl text-4xl`}>{emojicombo ? 'What movie is it?' : 'Loading...'}</p>
                    <p className={`not-md:text-5xl ${emojicombo ? 'text-9xl not-md:text-5xl' : 'text-5xl'}`}>{emojicombo ? emojicombo : 'Loading...'}</p>
                    <div className={`bg-blue-500 w-full h-full absolute z-2 rounded-2xl flex flex-col items-center justify-center ${displayAnswer ? 'block' : 'hidden'}`}>
                        <p className={`not-md:text-2xl text-5xl text-center`}>The movie was {movieName}!</p>
                    </div>
                </div>
                <div className="flex flex-row gap-2">
                    <input className="outline-0 bg-zinc-950 p-2 rounded-lg w-full" ref={input} type="text" placeholder="What's that movie?" onKeyDown={(e) => {
                        if (e.key == 'Enter') { changeMovie() }
                    }}></input>
                    <button className="w-40 text-zinc-500 bg-zinc-950 p-2 rounded-lg" onClick={(e) => { changeMovie(); }}><i className="fa-solid fa-lightbulb"></i> Submit Guess</button>
                </div>
            </div>
        </>
    )
}