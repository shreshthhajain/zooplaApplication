import React from "react";
import AppFrame from "../../components/AppFrame";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ViewListing from "../ViewListing/index";
import AddListing from "../AddListing/index";
import { withStyles } from "@material-ui/core/styles/";
import AppBar from "@material-ui/core/AppBar/AppBar";

const styles = theme => ({
  activeTab: {
    backgroundColor: "#6a148e",
    opacity: 1,
    color: "#fff",
    fontWeight: "bold"
  },
  appBar: {
    width: "80%",
    margin: "0 auto"
  },
  outerDiv: {
    paddingTop: "10px",
  }
});

class Content extends React.Component {
  constructor(props) {
    super(props);
    const tab = window.location.pathname.split("/");
    this.state = {
      activeTab: tab[1] === "add" ? "ADD LISTING" : "VIEW LISTINGS"
    };
  }

  handleChange = event => {
    this.setState({
      activeTab: event.target.innerText
    });
  };

  render() {
    const { classes } = this.props;
    const tab = window.location.pathname.split("/");
    return (
      <div className={classes.outerDiv}>
        <Router>
          <AppBar position="static" color="default" className={classes.appBar}>
            <Tabs onChange={this.handleChange} value={tab[2]} fullWidth>
              <Tab
                label={"View Listings"}
                value={"view"}
                component={NavLink}
                to="/"
                className={
                  this.state.activeTab === "VIEW LISTINGS"
                    ? classes.activeTab
                    : ""
                }
              />
              <Tab
                label={"Add Listing"}
                value={"add"}
                component={NavLink}
                to="/add/"
                className={
                  this.state.activeTab === "ADD LISTING"
                    ? classes.activeTab
                    : ""
                }
              />
            </Tabs>
          </AppBar>
          <AppFrame>
            <Route path="/" exact component={ViewListing} />
            <Route path="/add/" component={AddListing} />
          </AppFrame>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(Content);
