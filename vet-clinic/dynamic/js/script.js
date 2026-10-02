/* ===== Модальные окна ===== */
function showModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}
function hideModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('active');
}

/* ===== Тост ===== */
function showToast(text) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = text;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

/* ===== Добавление питомца ===== */
function addPet() {
  const name = document.getElementById('petName').value.trim();
  const age = document.getElementById('petAge').value;
  const err = document.getElementById('petError');

  if (!name) { err.textContent = 'Введите имя питомца'; return; }
  if (age === '' || age < 0 || age > 30) {
    err.textContent = 'Возраст должен быть от 0 до 30 лет';
    return;
  }
  err.textContent = '';
  hideModal('addPetModal');
  showToast(`Питомец «${name}» добавлен`);
}

/* ===== Запись на приём ===== */
let selectedTime = null;

function selectSlot(btn, time) {
  document.querySelectorAll('.slot').forEach(s => s.classList.remove('active'));
  btn.classList.add('active');
  selectedTime = time;
}

function submitAppointment() {
  const doctor = document.getElementById('doctorSelect').value;
  const date = document.getElementById('dateInput').value;
  const err = document.getElementById('formError');

  if (!doctor) { err.textContent = 'Выберите врача'; return; }
  if (!date) { err.textContent = 'Выберите дату'; return; }
  if (!selectedTime) { err.textContent = 'Выберите время приёма'; return; }

  err.textContent = '';
  showToast(`Запись на ${date} в ${selectedTime} подтверждена`);
  setTimeout(() => location.href = 'index.html', 1800);
}

/* ===== Фильтрация истории ===== */
function filterRecords(btn, type) {
  document.querySelectorAll('.filter').forEach(f => f.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.history-item').forEach(item => {
    item.style.display = (type === 'all' || item.dataset.type === type) ? 'flex' : 'none';
  });
}

function downloadHistory() {
  showToast('История скачана в PDF');
}