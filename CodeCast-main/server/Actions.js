// All the events
const ACTIONS = {
  JOIN: "join",               // User is joining the room
  JOINED: "joined",           // User has joined the room
  DISCONNECTED: "disconnected", // User has disconnected from the room
  CODE_CHANGE: "code-change",  // Code has been changed in the editor
  SYNC_CODE: "sync-code",      // Sync code between clients
  LEAVE: "leave",              // User has left the room
  PERMISSION_UPDATE: "permission-update", // Event to update permission (read/write)
};

module.exports = ACTIONS;
