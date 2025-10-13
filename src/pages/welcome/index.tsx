"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Typography, TextField, Link } from "@mui/material";
import Logo from "@/shared/logo";
import usersData from "@/data/user.json"
import { toast } from "react-toastify";

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
                height: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "#FFF8F8",
                alignItems: "center",
                textAlign: "center",
                px: 3,
            }}
        >
            <Logo />
            <Typography
                variant="h4"
                sx={{
                    color: "#B17596",
                    fontWeight: 700,
                    mb: 1,
                }}
            >
                Welcome Back 👋
            </Typography>
            <Typography variant="body1" sx={{ color: "#A1879E", mb: 4 }}>
                Log in to continue your habit journey
            </Typography>

            {/* Form */}
            <form
                onSubmit={handleLogin}
                style={{
                    width: "100%",
                    maxWidth: 350,
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.2rem",
                }}
            >
                <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    InputProps={{
                        sx: {
                            backgroundColor: "transparent",
                            "& fieldset": {
                                borderColor: "#D8C1D2",
                            },
                            "&:hover fieldset": {
                                borderColor: "#B17596",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#B17596",
                            },
                        },
                    }}
                    InputLabelProps={{
                        shrink: true,
                        sx: {
                            color: "#A1879E",
                            fontWeight: 500,
                        },
                    }}
                />

                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    InputProps={{
                        sx: {
                            backgroundColor: "transparent",
                            "& fieldset": {
                                borderColor: "#D8C1D2",
                            },
                            "&:hover fieldset": {
                                borderColor: "#B17596",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#B17596",
                            },
                        },
                    }}
                    InputLabelProps={{
                        shrink: true,
                        sx: {
                            color: "#A1879E",
                            fontWeight: 500,
                        },
                    }}
                />

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: "#F29CA3",
                        color: "#fff",
                        borderRadius: "2rem",
                        py: 1.2,
                        textTransform: "none",
                        fontSize: "1rem",
                        mt: 1,
                        "&:hover": { backgroundColor: "#e18d94" },
                    }}
                >
                    Log In
                </Button>
            </form>

            <Typography variant="body2" sx={{ color: "#8C738B", mt: "1.5rem" }}>
                Don’t have an account?{" "}
                <Link
                    onClick={() => router.push("/signup")}
                    sx={{
                        color: "#B17596",
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
    );
}
