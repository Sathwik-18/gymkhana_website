import React from 'react';
import './ClubsCarousell.css';

const clubData = [
    { logo: 'aaina.png', name: 'Aaina - Dramatics Club', description: 'Express yourself through theatre and drama. Explore acting, stagecraft, and storytelling.' },
    { logo: 'aeromodelling.jpg', name: 'Aeromodelling Club', description: 'Design, build, and fly model aircraft. Learn about aerodynamics and aviation.' },
    { logo: 'alphad.jpg', name: 'Alphad - Competitive Programming Club', description: 'Enhance your coding skills and compete in programming contests.' },
    { logo: 'aquatics.jpg', name: 'Aquatics Club', description: 'Dive into swimming and water sports. Improve your skills and enjoy aquatic fitness.' },
    { logo: 'astronomy.jpg', name: 'Astronomy Club', description: 'Explore the cosmos, learn about stars, planets, and galaxies through observation and discussions.' },
    { logo: 'athlectics.png', name: 'Athletics Club', description: 'Participate in track and field events, improve your fitness, and compete in athletics.' },
    { logo: 'avana.png', name: 'Avana - Adventure and Nature Club', description: 'Explore nature, go on treks and adventures, and promote environmental awareness.' },
    { logo: 'badminton.png', name: 'Badminton Club', description: 'Play badminton, improve your game, and participate in tournaments.' },
    { logo: 'basketball.png', name: 'Basketball Club', description: 'Play basketball, develop teamwork, and compete in basketball events.' },
    { logo: 'cae.png', name: 'CAE - Club for Automotive Enthusiasts', description: 'For automotive enthusiasts, learn about vehicle engineering, design, and technology.' },
    { logo: 'cfa.jpg', name: 'CFA - Creative Fine Arts Club', description: 'Unleash your creativity through painting, drawing, sculpting, and other fine arts.' },
    { logo: 'chess.jpg', name: 'Chess Club', description: 'Sharpen your mind with chess, improve your strategy, and compete in chess tournaments.' },
    { logo: 'cinephiles.jpg', name: 'Cinephiles - Movie and Film Club', description: 'Watch and discuss films, explore cinema history, and maybe even create your own movies.' },
    { logo: 'concreate.jpg', name: 'Concreate - Civil Engineering Club', description: 'Delve into civil engineering concepts, structural design, and infrastructure projects.' },
    { logo: 'cricket.jpg', name: 'Cricket Club', description: 'Play cricket, hone your skills, and participate in cricket matches and leagues.' },
    { logo: 'cynaptics.jpg', name: 'Cynaptics - Psychology Club', description: 'Explore the fascinating world of psychology, behavior, and mental processes.' },
    { logo: 'debsoc.jpg', name: 'DebSoc - Debating Society', description: 'Develop your debating and public speaking skills, engage in discussions and competitions.' },
    { logo: 'ebsb.png', name: 'EBSB - Ek Bharat Shreshtha Bharat Club', description: 'Promote cultural exchange and understanding between different states of India.' },
    { logo: 'electronics.png', name: 'Electronics Club', description: 'Experiment with electronics, build circuits, and learn about electronic components and systems.' },
    { logo: 'football.jpg', name: 'Football Club', description: 'Play football, improve your fitness, and participate in football tournaments and friendly matches.' },
    { logo: 'gaming.png', name: 'Gaming Club', description: 'Enjoy video games, board games, and tabletop games with fellow gaming enthusiasts.' },
    { logo: 'gdsc.png', name: 'GDSC - Google Developer Student Club', description: 'Learn about Google technologies, web development, and mobile app development.' },
    { logo: 'ivdc.jpg', name: 'IVDC - Internet and Video Development Club', description: 'Explore web development, video creation, and online content creation technologies.' },
    { logo: 'kalakriti.png', name: 'Kalakriti - Craft and DIY Club', description: 'Get crafty with DIY projects, arts and crafts, and creative handmade items.' },
    { logo: 'literary.jpg', name: 'Literary Club', description: 'Engage with literature, poetry, writing, and storytelling. Participate in literary events.' },
    { logo: 'metacryst.png', name: 'Metacryst - Crystallography Club', description: 'Explore the world of crystals, their structures, properties, and applications.' },
    { logo: 'music.jpg', name: 'Music Club', description: 'Express your musical talents, sing, play instruments, and enjoy musical performances.' },
    { logo: 'mystichues.png', name: 'Mystic Hues - Fine Arts and Photography Club', description: 'Combine fine arts with photography, explore visual storytelling, and capture creative moments.' },
    { logo: 'pclub.png', name: 'Photography Club', description: 'Develop your photography skills, learn techniques, and capture stunning images.' },
    { logo: 'prakriti.jpg', name: 'Prakriti - Environment and Sustainability Club', description: 'Promote environmental awareness, sustainability, and eco-friendly practices on campus.' },
    { logo: 'quantum_computing.jpg', name: 'Quantum Computing Club', description: 'Dive into the exciting field of quantum computing, learn about qubits and quantum algorithms.' },
    { logo: 'quiz.jpg', name: 'Quiz Club', description: 'Test your knowledge, participate in quizzes, and learn new facts across various domains.' },
    { logo: 'robotics.jpg', name: 'Robotics Club', description: 'Build robots, learn about robotics technologies, and compete in robotics challenges.' },
    { logo: 'srijan.jpg', name: 'Srijan - Social and Cultural Club', description: 'Organize social and cultural events, promote traditions, and celebrate diversity on campus.' },
    { logo: 'tennis.jpg', name: 'Tennis Club', description: 'Play tennis, improve your skills, and participate in tennis tournaments and practice sessions.' },
    { logo: 'TT.png', name: 'TT - Table Tennis Club', description: 'Play table tennis (ping pong), hone your reflexes, and compete in TT matches.' },
    { logo: 'vlr.png', name: 'VLR - Vivekananda Leadership and Reading Club', description: 'Discuss leadership principles, read inspiring works, and promote personal development.' },
    { logo: 'volley_ball.png', name: 'Volleyball Club', description: 'Play volleyball, develop teamwork, and participate in volleyball games and tournaments.' },
    { logo: 'web_team.png', name: 'Web Team - Web Development Club', description: 'Learn web development, design websites, and build web applications and projects.' }
];

const ClubsCarousel = () => {
    return (
        <div className="clubs-carousel-container">
            <h2>Our Clubs</h2>
            <div className="clubs-carousel">
                <div className="carousel-track">
                    {clubData.map((club, index) => (
                        <div
                            key={index}
                            className="club-card"
                        >
                            <div className="club-logo-wrapper">
                                <img src={club.logo} alt={`${club.name} Logo`} className="club-logo-image" />
                            </div>
                            <div className="club-info-box">
                                <h3 className="club-name">{club.name}</h3>
                                <p className="club-description">{club.description}</p>
                            </div>
                        </div>
                    ))}
                    {clubData.map((club, index) => (
                        <div
                            key={`duplicate-${index}`}
                            className="club-card duplicate"
                        >
                            <div className="club-logo-wrapper">
                                <img src={club.logo} alt={`${club.name} Logo`} className="club-logo-image" />
                            </div>
                            <div className="club-info-box">
                                <h3 className="club-name">{club.name}</h3>
                                <p className="club-description">{club.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClubsCarousel;
