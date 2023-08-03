import { useEffect, useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { Box, Button, Container, Paper, Stack } from "@mui/material";
import WorkoutCard from "./components/WorkoutCard";

// Define the functional component named Hero
function Hero() {
    // State variables to manage user inputs and data
    const [bodyPartDD, setBodyPartDD] = useState(new Set());
    const [muscleTypeDD, setMuscleTypeDD] = useState(new Set());
    const [bodyPart, setBodyPart] = useState('');
    const [muscleType, setMuscleType] = useState('');
    const [workOuts, setWorkOuts] = useState([]);
    const [workOutCard, setWorkOutCard] = useState([]);
    const [equipmentDD, setEquipmentDD] = useState(new Set());
    const [equipment, setEquipment] = useState('');

     // useEffect hook to fetch exercises when the component mounts
  useEffect(() => {
    getExercises();
  }, );
  
  // Function to handle button click to generate workouts
  const handleClick = (event) => {
    event.preventDefault();
    getWorkOuts(bodyPart, muscleType, equipment);
  }

   // Function to fetch exercises data from the API
   function getExercises() {
    const exerciseOptions = {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': '5923753061msh596e55cd59ef3b9p1865e7jsn90da2ddb36ab',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      },
    };

    fetch("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions)
    .then((response) => response.json())
    .then((response) => {
      setWorkOuts(response);
      // Update the sets for dropdown options
      for (let i = 0; i < response.length; i++) {
        let currentItem = response[i];
        bodyPartDD.add(currentItem.bodyPart);
        muscleTypeDD.add(currentItem.target);
        equipmentDD.add(currentItem.equipment);
      }
      setBodyPartDD(new Set(bodyPartDD));
      setMuscleTypeDD(new Set(muscleTypeDD));
      setEquipmentDD(new Set(equipmentDD));
    })
    .catch((err) => console.error(err));
}

 // Function to handle filtering
 function getWorkOuts(bodyPart, muscleType, equipment) {
    const filteredWorkOuts = workOuts.filter(
      exercise => exercise.bodyPart === bodyPart && exercise.target === muscleType && exercise.equipment === equipment
    );
    if (filteredWorkOuts.length > 0) {
      setWorkOutCard(filteredWorkOuts);
    } else {
      setWorkOutCard(
        workOuts.filter(
          exercise => exercise.bodyPart === bodyPart || exercise.target === muscleType || exercise.equipment === equipment
        )
      );
    }
  }

   // Return the JSX code for rendering the Hero component
   return (
    <div className='Hero'>
      {/* Render the Header component */}
      <Header />
      <Box m={2} />

      {/* Container for user inputs */}
      <Container maxWidth="sm">
        <Paper variant="outlined" sx={{ padding: 1 }}>
          <Stack spacing={1}>
            {/* UserInput component for Body Part selection */}
            <UserInput className="BP" bodyPartDD={bodyPartDD} setBodyPart={setBodyPart} bodyPart={bodyPart} label='Body Part' />
            {/* UserInput component for Muscle Type selection */}
            <UserInput className="MT" bodyPartDD={muscleTypeDD} setBodyPart={setMuscleType} bodyPart={muscleType} label='Muscle Type' />
            {/* UserInput component for Equipment selection */}
            <UserInput className="EQ" bodyPartDD={equipmentDD} setBodyPart={setEquipment} bodyPart={equipment} label='Equipment' />
            {/* Button to generate workouts */}
            <Button variant="contained" onClick={handleClick}>Generate Workouts</Button>
          </Stack>
        </Paper>
      </Container>

      {/* Container for rendering workout cards */}
      <Container>
        <WorkoutCard workOutCard={workOutCard} />
      </Container>
    </div>
  );
}

// Export the Hero component to use it in other parts of the Herolication
export default Hero;