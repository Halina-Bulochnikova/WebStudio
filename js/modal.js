
  const modal = document.querySelector('.background');
  const openModalBtn = document.querySelector('[data-modal-open]');
  const closeModalBtns = document.querySelectorAll('[data-modal-close]');

  const openModal = () => {
    modal.classList.add('is-open');
    document.body.classList.add('is-scroll-disable');
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    document.body.classList.remove('is-scroll-disable');
  };

  if (openModalBtn) {
    openModalBtn.addEventListener('click', openModal);
  }

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
