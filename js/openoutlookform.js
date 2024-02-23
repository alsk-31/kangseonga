function openOutlookForm() {
    var email = "alsk-31@naver.com";
    var subject = "문의하기";
    var body = "안녕하세요, 여기에 문의 내용을 입력해주세요."; // 이메일 본문

    var mailtoLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    window.location.href = mailtoLink;
}