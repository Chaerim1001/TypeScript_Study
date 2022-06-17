import crypto from "crypto";
// Cannot find module 'crypto' or its corresponding type declarations. -> 타입스크립트가 crypto 모듈이 무엇인지 모른다는 뜻의 에러
// -> .d.ts 파일을 생성해서 직접 타입을 정의하는 방법이 있지만 모든 작업을 그렇게 하기에는 너무 비효율적이다.
// -> 타입스크립트로 만들어지지 않은 패키지를 받았는데 타입 정의가 하나도 없을 때 -> DefinitelyTyped -> 원하는 것을 콘솔로 설치 가능 npm i -D @types/node

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
         return crypto.createHash("sha356").update(toHash).digest("hex");

    }
}