/**
 * System Components
• Data partition: consistent hashing(pros: automatic scaling, heterogeneity)
• Data replication: clockwise walk logic
• Consistency: 
    Quorum consensus, W+R > N: strong consistency; R=1, W=N, fast read; W=1, R=N, fast write
• Inconsistency resolution: 
    Versioning and vector locks => replication gives high availability but causes inconsistencies among replicas. 
• Handling failures: 
    gossip protocol for failure detection; 
    handling temporary failures: sloppy quorum - maintain availability, hinted handoff;
    hadnling permanent failures: anti-entropy protocol using merkle tree/hash tree;
• System architecture diagram 
• Write path: memory cache; refer to cassendra
• Read path: memory cache
 */
let store = {};

function push(key, value) {
    store[key] = value;
};

function get(key) {
    return store[key];
};

module.exports = {push, get};