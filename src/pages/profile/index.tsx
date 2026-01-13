import Layout from "@/components/layout";
import { User } from "@/data/userType";
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
} from "@mui/material";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";

const ProfilePage = () => {
    const [user, setUser] = useState<User | null>(null);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem("loggedInUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            window.location.href = "/welcome";
        }
    }, []);
    const [notifications, setNotifications] = useState(true);
    const toggleMode = () => setDarkMode(!darkMode);
    const handleNotification = () => console.log("Notifications clicked");
    const handleSettings = () => console.log("Settings clicked");
    const handleRateApp = () => console.log("Rate app clicked");

    return (
        <Layout>
            <Box
                // className={darkMode ? "dark-mode" : "light-mode"}
                sx={{ minHeight: "100vh", p: 1 }}
            >
                <Stack spacing={3} sx={{ maxWidth: 600, mx: "auto" }}>
                    {/* Header */}
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <IconButton>
                            <Icon
                                icon="mdi:chevron-left"
                                width={28}
                                height={28}
                                color="#fff"
                                onClick={() => window.history.back()}
                            />
                        </IconButton>
                        <Typography variant="h6" fontWeight={600}>
                            My Profile
                        </Typography>
                        <Typography variant="caption" fontWeight={500}>
                            Edit{" "}
                        </Typography>
                    </Stack>
                    {/* Profile Section */}
                    <Stack alignItems="center" spacing={1} sx={{ mt: 2 }}>
                        <Box sx={{ position: "relative" }}>
                            <Avatar
                                src={"/profilee-picture.jpg"}
                                sx={{
                                    width: 120,
                                    height: 120,
                                    bgcolor: "#FFC1CC",
                                }}
                            />
                            <IconButton
                                sx={{
                                    position: "absolute",
                                    bottom: 0,
                                    right: 0,
                                    bgcolor: "#7c003d",
                                    width: 32,
                                    height: 32,
                                }}
                            >
                                <Icon
                                    icon="mdi:pencil"
                                    width={16}
                                    height={16}
                                    color="#fff"
                                />
                            </IconButton>
                        </Box>
                        <Typography
                            variant="h5"
                            fontWeight={600}
                            sx={{ mt: 1 }}
                        >
                            Brooklyn Simmons
                        </Typography>

                        <Typography
                            variant="caption"
                            sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 0.7,
                                backgroundColor: "rgba(255,255,255,0.08)",
                                px: 2,
                                py: 0.5,
                                borderRadius: 999,
                                color: "#fff",
                                fontWeight: 600,
                                fontSize: "0.75rem",
                            }}
                        >
                            <Icon
                                icon="mdi:medal"
                                width={14}
                                height={14}
                                color="#fff"
                            />
                            Habit Master (LVL 5){" "}
                        </Typography>
                    </Stack>
                    <Stack
                        alignItems="center"
                        spacing={1}
                        sx={{ mt: 2, width: "100%" }}
                    >
                        <Grid container spacing={2}>
                            <Grid>
                                <Card
                                    sx={{
                                        px: 3,
                                        py: 2,
                                        borderRadius: 3,
                                        textAlign: "start",
                                        backgroundColor:
                                            "rgba(255,255,255,0.08)",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 0.7,
                                        }}
                                    >
                                        <Icon
                                            icon="mdi:fire"
                                            width={18}
                                            height={18}
                                            style={{ flexShrink: 0 }}
                                            color="#fff"
                                        />
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: "gray",
                                                fontSize: "0.75rem",
                                            }}
                                        >
                                            Streak
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        color="#fff"
                                        sx={{
                                            fontWeight: 700,
                                        }}
                                    >
                                        9{" "}
                                    </Typography>
                                    <Typography variant="caption" color="gray">
                                        + 1 day{" "}
                                    </Typography>
                                </Card>
                            </Grid>
                            <Grid>
                                <Card
                                    sx={{
                                        px: 3,
                                        py: 2,
                                        borderRadius: 3,
                                        textAlign: "start",
                                        backgroundColor:
                                            "rgba(255,255,255,0.08)",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 0.9,
                                        }}
                                    >
                                        <Icon
                                            icon="carbon:checkmark-filled"
                                            width={18}
                                            height={18}
                                            style={{ flexShrink: 0 }}
                                            color="#fff"
                                        />
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: "gray",
                                                fontSize: "0.75rem",
                                            }}
                                        >
                                            Done
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        color="#fff"
                                        sx={{
                                            fontWeight: 700,
                                        }}
                                    >
                                        39%{" "}
                                    </Typography>
                                    <Typography variant="caption" color="gray">
                                        + 1% rate{" "}
                                    </Typography>
                                </Card>
                            </Grid>
                            <Grid>
                                <Card
                                    sx={{
                                        px: 3,
                                        py: 2,
                                        borderRadius: 3,
                                        textAlign: "start",
                                        backgroundColor:
                                            "rgba(255,255,255,0.08)",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 0.7,
                                        }}
                                    >
                                        <Icon
                                            icon="dashicons:awards"
                                            width={18}
                                            height={18}
                                            style={{ flexShrink: 0 }}
                                            color="#fff"
                                        />
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: "gray",
                                                fontSize: "0.75rem",
                                            }}
                                        >
                                            Awards{" "}
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        color="#fff"
                                        sx={{
                                            fontWeight: 700,
                                        }}
                                    >
                                        9{" "}
                                    </Typography>
                                    <Typography variant="caption" color="gray">
                                        + 0 new{" "}
                                    </Typography>
                                </Card>
                            </Grid>
                        </Grid>
                    </Stack>
                    {/* Settings Card */}
                    <Typography
                        sx={{
                            color: "gray",
                        }}
                    >
                        General{" "}
                    </Typography>

                    <Card
                        sx={{
                            borderRadius: 3,
                            boxShadow: "none",
                            p: 3,
                            backgroundColor: "rgba(255,255,255,0.06)",
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
                                    <IconButton
                                        sx={{
                                            backgroundColor:
                                                "rgba(125, 0, 62, 0.28)",
                                            borderRadius: "6px",
                                            width: 48,
                                            height: 48,
                                            mb: 6,
                                        }}
                                    >
                                        <Icon
                                            icon="mdi:bell"
                                            color="#fff"
                                            width={24}
                                            height={24}
                                        />
                                    </IconButton>

                                    <Typography
                                        variant="body1"
                                        fontWeight={500}
                                    >
                                        Daily Reminders{" "}
                                    </Typography>
                                </Stack>
                                <Switch
                                    checked={notifications}
                                    onChange={handleNotification}
                                    sx={{
                                        mb: 4,
                                        "& .MuiSwitch-switchBase.Mui-checked": {
                                            color: "#fff",
                                            "& + .MuiSwitch-track": {
                                                backgroundColor: "#000", // black track
                                            },
                                        },
                                        "& .MuiSwitch-track": {
                                            backgroundColor: "#888", // track for unchecked state
                                        },
                                    }}
                                />
                            </Box>
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
                                    <IconButton
                                        sx={{
                                            backgroundColor:
                                                "rgba(125, 0, 62, 0.28)",
                                            borderRadius: "6px",
                                            width: 48,
                                            height: 48,
                                            mb: 6,
                                        }}
                                    >
                                        <Icon
                                            icon="lets-icons:sound-max-fill"
                                            color="#fff"
                                            width={28}
                                            height={28}
                                        />
                                    </IconButton>

                                    <Typography
                                        variant="body1"
                                        fontWeight={500}
                                    >
                                        Sound Effects{" "}
                                    </Typography>
                                </Stack>
                                <Switch
                                    checked={notifications}
                                    onChange={handleNotification}
                                    sx={{
                                        mb: 4,
                                        "& .MuiSwitch-switchBase.Mui-checked": {
                                            color: "#fff",
                                            "& + .MuiSwitch-track": {
                                                backgroundColor: "#000", // black track
                                            },
                                        },
                                        "& .MuiSwitch-track": {
                                            backgroundColor: "#888", // track for unchecked state
                                        },
                                    }}
                                />
                            </Box>

                           
                        </Stack>
                    </Card>
                    <Typography
                        sx={{
                            color: "gray",
                        }}
                    >
                        Account{" "}
                    </Typography>

                    <Card
                        sx={{
                            borderRadius: 3,
                            boxShadow: "none",
                            p: 3,
                            backgroundColor: "rgba(255,255,255,0.06)",
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
                                    <IconButton
                                        sx={{
                                            backgroundColor:
                                                "rgba(125, 0, 62, 0.28)",
                                            borderRadius: "6px",
                                            width: 48,
                                            height: 48,
                                            mb: 6,
                                        }}
                                    >
                                        <Icon
                                            icon="mdi:bell"
                                            color="#fff"
                                            width={24}
                                            height={24}
                                        />
                                    </IconButton>

                                    <Typography
                                        variant="body1"
                                        fontWeight={500}
                                    >
                                        Daily Reminders{" "}
                                    </Typography>
                                </Stack>
                                <Switch
                                    checked={notifications}
                                    onChange={handleNotification}
                                    sx={{
                                        mb: 4,
                                        "& .MuiSwitch-switchBase.Mui-checked": {
                                            color: "#fff",
                                            "& + .MuiSwitch-track": {
                                                backgroundColor: "#000", // black track
                                            },
                                        },
                                        "& .MuiSwitch-track": {
                                            backgroundColor: "#888", // track for unchecked state
                                        },
                                    }}
                                />
                            </Box>
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
                                    <IconButton
                                        sx={{
                                            backgroundColor:
                                                "rgba(125, 0, 62, 0.28)",
                                            borderRadius: "6px",
                                            width: 48,
                                            height: 48,
                                            mb: 6,
                                        }}
                                    >
                                        <Icon
                                            icon="lets-icons:sound-max-fill"
                                            color="#fff"
                                            width={28}
                                            height={28}
                                        />
                                    </IconButton>

                                    <Typography
                                        variant="body1"
                                        fontWeight={500}
                                    >
                                        Sound Effects{" "}
                                    </Typography>
                                </Stack>
                                <Switch
                                    checked={notifications}
                                    onChange={handleNotification}
                                    sx={{
                                        mb: 4,
                                        "& .MuiSwitch-switchBase.Mui-checked": {
                                            color: "#fff",
                                            "& + .MuiSwitch-track": {
                                                backgroundColor: "#000", // black track
                                            },
                                        },
                                        "& .MuiSwitch-track": {
                                            backgroundColor: "#888", // track for unchecked state
                                        },
                                    }}
                                />
                            </Box>

                           
                        </Stack>
                    </Card>
                   
                </Stack>
            </Box>
        </Layout>
    );
};

export default ProfilePage;
