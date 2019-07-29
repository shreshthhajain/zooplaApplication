import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import ListingDetail from "../ListingDetail";

const EditListing = (props) => {
    const { open, listing } = props;
    return (
      <Dialog open={open} onClose={props.closeDialog}>
        <div>
          <DialogTitle id="alert-dialog-title">Edit Listing</DialogTitle>
          <DialogContent>
            <ListingDetail
              listing={listing}
              mode="editing"
              editListing={props.editListing}
              closeDialog={props.closeDialog}
            ></ListingDetail>
          </DialogContent>
        </div>
      </Dialog>
    );
}

export default EditListing;
