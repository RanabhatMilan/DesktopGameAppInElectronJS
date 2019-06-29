const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

app.on('ready', function () {
	// create new window
	mainWindow = new BrowserWindow({width: 600, height: 500,
		webPreferences: {
			nodeIntegration: true
		  }
	});
	//load html into window
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol:'file:',
		slashes: true
	}));

	mainWindow.setMenu(null)
});

ipcMain.on('item:startApp', function(e,item){
	console.log("Error");
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname,'Snake.html'),
		protocol:'file:',
		slashes: true
	}));

});

ipcMain.on('item:closeApp',function(e,item){
	mainWindow.close();
	app.quit();
});



app.on('window-all-closed',function(){
	app.quit();
})