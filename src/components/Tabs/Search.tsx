import React, { Fragment } from "react";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import notebook from "../../images/notebook.png";
import ellipsis from "../../images/Ellipsis.png";
import { getData } from "../../data/dummyData";
import SearchInput from "../Inputs/SearchInput";
import SideLayout from "../Layouts/SideLayout";

function Search() {
  const data = getData();
  return (
    <SideLayout>
      <Typography
        fontSize={28}
        textAlign="left"
        marginLeft={2}
        marginTop={2}
        fontWeight="bold"
        marginBottom={3}
        fontFamily="DMSans-Bold"
      >
        Search
      </Typography>

      <SearchInput />
      <Stack direction="row" spacing={-2} marginTop={2}>
        <Typography
          style={{
            fontSize: 22,
            textAlign: "left",
            marginLeft: 18,
            marginTop: 12,
            fontFamily: "DMSans-Medium",
          }}
        >
          Result
        </Typography>
        <Chip
          label={"See All (22)"}
          style={{
            marginLeft: "auto",
            marginRight: 12,
            marginTop: 14,
            fontFamily: "DMSans-Medium",
          }}
        />
      </Stack>

      {data.map(
        (item, index) =>
          index < 3 && (
            <Fragment key={index}>
              {item.desc.map((sub, i) => (
                <Grid
                  key={i}
                  style={{
                    marginLeft: 12,
                    marginRight: 12,
                    borderRadius: 12,
                    marginTop: 12,
                    backgroundColor: "#fff",
                    padding: 4,
                  }}
                >
                  <Grid
                    style={{
                      display: "flex",
                      marginBottom: 10,
                      paddingLeft: 8,
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{
                        textAlign: "left",
                        fontSize: 12,
                        fontFamily: "DMSans-Medium",
                        width: 340,
                        marginTop: 4,
                      }}
                    >
                      {Object.values(sub).map((a) => a)}
                    </Typography>
                    <Avatar
                      alt="Remy Sharp"
                      src={ellipsis}
                      sx={{ width: 25, height: 25, marginLeft: "auto" }}
                    />
                  </Grid>
                  <Divider />
                  <Button
                    variant="outlined"
                    startIcon={
                      <Avatar
                        alt="Remy Sharp"
                        src={notebook}
                        sx={{ width: 15, height: 15 }}
                      />
                    }
                    style={{
                      userSelect: "none",
                      borderRadius: 16,
                      color: "gray",
                      borderColor: "gray",
                      textTransform: "capitalize",
                      display: "flex",
                      marginTop: 12,
                      height: 30,
                      marginBottom: 12,
                      WebkitTouchCallout: "none",
                      marginLeft: 8,
                      fontSize: 12,
                      fontFamily: "DMSans-Regular",
                    }}
                  >
                    Note Block
                  </Button>
                </Grid>
              ))}
            </Fragment>
          )
      )}
    </SideLayout>
  );
}

export default Search;
