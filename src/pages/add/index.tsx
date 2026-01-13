"use client";

import { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    IconButton,
    Switch,
    Button,
    InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import dayjs, { Dayjs } from "dayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import RepeatDaysStrip from "@/shared/repeatdays";

export default function NewHabit() {
    const router = useRouter();

    // Form state
    const [habitName, setHabitName] = useState("");
    const [notes, setNotes] = useState("");
    const [selectedIcon, setSelectedIcon] = useState("Health");
    const [reminderOn, setReminderOn] = useState(true);
    const [reminderTime, setReminderTime] = useState<Dayjs | null>(
        dayjs().hour(8).minute(0)
    );
    const [repeatDays, setRepeatDays] = useState<string[]>([]);

    const icon = [
        { icon: "solar:health-bold", name: "Health" },
        { icon: "tabler:book-filled", name: "Study" },
        { icon: "material-symbols:mindfulness-rounded", name: "Mind" },
        { icon: "mdi:art", name: "Creativity" },
        { icon: "mdi:dumbbell", name: "Fitness" },
        { icon: "mdi:work", name: "Productivity" },
        { icon: "icon-park-solid:butterfly", name: "Others" },
    ];

    const isFormValid =
        habitName.trim() !== "" &&
        notes.trim() !== "" &&
        selectedIcon !== "" &&
        repeatDays.length > 0;

    const handleSubmit = () => {
        const data = {
            habitName,
            notes,
            selectedIcon,
            reminderOn,
            reminderTime: reminderTime?.format("HH:mm"),
            repeatDays,
        };
        console.log("Habit Data:", data);
        router.push("/dashboard");
    };

    return (
        <Box
            sx={{
                padding: 3,
                minHeight: "100vh",
                borderRadius: "20px",
                backgroundColor: "#0a1129",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                }}
            >
                <IconButton onClick={() => router.push("/dashboard")}>
                    <CloseIcon sx={{ color: "#fff" }} />
                </IconButton>
                <Typography sx={{ fontSize: "1.4rem", fontWeight: 700 }}>
                    New Habit
                </Typography>
                <Typography
                    sx={{ fontSize: "1rem", color: "#7d003e", fontWeight: 600 }}
                >
                    Save
                </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                <img
                    src="/calender.jpg"
                    alt="habit"
                    style={{ width: 270, height: "auto" }}
                />
            </Box>

            <Typography sx={{ fontWeight: 600, mb: 1 }}>
                Name your habit
            </Typography>
            <TextField
                fullWidth
                placeholder="Morning Meditations"
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}
                sx={{
                    mb: 3,
                    backgroundColor: "white",
                    borderRadius: "12px",
                }}
                InputProps={{
                    sx: {
                        height: 62,
                        color: "#fff",
                        backgroundColor: "#17203c",
                        borderRadius: "10px",
                        "& fieldset": { borderColor: "#2d3b5e" },
                    },
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton>
                                <Icon
                                    icon="material-symbols:edit-rounded"
                                    color="#7d003e"
                                />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                InputLabelProps={{
                    shrink: true,
                    sx: { color: "#fff", fontWeight: 500, fontSize: "18px" },
                }}
            />

            <Box sx={{ borderRadius: 2, py: 1.5 }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        px: 2,
                        overflowX: "auto",
                        gap: 1,
                        whiteSpace: "nowrap",
                        scrollSnapType: "x mandatory",
                        "&::-webkit-scrollbar": { display: "none" },
                    }}
                >
                    {icon.map((item) => {
                        const isSelected = selectedIcon === item.name;
                        return (
                            <motion.div
                                key={item.name}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedIcon(item.name)}
                                style={{ scrollSnapAlign: "center" }}
                            >
                                <Box
                                    component="button"
                                    sx={{
                                        backgroundColor: isSelected
                                            ? "#7c003d"
                                            : "transparent",
                                        color: "#fff",
                                        width: 48,
                                        height: 48,
                                        borderRadius: "50%",
                                        border: "1px solid rgba(255,255,255,0.2)",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        transition: "all 0.25s ease",
                                        "&:hover": {
                                            backgroundColor: isSelected
                                                ? "#7c003d"
                                                : "rgba(124,0,61,0.25)",
                                        },
                                    }}
                                >
                                    <Icon
                                        icon={item.icon}
                                        width={22}
                                        height={22}
                                        color="#fff"
                                    />
                                </Box>
                                <Typography
                                    variant="caption"
                                    color="#777777"
                                    sx={{ fontWeight: 400 }}
                                >
                                    {item.name}
                                </Typography>
                            </motion.div>
                        );
                    })}
                </Box>
            </Box>

            <Box sx={{ mt: 3 }}>
                <Typography sx={{ fontWeight: 600, mb: 1 }}>
                    Repeat days
                </Typography>
                <RepeatDaysStrip
                    selectedDays={repeatDays}
                    onChange={(days: string[]) => setRepeatDays(days)}
                />
            </Box>

            <Box
                sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}
            >
                <Box
                    sx={{
                        borderRadius: 3,
                        backgroundColor: "rgba(255,255,255,0.08)",
                        px: 2,
                        py: 1.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        color: "#fff",
                    }}
                >
                    <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                    >
                        <IconButton
                            sx={{
                                backgroundColor: "rgba(125,0,62,0.25)",
                                width: 42,
                                height: 42,
                            }}
                        >
                            <Icon
                                icon="carbon:checkmark-filled"
                                width={22}
                                height={22}
                                color="#7d003e"
                            />
                        </IconButton>
                        <Box>
                            <Typography fontWeight={700}>
                                Daily Reminder
                            </Typography>
                            <Typography fontSize="0.8rem">
                                Get notified to complete this habit
                            </Typography>
                        </Box>
                    </Box>
                    <Switch
                        checked={reminderOn}
                        onChange={(e) => setReminderOn(e.target.checked)}
                        sx={{
                            "& .MuiSwitch-switchBase.Mui-checked": {
                                color: "#7d003e",
                            },
                        }}
                    />
                </Box>

                {reminderOn && (
                    <Box
                        sx={{
                            borderRadius: 3,
                            backgroundColor: "rgba(255,255,255,0.08)",
                            px: 2,
                            py: 1.5,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            color: "#fff",
                        }}
                    >
                        <Typography fontWeight={700}>Time</Typography>
                        <TimePicker
                            value={reminderTime}
                            onChange={(newValue) => setReminderTime(newValue)}
                            slotProps={{
                                textField: {
                                    size: "small",
                                    sx: {
                                        width: 120,
                                        backgroundColor: "#17203c",
                                        borderRadius: 2,
                                        color: "#7d003e",
                                        input: {
                                            color: "#7d003e",
                                            textAlign: "center",
                                        },
                                        "& fieldset": {
                                            borderColor:
                                                "rgba(255,255,255,0.2)",
                                        },
                                    },
                                },
                            }}
                        />
                    </Box>
                )}
            </Box>

            <Typography sx={{ fontWeight: 600, mb: 1, mt: 3 }}>
                Notes (optional)
            </Typography>
            <TextField
                fullWidth
                placeholder="Add any notes for this habit..."
                multiline
                minRows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                inputProps={{ maxLength: 200 }}
                sx={{
                    backgroundColor: "#17203c",
                    borderRadius: 2,
                    "& .MuiInputBase-input": { color: "#fff" },
                    "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                    mb: 3,
                }}
            />

            <Button
                fullWidth
                variant="contained"
                disabled={!isFormValid}
                onClick={handleSubmit}
                sx={{
                    backgroundColor: "#7c003d",
                    paddingY: 1.6,
                    borderRadius: "30px",
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    mt: 2,
                    "&:disabled": { backgroundColor: "rgba(124,0,61,0.4)" },
                }}
            >
                Save Habit
            </Button>
        </Box>
    );
}
