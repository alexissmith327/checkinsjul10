import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink} from 'reactstrap';
import LocationNav from './LocationsNavComponent';

const Header = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <div>
            <Nav pills>
                <NavItem>
                    <NavLink className="nav-link" href="/home">
                        <i className="fa fa-home fa-lg" /> Home</NavLink>
                </NavItem>
                <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle nav caret className="nav-link">
                        <i className="fa fa-map fa-lg" /> Locations
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem className="nav-link" href="/directory">All</DropdownItem>
                        <LocationNav />
                    </DropdownMenu>
                </Dropdown>
            </Nav>
        </div>
    );
}

export default Header;

