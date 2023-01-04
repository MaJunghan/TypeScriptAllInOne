// any : 타입검사 자체를 포기해버림
// unKnown : 타입을 알 수 없을떄 => 보통 as 로 type을 바꿔버림

try {
} catch (error) {
  // 에러의 type이 어떻게될지모름 . unKnown
  error as Error; // ts에서 제공하는 기본 error type
}
