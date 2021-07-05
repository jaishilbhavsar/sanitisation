import React, { Component } from 'react';
import './Sidebar.scss';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";
import { ArrowLeftCircle, ArrowRightCircle, ColumnsGap, Heart, House, List, Pencil, Person } from 'react-bootstrap-icons';
export default class Header extends Component {
    state = {
        isLoginOpen: false,
        menuCollapse: false
    };
    menuIconClick = async () => {
        this.state.menuCollapse ? await this.setState({ menuCollapse: false }) : await this.setState({ menuCollapse: true });
    };
    handleOpen = async () => {
        await this.setState({ isLoginOpen: true });
    };
    handleClose = async () => {
        await this.setState({ isLoginOpen: false });
    };
    render() {
        return (
            <div className="Header">
                <ProSidebar collapsed={this.state.menuCollapse} className="dark">
                    <SidebarHeader>
                        <div className="closemenu" onClick={this.menuIconClick}>

                            {this.state.menuCollapse ? (
                                <ArrowRightCircle />
                            ) : (
                                <ArrowLeftCircle />
                            )}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<House />}>
                                Home
                            </MenuItem>
                            <MenuItem icon={<List />}>Category</MenuItem>
                            <MenuItem icon={<Heart />}>Favourite</MenuItem>
                            <MenuItem icon={<Pencil />}>Author</MenuItem>
                            <MenuItem icon={<ColumnsGap />}>Settings</MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<Person />}>Logout</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        )
    }
}