import React from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const router = useRouter();

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#FFF8F8",
                px: 3,
                py: 2,
            }}
        >
            <Box sx={{ flex: 1, pb: 10 }}>{children}</Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    backgroundColor: "#FFF8F8",
                    borderRadius: "20px",
                    p: 1.5,
                    boxShadow: "0px -4px 8px rgba(0,0,0,0.05)",
                    position: "fixed",
                    bottom: 16,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "90%",
                    maxWidth: 400,
                    zIndex: 1000,
                }}
            >
                <Link href="/dashboard" passHref>
                    <Icon
                        icon="solar:home-angle-bold"
                        width="26"
                        height="26"
                        color={
                            router.pathname === "/dashboard"
                                ? "#3E6259"
                                : "#B9B9B9"
                        }
                    />
                </Link>

                <Link href="/add" passHref>
                    <Icon
                        icon="solar:add-circle-line-duotone"
                        width="32"
                        height="32"
                        color={
                            router.pathname === "/add" ? "#3E6259" : "#B9B9B9"
                        }
                    />
                </Link>

                <Link href="/profile" passHref>
                    <Icon
                        icon="solar:user-circle-bold"
                        width="26"
                        height="26"
                        color={
                            router.pathname === "/profile"
                                ? "#3E6259"
                                : "#B9B9B9"
                        }
                    />
                </Link>
                <Link href="/explore" passHref>
                    <Icon
                        icon="ix:explore"
                        width="26"
                        height="26"
                        color={
                            router.pathname === "/explore"
                                ? "#3E6259"
                                : "#B9B9B9"
                        }
                    />
                </Link>
            </Box>
        </Box>
    );
}
