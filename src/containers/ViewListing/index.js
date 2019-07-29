import React from 'react';
import ListingSummary from '../../components/ListingSummary';
import { listings } from '../../listings';
import _ from 'lodash';

export default class ViewListing extends React.Component {

  constructor(props) {
    super(props);
    let consolidatedListings = listings;
    if (localStorage.getItem("zooplaListings")) {
      const userListings = JSON.parse(localStorage.getItem("zooplaListings"));
      var hash = new Map();
      listings.concat(userListings).forEach(function(obj) {
          hash.set(obj.id, Object.assign(hash.get(obj.id) || {}, obj))
      });
      consolidatedListings = Array.from(hash.values());
    }
    this.state = {
      listings: consolidatedListings,
    }
  }

  editListing = (updatedListing) => {
    const originalListings = _.cloneDeep(this.state.listings);
    const updatedListings = originalListings.map((item) => (
      updatedListing.id === item.id ? updatedListing : item
    ));
    if (localStorage.getItem("zooplaListings")) {
      let zooplaListings = JSON.parse(localStorage.getItem("zooplaListings"));
      let isLocalStorageUpdated = false;
      let updatedListWithLatest = zooplaListings.map((item) => {
        if (updatedListing.id === item.id) {
          isLocalStorageUpdated = true;
          return updatedListing;
        } else {
          return item;
        }
      });
      if (!isLocalStorageUpdated) {
        updatedListWithLatest.push(updatedListing);
      }
      localStorage.setItem('zooplaListings', JSON.stringify(updatedListWithLatest));
    } else {
      localStorage.setItem('zooplaListings', JSON.stringify([updatedListing]));
      localStorage.setItem('listingsInCode', listings.length);
    }
    this.setState({
      listings: updatedListings,
    });
  };

  render() {
    return (
      <div>
       {this.state.listings.map((item, index) => {
         if (!item.isExpired) {
            return <ListingSummary listing={item} editListing={this.editListing}/>
         } else {
           return null;
         }
         })}
      </div>
    );
  }
}
