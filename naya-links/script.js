function openModal(id) {
    document.getElementById(id).classList.add('active');
}
function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}
document.querySelectorAll('.modal').forEach(function (m) {
    m.addEventListener('click', function (e) {
        if (e.target === m) m.classList.remove('active');
    });
});
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(function (m) { m.classList.remove('active'); });
    }
});
