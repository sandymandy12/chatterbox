import React from 'react';
import  { system } from './js/script';
import './css/style.css';




function Home() {

    system.init();

    return (
        <div className="screen">
            <div className="bios"></div>
            <div className="login">
                <div className="login-dialog">
                    <div className="login-dialog-content">
                        <p className="text-center mb-4">Welcome POTUS</p>
                        <form className action="#" method="post" autocomplete="off">
                            <div>
                                <p className="mb-1">Password</p>
                                <input type="password" autocomplete="off"/>
                            </div>
                            <p className="hint text-center mt-1 mb-0">
                                <a href="#" className="ga-ce" data-category="elements" data-action="click" data-label="hint">Forgot your password?</a>
                                <span>Hint: greatest album of all time</span>
                            </p>
                            <div className="text-center my-4">
                                <button className="submit" type="submit">OK</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="navbar">
                <div className="left">
                    <div className="item submenu">
                        <button className="logo"></button>
                        <ul className="drop">
                            <li><a href="#" id="about" className="ga-ce" data-category="elements" data-action="click" data-label="about">About</a></li>
                            <li><a href="#" id="battery" className="ga-ce" data-category="elements" data-action="click" data-label="battery">Battery</a></li>
                            <li className="hide-on-ios"><a href="#" id="fullscreen">Toggle fullscreen</a></li>
                            <li><a href="#" id="restart">Restart</a></li>
                        </ul>
                    </div>
                    <div className="d-flex">
                        <div className="item submenu">
                            <button>File</button>
                            <ul className="drop">
                                <li><a href="#" className="disabled">New</a></li>
                                <li><a href="#" className="disabled">Open</a></li>
                                <li>
                                    <a href="#" className="switchfiles" id="switchfiles">
                                        <span className="off ga-ce" data-category="elements" data-action="click" data-label="ShowHiddenFiles">Show hidden files</span>
                                        <span className="on">Hide hidden files</span>
                                    </a>
                                </li>
                                <li><a href="http://twitter.com/share?url=https%3A%2F%2Fdcatuns.crypto" className="share-popup ga-ce" data-category="elements" data-action="click" data-label="share(twitter)">Share (twitter)</a></li>
                                <li><a href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fdcatuns.crypto" className="share-popup ga-ce" data-category="elements" data-action="click" data-label="share(facebook)">Share (facebook)</a></li>
                            </ul>
                        </div>
                        <div className="item submenu media-nav d-none">
                            <button>Media</button>
                            <ul className="drop">
                                <li>
                                    <a href="#" id="pause">
                                        <span className="off">Pause</span>
                                        <span className="on">Play</span>
                                    </a>
                                </li>
                                <li><a href="#" id="stop">Stop</a></li>
                            </ul>
                        </div>
                        <div className="item submenu default-nav">
                            <button>Edit</button>
                            <ul className="drop">
                                <li><a href="#" className="disabled">Undo</a></li>
                                <li><a href="#" className="disabled">Copy</a></li>
                                <li><a href="#" className="disabled">Cut</a></li>
                                <li><a href="#" className="disabled">Paste</a></li>
                                <li><a href="#" id="print">Print</a></li>
                            </ul>
                        </div>
                        <div className="item submenu">
                            <button>Special</button>
                            <ul className="drop">
                                <li><a href="https://www.youtube.com/playlist?list=PL-vfMvq9s6UebAGgYzPGAdOdGJl_X4Fnx" className="ga-ce" data-category="outbound" data-action="click" data-label="https://www.youtube.com/playlist?list=PL-vfMvq9s6UebAGgYzPGAdOdGJl_X4Fnx"
                                        target="_blank">Youtube</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="item">
                        <span className="my-0">POTUS</span>
                    </div>
                    <div className="item">
                        <span id="time" className="time"></span>
                    </div>
                </div>
            </div>

            <button className="file folder folder1 ga-ce" data-category="elements" data-action="click" data-label="DECAT2049" id="folder1">
            <span>cerebral</span>
        </button>

            <button className="file folder folder2 ga-ce" data-category="elements" data-action="click" data-label="yandhi" id="folder2">
            <span>yandhi.zip</span>
        </button>

            <button className="file image lizard hidden ga-ce" data-category="elements" data-action="click" data-label="lizard" id="lizard">
            <span>jeffery.gif</span>
        </button>

            <button className="file sound play-track gktf hidden ga-ce" data-category="tracks" data-action="click" data-label="GKTF" id="gktf" data-sound="GKTF_(DEMO).mp3" data-title="GKTF (DEMO)" data-video="GKTF"/>
            <span><em>GKTF (DEMO)</em>.mp3</span>

            <button className="file text earthtxt ga-ce" data-category="elements"    data-action="click" data-label="earth" id="earththt"/>
            <span><em>EARTH</em>.txt</span>

            <div className="finder 2k49">
                <header className="header">
                    <span className="title">De Catuns 2049</span>
                    <button className="close">x</button>
                </header>
                <div className="body">
                    <div className="d-flex flex-wrap">
                        <button className="file text ga-ce" data-category="elements" data-action="click" data-label="readme" id="readme">
                            <span><em>readme</em>.txt</span>
                        </button>
                        <button className="file sound play-track ga-ce" data-category="tracks" data-action="click" data-label="Intro" data-sound="01_INTRO_(CHARLIE_HEAT_VERSION).mp3" data-title="Intro (Charlie Heat Version)" data-video="01_INTRO_(CHARLIE_HEAT_VERSION)">
                            <span><em>INTRO</em>.mp3</span>
                        </button>
                        <button className="file sound play-track ga-ce" data-category="tracks" data-action="click" data-label="Power" data-sound="02_POWER.mp3" data-title="Power" data-video="02_POWER">
                            <span><em>POWER</em>.mp3</span>
                        </button>
                        <button className="file sound play-track hidden ga-ce" data-category="tracks" data-action="click" data-label="HoldMyLiquor" data-sound="03_HOLD_MY_LIQUOR.mp3" data-title="Hold My Liquor" data-video="03_HOLD_MY_LIQUOR">
                            <span><em>HOLD MY LIQUOR</em>.mp3</span>
                        </button>
                        <button className="file sound play-track ga-ce" data-category="tracks" data-action="click" data-label="LiftYourself" data-sound="04_LIFT_YOURSELF.mp3" data-title="Lift Yourself" data-video="04_LIFT_YOURSELF">
                            <span><em>LIFT YOURSELF</em>.mp3</span>
                        </button>
                        <button className="file sound play-track ga-ce" data-category="tracks" data-action="click" data-label="JesusWalks" data-sound="05_JESUS_WALKS.mp3" data-title="Jesus Walks" data-video="05_JESUS_WALKS">
                        <   span><em>JESUS WALKS</em>.mp3</span>
                        </button>
                        <button className="file sound play-track ga-ce" data-category="tracks" data-action="click" data-label="WolvesPt1" data-sound="06_WOLVES_PT.1.mp3" data-title="Wolves Pt.1" data-video="06_WOLVES_PT.1">
                            <span><em>WOLVES PT.1</em>.mp3</span>
                        </button>
                        <button className="file sound play-track ga-ce" data-category="tracks" data-action="click" data-label="WolvesPt2" data-sound="07_WOLVES_PT.2.mp3" data-title="Wolves Pt.2" data-video="07_WOLVES_PT.2">
                            <span><em>WOLVES PT.2</em>.mp3</span>
                        </button>
                        <button className="file sound play-track ga-ce" data-category="tracks" data-action="click" data-label="CantTellMeNothin" data-sound="08_CANT_TELL_ME_NOTHIN.mp3" data-title="Can't Tell Me Nothin" data-video="08_CANT_TELL_ME_NOTHIN">
                            <span><em>CAN'T TELL ME NOTHIN</em>.mp3</span>
                        </button>
                        <button className="file sound play-track ga-ce" data-category="tracks" data-action="click" data-label="ILoveIt" data-sound="09_I_LOVE_IT.mp3" data-title="I Love It" data-video="09_I_LOVE_IT">
                            <span><em>I LOVE IT</em>.mp3</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="finder readme">
                <header className="header">
                    <span className="title">readme.txt</span>
                    <button className="close">x</button>
                </header>
                <div className="body">
                    <div>
                        <p></p>
                    </div>
                </div>
            </div>

            <div className="finder earth">
                <header className="header">
                    <span className="title">EARTH.txt</span>
                    <button className="close">x</button>
                </header>
                <div className="body">
                    
                </div>
            </div>

            <img src="images/print.jpg" className="print-visual" alt/>

            <script src="js/jquery-3.4.1.js"></script>
            <script src="js/script.js"></script>
        </div>
    )
}

