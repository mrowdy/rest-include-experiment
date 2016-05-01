import redis from "redis";

export var cache = redis.createClient({detect_buffers: true});