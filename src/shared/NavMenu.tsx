import { useState } from "react";
import { NavLink } from "react-router-dom";
import useWindowSize from "../components/WindowManager";
import '../NavMenu.css'

function NavMenu() {

    let [collapseNavMenu, setCollapseNavMenu] = useState(false);
    let [containsCollapse, setContainsCollapse] = useState(false);
    function ToggleNavMenu() {
        setCollapseNavMenu(!collapseNavMenu);
    }

    let windowSize = useWindowSize();
    let element = document.getElementsByClassName("collapseableMenu")[0];

    if (element) {
        if (windowSize[0] <= 640 && !containsCollapse) {
            element.classList.add('collapse')
            setContainsCollapse(true);
            setCollapseNavMenu(true);
        }

        if (windowSize[0] > 640 && containsCollapse) {
            element.classList.remove('collapse');
            setContainsCollapse(false);
            setCollapseNavMenu(false);
        }
    }

    return (
        <>
            <div className="top-row ps-3 navbar navbar-light shadow-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Brian Paul Jensen II</a>
                    <button title="Navigation menu" className="navbar-toggler" onClick={ToggleNavMenu}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            <div className={collapseNavMenu ? "collapseableMenu collapse" : "collapseableMenu"}>
                <nav className="flex-column" role="navigation">
                    <div className="nav-item px-3">
                        <NavLink className="nav-link" to="/">
                            <span className="oi oi-folder" aria-hidden="true"></span> Portfolio
                        </NavLink>
                    </div>
                    <div className="nav-item px-3">
                        <NavLink className="nav-link" to="/resume">
                            <span className="oi oi-person" aria-hidden="true"></span> Resume
                        </NavLink>
                    </div>
                    <div className="nav-item px-3">
                        <NavLink className="nav-link" to="/about">
                            <span className="oi oi-question-mark" aria-hidden="true"></span> About
                        </NavLink>
                    </div>
                    <div className="nav-item px-3">
                        <NavLink className="nav-link" to="/contactme">
                            <span className="oi oi-envelope-open" aria-hidden="true"></span> Contact Me
                        </NavLink>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default NavMenu;