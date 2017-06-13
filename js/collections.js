//******************************************************************************
//                                 Collections
//******************************************************************************

/*Backbone Collection for our card deck and functions for this card Collection*/

app.CardC = Backbone.Collection.extend({
    model: app.CardM,
    initialize: function () {
        this.on("add", function (card) {
            //give to our model a unique id 
            card.set('id', card.cid);
            //make a new list item in our View 
            new app.ColItemView({model: card});
            //Save item to our local storage 
            this.saveTolocalStorage();
        });
        
        this.on("remove", function (card) {
            // remove list view from dom
            $( '#' + card.get('id')   ).remove();
            //Save to our local storage this remove
            this.saveTolocalStorage();
        });
        
        // load collection from local storage
        this.loadFromLocalStorage();
    },
    
    // function for loading our card collection from local storage
    loadFromLocalStorage: function () {
        var savedcards = JSON.parse(localStorage.getItem('yugicollection'));
        if (savedcards !== null) {
            for (var i = 0; i < savedcards.length; i++) {
                var cardm = new app.CardM(savedcards[i]);
                this.add(cardm);
            }
        }
    },

    // function for saving an item in our local storage
    saveTolocalStorage: function () {
        localStorage.setItem('yugicollection', JSON.stringify(this.toJSON()));
    },
    
    // function for checking the amount of cards ( less than our limit = 30 ) 
    checkBeforeAdd: function (card) {
        if (this.models.length >= decklimit) {
            myapp.dialogAlert('Card Limit', 'you have exceeded the number of allowed cards in your deck.Remove some and retry..!');
        } else {
            this.add(card);
        }
    }

});

