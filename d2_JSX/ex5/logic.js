class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Content />
                <Footer />
            </div>
        );
    }
}
class NavBar extends React.Component {
    render() {
        return (
            <div>
                <MenuItems />
                <Logo />
            </div>
        );
    }
}
class MenuItems extends React.Component {
    render() {
        return (
            <ul className="menu">
                <li onClick={getBold}>SERVICES</li>
                <li onClick={getBold}>WORK</li>
                <li id="the-team" onClick={getBold}>THE TEAM</li>
            </ul>
        );
    }
}
class Logo extends React.Component {
    render() {
        return (
            <div class="logo"></div>

        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <Title />
                <Subtitle />
                <div className="services">
                    <Service1 />
                    <Service2 />
                    <Service3 />
                </div>
            </div>

        );
    }
}
class Title extends React.Component {
    render() {
        return (
            <h1 className="title">
                SERVICES
            </h1>
        );
    }
}
class Subtitle extends React.Component {
    render() {
        return (
            <p className="subtitle">
                Our vision is simple. We want to create websites and applications with both high quality design and easy-to-access content. The finished product will be totally unique and represent awesomeness.
            </p>

        );
    }
}
class Service1 extends React.Component {
    render() {
        return (
            <div className="service-wrapper">
                <S1Image />
                <S1Title />
                <S1Text />
            </div>
        );
    }
}
class S1Image extends React.Component {
    render() {
        return (
            <div className="s1 image" onMouseOver={changeColor} onMouseLeave={changeBack}></div>
        );
    }
}
class S1Title extends React.Component {
    render() {
        return (
            <h4>USER INTERFACE DESIGN</h4>
        );
    }
}
class S1Text extends React.Component {
    render() {
        return (
            <ul>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>Usability testing</li>
            </ul>
        );
    }
}
class Service2 extends React.Component {
    render() {
        return (
            <div className="service-wrapper">
                <S2Image />
                <S2Title />
                <S2Text />
            </div>
        );
    }
}
class S2Image extends React.Component {
    render() {
        return (
            <div className="s2 image" onMouseOver={changeColor} onMouseLeave={changeBack}></div>
        );
    }
}
class S2Title extends React.Component {
    render() {
        return (
            <h4>CONCEPT AND IDEAS</h4>
        );
    }
}
class S2Text extends React.Component {
    render() {
        return (
            <ul>
                <li>Conceptualization</li>
                <li>Digital Branding</li>
                <li>Product Strategy</li>
            </ul>
        );
    }
}
class Service3 extends React.Component {
    render() {
        return (
            <div className="service-wrapper">
                <S3Image />
                <S3Title />
                <S3Text />
            </div>
        );
    }
}
class S3Title extends React.Component {
    render() {
        return (
            <h4>DESIGN AND BRANDING</h4>
        );
    }
}
class S3Image extends React.Component {
    render() {
        return (
            <div className="s3 image" onMouseOver={changeColor} onMouseLeave={changeBack}></div>
        );
    }
}
class S3Text extends React.Component {
    render() {
        return (
            <ul>
                <li>Interaction Design</li>
                <li>Graphic Design</li>
                <li>Identity Design</li>
            </ul>
        );
    }
}
class Footer extends React.Component {
    render() {
        return (
            <div className="footer"></div>
        );
    }
}

function changeColor(e) {
    let target = e.target;
    console.log(target);
    console.log(`className = ${target.className}`);
    target.className += " changeColor";
    console.log(`className = ${target.className}`);
    // let target = $(e.target);
    // target.css("background-color", "yellow");
}
function changeBack(e) {
    let target = e.target;
    console.log(target);
    console.log(`className = ${target.className}`);
    let classNamesArr = target.className.split(" ");
    let originalClass = classNamesArr.shift() + " " + classNamesArr.shift();
    target.className = originalClass;
    console.log(`className after mouse leaves= ${target.className}`);
    // let target = $(e.target);
    // target.css("background-color", "yellow");
}

function getBold(e) {
    let target = e.target;
    target.className += "boldFont";
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);