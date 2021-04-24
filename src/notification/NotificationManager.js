import PushNotification from "react-native-push-notification";
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { Platform } from 'react-native';

class NotificationManager {
    configure = () => {
        PushNotification.configure({
            onRegister: function (token) {
                console.log("TOKEN:", token);
            },

            onNotification: function (notification) {
                console.log("NOTIFICATION:", notification);
                notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
            senderID: '256218572662',
            popInitialNotification: true,
            requestPermissions: true
        })
    }

    bulidAndroidNotification = (id, title, message, data = {}, options = {}) => {
        return {
            id: id,
            autoCanel: true,
            largeIcon: options.largeIcon || "ic_launcher",
            smallIcon: options.smallIcon || "ic_launcher",
            bigText: message || '',
            subText: title || '',
            vibrate: options.vibrate || false,
            vibration: options.vibration || 300,
            priority: options.priority || "high",
            importance: options.importance || "high",
            data: data
        }
    }
    buildIOSNotification = (id, title, message, data = {}, options = {}) => {
        return {
            alertAction: options.alertAction || "View",
            category: options.category || "",
            userInfo: {
                id: id,
                item: data
            }
        }
    }

    showNotification = (id, title, message, date, data = {}, options = {}) => {
        PushNotification.localNotificationSchedule({
            autoCancel: true,
            ...this.bulidAndroidNotification(id, title, message, data, options),
            ...this.buildIOSNotification(id, title, message, data, options),
            title: title || "",
            message: message || "",
            date: date || "",
            playSound: true,
            soundName: options.soundName || 'default',
            userInteraction: false,
        })
    }

    cancelAllNotification = () => {
        if (Platform.OS === 'ios') {
            PushNotificationIOS.removeAllDeliveredNotifications();
        } else {
            PushNotification.cancelAllLocalNotifications();
        }
    }

    unregister = () => {
        PushNotification.unregister
    }
}

export const notificationManager = new NotificationManager()