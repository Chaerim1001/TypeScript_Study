import crypto from "crypto";

interface BlockShape {
    hash: string;  // prevHash, height, data 값을 이용해서 계산된다.
    prevHash: string;
    height: number;
    data: string;
}

class Block implements BlockShape {
    public hash: string;
    constructor (
        public prevHash: string,
        public height: number,
        public data: string
     ) {
         this.hash = Block.calculateHash(prevHash, height, data);
     }
     
     static calculateHash(prevHash: string, height: number, data: string) {
         const toHash = `${prevHash}${height}${data}`;

    }
}