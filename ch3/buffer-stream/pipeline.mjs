import { pipeline } from 'stream/promises';
import zlib from 'zlib';
import fs from 'fs';

// AbortController 로 pipieine 실행 도중에 중단 가능
const ac = new AbortController();
const signal = ac.signal;

// ac.abort() 로 중단
setTimeout(() => ac.abort(), 1); // 1초 후에 ac.abort()를 실행함
await pipeline(
    fs.createReadStream('./pipe-rede.txt'),
    zlib.createGzip(),
    fs.createWriteStream('./pipe-read.txt.gz'),
    { signal } // pipeline 내부에 signal 인수가 있어야 ac 사용 가능
);