import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Grid from "@mui/material/Grid";
import DialogTitle from "@mui/material/DialogTitle";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

function OptionModal(props: any) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        hideBackdrop={true}
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography
            fontSize={25}
            fontFamily="DMSans-Medium"
            textAlign="center"
          >
            More Information
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Stack direction="row" spacing={1} marginBottom={2}>
            <Chip
              label="Properties"
              variant="outlined"
              style={{
                borderWidth: 0,
                borderRadius: 5,
                fontSize: 14,
                fontFamily: "DMSans-Medium",
                backgroundColor: "#e7e7e7",
              }}
            />
            <Chip
              label="Links"
              variant="outlined"
              style={{
                color: "gray",
                fontSize: 14,
                fontFamily: "DMSans-Medium",
                backgroundColor: "#fff",
                borderWidth: 0,
                borderRadius: 5,
              }}
            />
          </Stack>
          <Grid container spacing={3}>
            <Grid item xs>
              <Typography
                fontSize={14}
                fontFamily="DMSans-Medium"
                color={"gray"}
              >
                Created On
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography fontSize={14} fontFamily="DMSans-Medium">
                6 days ago
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3} marginTop={0}>
            <Grid item xs>
              <Typography
                fontSize={14}
                fontFamily="DMSans-Medium"
                color={"gray"}
              >
                Last Edited
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography fontSize={14} fontFamily="DMSans-Medium">
                1 day ago
              </Typography>
            </Grid>
          </Grid>
          <br />
          <Divider />
          <Stack direction="row" spacing={3} marginTop={1}>
            <IconButton aria-label="delete" style={{ flexDirection: "column" }}>
              <EditIcon sx={{ fontSize: 30 }} />
              <Typography fontSize={14} fontFamily="DMSans-Medium">
                Edit
              </Typography>
            </IconButton>
            <IconButton aria-label="delete" style={{ flexDirection: "column" }}>
              <ShareIcon sx={{ fontSize: 30 }} />
              <Typography fontSize={14} fontFamily="DMSans-Medium">
                Share
              </Typography>
            </IconButton>
            <IconButton aria-label="delete" style={{ flexDirection: "column" }}>
              <ContentCopyIcon sx={{ fontSize: 30 }} />
              <Typography fontSize={14} fontFamily="DMSans-Medium">
                Copy
              </Typography>
            </IconButton>
            <IconButton aria-label="delete" style={{ flexDirection: "column" }}>
              <DeleteIcon sx={{ fontSize: 30 }} />
              <Typography fontSize={14} fontFamily="DMSans-Medium">
                Delete
              </Typography>
            </IconButton>
          </Stack>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={props.handleClose}>Disagree</Button>
          <Button onClick={props.handleClose}>Agree</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}

export default OptionModal;
