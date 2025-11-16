"use client";

import { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    IconButton,
    Switch,
    Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useRouter } from "next/router";

const days = ["M", "T", "W", "T", "F", "S", "S"];

export default function NewHabit() {
    const [selectedDays, setSelectedDays] = useState<number[]>([]);
    const [reminderOn, setReminderOn] = useState(true);

    const toggleDay = (i: number) => {
        setSelectedDays((prev) =>
            prev.includes(i) ? prev.filter((d) => d !== i) : [...prev, i]
        );
    };
    const router = useRouter();

    return (
        <Box
            sx={{
                padding: 3,
                minHeight: "100vh",
                borderRadius: "20px",
            }}
        >
            {/* Header */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                }}
            >
                <Typography sx={{ fontSize: "1.8rem", fontWeight: 700 }}>
                    New habit
                </Typography>

                <IconButton onClick={() => router.push("/dashboard")}>
                    <CloseIcon />
                </IconButton>
            </Box>

            {/* Illustration */}
            <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                <img
                    src="/calender.jpg"
                    alt="habit"
                    style={{ width: 270, height: "auto" }}
                />
            </Box>

            {/* Name your habit */}
            <Typography sx={{ fontWeight: 600, mb: 1 }}>
                Name your habit
            </Typography>
            <TextField
                fullWidth
                placeholder="Morning Meditations"
                sx={{
                    mb: 3,
                    backgroundColor: "white",
                    borderRadius: "12px",
                }}
            />

            {/* Set a goal */}
            <Typography sx={{ fontWeight: 600, mb: 1 }}>Set a goal</Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
                <TextField
                    placeholder="Add date"
                    fullWidth
                    InputProps={{
                        endAdornment: <CalendarMonthIcon />,
                    }}
                    sx={{
                        backgroundColor: "white",
                        borderRadius: "12px",
                    }}
                />

                <TextField
                    placeholder="Add amount"
                    fullWidth
                    sx={{
                        backgroundColor: "white",
                        borderRadius: "12px",
                    }}
                />
            </Box>

            {/* Repeat days */}
            <Typography sx={{ fontWeight: 600, mb: 1 }}>Repeat days</Typography>

            <Box
                sx={{
                    display: "flex",
                    gap: 1.5,
                    mb: 3,
                }}
            >
                {days.map((day, i) => (
                    <Box
                        key={i}
                        onClick={() => toggleDay(i)}
                        sx={{
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                            backgroundColor: selectedDays.includes(i)
                                ? "#000"
                                : "#FFF",
                            color: selectedDays.includes(i) ? "#FFF" : "#000",
                            fontWeight: 600,
                            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                        }}
                    >
                        {day}
                    </Box>
                ))}
            </Box>

            {/* Reminders */}
            <Typography sx={{ fontWeight: 600, mb: 1 }}>
                Get reminders
            </Typography>

            <Switch
                checked={reminderOn}
                onChange={(e) => setReminderOn(e.target.checked)}
                sx={{
                    mb: 4,
                    "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "#0A1128",
                    },
                }}
            />

            {/* Save Button */}
            <Button
                fullWidth
                variant="contained"
                sx={{
                    backgroundColor: "#7c003d",
                    paddingY: 1.6,
                    borderRadius: "30px",
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    ":hover": { backgroundColor: "#e66f18" },
                }}
            >
                Save Habit
            </Button>
        </Box>
    );
}
