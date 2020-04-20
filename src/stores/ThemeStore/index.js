import { observable, action } from 'mobx'

class ThemeStore {

    @observable selectedTheme
    constructor() {
        this.selectedTheme = "Light"

    }

    @action.bound
    setCurrentTheme() {
        if (this.selectedTheme == "Light") {
            this.selectedTheme = "Dark"
        }
        else {

            this.selectedTheme = "Light"

        }

    }





}
const themeStore = new ThemeStore()
export default themeStore
