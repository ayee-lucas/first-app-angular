export type LoginSuccess = {
    message: 'Logged in successfully'
    session_id: string
}

export type LoginError = {
    message: string,
    error: string,
}
