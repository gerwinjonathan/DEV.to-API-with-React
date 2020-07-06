import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { FiPaperclip, FiSend, FiSettings } from 'react-icons/fi';

const SidebarAlign = {
    position: "fixed"
}

const SidebarComponent = () => {
    return (
        <div style={SidebarAlign}>
            <h5><b>Articles</b></h5>
            <Nav vertical>
                <NavItem>
                    <NavLink href="#"><FiPaperclip /> See articles</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><FiSend /> Write a post</NavLink>
                </NavItem>
            </Nav>
            <hr />
            <h5><b>Settings</b></h5>
            <Nav vertical>
                <NavItem>
                    <NavLink href="#"><FiSettings /> Settings</NavLink>
                </NavItem>
            </Nav>
        </div>
    );
}

export default SidebarComponent;