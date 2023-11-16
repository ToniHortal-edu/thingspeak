ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("xarxa", "contrasenya")
if (ESP8266_IoT.wifiState(true)) {
    basic.showIcon(IconNames.Happy)
} else {
    basic.showIcon(IconNames.Sad)
}
basic.pause(5000)
basic.forever(function () {
    basic.showIcon(IconNames.SmallDiamond)
    ESP8266_IoT.connectThingSpeak()
    basic.showIcon(IconNames.Diamond)
    ESP8266_IoT.setData(
    "Write API Key",
    input.lightLevel()
    )
    basic.showIcon(IconNames.SmallSquare)
    ESP8266_IoT.uploadData()
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.Yes)
    basic.pause(20000)
})
