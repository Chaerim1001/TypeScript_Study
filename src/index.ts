// declaration file은 자바스크립트 코드의 모양을 타입스크립트에 설명해주는 파일이다. -> .d.ts 파일

import { init, exit } from "myPackage"

init({
    url: "true"
})

exit(1)