const text = {/*
    <div>
        <p>THE EARTH IS DYING.<br>DE CAT WON'T SAVE US.</br><br>BUT WE CAN SAVE OURSELVES.</br></p>
        <p>READ:</p>
        <p>- <a href="https://time.com/5824295/climate-change-future-possibilities/?ref=dcatuns.crypto" className="ga-ce" data-category="outbound" data-action="click" data-label="https://time.com/5824295/climate-change-future-possibilities/" target="_blank">How the world will look in 2050.</a></p>
        <p>- <a href="https://www.bbc.com/future/article/20181102-what-can-i-do-about-climate-change?ref=dcatuns.crypto" className="ga-ce" data-category="outbound" data-action="click" data-label="https://www.bbc.com/future/article/20181102-what-can-i-do-about-climate-change"
                target="_blank">What you can do today.</a></p>
        <p>DONATE:</p>
        <p>- <a href="https://climateemergencyfund.org/?ref=dcatuns.crypto" className="ga-ce" data-category="outbound" data-action="click" data-label="https://climateemergencyfund.org/" target="_blank">The Climate Emergency Fund</a> provides support
            to individuals and organizations pressuring governments toward meaningful, immediate policy reform.</p>
        <p>- <a href="https://climatejusticealliance.org/about/?ref=dcatuns.crypto" className="ga-ce" data-category="outbound" data-action="click" data-label="https://climatejusticealliance.org/about/" target="_blank">The Climate Justice Alliance</a> seeks
            to address climate change through both environmental justice and economic justice efforts.</p>
        <p>- <a href="https://www.ienearth.org/about/?ref=dcatuns.crypto" className="ga-ce" data-category="outbound" data-action="click" data-label="https://www.ienearth.org/about/" target="_blank">The Indigenous Environmental Network</a> supports
            indigenous communities throughout North America and advocates for the protection of sacred sites and natural resources. </p>
    </div> 
    
    It's 2049. DE CAT has been missing for nearly 30 years.</p>
    <p>Rising global temperatures threaten to end human civilization as we know it.</p>
    <p>Meanwhile, the president has just made contact with an alternate universe—a utopian version of earth that prevented its own global warming long ago.</p>
    <p>Through time and space, the alternate universe has sent a mysterious gift: a leaked DE CAT album unlike any album we've heard before.</p>
    <p>The president believes it may hold the secret to saving our planet.


 */
}

export default Home


