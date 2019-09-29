import React, { Component } from 'react';
import image from "./images/image.png";
class App extends Component {
	 componentDidMount() {
		 let mainNavLinks = document.querySelectorAll("ul li a");
         let mainSections = document.querySelectorAll(".container-list div");

         let lastId;
         let cur = [];
     window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;
    let NavLinks = Array.prototype.slice.call(mainNavLinks);
    NavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add("current");
        } else {
            link.classList.remove("current");
        }
    });
});


	 }
	
    render() {
        return (
		<>
		 <div className="container">
        <div className="image-container">
            <img src={image} alt="The image presenting mobile layouts" />
        </div>
        <div className="text-container">
            <div className="title">
                Flutter for reaching both <span>iOS and Android users</span>
            </div>
            <div className="subtitle">Customizable UI widgets</div>
            <div className="description">
                Collaborating with Netguru had lasting impact on our ability to be innovative, and execute at pace.
                The team there have a strong focus on not just doing what you ask.
            </div>
            <input type="button" value="Read Case Study" />
        </div>
    </div>
	 <div className="container">
        <div className="container-left">
            <div className="title-number">01</div>
            <div className="title1">Cross-platform mobile<br /> 
			app development <br /> 
			<span>made easy</span></div>
        </div>
        <div className="container-right">
            <div className="description1">Flutter is Google's mobile app software development kit (SDK) made to build cross-platform applications. It's a complete environment with a framework, widgets, and tools, which gives you the opportunity to develop mobile apps efficiently. Thanks to rich widgets, Flutter apps look and feel great. You can create your own custom app design or use ready UI elements following specific platforms’ guidelines.</div>
        </div>
    </div>
    <div className="menu-container">
        <div className="container-list">
            <div id="section1">
                <h3>Technology overview</h3>
                <div>
                    Python is gaining a lot of popularity among <span>Fintech</span>, startups, cloud computing technology companies as well as data analytics projects, Machine Learning, and Internet of Things. Python allows for rapid app development. Python’s syntax is clear and elegant, and the programming language is object-oriented. Still, Python is considered as a high-level and general-purpose programming language used not only for enhanced web development but also <span>simple web applications.</span>
                </div>
            </div>
            <div id="section2">
                <h3>Good for research…</h3>
                <div>Python is gaining a lot of popularity among <span>Fintech</span>, startups, cloud computing technology companies as well as data analytics projects, Machine Learning, and Internet of Things. Python allows for rapid app development. Python’s syntax is clear and elegant, and the programming language is object-oriented. Still, Python is considered as a high-level and general-purpose programming language used not only for enhanced web development but also <span>simple web applications.</span></div>
            </div>

            <div id="section3">
                <h3>…perfect for Startups.</h3>
                <div> The simplicity of Python means that not only is it easy to maintain, but it can also handle quick growth. What’s more, if you use the <span>Django framework</span> – the most popular framework for Python – you will also put yourself in good stead to scale. This is because the components that make up Django are decoupled (i.e. independent from one another), which means that they can be chopped, changed, removed, and replaced as and when your project requires larger or more specific solutions.</div>
            </div>
        </div>
        <div className="sidebar">

            <div className="sidebar-list">
                <h3>Contents</h3>
                <ul>
                    <li><a href="#section1">Technology overview</a></li>
                    <li><a href="#section2">Good for research…</a></li>
                    <li><a href="#section3">…perfect for Startups.</a></li>
                </ul>
            </div>
        </div>
    </div>
		</>
	)
    }
}

export default App;