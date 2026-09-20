// ==========================================================================
// Trần Mai Linh (Linh) Portfolio - Kịch bản Ứng dụng Tương tác
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initArtLightbox();
  initEmailCopy();
  initVietnamClock();
  initContactForm();
  initServiceInquiryTriggers();
  initMobileNavigation();
  initHeaderScroll();
  initDynamicYear();
});

/* --------------------------------------------------------------------------
   1. Cập nhật Năm Hiện Tại
   -------------------------------------------------------------------------- */
function initDynamicYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* --------------------------------------------------------------------------
   2. Hiệu ứng Cuộn Thanh Điều Hướng (Sticky Header)
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   3. Menu Điều Hướng trên Thiết Bị Di Động
   -------------------------------------------------------------------------- */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });

  // Đóng menu khi nhấp vào liên kết
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', false);
    });
  });
}

/* --------------------------------------------------------------------------
   6. Sao Chép Email & Số Điện Thoại Một Chạm kèm Thông Báo Toast
   -------------------------------------------------------------------------- */
function initEmailCopy() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const copyPhoneBtn = document.getElementById('copyPhoneBtn');
  const emailText = 'maiilinh61@gmail.com';
  const phoneText = '(+84) 977 402 911';

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      copyToClipboard(emailText, 'Đã sao chép email maiilinh61@gmail.com vào bộ nhớ tạm! ✉️');
    });
  }

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', () => {
      copyToClipboard('0977402911', 'Đã sao chép số điện thoại (+84) 977 402 911 vào bộ nhớ tạm! 📞');
    });
  }
}

function copyToClipboard(text, successMsg) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg, '📋');
    }).catch(() => {
      fallbackCopy(text, successMsg);
    });
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg = 'Đã sao chép vào bộ nhớ tạm!') {
  const tempInput = document.createElement('input');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  showToast(successMsg, '📋');
}

