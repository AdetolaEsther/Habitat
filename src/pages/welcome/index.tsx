"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Typography, TextField, Link,  IconButton } from "@mui/material";
import Logo from "@/shared/logo";
import usersData from "@/data/user.json"
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";

export default function Welcome() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();
      const allUsers = usersData.users || [];
      // Find the matching user
      const foundUser = allUsers.find(
          (u) => u.email === email && u.password === password
      );
      if (!foundUser) {
          toast.error("Incorrect username or password 😢");
          return;
      }
      
      //Destructure from foundUser and save user in localStorage
      const  { password: _, ...safeUser } = foundUser;
      localStorage.setItem("loggedInUser", JSON.stringify(safeUser));

      toast.success(`Welcome back, ${foundUser.firstname}!`);
      setTimeout(() => {
          router.push("/dashboard");
      }, 1000);
  };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#0a1129",
                px: 3,
                py: 4,
            }}
        >
            <Box sx={{ textAlign: "center" }}>
                <IconButton
                    sx={{
                        backgroundColor: "rgba(125, 0, 62, 0.28)",
                        borderRadius: "6px",
                        width: 48,
                        height: 48,
                        mb: 6,
                    }}
                >
                    <Icon
                        icon="carbon:checkmark-filled"
                        width={26}
                        height={26}
                        color="#7d003e"
                    />
                </IconButton>

                <Typography
                    variant="h4"
                    sx={{
                        color: "#fff",
                        fontWeight: 700,
                        mb: 1,
                    }}
                >
                    Welcome Back
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        color: "#fff",
                    }}
                >
                    Log in to continue your habit journey
                </Typography>
            </Box>

            <Box
                sx={{
                    width: "100%",
                    maxWidth: 450,
                    mx: "auto",
                    mb: 6,
                }}
            >
                <form
                    onSubmit={handleLogin}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.6rem",
                    }}
                >
                    <TextField
                        label="Email"
                        type="email"
                        variant="outlined"
                        size="small"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        fullWidth
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
                    />{" "}
                    <TextField
                        label="Enter your Password"
                        type="password"
                        variant="outlined"
                        size="small"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
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
                        placeholder="Enter your password"
                    />{" "}
                    
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            backgroundColor: "#7d003e",
                            color: "#fff",
                            borderRadius: "2rem",
                            py: 1.2,
                            textTransform: "none",
                            fontSize: "1.2rem",
                            mt: 1,
                        }}
                    >
                        {" "}
                        Log In{" "}
                    </Button>
                </form>
            </Box>

            <Box sx={{ textAlign: "center", mt: 4 }}>
                <Typography variant="body2" sx={{ color: "#fff" }}>
                    Don’t have an account?{" "}
                    <Link
                        onClick={() => router.push("/signup")}
                        sx={{
                            color: "#7d003e",
                            fontWeight: 600,
                            cursor: "pointer",
                            textDecoration: "none",
                            "&:hover": { textDecoration: "underline" },
                        }}
                    >
                        Create one
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
}
