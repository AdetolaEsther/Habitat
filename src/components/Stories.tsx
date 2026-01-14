import React, { useState, ChangeEvent } from "react";
import {
    Stack,
    Box,
    Avatar,
    IconButton,
    Dialog,
    Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";

interface Story {
    id: number;
    name: string;
    avatar: string;
    media: string; 
}

const Stories = () => {
    const [stories, setStories] = useState<Story[]>([
        {
            id: 1,
            name: "Tunde",
            avatar: "/freepik_assistant_1760596112435.png",
            media: "/3425869.jpg",
        },
        { id: 2, name: "Aisha", avatar: "/4871715.jpg", media: "/3425869.jpg" },
        { id: 3, name: "Seun", avatar: "/62571.jpg", media: "/3425869.jpg" },
    ]);

    const [currentStory, setCurrentStory] = useState<Story | null>(null);

    const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const url = URL.createObjectURL(file);
            const newStory: Story = {
                id: Date.now(),
                name: "You",
                avatar: url,
                media: url,
            };
            setStories([newStory, ...stories]);
        }
    };

    return (
        <>
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
                                border: "2px solid #7c003d",
                            }}
                        />
                        <label htmlFor="upload-story">
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
                        </label>
                        <input
                            type="file"
                            accept="image/*,video/*"
                            id="upload-story"
                            style={{ display: "none" }}
                            onChange={handleUpload}
                        />
                    </Box>
                    <Box sx={{ fontSize: 12 }}>Your Story</Box>
                </Stack>

                {stories.map((story) => (
                    <Stack
                        key={story.id}
                        alignItems="center"
                        spacing={1}
                        onClick={() => setCurrentStory(story)}
                        sx={{ cursor: "pointer" }}
                    >
                        <Avatar
                            src={story.avatar}
                            sx={{
                                width: 80,
                                height: 80,
                                border: "2px solid #ff005d",
                                padding: "2px",
                            }}
                        />
                        <Box sx={{ fontSize: 12 }}>{story.name}</Box>
                    </Stack>
                ))}
            </Stack>

            <Dialog
                open={!!currentStory}
                onClose={() => setCurrentStory(null)}
                fullScreen
                PaperProps={{ sx: { backgroundColor: "#0A1128", width: 400 } }}
            >
                {currentStory && (
                    <Box
                        sx={{
                            width: "100%",
                            height: "100vh",
                            position: "relative",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundImage: `url(${currentStory.media})`,
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                filter: "brightness(0.5)",
                                zIndex: 1,
                            }}
                        />

                        <Box
                            sx={{
                                position: "absolute",
                                top: 20,
                                left: 20,
                                right: 20,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                zIndex: 2,
                            }}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                alignItems="center"
                            >
                                <Avatar
                                    src={currentStory.avatar}
                                    sx={{ width: 40, height: 40 }}
                                />
                                <Box>
                                    <Typography
                                        sx={{ color: "#fff", fontWeight: 600 }}
                                    >
                                        {currentStory.name}'s Story
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "rgba(255,255,255,0.6)",
                                            fontSize: 12,
                                        }}
                                    >
                                        3 hours ago • Public
                                    </Typography>
                                </Box>
                            </Stack>
                            <IconButton
                                sx={{ color: "#fff" }}
                                onClick={() => setCurrentStory(null)}
                            >
                                <Icon icon="mdi:close" width={24} height={24} />
                            </IconButton>
                        </Box>

                        <Box
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                textAlign: "center",
                                zIndex: 2,
                                color: "#fff",
                            }}
                        >
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                gutterBottom
                            >
                                Morning <br />
                                <Box
                                    component="span"
                                    sx={{
                                        background:
                                            "linear-gradient(to right, #fbb6ce, #fff)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    Meditation
                                </Box>
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: 20,
                                    maxWidth: 280,
                                    mx: "auto",
                                }}
                            >
                                Found my inner peace before the chaos begins.
                                🧘‍♀️✨
                            </Typography>

                            <Stack
                                direction="row"
                                spacing={2}
                                justifyContent="center"
                                mt={3}
                            >
                                <Box
                                    sx={{
                                        bgcolor: "rgba(22,32,68,0.4)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: 3,
                                        p: 2,
                                        textAlign: "center",
                                        width: 100,
                                    }}
                                >
                                    <Icon
                                        icon="material-symbols-outlined:timer"
                                        width={28}
                                        height={28}
                                        color="#f9a8d4"
                                    />

                                    <Typography fontWeight="bold">
                                        20m
                                    </Typography>
                                    <Typography
                                        sx={{ fontSize: 10, opacity: 0.6 }}
                                    >
                                        Focus Time
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        bgcolor: "rgba(22,32,68,0.4)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: 3,
                                        p: 2,
                                        textAlign: "center",
                                        width: 100,
                                    }}
                                >
                                    <Icon
                                        icon="material-symbols-outlinedr"
                                        width={28}
                                        height={28}
                                        color="#f9a8d4"
                                    />

                                    
                                    <Typography fontWeight="bold">
                                        High
                                    </Typography>
                                    <Typography
                                        sx={{ fontSize: 10, opacity: 0.6 }}
                                    >
                                        Clarity
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>

                       
                    </Box>
                )}
            </Dialog>
        </>
    );
};

export default Stories;
