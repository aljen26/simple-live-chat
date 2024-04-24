
let user = document.getElementById("username")
let joinBtn = document.getElementById("join-btn")
let userCred = document.getElementById("credentials")
let chatBox = document.getElementById("chat-box")
let tf = document.getElementById("chat-msg")
let btn = document.getElementById("btn-submit")
let chatContent = document.getElementById("chat-messages")
let userCounter = document.getElementById("user-counter")
let username;
let userCount = 0;

const socket = io("https://simple-live-chat.glitch.me")

joinBtn.addEventListener('click', () => {
    if(user.value != ''){
        username = user.value
        console.log(username)
        userCred.style.display = 'none'
        chatBox.style.display = 'block'

    } else alert("Enter username!")
})

btn.addEventListener('click', sendMessage)

tf.addEventListener('keypress', (e) => {
    if(e.key == 'Enter'){
        e.preventDefault()
        btn.click()
    }
})

function sendMessage(){
    let msg = tf.value
    if(msg != ''){
        socket.emit('send-msg', msg, username)
        postMsg(msg)
        tf.value = '';
    }
}

function postMsg(msg){
    let chat = document.createElement('p')
    let span = document.createElement('span')
    let name = document.createElement('span')
    name.classList.add('name')

    name.innerHTML = ':me'
    span.innerHTML = msg
    chat.appendChild(span)
    chat.appendChild(name)
    chatContent.appendChild(chat);
}

function receivedMsg(msg, user){
    let chat = document.createElement('p')
    chat.classList.add("received-msg")
    let span = document.createElement('span')
    let name = document.createElement('span')
    name.classList.add('other-user')

    name.innerHTML = `${user}:`
    span.innerHTML = msg
    chat.appendChild(span)
    chat.appendChild(name)
    chatContent.appendChild(chat);
}

socket.on('connect', () => {
    console.log(`You connected to id: ${socket.id}`)

    socket.on('user-count', (n) => {
        userCount = n
        userCounter.innerHTML = `Active User: ${userCount}`
    })
})

socket.on('received-msg', (msg, user) => {
    receivedMsg(msg, user)
})

