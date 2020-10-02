export enum State {

    INIT        = 0, 
    IDLE        = 1,
    QUEUED      = 2,
    WORKING     = 3,
    FINISHED    = 4,

    // ERROR CODES

    ERROR       = -1,
    OFFLINE     = -2,
    UNRESPONSIVE= -3
}

// State Description
export enum StateDesc {

    INIT        = "Initialized", 
    IDLE        = "Ready",
    QUEUED      = "Ready, Queue loaded",
    WORKING     = "Downloading",
    FINISHED    = "Finished",

    // ERROR CODES

    ERROR       = "Error",
    OFFLINE     = "Offline",
    UNRESPONSIVE= "Unresponsive"

}