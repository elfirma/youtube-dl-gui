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
