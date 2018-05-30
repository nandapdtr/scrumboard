const mongoose = require('mongoose');
const Promise = require('bluebird');

const Schema = mongoose.Schema;

//Task Schema

const taskSchema = new Schema({
    taskId: Number,
    title: String,
    description: String,
    storyPoints: String,
    issueType: Object,
    status: String
});

//Statics

taskSchema.statics = {
    //Get task -- id is the objectId of task
    get(id) {
        return this.findById(id)
            .exec()
            .then((task) => {
                if (task) {
                    return task;
                }
                const err = new Error('No such task exists!');
                return Promise.reject(err);
            });
    }
}

module.exports = mongoose.model('Task', taskSchema);