export default {
    TOKEN_AUTH: process.env.REACT_APP_NAME_TOKEN|| "tunkay-token",
    SOCKET_MSG: process.env.REACT_APP_SOCKER_MSG|| "http://localhost:4000",
    PATH_SOCKET_MSG: process.env.REACT_APP_PATH_SOCKER_MSG|| "/api/ws-msg",
    API_URL : process.env.REACT_APP_API_URL || "http://localhost:4000"
}