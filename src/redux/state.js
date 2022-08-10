let ADD_POST = "ADD-POST"
let UPDATE_TEXT_FIELD_POST = "UPDATE-TEXT-FIELD-POST"
let UPDATE_TEXT_FIELD_MESSAGE = "UPDATE-TEXT-FIELD-MESSAGE"

let store = {
    _state: {
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

    },
    getState() {
        return this._state;
    },
    _rerenderUI() {
        alert()
    },
    subscribe(observer) {
        this._rerenderUI = observer
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                message: this._state.profilePage.textFieldPost,
                likesCount: 0
            };

            this._state.profilePage.dataPosts.push(newPost);
            this._state.profilePage.textFieldPost = ""
            this._rerenderUI(this._state)
        }
        else if (action.type === "UPDATE-TEXT-FIELD-POST") {
            this._state.profilePage.textFieldPost = action.textField;
            this._rerenderUI(this._state)
        }
        else if (action.type === "UPDATE-TEXT-FIELD-MESSAGE") {
            this._state.dialogsPage.textFieldMessage = action.textField;
            this._rerenderUI(this._state)
        }
    }
}


export function addPostAC() {
    return {
        type: ADD_POST
    }
}


export function updatePostTextAC(text) {
    return {
        type: UPDATE_TEXT_FIELD_POST,
        textField: text
    }
}

export function updateMessageTextAC(text) {
    return {
        type: UPDATE_TEXT_FIELD_MESSAGE,
        textField: text
    }
}

export default store;