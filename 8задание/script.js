const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const popup = document.getElementById('popup');
const feedbackForm = document.getElementById('feedbackForm');
const submitBtn = document.getElementById('submitBtn');
const messageDiv = document.getElementById('messageDiv');

const FORM_URL = 'https://api.slapform.com/W6fxtBtij';

openBtn.addEventListener('click', function() {
    popup.style.display = 'block';
    history.pushState({formOpen: true}, '', '#feedback');
    loadFormData();
});

closeBtn.addEventListener('click', closePopup);

popup.addEventListener('click', function(e) {
    if (e.target === popup) {
        closePopup();
    }
});

window.addEventListener('popstate', function() {
    if (popup.style.display === 'block') {
        closePopup();
    }
});

feedbackForm.addEventListener('input', saveFormData);

feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();
    submitForm();
});


function closePopup() {
    popup.style.display = 'none';
    if (history.state && history.state.formOpen) {
        history.back();
    }
}

function saveFormData() {
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        organization: document.getElementById('organization').value,
        message: document.getElementById('message').value,
        agree: document.getElementById('agree').checked
    };
    
    localStorage.setItem('feedbackData', JSON.stringify(formData));
}

function loadFormData() {
    const savedData = localStorage.getItem('feedbackData');
    
    if (savedData) {
        const formData = JSON.parse(savedData);
        
        document.getElementById('name').value = formData.name || '';
        document.getElementById('email').value = formData.email || '';
        document.getElementById('phone').value = formData.phone || '';
        document.getElementById('organization').value = formData.organization || '';
        document.getElementById('message').value = formData.message || '';
        document.getElementById('agree').checked = formData.agree || false;
    }
}

function showMessage(text, type) {
    messageDiv.textContent = text;
    messageDiv.className = `message ${type}`;
    messageDiv.style.display = 'block';
    
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}

async function submitForm() {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Отправка...';
    
    try {
        
        const data = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            organization: document.getElementById('organization').value,
            message: document.getElementById('message').value
        };
        
        
        const response = await fetch(FORM_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        console.log('Статус ответа:', response.status);
        
        if (response.ok) {
            showMessage('Сообщение успешно отправлено! Проверьте ваш email.', 'success');
            feedbackForm.reset();
            localStorage.removeItem('feedbackData');
            
            setTimeout(() => {
                closePopup();
            }, 2000);
        } else {
            throw new Error(`Ошибка: ${response.status}`);
        }
        
    } catch (error) {
        console.error('Ошибка:', error);
        showMessage('Ошибка отправки. Попробуйте еще раз.', 'error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Отправить';
    }
}

window.addEventListener('load', function() {
    if (window.location.hash === '#feedback') {
        popup.style.display = 'block';
        loadFormData();
    }
});