import { Card, Box, Stack, Button } from "@mui/material";
import Image from "next/image";
import React from "react";

type InviteCardProps = {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt?: string;
    acceptText?: string;
    declineText?: string;
    onAccept?: () => void;
    onDecline?: () => void;
};

const InviteCard: React.FC<InviteCardProps> = ({
    title,
    description,
    imageSrc,
    imageAlt = "invite image",
    onAccept,
    onDecline,
}) => {
    return (
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
                    src={imageSrc}
                    alt={imageAlt}
                    width={200}
                    height={400}
                    style={{
                        objectFit: "cover",
                        borderRadius: 8,
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

                {/* Title */}
                <Box
                    sx={{
                        fontSize: 18,
                        fontWeight: 700,
                        lineHeight: 1.2,
                    }}
                >
                    {title}
                </Box>

                {/* Description */}
                <Box
                    sx={{
                        fontSize: 15,
                        color: "rgba(255,255,255,0.85)",
                    }}
                >
                    {description}
                </Box>

                {/* Actions */}
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                        onClick={onAccept}
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
                        onClick={onDecline}
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
                        Decline{" "}
                    </Button>
                </Box>
            </Stack>
        </Card>
    );
};

export default InviteCard;
