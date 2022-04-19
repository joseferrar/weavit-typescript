import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  borderRadius: 14,
  width: 300,
}));

function ThoughtCard(props: any) {
  console.log(props);
  return (
    <Grid item xs={12} sm={4} md={4} marginTop={4} marginLeft={4}>
          
      <Item elevation={3}>
    
        <Grid
          style={{
            background:
              "linear-gradient(129.37deg, rgba(32, 0, 173, 0.5) -12.98%, rgba(57, 137, 238, 0.5) 91.72%)",
            marginTop: -16,
            borderEndStartRadius: 60,
            borderEndEndRadius: 60,
            padding: 22,
          }}
        >
          <Avatar
            sx={{
              bgcolor: "#85CEFF",
              width: 80,
              display: "inline-flex",
              height: 80,
              fontWeight: "bold",
              color: "blue",
              borderWidth: 2,
              borderStyle: "solid",
              borderColor: "#fff",
            }}
            src={props.item.image}
            alt="B"
          />
        </Grid>
        <Typography style={{ fontWeight: "bold", fontSize: 20, marginTop: 6 }}>
          {props.item.title}
        </Typography>
        <Grid style={{ display: "inline-flex", color: "gray" }}>
          <Typography style={{ fontSize: 14, marginTop: 6 }}>
            {"<Time>"}
          </Typography>
          <Typography style={{ fontSize: 14, marginTop: 6, marginLeft: 6 }}>
            {"<Calender Name>"}
          </Typography>
        </Grid>
        <br />
        <Grid style={{ display: "inline-flex", color: "gray" }}>
          <Typography style={{ fontSize: 14, marginTop: 6 }}>
            {"<Location>"}
          </Typography>
          <Typography style={{ fontSize: 14, marginTop: 6, marginLeft: 6 }}>
            {"<Status>"}
          </Typography>
        </Grid>
        {props.item.desc.map((sub: any, i: any) => (
          <Grid key={i}>
            <Grid style={{ display: "flex", marginBottom: 10 }}>
              <Typography variant="body2" style={{ textAlign: "left" }}>
                {Object.values(sub).map((a: any) => a)}
              </Typography>
              <MoreHorizIcon
                style={{
                  marginLeft: "auto",
                  backgroundColor: "#dde7e7",
                  borderRadius: 12,
                }}
              />
            </Grid>
            <Divider />
            <Button
              onClick={() => alert("item.desc")}
              variant="outlined"
              startIcon={<MenuBookOutlinedIcon />}
              style={{
                userSelect: "none",
                borderRadius: 16,
                color: "gray",
                borderColor: "gray",
                textTransform: "capitalize",
                display: "flex",
                marginTop: 12,

                marginBottom: 12,
                WebkitTouchCallout: "none",
              }}
            >
              Note Block
            </Button>
          </Grid>
        
        ))}
      </Item>
      
    </Grid>
  );
}

export default ThoughtCard;
