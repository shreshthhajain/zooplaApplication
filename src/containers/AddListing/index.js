import React from 'react';
import ListingDetail from '../../components/ListingDetail';
import { listings } from '../../listings';
export default class AddListing extends React.Component {

  addListing = (listing) => {
    if (localStorage.getItem('zooplaListings')) {
      let zooplaListings = JSON.parse(localStorage.getItem("zooplaListings"));
      listing.id = zooplaListings[zooplaListings.length - 1].id + 1;
      zooplaListings.push(listing);
      localStorage.setItem('zooplaListings', JSON.stringify(zooplaListings));
    } else {
      listing.id = listings.length + 1;
      localStorage.setItem('zooplaListings', JSON.stringify([listing]));
      localStorage.setItem('listingsInCode', listings.length);
  }
  }
  
  render() {
    return (
      <ListingDetail addListing={this.addListing}></ListingDetail>
    );
  }
}