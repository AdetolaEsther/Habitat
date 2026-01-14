"use client";
import { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    IconButton,
    Button,
    Stack,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import ImageUpload from "@/shared/imageUpload";
import ParticipantLimit from "@/shared/ParticipantLimit";
import Rewards from "@/shared/Rewards";

export default function CreateChanllenge() {
    const router = useRouter();
    const [groupName, setGroupName] = useState("");
    const [notes, setNotes] = useState("");

    const [contacts, setContacts] = useState([
        {
            id: 1,
            name: "Daily Streak",
            username: "Achieve habits every single day",
            selected: true,
        },
        {
            id: 2,
            name: "Target Total",
            username: "Reach a cumulative amount over duration",
            selected: false,
        },
        {
            id: 3,
            name: "Milestone-based",
            username: "Unlock specific stages during challenge",
            selected: false,
        },
    ]);

const [coverImage, setCoverImage] = useState<File | string | null>("/challenge.jpg");
    const [participantLimit, setParticipantLimit] = useState(50);
    const durations = ["7", "21", "30"];
    const [selectedDuration, setSelectedDuration] = useState("7");
    const [rewardsData, setRewardsData] = useState({
        points: 0,
        badges: [] as string[],
    });

    const habitIcons = [
        { icon: "solar:health-bold", name: "Health", color: "#f87171" }, // red-ish
        { icon: "tabler:book-filled", name: "Study", color: "#60a5fa" }, // blue
        {
            icon: "material-symbols:mindfulness-rounded",
            name: "Mind",
            color: "#34d399",
        }, // green
        { icon: "mdi:art", name: "Creativity", color: "#fbbf24" }, // yellow
        { icon: "mdi:dumbbell", name: "Fitness", color: "#a78bfa" }, // purple
        { icon: "mdi:work", name: "Productivity", color: "#f472b6" }, // pink
        { icon: "icon-park-solid:butterfly", name: "Others", color: "#38bdf8" }, // cyan
    ];

    const [habits, setHabits] = useState([
        {
            icon: "mdi:run",
            name: "Morning Jog",
            target: "5",
            unit: "km",
            color: "#38bdf8",
        },
    ]);

    const [open, setOpen] = useState(false);

    const [newHabit, setNewHabit] = useState({
        icon: habitIcons[0].icon,
        name: "",
        target: "",
        unit: "",
        color: habitIcons[0].color,
    });

    const toggleContact = (id: number) => {
        setContacts((prev) =>
            prev.map((c) => (c.id === id ? { ...c, selected: !c.selected } : c))
        );
    };

    const isFormValid =
        groupName.trim() !== "" &&
        notes.trim() !== "" &&
        contacts.some((c) => c.selected);

    const handleCreate = () => {
        const selectedContacts = contacts.filter((c) => c.selected);

        if (!groupName.trim()) {
            console.warn("Challenge name is required");
            return;
        }
        if (!notes.trim()) {
            console.warn("Challenge description is required");
            return;
        }
        if (selectedContacts.length === 0) {
            console.warn("At least one goal type must be selected");
            return;
        }

        const finalCoverImage = coverImage || "/challenge.jpg";

        const challengeData = {
            groupName,
            notes,
            selectedDuration,
            selectedContacts,
            habits: habits.map((habit) => ({
                name: habit.name,
                target: habit.target,
                unit: habit.unit,
                icon: habit.icon,
                color: habit.color,
            })),
            coverImage: finalCoverImage,
            rewards: rewardsData,
            participantLimit,
        };

        console.log("✅ All Selected Items:", challengeData);
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
                    New Challenge
                </Typography>
                <IconButton
                                            sx={{
                                                bgcolor: "rgba(0,0,0,0.6)",
                                                width: 48,
                                                height: 48,
                                            }}
                                        >
                                            <Icon
                                                icon="material-symbols:groups-rounded"
                                                width={28}
                                                height={28}
                                                color="#7c003d"
                                            />
                                        </IconButton>
                
            </Box>

            <Typography sx={{ fontWeight: 600, mb: 1 }}>
                Challenge Cover
            </Typography>

            <ImageUpload onChange={(file) => setCoverImage(file)} />
            <Stack>
                <Typography sx={{ fontWeight: 600, mb: 1 }}>
                    Challenge Name
                </Typography>

                <TextField
                    fullWidth
                    placeholder=" e.g 30 days fo mindfulness"
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
                    Description
                </Typography>
                <TextField
                    fullWidth
                    placeholder="What's the goal of this challenge?, Inspire your squad"
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

            <Box sx={{ mt: 3 }}>
                <Typography sx={{ fontWeight: 600, mb: 1 }}>
                    Duration
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2,
                        justifyContent: "center",
                        width: "100%",
                    }}
                >
                    {durations.map((days) => (
                        <Box
                            key={days}
                            onClick={() => setSelectedDuration(days)}
                            sx={{
                                flex: "1 1 calc(33.333% - 16px)",
                                minWidth: 0,
                                backgroundColor:
                                    selectedDuration === days
                                        ? "#7c003d"
                                        : "rgba(255,255,255,0.08)",
                                color:
                                    selectedDuration === days ? "#fff" : "#fff",
                                borderRadius: 3,
                                p: 2,
                                textAlign: "center",
                                boxSizing: "border-box",
                                cursor: "pointer",
                                transition: "all 0.2s ease",
                                "&:hover": {
                                    backgroundColor:
                                        selectedDuration === days
                                            ? "#7c003d"
                                            : "rgba(255,255,255,0.15)",
                                },
                            }}
                        >
                            <Typography variant="h6" sx={{ fontWeight: 500 }}>
                                {days}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ fontWeight: 500 }}
                            >
                                Days
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box sx={{ mt: 3 }}>
                <Stack sx={{ mt: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                        Goal Type{" "}
                    </Typography>
                    {contacts.map((contact) => (
                        <Box
                            key={contact.id}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                p: 2,
                                borderRadius: 2,
                                cursor: "pointer",
                                backgroundColor: "rgba(255,255,255,0.08)",
                                mb: 1,
                                spacing: 2,
                            }}
                            onClick={() => toggleContact(contact.id)}
                        >
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
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography
                                    sx={{ fontWeight: 600, color: "#fff" }}
                                >
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
                        </Box>
                    ))}
                </Stack>
            </Box>
            <Box sx={{ mt: 4 }}>
                <Typography sx={{ fontWeight: 600, mb: 2 }}>
                    Habits & Specific Targets
                </Typography>

                {habits.map((habit, idx) => {
                    const iconColor = habit.color || "#7c003d";

                    return (
                        <Box
                            key={idx}
                            sx={{
                                backgroundColor: "rgba(255,255,255,0.08)",
                                borderRadius: 2,
                                p: 2,
                                mb: 2,
                            }}
                        >
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                mb={2}
                            >
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    alignItems="center"
                                >
                                    <Box
                                        sx={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 2,
                                            bgcolor: `${iconColor}25`, // light transparent background
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Icon
                                            icon={habit.icon}
                                            color={iconColor}
                                        />
                                    </Box>
                                    <Typography sx={{ fontWeight: 600 }}>
                                        {habit.name}
                                    </Typography>
                                </Stack>

                                <IconButton
                                    size="small"
                                    onClick={() =>
                                        setHabits(
                                            habits.filter((_, i) => i !== idx)
                                        )
                                    }
                                    sx={{
                                        bgcolor: "rgba(255,255,255,0.08)",
                                        "&:hover": {
                                            bgcolor: "rgba(255,255,255,0.15)",
                                        },
                                    }}
                                >
                                    <Icon
                                        icon="mdi:close-circle"
                                        color="#ef4444"
                                    />
                                </IconButton>
                            </Stack>

                            <Stack direction="row" spacing={2}>
                                <TextField
                                    label="Target"
                                    fullWidth
                                    size="small"
                                    value={habit.target}
                                    sx={{
                                        backgroundColor: "#17203c",
                                        borderRadius: 2,
                                        "& .MuiInputBase-input": {
                                            color: "#fff",
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "rgba(255,255,255,0.7)",
                                        },
                                        "& .MuiInputLabel-root.Mui-focused": {
                                            color: "#fff",
                                        },
                                        "& .MuiOutlinedInput-root": {
                                            "& fieldset": {
                                                borderColor:
                                                    "rgba(255,255,255,0.3)",
                                            },
                                            "&:hover fieldset": {
                                                borderColor:
                                                    "rgba(255,255,255,0.5)",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: iconColor,
                                            },
                                        },
                                    }}
                                />
                                <TextField
                                    label="Unit"
                                    fullWidth
                                    size="small"
                                    value={habit.unit}
                                    sx={{
                                        backgroundColor: "#17203c",
                                        borderRadius: 2,
                                        "& .MuiInputBase-input": {
                                            color: "#fff",
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "rgba(255,255,255,0.7)",
                                        },
                                        "& .MuiInputLabel-root.Mui-focused": {
                                            color: "#fff",
                                        },
                                        "& .MuiOutlinedInput-root": {
                                            "& fieldset": {
                                                borderColor:
                                                    "rgba(255,255,255,0.3)",
                                            },
                                            "&:hover fieldset": {
                                                borderColor:
                                                    "rgba(255,255,255,0.5)",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: iconColor,
                                            },
                                        },
                                    }}
                                />
                            </Stack>
                        </Box>
                    );
                })}

                <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => setOpen(true)}
                    sx={{
                        borderStyle: "dashed",
                        borderColor: "rgba(255,255,255,0.3)",
                        color: "gray",
                        py: 1.4,
                    }}
                    startIcon={<Icon icon="mdi:add-circle" color="gray" />}
                >
                    Add another habit
                </Button>
            </Box>

            <ParticipantLimit
                value={participantLimit}
                onChange={setParticipantLimit}
            />

            <Box sx={{ mt: 4 }}>
                <Typography sx={{ fontWeight: 600, mb: 1 }}>
                    Prerequisites (optional)
                </Typography>
                <TextField
                    fullWidth
                    placeholder="e.g Must have completed Foundations"
                    sx={{
                        backgroundColor: "#17203c",
                        borderRadius: 2,

                        "& .MuiInputBase-input": {
                            color: "#fff",
                        },
                        "& .MuiInputLabel-root": {
                            color: "rgba(255,255,255,0.7)",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                            color: "#fff",
                        },
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "rgba(255,255,255,0.3)",
                            },
                            "&:hover fieldset": {
                                borderColor: "rgba(255,255,255,0.5)",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#7c003d",
                            },
                        },
                    }}
                />
            </Box>

            <Rewards
                onChange={(selected) =>
                    setRewardsData({ ...rewardsData, badges: selected })
                }
            />
            <Box sx={{ mt: 4 }}>
                <Typography sx={{ fontWeight: 600, mb: 2 }}>
                    Privacy & Access
                </Typography>

                <Stack spacing={2}>
                    {[
                        {
                            title: "Public Challenge",
                            desc: "Visible to everyone in community",
                        },
                        {
                            title: "Require Photo Proof",
                            desc: "Verification needed for progress",
                        },
                    ].map((item) => (
                        <Stack
                            key={item.title}
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{
                                backgroundColor: "rgba(255,255,255,0.08)",
                                p: 2,
                                borderRadius: 2,
                            }}
                        >
                            <Box>
                                <Typography sx={{ fontWeight: 600 }}>
                                    {item.title}
                                </Typography>
                                <Typography sx={{ fontSize: 12, opacity: 0.6 }}>
                                    {item.desc}
                                </Typography>
                            </Box>
                            <input
                                type="checkbox"
                                style={{ color: "#7c003d" }}
                            />
                        </Stack>
                    ))}
                </Stack>
            </Box>

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

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                fullWidth
                maxWidth="sm"
                PaperProps={{
                    sx: {
                        backgroundColor: "#0a1129",
                        borderRadius: 3,
                        p: 2,
                    },
                }}
            >
                <DialogTitle sx={{ color: "#fff", fontWeight: 600 }}>
                    Create Habit
                </DialogTitle>

                <DialogContent>
                    <Typography sx={{ mb: 1, fontWeight: 500, color: "#fff" }}>
                        Choose an icon
                    </Typography>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: 2,
                            mb: 3,
                        }}
                    >
                        {habitIcons.map((item) => (
                            <Box
                                key={item.name}
                                onClick={() =>
                                    setNewHabit({
                                        ...newHabit,
                                        icon: item.icon,
                                    })
                                }
                                sx={{
                                    aspectRatio: "1 / 1",
                                    borderRadius: 2,
                                    border:
                                        newHabit.icon === item.icon
                                            ? "2px solid #7c003d"
                                            : "1px solid rgba(255,255,255,0.2)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                }}
                            >
                                <Icon
                                    icon={item.icon}
                                    color="#7c003d"
                                    width={24}
                                />
                                <Typography
                                    variant="caption"
                                    sx={{ mt: 0.5, color: "#fff" }}
                                >
                                    {item.name}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    <TextField
                        fullWidth
                        label="Habit name"
                        value={newHabit.name}
                        onChange={(e) =>
                            setNewHabit({ ...newHabit, name: e.target.value })
                        }
                        sx={{
                            backgroundColor: "#17203c",
                            borderRadius: 2,
                            mb: 3,
                            "& .MuiInputBase-input": {
                                color: "#fff",
                            },
                            "& .MuiInputLabel-root": {
                                color: "rgba(255,255,255,0.7)",
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#fff",
                            },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "rgba(255,255,255,0.3)",
                                },
                                "&:hover fieldset": {
                                    borderColor: "rgba(255,255,255,0.5)",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#7c003d",
                                },
                            },
                        }}
                    />

                    <Stack direction="row" spacing={2}>
                        <TextField
                            label="Target"
                            fullWidth
                            value={newHabit.target}
                            onChange={(e) =>
                                setNewHabit({
                                    ...newHabit,
                                    target: e.target.value,
                                })
                            }
                            sx={{
                                backgroundColor: "#17203c",
                                borderRadius: 2,

                                "& .MuiInputBase-input": {
                                    color: "#fff",
                                },
                                "& .MuiInputLabel-root": {
                                    color: "rgba(255,255,255,0.7)",
                                },
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "#fff",
                                },
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "rgba(255,255,255,0.3)",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "rgba(255,255,255,0.5)",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#7c003d",
                                    },
                                },
                            }}
                        />

                        <TextField
                            label="Unit"
                            fullWidth
                            value={newHabit.unit}
                            onChange={(e) =>
                                setNewHabit({
                                    ...newHabit,
                                    unit: e.target.value,
                                })
                            }
                            sx={{
                                backgroundColor: "#17203c",
                                borderRadius: 2,

                                "& .MuiInputBase-input": {
                                    color: "#fff",
                                },
                                "& .MuiInputLabel-root": {
                                    color: "rgba(255,255,255,0.7)",
                                },
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "#fff",
                                },
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "rgba(255,255,255,0.3)",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "rgba(255,255,255,0.5)",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#7c003d",
                                    },
                                },
                            }}
                        />
                    </Stack>
                </DialogContent>

                <DialogActions sx={{ p: 2 }}>
                    <Button
                        onClick={() => setOpen(false)}
                        sx={{ color: "#fff" }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ bgcolor: "#7c003d" }}
                        onClick={() => {
                            setHabits([...habits, newHabit]);
                            setNewHabit({
                                icon: habitIcons[0].icon,
                                name: "",
                                target: "",
                                unit: "",
                                color: habitIcons[0].color,
                            });
                            setOpen(false);
                        }}
                    >
                        Add Habit
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
