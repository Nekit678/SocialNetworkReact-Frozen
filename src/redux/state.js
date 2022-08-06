

let state = {
    profilePage: {
        dataPosts: [{ id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It is my first post!", likesCount: 28 }],
        textFieldPost: ""
    },
    dialogsPage: {
        dataDialogs: [{ id: 1, name: "Nikita", img: "https://i.pinimg.com/236x/2c/60/cb/2c60cb34a209daa60ee0b6c53cd35688.jpg" },
        { id: 2, name: "Milena", img: "https://anime-star.ru/wp-content/uploads/2021/12/YArkie-fioletovye-avatarki-anime_08.jpg" },
        { id: 3, name: "Homyak", img: "https://www.meme-arsenal.com/memes/6eb0717c1db4fd398f312ef918b00eb3.jpg" },
        { id: 4, name: "Busya", img: "https://cdn.discordapp.com/avatars/280994603945951232/4ae6870ead41140b5741b8b240880211.webp?size=128" },
        { id: 5, name: "Danya", img: "https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg" }],
        dataMessages: [{ id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Lol kekw" },
        { id: 4, message: "Kavabangaa" }],
        textFieldMessage: ""
    }

}


let rerenderUI = function() {
    alert()
}

export function subscribe(observer){
    rerenderUI = observer
}

export function addPost() {
    let newPost = {
        id: 5,
        message: state.profilePage.textFieldPost,
        likesCount: 0
    };

    state.profilePage.dataPosts.push(newPost);
    state.profilePage.textFieldPost = ""
    rerenderUI(state)
}

export function updateTextFieldPost(textField) {
    state.profilePage.textFieldPost = textField;
    rerenderUI(state)
}

export function updateTextFieldMessage(textField) {
    state.dialogsPage.textFieldMessage = textField;
    rerenderUI(state)
}

export default state;