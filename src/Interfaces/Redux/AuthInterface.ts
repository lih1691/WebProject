export interface FormState {
    userID: string;
    userNickname: string;
    userPWD: string;
    userPWDConfirm: string;
    userEmail: string;
}

export interface ExistsState {
    userID: boolean;
    userEmail: boolean;
    userNickname: boolean;
    
    [key: string]: any;
}

export interface AuthState {
    SignUp: {
        form: FormState;
        exists: ExistsState;
        error: string | null;
    };
    SignIn: {
        form: {
            userID: string;
            userPWD: string;
        };
        error: string | null;
    };
    result: Record<string, any>;
}