function showToast(message, icon = '✓') {
  const toast = document.getElementById('toastNotice');
  const toastMsg = document.getElementById('toastMessage');
  const toastIcon = document.getElementById('toastIcon');

  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  if (toastIcon) toastIcon.textContent = icon;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/* --------------------------------------------------------------------------
   7. Đồng Hồ Thời Gian Thực Hà Nội (Múi Giờ ICT, UTC+7)
   -------------------------------------------------------------------------- */
function initVietnamClock() {
  const clockEl = document.getElementById('vietnamClock');
  if (!clockEl) return;

  const updateClock = () => {
    const now = new Date();
    const options = {
      timeZone: 'Asia/Ho_Chi_Minh',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    try {
      const timeString = new Intl.DateTimeFormat('vi-VN', options).format(now);
      clockEl.textContent = timeString;
    } catch (e) {
      clockEl.textContent = now.toLocaleTimeString();
    }
  };

  updateClock();
  setInterval(updateClock, 1000);
}

/* --------------------------------------------------------------------------
   8. Tự Động Chọn Chủ Đề Liên Hệ từ Các Thẻ Dịch Vụ
   -------------------------------------------------------------------------- */
function initServiceInquiryTriggers() {
  const buttons = document.querySelectorAll('[data-inquire-topic]');
  const topicSelect = document.getElementById('inquiryTopic');
  const contactSection = document.getElementById('contact');
  const messageBox = document.getElementById('userMessage');

  if (!buttons.length || !topicSelect) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const topic = btn.getAttribute('data-inquire-topic');
      if (topic) {
        topicSelect.value = topic;
      }
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
      if (messageBox) {
        setTimeout(() => messageBox.focus(), 600);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   9. Xử Lý Gửi Biểu Mẫu Liên Hệ & Chuyển Tiếp Tới Email (Mail Redirect)
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const submitBtn = document.getElementById('submitFormBtn') || form.querySelector('.form-submit-btn');
  const gmailDirectBtn = document.getElementById('submitGmailBtn');
  const feedbackBox = document.getElementById('formFeedbackBox');

  const buildMailData = () => {
    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    const topicSelect = document.getElementById('inquiryTopic');
    const messageInput = document.getElementById('userMessage');

    const userName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'Bạn đọc quan tâm';
    const userEmail = emailInput && emailInput.value.trim() ? emailInput.value.trim() : 'Chưa cung cấp';
    const topicText = topicSelect && topicSelect.options[topicSelect.selectedIndex] ? topicSelect.options[topicSelect.selectedIndex].text : 'Trao đổi Nghệ thuật';
    const userMessage = messageInput && messageInput.value.trim() ? messageInput.value.trim() : '';

    const recipient = 'maiilinh61@gmail.com';
    const subject = `[Portfolio] Lời nhắn từ ${userName} - ${topicText}`;
    const body = 
`Chào Mai Linh,

Tôi gửi lời nhắn liên hệ từ website Portfolio của bạn:

• Họ và Tên: ${userName}
• Email liên hệ: ${userEmail}
• Lĩnh vực quan tâm: ${topicText}

• Nội dung tin nhắn:
${userMessage}

---
Thư gửi từ biểu mẫu Portfolio Trần Mai Linh (Linh)`;

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return { userName, userEmail, topicText, userMessage, recipient, subject, body, mailtoUrl, gmailUrl };
  };

  const renderFeedback = (mailData) => {
    if (!feedbackBox) return;

    feedbackBox.style.display = 'block';
    feedbackBox.innerHTML = `
      <div class="feedback-status-title">
        <span>✓</span> Đang chuyển tiếp thông tin tới hòm thư...
      </div>
      <p class="feedback-status-desc">
        Hòm thư đã được chuẩn bị sẵn nội dung gửi tới <strong>${mailData.recipient}</strong>. Bạn chỉ cần bấm nút <em>"Gửi" (Send)</em> trong ứng dụng thư để hoàn tất:
      </p>
      <div class="feedback-btn-group">
        <a href="${mailData.mailtoUrl}" class="feedback-action-btn btn-reopen" id="reopenMailLink">
          <span>✉️</span> Mở lại Ứng dụng Mail
        </a>
        <a href="${mailData.gmailUrl}" target="_blank" rel="noopener noreferrer" class="feedback-action-btn btn-gmail" id="openGmailLink">
          <span>🌐</span> Mở bằng Gmail Web
        </a>
        <button type="button" class="feedback-action-btn btn-copy-body" id="copyMailBodyBtn">
          <span>📋</span> Sao Chép Nội Dung Thư
        </button>
      </div>
    `;

    // Gắn sự kiện sao chép nội dung thư
    const copyBodyBtn = document.getElementById('copyMailBodyBtn');
    if (copyBodyBtn) {
      copyBodyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(mailData.body).then(() => {
          showToast('Đã sao chép nội dung thư vào bộ nhớ tạm! 📋', '✅');
        }).catch(() => {
          showToast('Vui lòng chọn và sao chép thủ công.', 'ℹ️');
        });
      });
    }
  };

  // 1. Gửi qua Mail Client mặc định (mailto) khi submit form
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const mailData = buildMailData();

    if (submitBtn) {
      submitBtn.textContent = 'Đang mở hòm thư... 🕊️';
      submitBtn.disabled = true;
    }

    // Hiển thị khung phản hồi & tùy chọn
    renderFeedback(mailData);

    // Kích hoạt mailto redirect
    const mailLink = document.createElement('a');
    mailLink.href = mailData.mailtoUrl;
    document.body.appendChild(mailLink);
    mailLink.click();
    mailLink.remove();

    showToast(`Đang chuyển hướng tới Email của ${mailData.userName}! ✉️`, '💌');

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.textContent = 'Đã mở hòm thư gửi lời nhắn ✓';
        submitBtn.disabled = false;
      }
    }, 1200);
  });

  // 2. Mở trực tiếp trên Gmail Web khi bấm nút Gmail
  if (gmailDirectBtn) {
    gmailDirectBtn.addEventListener('click', (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const mailData = buildMailData();
      renderFeedback(mailData);

      window.open(mailData.gmailUrl, '_blank', 'noopener,noreferrer');
      showToast('Đang mở trang soạn thư Gmail trên trình duyệt... 🌐', '✉️');
    });
  }
}

/* --------------------------------------------------------------------------
   10. Hộp Thoại Lightbox Xem Tranh Phóng To (Art Lightbox)
   -------------------------------------------------------------------------- */
function initArtLightbox() {
  const modal = document.getElementById('artLightboxModal');
  const backdrop = document.getElementById('artLightboxBackdrop');
  const closeBtn = document.getElementById('artLightboxCloseBtn');
  const lightboxImg = document.getElementById('artLightboxImg');
  const lightboxTitle = document.getElementById('artLightboxTitle');
  const lightboxMedium = document.getElementById('artLightboxMedium');
  const lightboxText = document.getElementById('artLightboxText');

  if (!modal || !lightboxImg) return;

  const openLightbox = (card) => {
    const title = card.getAttribute('data-art-title') || '';
    const medium = card.getAttribute('data-art-medium') || '';
    const desc = card.getAttribute('data-art-desc') || '';
    const imgSrc = card.getAttribute('data-art-img') || '';

    lightboxImg.src = imgSrc;
    lightboxImg.alt = title;
    if (lightboxTitle) lightboxTitle.textContent = title;
    if (lightboxMedium) lightboxMedium.textContent = medium;
    if (lightboxText) lightboxText.textContent = desc;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };

  const closeLightbox = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (lightboxImg) lightboxImg.src = '';
  };

  document.querySelectorAll('.art-display-card').forEach(card => {
    card.addEventListener('click', () => {
      openLightbox(card);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeLightbox);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeLightbox();
    }
  });
}

/* --------------------------------------------------------------------------
   Tiện ích: Mã Hóa Ký Tự HTML Tránh XSS
   -------------------------------------------------------------------------- */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

