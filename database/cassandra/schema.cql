CREATE KEYSPACE service with replication = {
    'class': 'SimpleStrategy',
    'replication_factor': 1    
};

USE service;

CREATE TABLE pricing (
    uid int,
    areacode int, 
    date_time timestamp,
    multiplier decimal,
    success int,
    PRIMARY KEY(areacode, date_time)
) WITH CLUSTERING ORDER BY (date_time DESC);

