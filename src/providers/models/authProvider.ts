import { UserLoginModel } from "../../interfaces/index"
const mockUsers = [{ username: "admin" }, { username: "editor" }];

const authProvider = {
    login: (obj: UserLoginModel) => {
        // Suppose we actually send a request to the back end here.
        const user = mockUsers.find((item: any) => item.username === obj.username);

        if (user) {
            localStorage.setItem("auth", JSON.stringify(user));
            return Promise.resolve();
        }

        return Promise.reject();
    },
    logout: () => {
        localStorage.removeItem("username");
        return Promise.resolve();
    },
    checkAuth: () =>
        localStorage.getItem("username")
            ? Promise.resolve()
            : Promise.reject(),
    checkError: () => Promise.resolve(),
    getPermissions: () => Promise.resolve(["admin"]),
    getUserIdentity: () => Promise.resolve(),
};

export default authProvider