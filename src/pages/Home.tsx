import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import Avatar from "@mui/material/Avatar";
import CloseIcon from "@mui/icons-material/Close";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ThoughtCard from "../components/Cards/ThoughtCard";
import RLDD from "react-list-drag-and-drop/lib/RLDD";
import { getData } from "../data/dummyData";
import spell from "../images/spell.png";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import arrowleft from "../images/arrow-left.png";
import arrowright from "../images/arrow-right.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NotFound from "../components/NotFound/FindSection";

const ScrollComponent = () => {
  const data = getData();
  const [post, setPost] = useState(data);
  const [fetch, getFetch] = useState(data);
  const [previousIndex, setPreviousIndex] = useState(0);
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

  const onDragEnd = (result: any) => {
    const { source, destination } = result;
    if (!destination) return;

    const items = Array.from(post);
    const [newOrder] = items.splice(source.index, 1);
    items.splice(destination.index, 0, newOrder);
    console.log("todo");
    setPost(items);
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
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
        console.log(arrowDisable);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

    const [idx, setIdx] = useState()
  const eventClick = (event: any) => {

    setIdx(event)
  };
  console.log('idx', idx)
  const pagescroll = (element: any, index: any) => {
    console.log("previousIndex", previousIndex, index, previousIndex > index);
    if (previousIndex <= index) {
      const scrollAmount = (index + post.length) * 360;
      element.scrollLeft += scrollAmount;
      setPreviousIndex(index);
      if (index === post?.length) {
        setArrowDisable(true); //right arrow true
      }
    } else {
      let scrollAmount = (index - post.length) * 360;
      element.scrollLeft += scrollAmount;
      setPreviousIndex(index);
      if (index === 0) {
        setArrowDisable(true); // left arrow
        console.log("index");
      }
    }
  };

  // const scrollmethod = (index: any) => {
  //   document && document.getElementById("scrolltoLeft").scrollLeft = index * 360;

  // };

  return (
    <>
      <div className="button-contianer">
        <IconButton
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, -30);
          }}
          disabled={arrowDisable}
        >
          {/* <Avatar
            alt="Remy Sharp"
            src={arrowleft}
            sx={{ width: 20, height: 20, paddingLeft: 2, marginTop: 0 }}
          /> */}
          <ArrowBackIcon style={{ color: arrowDisable ? "gray" : "#000" }} />
        </IconButton>

        <IconButton
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, 30);
          }}
        >
          {/* <Avatar
            alt="Remy Sharp"
            src={arrowright}
            sx={{ width: 25, height: 25, paddingLeft: 1, marginTop: 0 }}
          /> */}
          <ArrowForwardIcon style={{ color: arrowDisable ? "#000" : "gray" }} />
        </IconButton>
      </div>
      <div style={{ marginTop: -2, marginLeft: 24 }}>
        <Grid
          container
          spacing={1}
          marginLeft={16}
          style={{ position: "fixed", top: "3em", left: "2em" }}
        ></Grid>
        <Grid
          container
          marginLeft={-5}
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
          // <Link
          //   to={`/post/${item.title}`}
          //   state={item}
          //   style={{ textDecoration: "none" }}
          // >
          <Chip
            onClick={() => { eventClick(item.title)
              pagescroll(elementRef.current, index)
        }
          }
            deleteIcon={<CloseIcon style={{ fontSize: 20 }} />}
            label={item.title}
            onDelete={() => deleteItem(index)}
            style={{
              marginLeft: -42,
              marginRight: 50,
              marginTop: 14,
              backgroundColor: "#DADDE2",
              fontFamily: "DMSans-Medium",
            }}
          />
          // </Link>
        ))}
        {post.length !== 0 && (
          <Chip
            variant="outlined"
            deleteIcon={<CloseIcon style={{ fontSize: 20 }} />}
            label={"Clear All"}
            onDelete={() => ClearAll()}
            style={{
              marginLeft: -40,
              marginRight: 50,
              marginTop: 14,
              color: "gray",
              fontFamily: "DMSans-Medium",
            }}
          />
        )}
      </div>

      <div
        id={"scrolltoLeft"}
        className="img-container"
        ref={elementRef}
        style={{ marginLeft: -40 }}
      >
        {/* <RLDD
          layout="horizontal"
          items={post}
          itemRenderer={itemRenderer}
          onChange={handleRLDDChange}
        /> */}

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="todo" direction="horizontal">
            {(provided) => (
              <div
                className="todo"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {post &&
                  post.map((item, index) => {
                    return (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div style={{ marginTop: -60, marginLeft: -20 }}>
                              <ThoughtCard item={item} idx={idx}/>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>

      {post.length === 0 && <NotFound />}
    </>
  );
};
export default ScrollComponent;
