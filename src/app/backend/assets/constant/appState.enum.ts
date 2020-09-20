export enum State {

    IDLE        = 0,
    QUEUED      = 1,
    WORKING     = 2,
    FINISHED    = 3,

    // ERROR CODES

    ERROR       = -1,
    OFFLINE     = -2,
    UNRESPONSIVE= -3
}
