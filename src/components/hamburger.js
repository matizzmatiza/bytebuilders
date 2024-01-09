function Hamburger({ isActive, onToggle }) {
    const handleClick = () => {
        if (onToggle) {
            onToggle(!isActive);
        }
    };

    const hamburgerClass = isActive ? 'hamburger hamburger--active' : 'hamburger';

    return (
        <div className={hamburgerClass} onClick={handleClick}>
            <div className="hamburger__line"></div>
            <div className="hamburger__line"></div>
            <div className="hamburger__line"></div>
        </div>
    );
}

export default Hamburger;
