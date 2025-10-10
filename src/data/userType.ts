export interface CompletionProgress {
    dateTime: string; 
    count: number; 
}

export interface Habit {
    id: string;
    name: string;
    status:  string;
    category: string;
    frequency: number;
    times: string[]; 
    completionProgress: CompletionProgress[];
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
    habits: Habit[];
    settings: UserSettings;
}

export interface UsersData {
    users: User[];
}
