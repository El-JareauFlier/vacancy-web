import Sorting from "../components/Sorting";
import Tasks from "../components/Tasks";

const Home = () => {
    return (
        <>
            <section className="sidebar">
                <article className="logoContainer">
                    <h1 className="logoTitle">Intern<strong>Link</strong></h1>
                    <div className="search">
                        <div className="searchField">
                            <label htmlFor="searchPlaces"></label>
                            <input type="text" id="searchPlaces" name="searchPlaces" placeholder="location, place" />
                        </div>

                        <div className="searchField">
                            <label htmlFor="searchKeywords"></label>
                            <input type="text" id="searchKeywords" name="searchKeywords" placeholder="keywords" />
                        </div>
                    </div>
                    <button className="searchSubmit" type="submit">search</button>

                </article>

                <Sorting />
            </section>

            <section className="main">
                <article className="mainTitle">
                    <h1>Amount of interships</h1>
                    <div>
                        <label htmlFor="sorting"> based on:</label>
                        <select name="sorting" id="">
                            <option value="">new added</option>
                            <option value="">alphabetic</option>
                        </select>
                    </div>
                </article>

                <article className="mainContent">
                    <div className="Cards">
                        <img src="" alt="" />
                        <article className="CardsContainer">
                            <div>
                                <h2>Company Name</h2>
                                <p className="CardFont">Internship Title</p>
                            </div>

                            <p>tempus hendrerit eu et purus. Nullam aliquet dolor vel imperdiet accumsan. </p>

                            <div className="CardFlex">
                                <div>
                                    <p className="CardFont">Location</p>
                                    <p className="CardFont">Proffesion</p>
                                </div>
                                <a href="aboutUs.jsx">Read more...</a>
                            </div>
                        </article>
                    </div>
                    <Tasks />



                </article>
            </section>
        </>
    );
}

export default Home;