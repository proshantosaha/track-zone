export const TIMEZONE_OFFSET = {
    GMT:0,
    UTC:0,
    EST: -4 * 60,
    EDT: -4 * 60,
    BST: 1 * 60,
    MST: -6 * 60,
}

export const getTimezone =() =>{
    return['UTC','GMT',...Object.keys(TIMEZONE_OFFSET)]
}