  // Back to top button
  var backToTopBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });
  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ATA CARNET detail modal
  var overviewButtons = document.querySelectorAll('.overview-card[data-modal-content]');
  var carnetModal = document.getElementById('carnetModal');
  var carnetModalTitle = document.getElementById('carnetModalTitle');
  var carnetModalContent = document.getElementById('carnetModalContent');
  var modalCloseButton = carnetModal.querySelector('.modal-close');
  var activeOverviewButton;

  var modalContents = {
    carnetInfo: '<p class="modal-lead">ATA협약 가입국 간에 <strong>일시적으로 물품을 수출입</strong>할 때 사용되는 담보증서입니다.</p><p class="modal-subtext">별도의 통관 서류나 관세·부가세 납부 없이 해당 증서로 통관이 가능합니다.</p><p class="modal-eyebrow">적용 가능 분야</p><div class="modal-category"><span class="badge">1</span><span class="label">상업견본<span>Commercial Samples</span></span></div><ul class="modal-list"><li>바이어 상담·시연을 위한 샘플로 판매하지 않고 전량 반환하는 물품</li><li>새로 개발한 장비 및 반제품 등을 해외 고객사에서 데모테스트 목적으로 일시 반출하는 물품</li></ul><div class="modal-category"><span class="badge">2</span><span class="label">직업용구<span>Professional Equipment</span></span></div><ul class="modal-list"><li>비즈니스 목적의 출장에 필요한 출장용품</li></ul><div class="modal-category"><span class="badge">3</span><span class="label">전시회·박람회<span>Exhibition and Fairs</span></span></div><ul class="modal-list"><li>국제 전시회·박람회 등에 출품·전시 후 반환하는 물품</li><li>학술심포지엄, 각종 발표회 등의 참가물품</li><li>무역촉진단, 해외 수출상담회에 참가하는 기업의 일시반출 물품</li><li>전시회, 박람회, 컨벤션 등에서 전시 목적으로 반출하는 물품</li></ul><p class="modal-eyebrow">적용 불가 물품</p><div class="modal-category"><span class="badge badge--danger">1</span><span class="label">소모성·1회성 물품</span></div><ul class="modal-list"><li>재반출 없이 소비·소모되는 물품, 카탈로그·전단지 등 인쇄물, 사은품·기부용 물품</li></ul><div class="modal-category"><span class="badge badge--danger">2</span><span class="label">위험물·규제 품목</span></div><ul class="modal-list"><li>전략물자·이중용도(Dual-use) 품목, 통신·보안장비 등 수입국 규제 품목은 국가별 수입허가 없이 사용 제한 — 사전 확인 필수</li></ul><div class="modal-category"><span class="badge badge--danger">3</span><span class="label">가공·수리·개조 목적 물품</span></div><ul class="modal-list"><li>해외에서 가공·수리·조립·개조로 상태가 변경되는 물품, 반제품 상태로 반출해 현지에서 완성 후 재반입하는 물품</li></ul><div class="modal-category"><span class="badge badge--danger">4</span><span class="label">판매 목적 물품</span></div><ul class="modal-list"><li>전시 후 판매·현지 처분 예정 물품, 적정 수량을 초과하는 상업 샘플</li></ul><div class="modal-category"><span class="badge badge--danger">5</span><span class="label">직업용구로 불인정되는 물품</span></div><ul class="modal-list"><li>반출인이 직접 사용하는 장비만 인정 — 제조·생산·건설 설비, 현지 영업활동용 설비는 제외</li></ul>',
    institutionInfo: '<div class="modal-category"><span class="label">대한상공회의소<span>원산지증명센터</span></span></div><p>🌐 <a href="https://cert.korcham.net/" target="_blank" rel="noopener">cert.korcham.net</a><br>☎ 안양과천상공회의소 <a href="tel:0314479171">031-447-9171</a></p><div class="modal-category"><span class="label">SGI 서울보증<span>서울보증보험</span></span></div><p>🌐 <a href="https://www.sgic.co.kr/" target="_blank" rel="noopener">www.sgic.co.kr</a><br>☎ 보증보험 담당자 <a href="tel:0260500021">02-6050-0021</a></p>',
    durationInfo: '<p class="modal-lead">기본적으로 출국일 기준 약 2주정도 기간을 두고 미리 준비하시기 바랍니다.</p><ul class="modal-list"><li>서류 준비 및 발급 절차 : 영업일 기준 5일 소요</li><li>우편 수령 : 약 1주일 소요</li></ul><p class="modal-caution">※ 불가피하게 긴급진행 필요 시, 출국일 기준 최소 일주일 전 진행 필요.<br>CARNET 증서는 상공회의소 방문 수령 필수.</p>'
  };

  function closeCarnetModal() {
    carnetModal.hidden = true;
    if (activeOverviewButton) {
      activeOverviewButton.focus();
    }
  }

  overviewButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      activeOverviewButton = button;
      carnetModalTitle.textContent = button.dataset.modalTitle;
      carnetModalContent.innerHTML = modalContents[button.dataset.modalContent];
      carnetModal.hidden = false;
      modalCloseButton.focus();
    });
  });
  modalCloseButton.addEventListener('click', closeCarnetModal);
  carnetModal.addEventListener('click', function (event) {
    if (event.target === carnetModal) {
      closeCarnetModal();
    }
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !carnetModal.hidden) {
      closeCarnetModal();
    }
  });

  // Checklist progress tracking
  var checkboxes = document.querySelectorAll('#checklistCard input[type="checkbox"]');
  var progressFill = document.getElementById('progressFill');
  var progressLabel = document.getElementById('progressLabel');

  function updateProgress() {
    var total = checkboxes.length;
    var checked = 0;
    checkboxes.forEach(function (cb) {
      var item = cb.closest('.checklist-item');
      if (cb.checked) {
        checked++;
        item.classList.add('checked');
      } else {
        item.classList.remove('checked');
      }
    });
    var percent = total === 0 ? 0 : Math.round((checked / total) * 100);
    progressFill.style.width = percent + '%';
    progressLabel.textContent = checked + ' / ' + total + ' 완료';
  }

  checkboxes.forEach(function (cb) {
    cb.addEventListener('change', updateProgress);
  });

  updateProgress();
