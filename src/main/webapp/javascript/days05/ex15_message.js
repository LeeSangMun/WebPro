/**
 * 함수 내보내기 (export)
	- 파일에는 하나의 기본 내보내기만 가능하다.
 */

const message = () => {
	const name = "홍길동";
	const age = 20;
	
	return `${name} / ${age}`;
};

export default message;