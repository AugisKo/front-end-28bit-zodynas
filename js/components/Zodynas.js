class Zodynas {
  constructor(IDselector) {
    this.IDselector = IDselector;

    this.DOM = null;
    this.listDOM = null;

    this.addFormDOM = null;
    this.newMessageDOM = null;
    this.buttonSaveDOM = null;
    this.buttonEraseDOM = null;
    this.buttonEditDOM = null;

    this.updateFormDOM = null;
    this.buttonUpdateDOM = null;
    this.buttonCancelDOM = null;

    this.localStorageIDcount = 'zodynasID';
    this.localStorageTodosKey = 'zodynasList';
    this.latestUsedID =
      JSON.parse(localStorage.getItem(this.localStorageIDcount)) || 0;
    this.messages =
      JSON.parse(localStorage.getItem(this.localStorageZodynasKey)) || [];

    this.currentlyEditableTaskID = 0;

    this.init();
  }

  init() {
    if (!this.isValidSelector()) {
      return false;
    }

    this.DOM = document.getElementById(this.IDselector);
    if (!this.DOM) {
      console.error('ERROR: nerasta vieta, pagal duota selector');
      return false;
    }
    this.DOM.classList.add('zodynas');

    this.render();
    this.renderList();
    this.addEvents();
  }

  isValidSelector() {
    if (typeof this.IDselector !== 'string' || this.IDselector === '') {
      console.error('ERROR: nevalidus selector');
      return false;
    }
    return true;
  }

  generateAddForm() {
    return `<form id="add_zodis" class="ivesties_forma">
        <div class="ang">
            <lable for="eng">Anglų</lable>
            <input type="text" id="eng" name="text">
        </div>
        <div class="liet">
            <lable for="liet">Lietuvių</lable>
            <input type="text" id="liet" name="text">
        </div>
        <div class="btn">
            <button class="fa fa-floppy-o" name="save" type="submit" value="Save"></button>
            <button class="fa fa-eraser" name="reset" type="submit" value="Reset"></button>
        </div>
    </form>`;
  }

  render() {
    let HTML = '';
    this.DOM.insertAdjacentHTML('afterend', HTML);
    HTML += this.generateAddForm();
    /*  HTML += this.generateUpdateForm();
    HTML += this.generateList();*/
    this.DOM.innerHTML = HTML;

    this.listDOM = this.DOM.querySelector('.list');

    this.addFormDOM = document.getElementById('add_zodis');
    this.newMessageDOM = document.getElementById('new_text');
    this.newBorderColorDOM = document.getElementById('new_border_color');
    this.buttonSaveDOM = document.getElementById('save_button');

    this.updateFormDOM = document.getElementById('update_task');
    this.updateMessageDOM = document.getElementById('updated_text');
    this.updateBorderColorDOM = document.getElementById('updated_border_color');
    this.buttonUpdateDOM = document.getElementById('update_button');
    this.buttonCancelDOM = document.getElementById('cancel_button');
  }
}

export { Zodynas };
