//******************************************************************************
//                                   App
//******************************************************************************


/* global decklimit, app, Backbone, myapp */

app.CardC = Backbone.Collection.extend({
    model: app.CardM,
    initialize: function () {
        this.on("add", function (card) {
            //give to our model a unique id...
            card.set('id', card.cid);

            new app.ColItemView({model: card});
            this.saveTolocalStorage();
        });
        this.on("remove", function (card) {
            //remove list view from dom
            $( '#' + card.get('id')   ).remove();

            this.saveTolocalStorage();
        });
        //load collection from local storage..
        this.loadFromLocalStorage();
    },
    loadFromLocalStorage: function () {
        var savedcards = JSON.parse(localStorage.getItem('yugicollection'));
        if (savedcards !== null) {
            for (var i = 0; i < savedcards.length; i++) {
                var cardm = new app.CardM(savedcards[i]);
                this.add(cardm);
            }
        }
    },
    saveTolocalStorage: function () {
        localStorage.setItem('yugicollection', JSON.stringify(this.toJSON()));
    },
    checkBeforeAdd: function (card) {
        if (this.models.length >= decklimit) {
            myapp.dialogAlert('Card Limit', 'you have exceeded the number of allowed cards in your deck.Remove some and retry..!');
        } else {
            this.add(card);
        }
    }

});

