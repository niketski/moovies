import Hero from "../components/hero/Hero";
import bannerImage from '../assets/images/home-banner.jpg';

const Home = () => {
    const heroProps = {
        height: 800,
        bannerImage: bannerImage,
        bannerTitle: `Thor: Love and Thunder`,
        bannerDescription: "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
        ctaLink: '/'
    };

    return (
        <div>
            <Hero {...heroProps}/>
        </div>
    );
}

export default Home;