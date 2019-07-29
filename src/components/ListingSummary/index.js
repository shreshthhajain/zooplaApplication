import React from "react";
import "./index.css";
import EditListing from "../EditListing";
import Grid from '@material-ui/core/Grid'; 

export default class ListingSummary extends React.Component {
  state = {
    isEditingMode: false
  };
  toggleEditingFlag = () => {
    this.setState({
      isEditingMode: true
    });
  };
  closeDialog = () => {
    this.setState({
      isEditingMode: false
    });
  };
  expireListing = () => {
    let listing = this.props.listing;
    listing.isExpired = true;
    this.props.editListing(listing);
  };
  render() {
    const { listing } = this.props;
    const amenities = listing.amenities.join(', ');
    return (
      <div>
      <Grid container xs={12} sm={12} md={12} lg={12} className="summaryContainerItem">
        <Grid container item xs={12} sm={12} md={12} lg={12}>
           <Grid item xs={3} sm={3} md={3} lg={3} className="imgWrapper">
              <img
                class="cf-lazyload"
                src={listing.image}
                data-src={listing.image}
                alt={listing.title}
                data-loaded="true"
              />
           </Grid>
           <Grid container item xs={9} sm={9} md={9} lg={9}>
             <Grid item xs={6} sm={6} md={6} lg={6} direction="column">
               <Grid item className="titleHeight">
                 <h2>{listing.title}</h2>
               </Grid>
               <Grid item className="listingBox" direction="column">
                 <Grid item className="listings">
                   <div className="leftDiv"><small>Address</small></div>
                   <div className="rightDiv"><small>Available From</small></div>
                 </Grid>
                 <Grid item className="listings">
                  <div className="leftDiv">{listing.address}</div>
                  <div className="rightDiv">{listing.availableFrom}</div>
                 </Grid>
                 <Grid item className="listings">
                   <div className="leftDiv"><small class="heading">Bedrooms</small></div>
                   <div className="rightDiv"><small class="heading">Postal Code</small></div>
                 </Grid>
                 <Grid item className="listings">
                 <div className="leftDiv">{listing.bedrooms}</div>
                 <div className="rightDiv">{listing.postalCode}</div>
                 </Grid>
               </Grid>
             </Grid>
             <Grid item xs={6} sm={6} md={6} lg={6} direction="column">
               <Grid item className="price">
                 <h2>Rs {listing.price}</h2>
               </Grid>
               <Grid item className="listingBox">
                 <Grid item className="listings">
                   <small>Amenities : </small> {amenities}
                 </Grid>
               </Grid>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className="lastRow">
          <div className="leftSmallerDiv">
            <p className="description">{listing.description}</p>
          </div>
          <div className="rightSmallerDiv">
            <button onClick={this.toggleEditingFlag}>Edit Listing</button>
            <button onClick={this.expireListing}>Expire Listing</button>
          </div>
        </Grid>
      </Grid>
      <EditListing
          open={this.state.isEditingMode}
          closeDialog={this.closeDialog}
          listing={listing}
          editListing={this.props.editListing}
      />
      </div>
    );
  }
}
