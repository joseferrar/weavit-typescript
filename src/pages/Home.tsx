import { useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
import CloseIcon from "@mui/icons-material/Close";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ThoughtCard from "../components/Cards/ThoughtCard";
import ReactPaginate from "react-paginate";
import RLDD from "react-list-drag-and-drop/lib/RLDD";
import { getData } from "../data/dummyData";
import spell from "../images/spell.png";
import IconButton from "@mui/material/IconButton";
import FindSection from "../components/NotFound/FindSection";
import arrowleft from "../images/arrow-left.png";
import arrowright from "../images/arrow-right.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ScrollComponent = () => {
  const data = getData();
  const [post, setPost] = useState(data);
  const [fetch, getFetch] = useState(data);
  const [page, setPage] = useState(0);

  const deleteItem = (index: any) => {
    const newTodoItems = [...fetch];
    newTodoItems.splice(index, 1);
    getFetch(newTodoItems);
    setPost(newTodoItems);
  };

  const ClearAll = () => {
    const newTodoItems = [...fetch];
    newTodoItems.splice(0);
    getFetch(newTodoItems);
    setPost(newTodoItems);
  };

  const itemRenderer = (item: any, index: number): JSX.Element => {
    return (
      <div className="item">
        <div key={index} style={{ marginTop: -60, marginLeft: -20 }}>
          <ThoughtCard item={item} />
        </div>
      </div>
    );
  };

  const handleRLDDChange = (reorderedItems: any) => {
    // console.log('Example.handleRLDDChange');
    setPost(reorderedItems);
  };

  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);
  const unsplashed = "https://source.unsplash.com/200x200/";

  const handleHorizantalScroll = (
    element: any,
    speed: any,
    distance: any,
    step: any
  ) => {
    let scrollAmount = -800;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === -800) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  return (
    <>
      <div className="button-contianer">
        <IconButton
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, -10);
          }}
          disabled={arrowDisable}
        >
          <Avatar
            alt="Remy Sharp"
            src={arrowleft}
            sx={{ width: 20, height: 20, paddingLeft: 2, marginTop: 0 }}
          />
        </IconButton>

        <IconButton
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, 10);
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={arrowright}
            sx={{ width: 25, height: 25, paddingLeft: 1, marginTop: 0 }}
          />
        </IconButton>
      </div>
      <div style={{ marginTop: -2, marginLeft: 26 }}>
        <Grid
          container
          spacing={1}
          marginLeft={16}
          style={{ position: "fixed", top: "3em", left: "2em" }}
        >
          {/* <ReactPaginate
            nextLabel={
              <Avatar
                alt="Remy Sharp"
                src={arrowright}
                sx={{ width: 22, height: 22, paddingLeft: 5, marginTop: 3 }}
              />
            }
            onPageChange={handleChange}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={
              <Avatar
                alt="Remy Sharp"
                src={arrowleft}
                sx={{ width: 20, height: 20, paddingLeft: 5, marginTop: 3 }}
              />
            }
            containerClassName="pagenationBtts"
            previousClassName=""
            nextLinkClassName=""
            disabledClassName="pagenationDisabled"
            // activeClassName="pagenationActive"
          /> */}
        </Grid>
        <Grid
          container
          marginLeft={-3}
          marginTop={-6}
          style={{ display: "flex", width: 500, height: "100%" }}
        >
          <Avatar
            alt="Remy Sharp"
            src={spell}
            sx={{ width: 25, height: 25, marginTop: 0.5 }}
          />
          <Typography
            style={{
              marginLeft: 6,
              fontSize: 22,
              width: 400,
              fontFamily: "DMSans-Regular",
            }}
          >
            Your Thought Space
          </Typography>
        </Grid>
        {fetch.map((item, index) => (
          <Chip
            deleteIcon={<CloseIcon style={{ fontSize: 20 }} />}
            label={item.title}
            onDelete={() => deleteItem(index)}
            style={{
              marginLeft: -40,
              marginRight: 50,
              marginTop: 28,
              backgroundColor: "#DADDE2",
              fontFamily: "DMSans-Medium",
            }}
          />
        ))}

        <Chip
          variant="outlined"
          deleteIcon={<CloseIcon style={{ fontSize: 20 }} />}
          label={"Clear All"}
          onDelete={() => ClearAll()}
          style={{
            marginLeft: -40,
            marginRight: 50,
            marginTop: 28,
            color: "gray",
            fontFamily: "DMSans-Medium",
          }}
        />
      </div>

      <div className="img-container" ref={elementRef} style={{marginLeft: -40}}>
        <RLDD
  
          layout="horizontal"
          items={post}
          itemRenderer={itemRenderer}
          onChange={handleRLDDChange}
        />
      </div>
    </>
  );
};
export default ScrollComponent;
