/**
 * Premium Portfolio Script
 * Features: Dark Mode, Chatbot Logic, Scroll Reveal, Navbar Effects
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Dark Mode Toggle ---
    const toggleSwitch = document.querySelector('#checkbox');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'light') {
            toggleSwitch.checked = false;
        }
    }

    toggleSwitch.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });

    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Scroll Reveal Animation ---
    const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', reveal);
    reveal(); // Initial check

    // --- Chatbot Logic ---
    const chatbotToggle = document.querySelector('#chatbot-toggle');
    const chatbotWindow = document.querySelector('#chatbot-window');
    const closeChat = document.querySelector('#close-chat');
    const sendBtn = document.querySelector('#send-message');
    const userInput = document.querySelector('#user-input');
    const chatMessages = document.querySelector('#chat-messages');

    chatbotToggle.addEventListener('click', () => {
        chatbotWindow.classList.toggle('active');
    });

    closeChat.addEventListener('click', () => {
        chatbotWindow.classList.remove('active');
    });

    const addMessage = (text, sender) => {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', sender);
        msgDiv.textContent = text;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    const handleBotResponse = (text) => {
        const input = text.toLowerCase();
        let response = "I'm not sure about that, but you can email Jaehyun directly!";

        if (input.includes('hello') || input.includes('hi')) {
            response = "Hello! How can I assist you with Jaehyun portfolio today?";
        } else if (input.includes('skills')) {
            response = "Ang skills ni Jaehyun ay magjakol 24hours";
        } else if (input.includes('projects')) {
            response = "Wala pa tinatamad admin e";
        } else if (input.includes('contact')) {
            response = "Ito contact ni jaehyun sa instagram Yunsh33n, lf fobo lonita park area";
        } else if (input.includes('bastos')) {
            response = "Sorry yah, Wala ka kasing bitaw e";
        } else if (input.includes('ulol')) {
            response = "HAHAHAHAHAHAHAHA";
        }

        setTimeout(() => addMessage(response, 'bot'), 600);
    };

    const sendMessage = () => {
        const text = userInput.value.trim();
        if (text) {
            addMessage(text, 'user');
            userInput.value = '';
            handleBotResponse(text);
        }
    };

    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    // --- Mobile Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});
