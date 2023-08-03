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
  