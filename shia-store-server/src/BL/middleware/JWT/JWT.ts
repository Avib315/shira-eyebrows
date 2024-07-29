import jwt from "jsonwebtoken";
// const secret = process.env.ACCESS_TOKEN_SECRET


function createAccessToken(data: string | object | Buffer): string {
    const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, /*{ expiresIn: "10m" }*/)
    return accessToken
}

function verifyAccessToken(token: string): string | jwt.JwtPayload {
    const data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    return data
}

function createRefreshToken(data: string | object | Buffer): string {
    const refreshToken = jwt.sign(data, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "30d" })
    return refreshToken
}

function verifyRefreshToken(refreshToken: string): string | jwt.JwtPayload {
    const data = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
    return data
}

function createResetPasswordToken(data: string | object | Buffer): string {
    const resetPasswordToken = jwt.sign(data, process.env.RESET_PASSWORD_TOKEN_SECRET, { expiresIn: "5m" })
    return resetPasswordToken
}

function verifyResetPasswordToken(token: string): string | jwt.JwtPayload {
    const data = jwt.verify(token, process.env.RESET_PASSWORD_TOKEN_SECRET)
    return data
}



export default {
    createAccessToken,
    verifyAccessToken,
    createRefreshToken,
    verifyRefreshToken,
    createResetPasswordToken,
    verifyResetPasswordToken
}