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

   // Return the JSX code for rendering the WorkoutCard component
   return (
    <Stack>
      {/* Stack for arranging components */}
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ padding: 3 }}>
        {/* Loop through the workouts to render cards */}
        {workOutCard.slice((page - 1) * workoutsPerPage, page * workoutsPerPage).map((workout) => (
          <Card sx={{ maxWidth: 350, minWidth: 350, minHeight: 600 }} key={workout.id}>
            {/* CardMedia for displaying workout GIF */}
            <CardMedia
              sx={{ height: 375 }}
              image={workout.gifUrl}
              title={workout.name}
            />
            {/* CardContent for displaying workout details */}
            <CardContent>

              {/* Typography for workout name */}
              <Typography gutterBottom variant="h5" component="div" sx={{ }}>
                {workout.name.replace(/^./, workout.name[0].toUpperCase())}
              </Typography>
              {/* Typography for body part */}
              <Typography variant="body2" color="text.secondary">
                Body Part: {workout.bodyPart}
              </Typography>
              {/* Typography for muscle type */}
              <Typography variant="body2" color="text.secondary">
                Muscle Type: {workout.target}
              </Typography>
              {/* Typography for equipment needed */}
              <Typography variant="body2" color="text.secondary">
                Equipment Needed: {workout.equipment}
              </Typography>
            </CardContent>
            {/* CardActions for buttons */}
            <CardActions>
              {/* Custom ShareBtn component */}
              <ShareBtn />
              {/* Custom LearnMore component */}
              <LearnMore name={workout.name} />
            </CardActions>
          </Card>
        ))}
      </Stack>

      {/* Show page number */}
      {totalWorkouts !== 0 ?
        <Typography>Page: {page} of {Math.ceil(totalWorkouts / 3)}</Typography> : ""}

      {/* Show pagination buttons */}
      {totalWorkouts > workoutsPerPage && (
        <div>
          {/* Button for previous page */}
          <Button onClick={handlePrevClick} disabled={page === 1}>
            Prev
          </Button>
          {/* Button for next page */}
          <Button onClick={handleNextClick} disabled={page === totalPages}>
            Next
          </Button>
        </div>
      )}
    </Stack>
  );
}

// Export the WorkoutCard component to use it in other parts of the application
export default WorkoutCard;