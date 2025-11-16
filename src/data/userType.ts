export interface Habit {
    duration: string ;
    id: string;
    name: string;
    category: string;
    frequency: number;
    times: string[];
    lastCompleted: string;
    streak: number;
    daysOverdue?: number; 
}

export interface UserHabits {
    activeHabits: Habit[];
    overdueHabits: Habit[];
}

export interface PenaltySettings {
    enabled: boolean;
    punishmentAfter: string;
}

export interface NotificationSettings {
    enabled: boolean;
}

export interface UserSettings {
    penalty: PenaltySettings;
    notification: NotificationSettings;
}

export interface User {
    id: string;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    profileImage: string;
    habits: UserHabits;
    settings: UserSettings;
}

export interface UsersData {
    users: User[];
}
