export class Modal {
    constructor(scene, x, y, width, height, backgroundColor = '#fff', inputWidth = '100%', showCloseButton = true) { 
        //신, 위치 x. 위치 y, 넓이, 높이, 배경색, 입력창 폭, 닫기버튼 표기 유무(true는 표기)
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.modalElement = document.createElement('div');
        this.modalElement.style.position = 'absolute';
        this.modalElement.style.top = `${this.y}px`;
        this.modalElement.style.left = `${this.x}px`;
        this.modalElement.style.width = `${this.width}px`;
        this.modalElement.style.height = `${this.height}px`;
        this.modalElement.style.backgroundColor = backgroundColor; // 배경색 설정
        this.modalElement.style.padding = '20px';
        this.modalElement.style.border = '1px solid #000';
        this.modalElement.style.display = 'none';

        this.inputField = document.createElement('input');
        this.inputField.type = 'text';
        this.inputField.placeholder = '정답을 입력하세요';
        this.inputField.style.width = inputWidth; // 입력 박스 길이 설정
        this.modalElement.appendChild(this.inputField);

        if (showCloseButton) { // 닫기 버튼 표시 여부 설정
            const closeButton = document.createElement('button');
            closeButton.innerText = '닫기';
            closeButton.onclick = () => this.hide();
            this.modalElement.appendChild(closeButton);
        }

        const submitButton = document.createElement('button');
        submitButton.innerText = '확인';
        submitButton.onclick = () => this.submitText();
        this.modalElement.appendChild(submitButton);

        document.body.appendChild(this.modalElement);
    }

    show() {
        this.modalElement.style.display = 'block';
    }

    hide() {
        this.modalElement.style.display = 'none';
    }

    getText() {
        return this.inputField.value;
    }

    submitText() {
        const inputText = this.getText();
        this.scene.checkAnswer(inputText); // 정답 확인 메서드 호출
        //필요하면 정답 체크 할때 하이드 옵션을 넣기
    }

    setText(value) {
        this.inputField.value = value;
    }
}
