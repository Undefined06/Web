function switchSecurityTab(tab, formId) {
    document.querySelectorAll('.security-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.security-form').forEach(f => f.style.display = 'none');
    tab.classList.add('active');
    document.getElementById(formId).style.display = 'block';
}

function login() {
    document.querySelector('.security-container').style.display = 'none';
    document.querySelector('.dashboard-container').style.display = 'flex';
}

function logout() {
    document.querySelector('.security-container').style.display = 'flex';
    document.querySelector('.dashboard-container').style.display = 'none';
}

function showTab(tabId) {
    document.querySelectorAll('#dashboard-view, #water-quality-view, #settings-view').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
    
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}
