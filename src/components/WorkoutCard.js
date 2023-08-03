// Import React library and useState hook for managing state
import React, { useState } from "react";
import { Card, Stack } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShareBtn from "./ShareBtn";
import LearnMore from "./LearnMore";

// Define the functional component named WorkoutCard
function WorkoutCard({ workOutCard }) {
    // State variables to manage pagination
    const [page, setPage] = useState(1);
    const workoutsPerPage = 3;
    const totalWorkouts = workOutCard.length;
    const totalPages = Math.ceil(totalWorkouts / workoutsPerPage);

     // Function to handle the previous page button click
  const handlePrevClick = () => {
    setPage(prevPage => prevPage - 1);
  };

  // Function to handle the next page button click
  const handleNextClick = () => {
    setPage(prevPage => prevPage + 1);
  };