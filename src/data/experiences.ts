export type Experience = {
  title: string;
  organization: string;
  summary: string;
  details: string[];
};

export const experiences: Experience[] = [
  {
    title: "백엔드 개발 학습 과정",
    organization: "OZ Coding School",
    summary: "백엔드 개발 기초와 웹 서비스 구현 흐름을 학습했습니다.",
    details: [
      "Python과 Django 기반 웹 개발 학습",
      "API 설계와 데이터 모델링 실습",
      "팀 프로젝트를 통한 협업 흐름 경험"
    ]
  },
  {
    title: "팀 프로젝트 PM 역할",
    organization: "Team Project",
    summary: "팀 프로젝트에서 일정과 구현 범위를 조율하는 역할을 맡았습니다.",
    details: [
      "기능 우선순위와 작업 범위 정리",
      "팀원 간 진행 상황 공유와 이슈 조율",
      "프로젝트 목표에 맞춘 API 구현 방향 정리"
    ]
  },
  {
    title: "개인 프로젝트 Mwoham 개발",
    organization: "Personal Project",
    summary:
      "macOS 로컬 작업 기록 자동화 앱의 백엔드와 패키징 흐름을 개발했습니다.",
    details: [
      "FastAPI 로컬 백엔드와 SwiftUI macOS 앱 연동",
      "작업 기록, 메모, 회의 기록, 리포트 도메인 설계",
      "AI 요약 요청 전 민감정보 마스킹 흐름 구성",
      "lightweight/full DMG 패키징 구조 설계"
    ]
  }
];
