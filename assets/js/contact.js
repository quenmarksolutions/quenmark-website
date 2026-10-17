/* ============================================================
   contact.js — Contact Page Specific JavaScript
   Company Website | StartUp Project
   ============================================================
   Features:
   - Contact form validation (client-side)
   - Simulated form submission with loading + success states
   ============================================================ */

'use strict';

(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = document.getElementById('form-submit-btn');
  const successMsg = document.getElementById('form-success');

  /* ---- Validation rules ---- */
  const rules = {
    'contact-name':    { required: true, minLength: 2, label: 'Name' },
    'contact-email':   { required: true, email: true,  label: 'Email' },
    'contact-company': { required: false,               label: 'Company' },
    'contact-subject': { required: true,                label: 'Subject' },
    'contact-message': { required: true, minLength: 20, label: 'Message' },
  };

  function validateField(id, value) {
    const rule = rules[id];
    if (!rule) return null;

    if (rule.required && !value.trim()) {
      return rule.label + ' is required.';
    }
    if (rule.email && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return 'Please enter a valid email address.';
    }
    if (rule.minLength && value.trim().length < rule.minLength) {
      return rule.label + ' must be at least ' + rule.minLength + ' characters.';
    }
    return null;
  }

  function showError(id, message) {
    const input = document.getElementById(id);
    const errMsg = document.getElementById(id + '-error');
    if (input) input.classList.add('error');
    if (errMsg) {
      errMsg.textContent = message;
      errMsg.classList.add('visible');
    }
  }

  function clearError(id) {
    const input = document.getElementById(id);
    const errMsg = document.getElementById(id + '-error');
    if (input) input.classList.remove('error');
    if (errMsg) {
      errMsg.textContent = '';
      errMsg.classList.remove('visible');
    }
  }

  // Live validation on blur
  Object.keys(rules).forEach(function (id) {
    const input = document.getElementById(id);
    if (!input) return;
    input.addEventListener('blur', function () {
      const error = validateField(id, input.value);
      if (error) {
        showError(id, error);
      } else {
        clearError(id);
      }
    });
    input.addEventListener('input', function () {
      clearError(id);
    });
  });

  // Form submit
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    Object.keys(rules).forEach(function (id) {
      const input = document.getElementById(id);
      if (!input) return;
      const error = validateField(id, input.value);
      if (error) {
        showError(id, error);
        isValid = false;
      } else {
        clearError(id);
      }
    });

    if (!isValid) return;

    // Generate unique subject line per submission to prevent Gmail/email clients
    // from grouping multiple leads into one conversation thread
    const nameInput = document.getElementById('contact-name');
    const senderName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : 'New Lead';
    const refCode = Math.floor(1000 + Math.random() * 9000);
    const dynamicSubject = 'New Lead: ' + senderName + ' [#QM-' + refCode + ']';

    const subjectInput = form.querySelector('input[name="_subject"]');
    if (subjectInput) {
      subjectInput.value = dynamicSubject;
    }

    // If running locally from hard drive, use native form submission to avoid CORS issues
    if (window.location.protocol === 'file:') {
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
      form.submit();
      return;
    }

    // If hosted on a real server (Vercel, Netlify, custom domain), use seamless AJAX
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    const formData = new FormData(form);
    formData.set('_subject', dynamicSubject);

    fetch('https://formsubmit.co/ajax/quenmarksolutions@gmail.com', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
      
      if (data.success === 'true' || data.success === true) {
        form.reset();
        if (successMsg) {
          successMsg.style.display = 'block';
          successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setTimeout(function () { successMsg.style.display = 'none'; }, 8000);
        }
      } else {
        alert('Oops! There was a problem submitting your form. Please try again.');
      }
    })
    .catch(error => {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
      alert('Oops! There was a problem submitting your form.');
      console.error(error);
    });
  });
})();
