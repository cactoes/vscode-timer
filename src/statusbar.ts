import * as vscode from 'vscode';

class StatusBar {
    private _statusBarItem: vscode.StatusBarItem;
    private _starttime: number = 0;

    constructor() {
        this._statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, Number.MIN_SAFE_INTEGER);// furthest right on the right
        this._statusBarItem.show();
    }

    initialize() {
        this._starttime = Date.now();
        this.setText();
    }

    dispose() {
        this._statusBarItem.dispose();
    }

    getTime() {
        return Date.now() - this._starttime;
    }

    setText() {
        const date = new Date(this.getTime());
        let sec: number | string = date.getSeconds();
        if (sec < 10)
            sec = `0${sec}`;
        let min: number | string = date.getMinutes();
        if (min < 10)
            min = `0${min}`;
        let hrs: number | string = date.getHours() - 1;
        if (hrs < 10)
            hrs = `0${hrs}`;
        this._statusBarItem.text = `${hrs}:${min}:${sec}`;
    }
}

export const statusbar = new StatusBar();