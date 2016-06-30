package com.myee.niuroumian.util;

import com.myee.niuroumian.service.RedisOperation;
import org.springframework.data.redis.core.RedisTemplate;

/**
 * Created by Jelynn on 2016/6/14.
 */
public class RedisUtils extends RedisOperation {
    protected RedisUtils(RedisTemplate redisTemplate) {
        super(redisTemplate);
    }


}
