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
                    <div className="internshipCard">
                        <h2>Internship Title</h2>
                        <p>Company Name</p>
                        <p>Location</p>
                        <p>Duration</p>
                        <p>Start Date</p>
                        <p>End Date</p>
                        <p>Stipend</p>
                        <p>Posted On</p>
                    </div>
                </article>

                <article className="mainContent">
                    <div className="internshipCard">
                        <h2>Internship Title</h2>
                        <p>Company Name</p>
                        <p>Location</p>
                        <p>Duration</p>
                        <p>Start Date</p>
                        <p>End Date</p>
                        <p>Stipend</p>
                        <p>Posted On</p>
                    </div>
                </article>

                <article className="mainContent">
                    <div className="internshipCard">
                        <h2>Internship Title</h2>
                        <p>Company Name</p>
                        <p>Location</p>
                        <p>Duration</p>
                        <p>Start Date</p>
                        <p>End Date</p>
                        <p>Stipend</p>
                        <p>Posted On</p>
                    </div>
                </article>
            </section>
        </>
    );
}

export default Home;