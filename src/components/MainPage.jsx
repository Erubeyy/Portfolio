import {TopNav} from "./common/TopNav";

export const MainPage = () => {

    return(
        <div className="child-container">
            <div className="main-page flex justify-center items-center">
                <div className="rounded-main-page">
                    <TopNav/>
                    <h1 className="name-titles">Erubey</h1>
                    <h1 className="name-titles">Cázares</h1>
                    <h2 className="desc-title">Software Developer</h2>
                </div>
            </div>
        </div>
    )
}