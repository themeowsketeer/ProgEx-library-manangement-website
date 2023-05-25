var Shuffle = window.Shuffle;

class bookList {
  constructor(element) {
    this.element = element;
    this.shuffle = new Shuffle(element, {
      itemSelector: '.book-item',
    });

    // Log events.
    this.addShuffleEventListeners();
    this._activeFilters = [];
    this.addFilterButtons();
    this.addSorting();
  }
}

  /**
   * Shuffle uses the CustomEvent constructor to dispatch events. You can listen
   * for them like you normally would (with jQuery for example).
   */
  addShuffleEventListeners() {
    this.shuffle.on(Shuffle.EventType.LAYOUT, (data) => {
      console.log('layout. data:', data);
    });
    this.shuffle.on(Shuffle.EventType.REMOVED, (data) => {
      console.log('removed. data:', data);
    });
  }

  bookList.prototype.addFilterButtons = function() {
    var options = document.querySelector('.filters-options');
    if (!options) {
      return;
    }

    var filterButtons = Array.from(options.children);
    
    const onClick = this._handleFilterClick.bind(this);
    filterButtons.forEach((button) => {
      button.addEventListener('click', onClick, false);
    });
  }

  bookList.prototype._handleFilterClick = function(evt) {
    var btn = evt.currentTarget;
    var isActive = btn.classList.contains('active');
    var btnGroup = btn.getAttribute('data-group');

    this._removeActiveClassFromChildren(btn.parentNode);

    if (this.mode === 'additive') {
      if (isActive) {
        this._activeFilters.splice(this._activeFilters.indexOf(btnGroup));
      } else {
        this._activeFilters.push(btnGroup);
      }
  
      btn.classList.toggle('active');
      this.shuffle.filter(this._activeFilters);
  
    } else {
      this._removeActiveClassFromChildren(btn.parentNode);

    var filterGroup;
    if (isActive) {
      btn.classList.remove('active');
      filterGroup = Shuffle.ALL_ITEMS;
    } else {
      btn.classList.add('active');
      filterGroup = btnGroup;
    }

    this.shuffle.filter(filterGroup);
  }
  }

  bookList.prototype._removeActiveClassFromChildren = function(parent) {
    var children = parent.children;
    for (let i = children.length - 1; i >= 0; i--) {
      children[i].classList.remove('active');
    }
  }

  bookList.prototype.addSorting = function() {
    var buttonGroup = document.querySelector('.sort-options');
    if (!buttonGroup) {
      return;
    }
    buttonGroup.addEventListener('change', this._handleSortChange.bind(this));
  }

  bookList.prototype._handleSortChange = function(evt) {
    // Add and remove `active` class from buttons.
    var buttons = Array.from(evt.currentTarget.children);
    buttons.forEach((button) => {
      if (button.querySelector('input').value === evt.target.value) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });

    // Create the sort options to give to Shuffle.
    var { value } = evt.target;
    var options = {};

    function sortByTitle(element) {
      return element.getAttribute('data-title').toLowerCase();
    }

    function sortByAuthour(element) {
      return element.getAttribute('data-authour').toLowerCase();
    }

    if (value === 'title') {
      options = {
        //reverse: true,
        by: sortByTitle,
      };
    } else if (value === 'authour') {
      options = {
        by: sortByAuthour,
      };
    }
    this.shuffle.sort(options);
  }

  document.addEventListener('DOMContentLoaded', function() {
    window.book_list = new bookList(document.getElementById('grid'));
  });
