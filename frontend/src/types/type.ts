// Define the shape of the user
type UserType = {
  username: string;
  role: string;
};

// Define the shape of the context value
export type UserContextType = {
  User: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
  Logout:Function;
  Login:Function
};

