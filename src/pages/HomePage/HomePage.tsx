import React from 'react';
import { useDispatch } from 'react-redux';
import { setDemoStatus } from '../../actions';
import { useNavigate } from 'react-router-dom';
import { useViewportWidth } from '../../hooks/useViewportWidth';
import howAreYouFeelingDesktop from '../../assets/pageAssets/home/howAreYouFeelingDesktop.png';
import howAreYouFeelingMobile from '../../assets/pageAssets/home/howAreYouFeelingMobile.png';
import './HomePage.css';

const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isMobile } = useViewportWidth();
    const {
        REACT_APP_SPOTIFY_AUTHORIZE_URL: spotifyURL,
        REACT_APP_SPOTIFY_CLIENT_ID: cliendID,
        REACT_APP_SPOTIFY_REDIECT_URI: redirectURI,
        REACT_APP_SPOTIFY_SCOPES: spotifyScopes,
    }: any = process.env;

    const handleSpotifyLogin = (): void => {
        window.location.href = `${spotifyURL}?client_id=${cliendID}&scope=${encodeURIComponent(
            spotifyScopes
        )}&redirect_uri=${redirectURI}/redirect&response_type=token&show_dialog=true`;
    };

    const handleDemoLogin = (): void => {
        dispatch(setDemoStatus(true));
        navigate('/analyzing');
    };

    return (
        <main className="page-content">
            {isMobile ? (
                <img
                    className="home-image"
                    src={howAreYouFeelingMobile}
                    alt="How are you feeling?"
                />
            ) : (
                <img
                    className="home-image"
                    src={howAreYouFeelingDesktop}
                    alt="How are you feeling?"
                />
            )}
            <section className="home-content">
                <h1>A mood detector based on your recently played music.</h1>
                <button
                    className="spotify-login-button"
                    onClick={handleSpotifyLogin}
                >
                    Connect with Spotify
                </button>
                <h2>Don't have a Spotify account?</h2>
                <button className="demo-login-button" onClick={handleDemoLogin}>
                    View a Demo
                </button>
            </section>
        </main>
    );
};

export default HomePage;
