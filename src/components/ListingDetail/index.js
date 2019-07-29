import React from "react";
import Grid from "@material-ui/core/Grid";
import "./index.css";

export default class ListingDetail extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.listing) {
      this.state = {
        formControls: this.props.listing
      };
    } else {
      this.state = {
        formControls: {
          title: "",
          address: "",
          price: "",
          availableFrom: "",
          bedrooms: "",
          postalCode: "",
          amenities: "",
          description: "",
          image: "",
          isExpired: false
        }
      };
    }
  }

  changeHandler = event => {
    const name = event.target.name;
    let value =
      name === "amenities" ? event.target.value.split(",") : event.target.value;

    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: value
      }
    });
  };
  performActionOnListing = () => {
    let newListing = this.state.formControls;
    if (!this.props.mode) {
      this.props.addListing(newListing);
    } else {
      this.props.editListing(newListing);
      this.props.closeDialog();
    }
  };

  FormRow = (inputType, name, label) => {
    let input;
    if (inputType !== "textarea") {
      input = (
        <input
          type={inputType}
          name={name}
          value={this.state.formControls[name]}
          required
          onChange={this.changeHandler}
          className="input"
          placeholder=""
        />
      );
    } else {
      input = (
        <textarea
          rows="4"
          cols="50"
          name="description"
          onChange={this.changeHandler}
          required
        >
          {this.state.formControls.description}
        </textarea>
      );
    }
    return (
      <React.Fragment>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className="containerItem"
        >
          <Grid item xs={4} sm={4} md={4} lg={4} className="labelRow">
            <label for={name}>{label}</label>
          </Grid>
          <Grid item xs={8} sm={8} md={8} lg={8}>
            {input}
          </Grid>
        </Grid>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div>
        <Grid container justify="space-between" alignItems="center">
          <form onSubmit={this.performActionOnListing} action="" class="form">
            {this.FormRow("text", "title", "Title")}
            {this.FormRow("text", "address", "Address")}
            {this.FormRow("number", "price", "Price (In Rs)")}
            {this.FormRow(
              "date",
              "availableFrom",
              "Available From (In dd/mm/yyyy format)"
            )}
            {this.FormRow("number", "bedrooms", "Bedrooms")}
            {this.FormRow("number", "postalCode", "Postal Code")}
            {this.FormRow("text", "amenities", "Amenities(seperated by comma)")}
            {this.FormRow("textarea", "description", "Description")}
            {this.FormRow("text", "image", "Property's Image link")}
            <Grid container item xs={12} sm={12} md={12} lg={12}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <input type="submit" value="Save" />
              </Grid>
            </Grid>
          </form>
        </Grid>
      </div>
    );
  }
}
