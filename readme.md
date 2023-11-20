## Main objective: Design a key-value store, non-relational database
Specifically, the database should support the following functionalities:
- put(key, value) // insert “value” associated with “key” 
- get(key) // get “value” associated with “key”

### The db system should have the following features:
• The size of a key-value pair is small: less than 10 KB.
• Ability to store big data.
• High availability: The system responds quickly, even during failures.
• High scalability: The system can be scaled to support large data set.
• Automatic scaling: The addition/deletion of servers should be automatic based on traffic. • Tunable consistency.
• Low latency.

### What each features' implication and design orientation:
**Small Size of Key-Value Pair (< 10 KB):**
Implication: Optimizations can focus more on the number of items rather than their size. The system should efficiently handle a large number of small-sized entries.
Design Consideration: Use efficient data structures that minimize overhead per key-value pair.

**Ability to Store Big Data:**
Implication: The system should be capable of handling a very large total volume of data.
Design Consideration: Use distributed systems with horizontal scalability. Implement partitioning/sharding strategies for data storage.

**High Availability:**
Implication: The system should be resilient to failures and should continue operating with minimal downtime.
Design Consideration: Implement redundancy and replication. Use a cluster of servers with failover mechanisms.

**High Scalability:**
Implication: The system should perform well under increasing load, and should be able to accommodate growth in data and traffic.
Design Consideration: Ensure horizontal scalability. Design for load balancing and efficient data distribution across nodes.

**Automatic Scaling:**
Implication: The system should be able to adapt to changes in load without manual intervention.
Design Consideration: Implement auto-scaling mechanisms using metrics like CPU usage, memory usage, and network I/O.

**Tunable Consistency:**
Implication: The system offers a balance between availability and consistency, and this balance can be adjusted as needed.
Design Consideration: Use consistency models like eventual consistency or read-after-write consistency. Provide settings for users to choose their consistency level.

**Low Latency:**
Implication: The system should respond to requests in the shortest time possible.
Design Consideration: Optimize data storage and retrieval paths. Use caching strategies and keep data in-memory when possible.

**Extra:**
Make sure you understand the CAP theorem and how it applies to the design of distributed systems: CP, AP, and CA(impossible to exist in real world). 