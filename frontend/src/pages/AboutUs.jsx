const AboutUs = () => {
    return (
        <>
            <section className="sidebar">
                <div className="mapContainer">
                    {/* Placeholder for map - Use a map API or an image */}
                    <img src="path_to_map_image_or_embed_map_here" alt="Our Location" />
                </div>
                <div className="contactUs">
                    <h2>Contact Us</h2>
                    <p>Email: contact@ourwebsite.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Address: 123 Our Street, Our City, Our Country</p>
                </div>
            </section>
            <section className="main">
                <article className="aboutUs">
                    <h1>Welcome to Our Website</h1>
                    <p>Our website is dedicated to providing top-notch solutions for [your industry or focus]. With a passion for excellence and innovation, we strive to offer services/products that exceed expectations and make a real difference in our users' lives.</p>
                    <h2>Our Mission</h2>
                    <p>Our mission is to [insert mission statement here], by leveraging cutting-edge technology and personalized customer service. We believe in creating value for our users, empowering them to achieve more every day.</p>
                    <h2>Why Choose Us?</h2>
                    <ul>
                        <li><strong>Quality:</strong> Our commitment to quality ensures that we deliver only the best.</li>
                        <li><strong>Innovation:</strong> We continuously seek out new ways to enhance our offerings and deliver innovative solutions.</li>
                        <li><strong>Customer Focus:</strong> Our users are at the heart of everything we do, guiding our approach and services.</li>
                    </ul>
                    <h2>Meet the Team</h2>
                    <p>Our team consists of dedicated professionals from diverse backgrounds, all united by a common passion for [your industry or focus]. Meet the people who make it all happen:</p>
                    {/* Placeholder for team members - Consider adding photos and brief descriptions */}
                    <div className="teamContainer">
                        {/* Team members here */}
                    </div>
                </article>
            </section>
        </>
    );
}

export default AboutUs;