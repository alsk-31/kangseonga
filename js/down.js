// 이력서 다운로드 버튼 요소 가져오기
const downloadBtn = document.getElementById('downloadBtn');

// 이력서 다운로드 함수 정의
function downloadResume() {
  // 이력서 파일의 경로 설정 (이 코드에서는 예시로 resume.pdf로 설정)
  const resumeUrl = 'resume/강성아이력서.pdf';
  
  // 이력서 파일을 다운로드하는 링크 생성
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = '강성아 이력서.pdf';
  
  // 링크를 클릭하여 다운로드 진행
  document.body.appendChild(link);
  link.click();
  
  // 링크 삭제
  document.body.removeChild(link);
}

// 버튼 클릭 시 이력서 다운로드 함수 호출
downloadBtn.addEventListener('click', downloadResume);