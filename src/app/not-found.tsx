import Header from "./components/header"
import DefaultBody from "./components/body"

export default function Code404() {
    return (
        <DefaultBody>
            <Header />
            <div className="grow w-full flex flex-col justify-center items-center">
                <p className="text-3xl text-white">404 Not Found</p>
            </div>
        </DefaultBody>
    )
}