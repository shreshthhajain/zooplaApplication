import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import ListingDetail from "../ListingDetail";

export default class EditListing extends React.Component {
  render() {
    const { open, listing } = this.props;
    return (
      <Dialog open={open} onClose={this.props.closeDialog}>
        <div>
          <DialogTitle id="alert-dialog-title">Edit Listing</DialogTitle>
          <DialogContent>
            <ListingDetail
              listing={listing}
              mode="editing"
              editListing={this.props.editListing}
              closeDialog={this.props.closeDialog}
            ></ListingDetail>
          </DialogContent>
        </div>
      </Dialog>
    );
  }
}
