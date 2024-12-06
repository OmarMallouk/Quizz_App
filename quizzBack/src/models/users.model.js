import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username:{
        type: String,
    },
    password:{
        type: password,
    }
})


export const Users = model("Users", userSchema);