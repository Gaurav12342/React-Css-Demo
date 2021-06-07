import React from 'react';
import '../styles/style.scss'
import '../styles/_home.scss'
import '../styles/_utilities.scss'
import '../styles/_grid-style.scss'
import '../styles/_buttons.scss'
import '../styles/_compositions.scss'
import '../styles/_features-box.scss'
import '../styles/_card.scss'
import '../styles/_story.scss'
import '../styles/_bg-video.scss'
import '../styles/_form.scss'
import image from '../Images/image.jpg'
import VideoDemo
    from '../videos/stock-footage-people-in-the-park-happy-family-silhouette-walk-at-sunset-mom-dad-and-daughters-walk-holding.mp4';
import computerImage from '../Images/computers.jpeg'
import softwareDevelopment from '../Images/software-engineering.png';
import logo from '../Images/logo.png';
import forestImage from '../Images/forest-1.jpeg'


const WelcomePage = () => {
    return (
        <>
            {/* Header section */}
            <div className="header">
                <div className="logo-box">
                    <img className="logo" src={logo}></img>
                </div>
                <div className="text-box">
                    <h1 className="heading-primary">
                <span className="heading-primary-main">
                    Loopnix
                </span>
                        <span className="heading-primary-sub">
                    WHERE THE FUTURE IS BUILD.
                </span>
                    </h1>
                    <a href="#" className="btn btn-white">Discover our tourse</a>
                </div>
            </div>

            {/* Home Section */}
            <div>
                <section className="section-about">
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            Exciting tours for adventures people
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-1-of-2">
                            <h3 className="heading-tertiary">You are going to fall in love with
                                future.</h3>
                            <p className="paragraph u-margin-bottom-small">
                                The most advanced and modern CSS course on the internet: master flexbox, CSS Grid,
                                responsive design, and so much more.
                            </p>

                            <h3 className="heading-tertiary">You are going to fall in love with
                                future.</h3>
                            <p className="paragraph u-margin-bottom-small">
                                The most advanced and modern CSS course on the internet: master flexbox, CSS Grid,
                                responsive design, and so much more.
                            </p>

                            <a className="btn-text" href="#">Learn More &rarr;</a>
                        </div>

                        <div className="col-1-of-2">
                            <div className="composition">
                                <img src={image} alt="Photo-1"
                                     className="composition__photo composition__photo--p1"/>
                                <img src={computerImage} alt="Photo-2"
                                     className="composition__photo composition__photo--p2"/>
                                <img src={softwareDevelopment} alt="Photo-3"
                                     className="composition__photo composition__photo--p3"/>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-features">
                    <div className="row">
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-world"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                                <p className="feature-box__text">The most advanced and modern CSS course on the
                                    internet: master flexbox, CSS Grid,
                                    responsive design, and so much more.</p>
                            </div>
                        </div>

                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-world"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                                <p className="feature-box__text">The most advanced and modern CSS course on the
                                    internet: master flexbox, CSS Grid,
                                    responsive design, and so much more.</p>
                            </div>
                        </div>

                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-world"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                                <p className="feature-box__text">The most advanced and modern CSS course on the
                                    internet: master flexbox, CSS Grid,
                                    responsive design, and so much more.</p>
                            </div>
                        </div>

                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-world"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                                <p className="feature-box__text">The most advanced and modern CSS course on the
                                    internet: master flexbox, CSS Grid,
                                    responsive design, and so much more.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-tours">
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            Exciting tours for adventures people
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture--1">
                                        &picture
                                    </div>

                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--1">Heading</span>
                                    </h4>

                                    <div className="card__details">
                                        <ul>
                                            <li>3 day tours</li>
                                            <li>Up to 30 people</li>
                                            <li>2 tour guides</li>
                                            <li>sleep in cozy hotels</li>
                                            <li>Difficulty: very easy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-1">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">$250</p>
                                        </div>
                                        <a href="#" className="btn btn-white">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture--2">

                                    </div>

                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--2">Heading 1</span>
                                    </h4>

                                    <div className="card__details">
                                        <ul>
                                            <li>3 day tours</li>
                                            <li>Up to 30 people</li>
                                            <li>2 tour guides</li>
                                            <li>sleep in cozy hotels</li>
                                            <li>Difficulty: very easy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-2">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">$250</p>
                                        </div>
                                        <a href="#" className="btn btn-white">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture--3">

                                    </div>

                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--3">Heading 2</span>
                                    </h4>

                                    <div className="card__details">
                                        <ul>
                                            <li>3 day tours</li>
                                            <li>Up to 30 people</li>
                                            <li>2 tour guides</li>
                                            <li>sleep in cozy hotels</li>
                                            <li>Difficulty: very easy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-3">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">$250</p>
                                        </div>
                                        <a href="#" className="btn btn-white">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-stories">
                    <div className="bg-video">
                        <video className="bg-video__content" autoPlay muted loop>
                            <source type="video/mp4"
                                    src={VideoDemo}/>
                            Your browser is not supported
                        </video>
                    </div>

                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            We make people genuinely happy
                        </h2>
                    </div>

                    <div className="row">
                        <div className="story">
                            <figure className="story__shape">
                                <img src={forestImage} alt="Users" className="story__img"/>
                                <figcaption className="story__caption">Marry smith</figcaption>
                            </figure>
                            <div className="story__text">
                                <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with
                                    my family</h3>
                                <p>
                                    The most advanced and modern CSS course on the
                                    internet: master flexbox, CSS Grid,
                                    responsive design, and so much more.The most advanced and modern CSS course on
                                    the
                                    internet: master flexbox, CSS Grid,
                                    responsive design, and so much more.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-book">
                    <div className="row">
                        <div className="book">
                            <div className="book__form">
                                <form action="#" className="form">
                                    <div className="u-center-text">
                                        <h2 className="form__heading">
                                            Start Booking Now
                                        </h2>
                                    </div>
                                    <div className="form__group">
                                        <input className="form__input" type="text" name="fname" id="fname"
                                               placeholder="First Name" required/>
                                        <label className="form__label" for="fname">Full Name</label>
                                    </div>

                                    <div className="form__group">
                                        <input className="form__input" type="text" name="email" id="email"
                                               placeholder="Email" required/>
                                        <label className="form__label" htmlFor="email">Email</label>
                                    </div>

                                    <div className="form__group">
                                        <div className="form__radio-group">
                                            <input className="form__radio-input" type="radio" name="gn" id="small"
                                            />
                                            <label className="form__radio-label"><span
                                                className="form__radio-button"></span>Small tour</label>
                                        </div>

                                        <div className="form__radio-group">
                                            <input className="form__radio-input" type="radio" name="gn" id="large"
                                            />
                                            <label className="form__radio-label"><span
                                                className="form__radio-button"></span>Large tour</label>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </>
    )
}

export default WelcomePage;