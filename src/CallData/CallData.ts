import { data } from "../__mocks__/store"

export default class CallData{
    // private _url: string

    // constructor(url: string) {
    //     this._url = url
    // }

    async getProjectsData() {
        return import.meta.env.PROD
            ? (console.log('get data from db'))
            : data
    }
}