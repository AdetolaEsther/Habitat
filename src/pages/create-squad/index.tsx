"use client";

import { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    IconButton,
    Button,
    Stack,
    Avatar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import dayjs, { Dayjs } from "dayjs";
import RepeatDaysStrip from "@/shared/repeatdays";

export default function CreateSquad() {
    const router = useRouter();
    const [groupName, setGroupName] = useState("");
    const [notes, setNotes] = useState("");
    const [selectedIcon, setSelectedIcon] = useState("Health");
    const [reminderOn, setReminderOn] = useState(true);
    const [reminderTime, setReminderTime] = useState<Dayjs | null>(
        dayjs().hour(8).minute(0)
    );
    const [repeatDays, setRepeatDays] = useState<string[]>([]); 

    const [contacts, setContacts] = useState([
        { id: 1, name: "Sarah Jenkins", username: "@sarahj", selected: false },
        { id: 2, name: "John Doe", username: "@johndoe", selected: false },
        {
            id: 3,
            name: "Alice Smith",
            username: "@alicesmith",
            selected: false,
        },
    ]);

    const icon = [
        { icon: "solar:health-bold", name: "Health" },
        { icon: "tabler:book-filled", name: "Study" },
        { icon: "material-symbols:mindfulness-rounded", name: "Mind" },
        { icon: "mdi:art", name: "Creativity" },
        { icon: "mdi:dumbbell", name: "Fitness" },
        { icon: "mdi:work", name: "Productivity" },
        { icon: "icon-park-solid:butterfly", name: "Others" },
    ];

    const toggleContact = (id: number) => {
        setContacts((prev) =>
            prev.map((c) => (c.id === id ? { ...c, selected: !c.selected } : c))
        );
    };

    const isFormValid =
        groupName.trim() !== "" &&
        notes.trim() !== "" &&
        selectedIcon !== "" &&
        contacts.some((c) => c.selected) &&
        repeatDays.length > 0;

    const handleCreate = () => {
        const selectedContacts = contacts.filter((c) => c.selected);
        console.log({
            groupName,
            notes,
            selectedIcon,
            reminderOn,
            reminderTime: reminderTime?.format("HH:mm"),
            repeatDays,
            selectedContacts,
        });
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
                    New Group
                </Typography>
                <Typography
                    sx={{ fontSize: "1rem", color: "#7d003e", fontWeight: 600 }}
                >
                    Save{" "}
                </Typography>
            </Box>

            <Typography sx={{ fontWeight: 800, mb: 1, fontSize: "2rem" }}>
                Let's build your squad.
            </Typography>
            <Typography variant="body1" sx={{ color: "#777777", mb: 2 }}>
                Create a space for shared goals and mutual support.
            </Typography>
            <Stack>
                <Typography sx={{ fontWeight: 600, mb: 1 }}>
                    Group Name
                </Typography>

                <TextField
                    fullWidth
                    placeholder=" e.g Early Birds"
                    value={groupName} 
                    onChange={(e) => setGroupName(e.target.value)}
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
                            "& fieldset": {
                                borderColor: "#2d3b5e",
                            },
                        },
                    }}
                    InputLabelProps={{
                        shrink: true,
                        sx: {
                            color: "#fff",
                            fontWeight: 500,
                            fontSize: "18px",
                        },
                    }}
                />
            </Stack>

            <Stack>
                <Typography sx={{ fontWeight: 600, mb: 1 }}>
                    Group Goal
                </Typography>
                <TextField
                    fullWidth
                    placeholder="Add any notes for this habit..."
                    multiline
                    minRows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    inputProps={{ maxLength: 200 }}
                    helperText={`${notes.length}/200`}
                    sx={{
                        backgroundColor: "#17203c",
                        borderRadius: 2,
                        "& .MuiInputBase-input": { color: "#fff" },
                        "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                        mb: 3,
                        "& .MuiFormHelperText-root": {
                            color: "#fff",
                            textAlign: "right",
                            fontWeight: "bold",
                        },
                    }}
                />
            </Stack>

            <Box sx={{ borderRadius: 2, py: 1.5 }}>
                <Typography sx={{ fontWeight: 600, mb: 1 }}>
                    Shared Focus
                </Typography>
                <Typography variant="body2" sx={{ color: "#777777", mb: 2 }}>
                    Choose an icon that represents your group's main focus.
                </Typography>
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
                            <Box
                                key={item.name}
                                component="button"
                                onClick={() => setSelectedIcon(item.name)}
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
                        );
                    })}
                </Box>
            </Box>

            <Box sx={{ mt: 3 }}>
                <Typography sx={{ fontWeight: 600, mb: 1 }}>
                    Repeat Days
                </Typography>
                <RepeatDaysStrip
                    selectedDays={repeatDays}
                    onChange={(days: string[]) => setRepeatDays(days)}
                />
            </Box>

            <Stack sx={{ mt: 3 }}>
                <Typography sx={{ fontWeight: 600, mb: 1, mt: 3 }}>
                    Who's Joining You?
                </Typography>
                {contacts.map((contact) => (
                    <Box
                        key={contact.id}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            p: 1.5,
                            borderRadius: 2,
                            cursor: "pointer",
                            "&:hover": { backgroundColor: "#1d2948" },
                            mb: 1,
                        }}
                        onClick={() => toggleContact(contact.id)}
                    >
                        <Avatar
                            src="/profilee-picture.jpg"
                            sx={{ width: 50, height: 50, mr: 2 }}
                        />
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography sx={{ fontWeight: 600, color: "#fff" }}>
                                {contact.name}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: 12,
                                    color: "rgba(255,255,255,0.6)",
                                }}
                            >
                                {contact.username}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: 24,
                                height: 24,
                                borderRadius: "50%",
                                border: "2px solid #7c003d",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: contact.selected
                                    ? "#7c003d"
                                    : "transparent",
                                transition: "all 0.2s ease",
                            }}
                        >
                            {contact.selected && (
                                <Box
                                    sx={{
                                        width: 12,
                                        height: 12,
                                        borderRadius: "50%",
                                        backgroundColor: "#7c003d",
                                    }}
                                />
                            )}
                        </Box>
                    </Box>
                ))}
            </Stack>

            <Button
                fullWidth
                variant="contained"
                disabled={!isFormValid}
                onClick={handleCreate}
                sx={{
                    backgroundColor: "#7c003d",
                    paddingY: 1.6,
                    borderRadius: "3px",
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    mt: 2,
                    "&:disabled": { backgroundColor: "rgba(124,0,61,0.4)" },
                }}
                endIcon={<Icon icon="maki:arrow" width={24} height={24} />}
            >
                Create Group
            </Button>
        </Box>
    );
}
