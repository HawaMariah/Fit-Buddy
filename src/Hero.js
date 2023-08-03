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