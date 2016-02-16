/**
 * Created by Sunghie on 2/16/2016.
 */
// link to mongoose
var mongoose = require('mongoose');

// define the article schema
var articleSchema = new mongoose.Schema(
    {
        created: {
            type: Date,
            default: Date.now
        },
        title: {
            type: String,
            default: '',
            required: 'Title cannot be blank'
        },
        content: {
            type: String,
            default: ''
        }
    }
);

// make this public
module.exports = mongoose.model('Article', articleSchema);