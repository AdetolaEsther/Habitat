import React, { useState, ChangeEvent } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";

interface ImageUploadProps {
    onChange?: (file: File | null) => void; // pass selected image to parent
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange }) => {
    const [image, setImage] = useState<string>("/challenge.jpg");

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target?.result) {
                    setImage(event.target.result as string);
                    onChange?.(file); // send file back to parent
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ fontWeight: 600, mb: 1 }}>
                Challenge Cover
            </Typography>
            <Box
                sx={{
                    position: "relative",
                    display: "inline-block",
                    borderRadius: 3,
                    overflow: "hidden",
                    mb: 3,
                }}
            >
                <img
                    src={image}
                    alt="habit"
                    style={{ width: 360, height: "auto", display: "block" }}
                />

                <label
                    htmlFor="upload-image"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        <IconButton
                            sx={{
                                bgcolor: "rgba(0,0,0,0.6)",
                                width: 48,
                                height: 48,
                            }}
                        >
                            <Icon
                                icon="mdi:camera"
                                width={28}
                                height={28}
                                color="#7c003d"
                            />
                        </IconButton>

                        <Typography
                            sx={{
                                color: "#fff",
                                fontSize: 15,
                                fontWeight: 600,
                                textAlign: "center",
                            }}
                        >
                            Change Cover Photo
                        </Typography>
                    </Box>
                </label>

                <input
                    type="file"
                    accept="image/*"
                    id="upload-image"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                />
            </Box>
        </Box>
    );
};

export default ImageUpload;
