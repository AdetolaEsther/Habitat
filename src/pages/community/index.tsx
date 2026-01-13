import Layout from "@/components/layout";
import { User } from "@/data/userType";
import Image from "next/image";
import {
    Avatar,
    Box,
    Typography,
    Stack,
    Button,
    Card,
    CardContent,
    Switch,
    IconButton,
    Grid,
    MenuItem,
    Menu,
} from "@mui/material";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import ProgressStreak from "@/shared/ProgressStreak";

const ProfilePage = () => {
    const [user, setUser] = useState<User | null>(null);
    const stories = [
        {
            id: 1,
            name: "Tunde",
            avatar: "/freepik_assistant_1760596112435.png",
        },
        { id: 2, name: "Aisha", avatar: "/4871715.jpg" },
        { id: 3, name: "Seun", avatar: "/62571.jpg" },
        { id: 3, name: "Sean", avatar: "/7747195.jpg" },
        { id: 3, name: "Agatha", avatar: "/profile3.jpg" },
        { id: 3, name: "Sam", avatar: "/profile3.jpg" },
    ];

    const [selectedIcon, setSelectedIcon] = useState(
        "fluent-emoji-flat:red-heart"
    );
    const [hovered, setHovered] = useState(false);

    const iconOptions = [
        "fluent-emoji-flat:red-heart",
        "fluent-emoji-flat:thumbs-up",
        "noto-v1:military-medal",
    ];

    useEffect(() => {
        const storedUser = localStorage.getItem("loggedInUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            window.location.href = "/welcome";
        }
    }, []);
    return (
        <Layout>
            <Box sx={{ minHeight: "100vh", p: 1 }}>
                <Stack spacing={3} sx={{ maxWidth: 600, mx: "auto" }}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <IconButton>
                            <Icon
                                icon="material-symbols:search"
                                width={28}
                                height={28}
                                color="#fff"
                                onClick={() => window.history.back()}
                            />
                        </IconButton>
                        <Typography variant="h6" fontWeight={600}>
                            Social Habits{" "}
                        </Typography>
                        <Stack
                            direction="row"
                            alignItems="center"
                            spacing={0.5}
                        >
                            <Icon
                                icon="flowbite:user-add-solid"
                                width={26}
                                height={26}
                                color="#fda4af"
                            />
                            <Typography
                                variant="caption"
                                fontWeight={500}
                                sx={{ color: "#fda4af" }}
                            >
                                Add
                            </Typography>
                        </Stack>
                    </Stack>

                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                            mt: 2,
                            overflowX: "auto",
                            px: 1,
                            "&::-webkit-scrollbar": { display: "none" },
                        }}
                    >
                        <Stack alignItems="center" spacing={1}>
                            <Box sx={{ position: "relative" }}>
                                <Avatar
                                    src="/profilee-picture.jpg"
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        bgcolor: "#FFC1CC",
                                        border: "2px solid #7c003d",
                                    }}
                                />
                                <IconButton
                                    sx={{
                                        position: "absolute",
                                        bottom: -2,
                                        right: -2,
                                        bgcolor: "#7c003d",
                                        width: 28,
                                        height: 28,
                                    }}
                                >
                                    <Icon
                                        icon="mdi:plus"
                                        width={16}
                                        height={16}
                                        color="#fff"
                                    />
                                </IconButton>
                            </Box>
                            <Box sx={{ fontSize: 12 }}>Your story</Box>
                        </Stack>

                        {stories.map((story) => (
                            <Stack
                                key={story.id}
                                alignItems="center"
                                spacing={1}
                            >
                                <Avatar
                                    src={story.avatar}
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        border: "2px solid #ff005d", // active story ring
                                        padding: "2px",
                                    }}
                                />
                                <Box sx={{ fontSize: 12 }}>{story.name}</Box>
                            </Stack>
                        ))}
                    </Stack>
                    <Card
                        sx={{
                            borderRadius: 4,
                            boxShadow: "none",
                            p: 4,
                            position: "relative",
                            overflow: "hidden",
                            background:
                                "linear-gradient(135deg, #7C003D 0%, #26000F 100%)",
                            color: "#fff",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                right: -20,
                                top: "50%",
                                transform: "translateY(-40%)",
                                opacity: 0.15,
                                fontSize: 200,
                            }}
                        >
                            <Icon icon="material-symbols:trophy-rounded" />
                        </Box>

                        <Stack spacing={2} sx={{ maxWidth: 420 }}>
                            <Box
                                sx={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 1,
                                    px: 1.5,
                                    py: 0.5,
                                    borderRadius: 2,
                                    bgcolor: "rgba(255,255,255,0.10)",
                                    fontSize: 12,
                                    fontWeight: 600,
                                    width: "fit-content",
                                }}
                            >
                                COMMUNITY
                                <Icon icon="mdi:earth" width={14} />
                            </Box>

                            <Box
                                sx={{
                                    fontSize: 28,
                                    fontWeight: 700,
                                    lineHeight: 1.2,
                                }}
                            >
                                Start a Public Challenge
                            </Box>

                            <Box
                                sx={{
                                    fontSize: 15,
                                    color: "rgba(255,255,255,0.85)",
                                }}
                            >
                                Invite the world to build better habits with
                                you.
                            </Box>

                            <Box>
                                <Box
                                    component="button"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 8,
                                        padding: "10px 16px",
                                        borderRadius: 12,
                                        border: "none",
                                        background: "#fff",
                                        color: "#7C003D",
                                        fontWeight: 600,
                                        cursor: "pointer",
                                    }}
                                >
                                    <Icon icon="mdi:rocket-launch" />
                                    Launch Now
                                </Box>
                            </Box>
                        </Stack>
                    </Card>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography
                            sx={{
                                color: "#fff",
                                fontSize: 20,
                                fontWeight: 600,
                            }}
                        >
                            Activity Feed{" "}
                        </Typography>
                        <Typography
                            sx={{
                                color: "#fda4af",
                                fontSize: 15,
                                fontWeight: 600,
                                cursor: "pointer",
                            }}
                        >
                            View All
                        </Typography>
                    </Stack>

                    <Card
                        sx={{
                            borderRadius: 3,
                            boxShadow: "none",
                            p: 1,
                            backgroundColor: "transparent",
                        }}
                    >
                        <Stack
                            divider={
                                <Box
                                    sx={{
                                        borderBottom: 1,
                                        borderColor: "divider",
                                    }}
                                />
                            }
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    py: 2,
                                }}
                            >
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    alignItems="center"
                                >
                                    <Avatar
                                        src={"/profilee-picture.jpg"}
                                        sx={{
                                            width: 60,
                                            height: 60,
                                            bgcolor: "#FFC1CC",
                                            border: "2px solid #ff005d",
                                        }}
                                    />

                                    <Typography
                                        variant="body1"
                                        fontWeight={500}
                                        color="#fff"
                                    >
                                        Sarah Jenkins Completed{" "}
                                        <span
                                            style={{
                                                fontWeight: 700,
                                                color: "#ffb3c6",
                                            }}
                                        >
                                            "Morning Yoga Routine"
                                        </span>
                                    </Typography>
                                </Stack>

                                <Icon
                                    icon="mdi:pencil"
                                    width={26}
                                    height={26}
                                    color="gray"
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    py: 2,
                                    position: "relative",
                                }}
                            >
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    alignItems="center"
                                >
                                    <Avatar
                                        src={"/profilee-picture.jpg"}
                                        sx={{
                                            width: 60,
                                            height: 60,
                                            bgcolor: "#FFC1CC",
                                            border: "2px solid #ff005d",
                                        }}
                                    />
                                    <Typography
                                        variant="body1"
                                        fontWeight={500}
                                        color="#fff"
                                    >
                                        Sarah Jenkins Completed{" "}
                                        <span
                                            style={{
                                                fontWeight: 700,
                                                color: "#ffb3c6",
                                            }}
                                        >
                                            "Morning Yoga Routine"
                                        </span>
                                    </Typography>
                                </Stack>

                                <Box
                                    sx={{
                                        position: "relative",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                    onMouseEnter={() => setHovered(true)}
                                    onMouseLeave={() => setHovered(false)}
                                >
                                    <Box sx={{ cursor: "pointer" }}>
                                        <Icon
                                            icon={selectedIcon}
                                            width={26}
                                            height={26}
                                            color="gray"
                                        />
                                    </Box>

                                    {hovered && (
                                        <Stack
                                            direction="row"
                                            spacing={1}
                                            sx={{
                                                position: "absolute",
                                                bottom: "100%",
                                                right: "0%",
                                                transform: "translateX(-50%)",
                                                mb: 1,
                                                bgcolor: "#333",
                                                px: 1,
                                                py: 0.5,
                                                borderRadius: 2,
                                                boxShadow:
                                                    "0 4px 8px rgba(0,0,0,0.2)",
                                            }}
                                        >
                                            {iconOptions.map((icon, index) => (
                                                <Box
                                                    key={index}
                                                    sx={{
                                                        cursor: "pointer",
                                                        "&:hover": {
                                                            transform:
                                                                "scale(1.3)",
                                                            transition:
                                                                "transform 0.2s",
                                                        },
                                                    }}
                                                    onClick={() =>
                                                        setSelectedIcon(icon)
                                                    }
                                                >
                                                    <Icon
                                                        icon={icon}
                                                        width={24}
                                                        height={24}
                                                        color="white"
                                                    />
                                                </Box>
                                            ))}
                                        </Stack>
                                    )}
                                </Box>
                            </Box>
                        </Stack>
                    </Card>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography
                            sx={{
                                color: "#fff",
                                fontSize: 20,
                                fontWeight: 600,
                            }}
                        >
                            Active Squad(s){" "}
                        </Typography>
                        <Stack
                            direction="row"
                            alignItems="center"
                            spacing={0.5}
                        >
                            <Icon
                                icon="material-symbols:add-rounded"
                                width={22}
                                height={22}
                                color="#fda4af"
                            />
                            <Typography
                                sx={{
                                    color: "#fda4af",
                                    fontSize: 12,
                                    fontWeight: 600,
                                    cursor: "pointer",
                                }}
                                onClick={() => {
                                    window.location.href = "/create-squad";
                                }}
                            >
                                CREATE
                            </Typography>
                        </Stack>
                    </Stack>
                    <Card
                        sx={{
                            borderRadius: 4,
                            boxShadow: "none",
                            p: 4,
                            position: "relative",
                            overflow: "hidden",
                            backgroundColor: "rgba(255,255,255,0.08)",
                            color: "#fff",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                right: -10,
                                top: "40%",
                                transform: "translateY(-50%)",
                                opacity: 0.5,
                            }}
                        >
                            <Image
                                src="/vegetable.jpg" //
                                alt="challenge image"
                                width={200}
                                height={400}
                                style={{
                                    objectFit: "cover",
                                    borderRadius: 2,
                                }}
                            />
                        </Box>

                        <Stack spacing={2} sx={{ maxWidth: 420 }}>
                            <Box
                                sx={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 1,
                                    px: 1.5,
                                    py: 0.5,
                                    borderRadius: 1,
                                    bgcolor: "#7C003D",
                                    fontSize: 12,
                                    fontWeight: 600,
                                    width: "fit-content",
                                }}
                            >
                                INVITE
                            </Box>

                            <Box
                                sx={{
                                    fontSize: 18,
                                    fontWeight: 700,
                                    lineHeight: 1.2,
                                }}
                            >
                                No sugar November{" "}
                            </Box>

                            <Box
                                sx={{
                                    fontSize: 15,
                                    color: "rgba(255,255,255,0.85)",
                                }}
                            >
                                Alex invited you to join this Challenge
                            </Box>

                            <Box sx={{ display: "flex", gap: 2 }}>
                                <Button
                                    sx={{
                                        textTransform: "none",
                                        px: 2,
                                        py: 1.2,
                                        borderRadius: 3,
                                        backgroundColor: "#7C003D",
                                        color: "#fff",
                                        fontWeight: 600,
                                    }}
                                >
                                    Accept{" "}
                                </Button>

                                <Button
                                    sx={{
                                        textTransform: "none",
                                        px: 2,
                                        py: 1.2,
                                        borderRadius: 3,
                                        color: "#fff",
                                        fontWeight: 600,
                                        border: "2px solid gray",
                                    }}
                                >
                                    Decline
                                </Button>
                            </Box>
                        </Stack>
                    </Card>
                    <Card
                        sx={{
                            borderRadius: 4,
                            boxShadow: "none",
                            p: 4,
                            position: "relative",
                            overflow: "hidden",
                            backgroundColor: "rgba(255,255,255,0.08)",
                            color: "#fff",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                right: -10,
                                top: "40%",
                                transform: "translateY(-50%)",
                                opacity: 0.5,
                            }}
                        >
                            <Image
                                src="/vegetable.jpg" //
                                alt="challenge image"
                                width={200}
                                height={400}
                                style={{
                                    objectFit: "cover",
                                    borderRadius: 2,
                                }}
                            />
                        </Box>

                        <Stack spacing={2} sx={{ maxWidth: 420 }}>
                            <Box
                                sx={{
                                    fontSize: 18,
                                    fontWeight: 700,
                                }}
                            >
                                No sugar November{" "}
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    color: "rgba(255,255,255,0.85)",
                                }}
                            >
                                <Icon
                                    icon="pepicons-pop:checkmark-filled"
                                    width={26}
                                    height={16}
                                    color="#7c003d"
                                />
                                35 % Team Goal
                            </Box>

                            <Box sx={{ display: "flex", gap: 2 }}>
                                <ProgressStreak progress={5} streak={34}/>
                            </Box>
                        </Stack>
                    </Card>
                </Stack>
            </Box>
        </Layout>
    );
};

export default ProfilePage;
