//******************************************************************************
//                                 Models
//******************************************************************************

app.CardM = Backbone.Model.extend({
// Default attributes for the card
// and ensure that each card created has `name` and `text` keys.
    initialize: function () {

        var imageurl = 'http://yugiohprices.com/api/card_image/' + this.get('data').name;
        this.set('image', imageurl);
       // this.set('id', this.randomId());
    },
    defaults: {
        name: 'yugi',
        text: 'default text'
    }
    ,
    randomId: function () {//not used..
        var min = 1;
        var max = 10000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }




});

