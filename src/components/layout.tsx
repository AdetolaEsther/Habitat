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
                    backgroundColor: "#FFFFFF",
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
                {/* Home */}
                <Link href="/dashboard" passHref>
                    <Icon
                        icon="solar:home-angle-bold"
                        width="26"
                        height="26"
                        color={
                            router.pathname === "/dashboard"
                                ? "#B17596"
                                : "#B9B9B9"
                        }
                    />
                </Link>

                {/* Add Button (Center) */}
                <Link href="/add" passHref>
                    <Box
                        sx={{
                            backgroundColor: "#B17596",
                            borderRadius: "50%",
                            width: 55,
                            height: 55,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0px 4px 12px rgba(177, 117, 150, 0.4)",
                            transform: "translateY(-15%)",
                            cursor: "pointer",
                            transition: "0.2s ease",
                            "&:hover": {
                                transform: "translateY(-20%) scale(1.05)",
                            },
                        }}
                    >
                        <Icon
                            icon="solar:add-circle-line-duotone"
                            width="32"
                            height="32"
                            color="#FFFFFF"
                        />
                    </Box>
                </Link>

                {/* Profile */}
                <Link href="/profile" passHref>
                    <Icon
                        icon="solar:user-circle-bold"
                        width="26"
                        height="26"
                        color={
                            router.pathname === "/profile"
                                ? "#B17596"
                                : "#B9B9B9"
                        }
                    />
                </Link>
            </Box>
        </Box>
    );
}
