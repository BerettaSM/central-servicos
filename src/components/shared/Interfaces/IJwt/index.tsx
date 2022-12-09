export interface UserData {
    fullName: string;
    userId: number;
}

export interface IJwt {
    jwt: string;
    setJwt: React.Dispatch<any>;
    data: UserData;
}