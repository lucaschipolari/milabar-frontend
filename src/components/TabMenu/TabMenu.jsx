import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import "./tabMenu.css";
import ListProductClient from "../ListProductClient/ListProductClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCog,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function HeaderIconDemo() {
  return (
    <div className="">
      <div className="tab-content pt-2" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <ListProductClient />
          <ListProductClient />
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          Profile
        </div>
        <div
          className="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          Contact
        </div>
      </div>
    </div>
  );
}
