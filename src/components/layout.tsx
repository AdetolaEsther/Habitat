import React from "react";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from "@iconify/react";


interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {

const initialNavItems = [
    {
        id: "dashboard",
        icon: "solar:home-angle-bold",
        label: "Home",
        href: "/dashboard",
    },
    {
        id: "add",
        icon: "solar:add-circle-line-duotone",
        label: "Add",
        href: "/add",
    },
    {
        id: "profile",
        icon: "solar:user-circle-bold",
        label: "Profile",
        href: "/profile",
    },
    { id: "explore", icon: "ix:explore", label: "Explore", href: "/explore" },
];
const [navItems, setNavItems] = useState(initialNavItems);
const [activeNav, setActiveNav] = useState("dashboard");


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
                {navItems.map((item) => {
                    const isActive = activeNav === item.id; 
                    return (
                        <Box
                            key={item.id} 
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                px: 2,
                                py: 0.5,
                                borderRadius: "16px",
                                backgroundColor: isActive
                                    ? "#7c003d"
                                    : "transparent",
                                color: isActive ? "#fff" : "#404040",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                userSelect: "none",
                            }}
                            onClick={() => setActiveNav(item.id)}
                        >
                            <Link href={item.href} passHref>
                                <Icon
                                    icon={item.icon}
                                    width={26}
                                    height={26}
                                    color={isActive ? "#fff" : "#B9B9B9"}
                                />
                            </Link>

                            {isActive && (
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: "auto", opacity: 1 }}
                                    exit={{ width: 0, opacity: 0 }}
                                    style={{ overflow: "hidden" }}
                                >
                                    <Typography
                                        variant="caption"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        {item.label}
                                    </Typography>
                                </motion.div>
                            )}
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
}
