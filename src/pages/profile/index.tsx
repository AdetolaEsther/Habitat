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
            <Box sx={{ minHeight: "100vh", p: 1 }}>
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
                                onClick={() => window.history.back()}
                            />
                        </IconButton>
                        <Typography variant="h6" fontWeight={600}>
                            My Profile
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
                                    bgcolor: "white",
                                    width: 32,
                                    height: 32,
                                    "&:hover": { bgcolor: "grey.100" },
                                }}
                            >
                                <Icon
                                    icon="mdi:pencil"
                                    width={16}
                                    height={16}
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
                        <Typography variant="body2" color="text.secondary">
                            mdjahid7755@gmail.com
                        </Typography>
                    </Stack>

                    {/* Info Cards */}

                    {/* Settings Card */}
                    <Card sx={{ borderRadius: 3, boxShadow: "none", p: 3 }}>
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
                            {/* Notifications Toggle */}
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
                                    <Icon
                                        icon="mdi:bell-outline"
                                        width={24}
                                        height={24}
                                    />
                                    <Typography
                                        variant="body1"
                                        fontWeight={500}
                                    >
                                        Notifications
                                    </Typography>
                                </Stack>
                                <Switch
                                    checked={notifications}
                                    onChange={handleNotification}
                                    sx={{
                                        mb: 4,
                                        "& .MuiSwitch-switchBase.Mui-checked": {
                                            color: "#0A1128",
                                        },
                                    }}
                                />
                            </Box>

                            {/* Dark Mode Toggle */}
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
                                    <Icon
                                        icon="mdi:weather-sunny"
                                        width={24}
                                        height={24}
                                    />
                                    <Typography
                                        variant="body1"
                                        fontWeight={500}
                                    >
                                        Light or Dark Interface
                                    </Typography>
                                </Stack>
                                <Switch
                                    checked={darkMode}
                                    onChange={toggleMode}
                                    sx={{
                                        mb: 4,
                                        "& .MuiSwitch-switchBase.Mui-checked": {
                                            color: "#0A1128",
                                        },
                                    }}
                                />
                            </Box>

                            {/* Language */}
                            <Box
                                onClick={() => console.log("Language")}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    py: 2,
                                    cursor: "pointer",
                                }}
                            >
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    alignItems="center"
                                >
                                    <Icon
                                        icon="mdi:web"
                                        width={24}
                                        height={24}
                                    />
                                    <Typography
                                        variant="body1"
                                        fontWeight={500}
                                    >
                                        Language
                                    </Typography>
                                </Stack>
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    alignItems="center"
                                >
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        English / Bangla
                                    </Typography>
                                    <Icon
                                        icon="mdi:chevron-right"
                                        width={24}
                                        height={24}
                                    />
                                </Stack>
                            </Box>
                        </Stack>
                    </Card>

                    {/* Menu Card */}
                    <Card sx={{ borderRadius: 3, boxShadow: "none", p: 3 }}>
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
                                onClick={() => console.log("FAQ")}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    py: 2,
                                    cursor: "pointer",
                                }}
                            >
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    alignItems="center"
                                >
                                    <Icon
                                        icon="mdi:help-circle-outline"
                                        width={24}
                                        height={24}
                                    />
                                    <Typography
                                        variant="body1"
                                        fontWeight={500}
                                    >
                                        FAQ
                                    </Typography>
                                </Stack>
                                <Icon
                                    icon="mdi:chevron-right"
                                    width={24}
                                    height={24}
                                />
                            </Box>

                            <Box
                                onClick={() => console.log("Support")}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    py: 2,
                                    cursor: "pointer",
                                }}
                            >
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    alignItems="center"
                                >
                                    <Icon
                                        icon="mdi:headset"
                                        width={24}
                                        height={24}
                                    />
                                    <Typography
                                        variant="body1"
                                        fontWeight={500}
                                    >
                                        Contact Support
                                    </Typography>
                                </Stack>
                                <Icon
                                    icon="mdi:chevron-right"
                                    width={24}
                                    height={24}
                                />
                            </Box>

                            <Box
                                onClick={handleRateApp}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    py: 2,
                                    cursor: "pointer",
                                }}
                            >
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    alignItems="center"
                                >
                                    <Icon
                                        icon="mdi:star-outline"
                                        width={24}
                                        height={24}
                                    />
                                    <Typography
                                        variant="body1"
                                        fontWeight={500}
                                    >
                                        Rate the App
                                    </Typography>
                                </Stack>
                                <Icon
                                    icon="mdi:chevron-right"
                                    width={24}
                                    height={24}
                                />
                            </Box>

                            <Box
                                onClick={handleSettings}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    py: 2,
                                    cursor: "pointer",
                                }}
                            >
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    alignItems="center"
                                >
                                    <Icon
                                        icon="mdi:cog-outline"
                                        width={24}
                                        height={24}
                                    />
                                    <Typography
                                        variant="body1"
                                        fontWeight={500}
                                    >
                                        Settings
                                    </Typography>
                                </Stack>
                                <Icon
                                    icon="mdi:chevron-right"
                                    width={24}
                                    height={24}
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
