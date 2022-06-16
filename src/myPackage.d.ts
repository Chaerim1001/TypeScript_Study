// declaration file은 자바스크립트 코드의 모양을 타입스크립트에 설명해주는 파일이다. -> .d.ts 파일
// 자바스크립트로 된 패키지를 사용하려면 타입스크립트에게 패키지가 어떻게 생겼는지, 어떤 함수랑 다른 것들이 있는지를 설명해야 타입스크립트가 안에 뭐가 들어있는지 알고 보호를 해준다.

interface Config {
    url: string
}

declare module "myPackage" {
    function init(config: Config): boolean;
    function exit(code: number): number;
}