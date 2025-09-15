document.addEventListener("DOMContentLoaded", () => {
    console.log("MyApp loaded: feature/alerts-and-modal");
  
    const btnAlert = document.getElementById("btn-alert");
    const btnModal = document.getElementById("btn-modal");
    const modal = document.getElementById("modal");
  
    // 버튼 활성화 스타일
    [btnAlert, btnModal].forEach(btn => {
      if (btn) {
        btn.style.cursor = "pointer";
        btn.style.opacity = "1";
      }
    });
  
    // 경고창 & 확인창
    btnAlert?.addEventListener("click", () => {
      alert("경고창입니다!");
      const yes = confirm("확인창: 계속 진행할까요?");
      console.log("confirm:", yes);
    });
  
    // 모달 열기/닫기
    const openModal = () => modal?.classList.add("is-open");
    const closeModal = () => modal?.classList.remove("is-open");
  
    btnModal?.addEventListener("click", openModal);
    modal?.addEventListener("click", (e) => {
      if (e.target.matches("[data-close]")) closeModal();
    });
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  });
  